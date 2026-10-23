// Big media (story videos) stored in this browser's IndexedDB.
// localStorage holds ~5MB, a 3-minute video can be far larger.
import { useEffect, useState } from 'react'

const DB = 'fandome-media'
const STORE = 'blobs'
let dbp: Promise<IDBDatabase> | null = null

function db(): Promise<IDBDatabase> {
  if (!dbp) {
    dbp = new Promise((res, rej) => {
      const req = indexedDB.open(DB, 1)
      req.onupgradeneeded = () => req.result.createObjectStore(STORE)
      req.onsuccess = () => res(req.result)
      req.onerror = () => {
        dbp = null
        rej(req.error)
      }
    })
  }
  return dbp
}

function run<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return db().then(
    (d) =>
      new Promise<T>((res, rej) => {
        const tx = d.transaction(STORE, mode)
        const req = fn(tx.objectStore(STORE))
        tx.oncomplete = () => res(req.result)
        tx.onerror = () => rej(tx.error ?? req.error)
        tx.onabort = () => rej(tx.error ?? new Error('aborted'))
      }),
  )
}

export const putBlob = (key: string, blob: Blob) => run('readwrite', (s) => s.put(blob, key)).then(() => undefined)
export const getBlob = (key: string) => run<Blob | undefined>('readonly', (s) => s.get(key))
const allKeys = () => run<IDBValidKey[]>('readonly', (s) => s.getAllKeys())

// Remove blobs no story points to any more (expired or deleted).
export async function gcBlobs(keep: string[]) {
  try {
    const set = new Set(keep)
    const keys = await allKeys()
    // Keys are `v-<timestamp>-<id>`; leave fresh ones alone (a story may be mid-save).
    const fresh = (k: string) => Date.now() - Number(k.split('-')[1] ?? 0) < 10 * 60_000
    const stale = keys.filter((k) => !set.has(String(k)) && !fresh(String(k)))
    if (stale.length) await run('readwrite', (s) => (stale.forEach((k) => s.delete(k)), s.count()))
  } catch {
    // IndexedDB unavailable: nothing to clean
  }
}

// Object URL for a stored blob, revoked when the component unmounts.
export function useBlobUrl(key?: string): { url?: string; missing: boolean } {
  const [res, setRes] = useState<{ url?: string; missing: boolean }>({ missing: false })
  useEffect(() => {
    if (!key) return
    let url: string | undefined
    let alive = true
    getBlob(key)
      .then((b) => {
        if (!alive) return
        if (!b) return setRes({ missing: true })
        url = URL.createObjectURL(b)
        setRes({ url, missing: false })
      })
      .catch(() => alive && setRes({ missing: true }))
    return () => {
      alive = false
      if (url) URL.revokeObjectURL(url)
    }
  }, [key])
  return res
}

export const MAX_VIDEO_SECONDS = 180
export const newVideoKey = () => `v-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

// Duration + a poster frame, read in the browser (no upload).
export async function readVideo(file: Blob): Promise<{ duration: number; poster?: string }> {
  const url = URL.createObjectURL(file)
  const v = document.createElement('video')
  v.muted = true
  v.playsInline = true
  v.preload = 'metadata'
  try {
    await new Promise<void>((res, rej) => {
      v.onloadedmetadata = () => res()
      v.onerror = () => rej(new Error('Not a video this browser can play'))
      v.src = url
    })
    // Some recorders report Infinity until you seek to the end.
    if (!Number.isFinite(v.duration)) {
      await new Promise<void>((res) => {
        v.ondurationchange = () => Number.isFinite(v.duration) && res()
        v.currentTime = 1e9
        setTimeout(res, 3000)
      })
    }
    const duration = Number.isFinite(v.duration) ? v.duration : 0
    let poster: string | undefined
    try {
      await new Promise<void>((res) => {
        v.onseeked = () => res()
        v.currentTime = Math.min(0.5, duration / 2 || 0)
        setTimeout(res, 1500)
      })
      const scale = Math.min(1, 360 / Math.max(v.videoWidth, v.videoHeight))
      const c = document.createElement('canvas')
      c.width = Math.round(v.videoWidth * scale)
      c.height = Math.round(v.videoHeight * scale)
      if (c.width && c.height) {
        c.getContext('2d')!.drawImage(v, 0, 0, c.width, c.height)
        poster = c.toDataURL('image/jpeg', 0.7)
      }
    } catch {
      // poster is optional
    }
    return { duration, poster }
  } finally {
    URL.revokeObjectURL(url)
  }
}

export const fmtDuration = (s: number) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`
