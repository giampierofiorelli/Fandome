import { createContext, useContext, useEffect, useMemo, useReducer, useRef, type ReactNode } from 'react'
import type { User } from '../data/types'
import { gcBlobs, loadSavedState, saveState } from '../lib/mediaStore'
import { initialState, reducer, type Action, type State } from './reducer'

const KEY = 'fandome:v1'

// Saved state lives in IndexedDB. Older versions used localStorage: read it once, then move it.
export async function loadInitialState(): Promise<State> {
  try {
    const saved = (await Promise.race([loadSavedState(), new Promise((r) => setTimeout(() => r(undefined), 2500))])) as State | undefined
    if (saved && saved.version === 1) return migrate(saved)
  } catch {
    // IndexedDB unavailable (some private modes): fall back to localStorage
  }
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return migrate(JSON.parse(raw) as State)
  } catch {
    // corrupted: start fresh
  }
  return initialState(Date.now())
}

function migrate(parsed: State): State {
  try {
    {
      if (parsed.version === 1) {
        // Older saves predate stories / DMs / pages: fill in what's missing.
        const now = Date.now()
        const fresh = initialState(now)
        const withPages = parsed.users.some((u) => u.id === 'pg-archive') ? parsed.users : [...parsed.users, ...fresh.users.filter((u) => u.kind === 'page')]
        // Saves from before the activity rule: nobody starts out paused.
        const users = withPages.map((u) => {
          if (u.id === parsed.meId) return u.joinedAt ? u : { ...u, joinedAt: now }
          const f = fresh.users.find((x) => x.id === u.id)
          // Demo additions for older saves: collection and links of seed fans.
          if (f && !u.collection && f.collection) u = { ...u, collection: f.collection }
          if (f && !u.links && f.links) u = { ...u, links: f.links }
          if (u.activeAt !== undefined) return u
          return { ...u, activeAt: f?.activeAt ?? now }
        })
        // Saves from before moderation: add the demo report, its spam post and moderators.
        let posts = parsed.posts
        let allUsers = users
        if (!parsed.reports) {
          allUsers = [...users.map((u) => (u.id === 'u-giulia' || u.id === 'u-kenji' ? { ...u, mod: fresh.users.find((f) => f.id === u.id)?.mod, modRequest: fresh.users.find((f) => f.id === u.id)?.modRequest } : u)), ...fresh.users.filter((f) => !users.some((u) => u.id === f.id))]
          posts = [...fresh.posts.filter((p) => p.id === 'p-spam'), ...posts]
        }
        // Demo album links for older saves.
        posts = posts.map((p) => (p.albumIds ? p : { ...p, albumIds: fresh.posts.find((f) => f.id === p.id)?.albumIds }))
        // Demo collab posts for older saves (only if missing).
        const demo = fresh.posts.filter((p) => (p.id === 'p-collab2' || p.id === 'p-collab-invite') && !posts.some((x) => x.id === p.id))
        if (demo.length) posts = [...demo, ...posts].sort((a, b) => b.createdAt - a.createdAt)
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

export function StoreProvider({ children, initial }: { children: ReactNode; initial: State }) {
  const [state, dispatch] = useReducer(reducer, initial)

  // Save off the critical path: batch changes and write to IndexedDB asynchronously,
  // so the screen never waits (the old synchronous localStorage write froze it with photos).
  const latest = useRef(state)
  latest.current = state
  useEffect(() => {
    let cancelled = false
    const save = () => {
      saveState(latest.current)
        .then(() => {
          // Moved to IndexedDB: free the old localStorage copy (it counted against a ~5MB quota).
          try {
            localStorage.removeItem(KEY)
          } catch {
            // ignore
          }
        })
        .catch(() => {
          // No IndexedDB (rare private modes): last resort, localStorage.
          try {
            localStorage.setItem(KEY, JSON.stringify(latest.current))
          } catch {
            window.dispatchEvent(new CustomEvent('fandome:storage-full'))
          }
        })
    }
    const t = setTimeout(() => !cancelled && save(), 300)
    const flush = () => document.visibilityState === 'hidden' && save()
    document.addEventListener('visibilitychange', flush)
    window.addEventListener('pagehide', save)
    return () => {
      cancelled = true
      clearTimeout(t)
      document.removeEventListener('visibilitychange', flush)
      window.removeEventListener('pagehide', save)
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
