import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react'
import type { User } from '../data/types'
import { initialState, reducer, type Action, type State } from './reducer'

const KEY = 'fandome:v1'

function load(): State {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as State
      if (parsed.version === 1) return parsed
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
      // ignore quota / private mode errors
    }
  }, [state])

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
