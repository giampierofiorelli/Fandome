import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react'
import type { User } from '../data/types'
import { gcBlobs } from '../lib/mediaStore'
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
        const withPages = parsed.users.some((u) => u.id === 'pg-archive') ? parsed.users : [...parsed.users, ...fresh.users.filter((u) => u.kind === 'page')]
        // Saves from before the activity rule: nobody starts out paused.
        const users = withPages.map((u) => {
          if (u.id === parsed.meId) return u.joinedAt ? u : { ...u, joinedAt: now }
          if (u.activeAt !== undefined) return u
          return { ...u, activeAt: fresh.users.find((f) => f.id === u.id)?.activeAt ?? now }
        })
        // Saves from before moderation: add the demo report, its spam post and moderators.
        let posts = parsed.posts
        let allUsers = users
        if (!parsed.reports) {
          allUsers = [...users.map((u) => (u.id === 'u-giulia' || u.id === 'u-kenji' ? { ...u, mod: fresh.users.find((f) => f.id === u.id)?.mod, modRequest: fresh.users.find((f) => f.id === u.id)?.modRequest } : u)), ...fresh.users.filter((f) => !users.some((u) => u.id === f.id))]
          posts = [...fresh.posts.filter((p) => p.id === 'p-spam'), ...posts]
        }
        return reducer({ ...parsed, users: allUsers, posts, stories: parsed.stories ?? fresh.stories, dms: parsed.dms ?? fresh.dms, reports: parsed.reports ?? fresh.reports, tickets: parsed.tickets ?? fresh.tickets }, { type: 'prune', now })
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

  // Drop stored videos that no live story uses any more.
  const videoKeys = state.stories.map((s) => (s.video ?? s.shared?.video)?.key).filter(Boolean).sort().join(',')
  useEffect(() => {
    void gcBlobs(videoKeys ? videoKeys.split(',') : [])
  }, [videoKeys])

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
