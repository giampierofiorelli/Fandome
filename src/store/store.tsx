import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react'
import type { User } from '../data/types'
import { initialState, reducer, type Action, type State } from './reducer'

const KEY = 'fandome:v1'

function load(): State {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as State
      if (parsed.version === 1) {
        // Older saves predate stories / DMs / pages: fill in what's missing.
        const now = Date.now()
        const fresh = initialState(now)
        const users = parsed.users.some((u) => u.id === 'pg-archive') ? parsed.users : [...parsed.users, ...fresh.users.filter((u) => u.kind === 'page')]
        return reducer({ ...parsed, users, stories: parsed.stories ?? fresh.stories, dms: parsed.dms ?? fresh.dms }, { type: 'prune', now })
      }
    }
  } catch {
    // storage unavailable or corrupted: start fresh
  }
  return initialState(Date.now())
}

interface Store {
  state: State
  dispatch: (a: Action) => void
  me: User | null
  userById: (id: string) => User | undefined
}

const Ctx = createContext<Store | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state))
    } catch {
      // Quota full (usually photos) or private mode: tell the user instead of failing silently.
      window.dispatchEvent(new CustomEvent('fandome:storage-full'))
    }
  }, [state])

  // Expire stories and seen messages while the app is open.
  useEffect(() => {
    const t = setInterval(() => dispatch({ type: 'prune', now: Date.now() }), 30_000)
    return () => clearInterval(t)
  }, [])

  const value = useMemo<Store>(() => {
    const map = new Map(state.users.map((u) => [u.id, u]))
    return {
      state,
      dispatch,
      me: state.meId ? map.get(state.meId) ?? null : null,
      userById: (id) => map.get(id),
    }
  }, [state])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useStore() {
  const s = useContext(Ctx)
  if (!s) throw new Error('useStore must be used inside StoreProvider')
  return s
}

export const newId = () => Math.random().toString(36).slice(2, 10)
