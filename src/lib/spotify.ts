// Spotify Connect remote control, Stationhead-style: Fandome never streams audio.
// It tells the listener's own Spotify app what to play and from where, then
// keeps it in sync. Works from a static site using OAuth "Authorization Code
// with PKCE" (no server, no client secret). Playback control needs Premium.

import { SPOTIFY_CLIENT_ID } from '../config'

const KEYS = {
  clientId: 'fandome:spotify:clientId',
  tokens: 'fandome:spotify:tokens',
  verifier: 'fandome:spotify:verifier',
  state: 'fandome:spotify:state',
  returnTo: 'fandome:spotify:returnTo',
  uris: 'fandome:spotify:uris',
}
const SCOPES = 'user-read-playback-state user-modify-playback-state user-read-currently-playing'

interface Tokens {
  access: string
  refresh?: string
  expiresAt: number
}

export interface Playback {
  isPlaying: boolean
  progressMs: number
  trackUri?: string
  trackName?: string
  deviceName?: string
}

export type PlayResult = { ok: true } | { ok: false; reason: 'no-device' | 'premium' | 'not-found' | 'auth' | 'error'; message: string }

const store = {
  get: (k: string) => {
    try {
      return localStorage.getItem(k)
    } catch {
      return null
    }
  },
  set: (k: string, v: string) => {
    try {
      localStorage.setItem(k, v)
    } catch {
      // storage unavailable: connection just won't persist
    }
  },
  del: (k: string) => {
    try {
      localStorage.removeItem(k)
    } catch {
      // ignore
    }
  },
}

// Built-in ID (set once by the site owner) wins; the Settings field is only a fallback for testing.
export const builtInClientId = () => SPOTIFY_CLIENT_ID || ((import.meta.env.VITE_SPOTIFY_CLIENT_ID as string | undefined) ?? '')
export const getClientId = () => builtInClientId() || store.get(KEYS.clientId) || ''
export const setClientId = (id: string) => (id.trim() ? store.set(KEYS.clientId, id.trim()) : store.del(KEYS.clientId))
// Must match a Redirect URI registered in the Spotify app, e.g. https://<user>.github.io/Fandome/
export const redirectUri = () => `${location.origin}${location.pathname}`

const readTokens = (): Tokens | null => {
  const raw = store.get(KEYS.tokens)
  try {
    return raw ? (JSON.parse(raw) as Tokens) : null
  } catch {
    return null
  }
}
const saveTokens = (t: { access_token: string; refresh_token?: string; expires_in: number }, prevRefresh?: string) =>
  store.set(KEYS.tokens, JSON.stringify({ access: t.access_token, refresh: t.refresh_token ?? prevRefresh, expiresAt: Date.now() + (t.expires_in - 60) * 1000 }))

export const isConnected = () => Boolean(readTokens())
export const disconnect = () => store.del(KEYS.tokens)

// ---- PKCE helpers (RFC 7636) ----
const b64url = (bytes: Uint8Array) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
export function randomString(len = 64) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
  const bytes = crypto.getRandomValues(new Uint8Array(len))
  return Array.from(bytes, (b) => chars[b % chars.length]).join('')
}
export async function codeChallenge(verifier: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier))
  return b64url(new Uint8Array(digest))
}

export async function login(returnTo: string) {
  const clientId = getClientId()
  if (!clientId) throw new Error('Add your Spotify Client ID in Settings first.')
  const verifier = randomString()
  const state = randomString(16)
  store.set(KEYS.verifier, verifier)
  store.set(KEYS.state, state)
  store.set(KEYS.returnTo, returnTo)
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: SCOPES,
    redirect_uri: redirectUri(),
    code_challenge_method: 'S256',
    code_challenge: await codeChallenge(verifier),
    state,
  })
  location.assign(`https://accounts.spotify.com/authorize?${params}`)
}

async function tokenRequest(body: Record<string, string>) {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(body),
  })
  if (!res.ok) throw new Error(`Spotify token error ${res.status}`)
  return res.json()
}

// Called once at startup: finishes the OAuth round-trip if Spotify sent us back
// with ?code=…, then restores the page the user started from (hash route).
// Returns a message to show the user, or null if this wasn't a Spotify return.
export async function handleRedirect(): Promise<string | null> {
  const q = new URLSearchParams(location.search)
  const code = q.get('code')
  const error = q.get('error')
  if (!code && !error) return null
  const returnTo = store.get(KEYS.returnTo) || '#/'
  const clean = () => history.replaceState(null, '', `${location.pathname}${returnTo}`)
  if (error || q.get('state') !== store.get(KEYS.state)) {
    clean()
    return error ? `Spotify: ${error}` : 'Spotify login could not be verified. Try again.'
  }
  try {
    const t = await tokenRequest({
      grant_type: 'authorization_code',
      code: code!,
      redirect_uri: redirectUri(),
      client_id: getClientId(),
      code_verifier: store.get(KEYS.verifier) || '',
    })
    saveTokens(t)
    return 'Spotify connected'
  } catch {
    return 'Spotify login failed. Check the Client ID and Redirect URI.'
  } finally {
    store.del(KEYS.verifier)
    store.del(KEYS.state)
    clean()
  }
}

async function accessToken(): Promise<string | null> {
  const t = readTokens()
  if (!t) return null
  if (Date.now() < t.expiresAt) return t.access
  if (!t.refresh) return null
  try {
    const n = await tokenRequest({ grant_type: 'refresh_token', refresh_token: t.refresh, client_id: getClientId() })
    saveTokens(n, t.refresh)
    return n.access_token as string
  } catch {
    disconnect()
    return null
  }
}

async function api(path: string, init: RequestInit = {}) {
  const token = await accessToken()
  if (!token) return { status: 401, data: null as unknown }
  const res = await fetch(`https://api.spotify.com/v1${path}`, { ...init, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...init.headers } })
  if (res.status === 401) disconnect()
  const text = res.status === 204 ? '' : await res.text()
  let data: unknown = null
  try {
    data = text ? JSON.parse(text) : null
  } catch {
    data = null
  }
  return { status: res.status, data }
}

// Resolve "Artist – Title" to a Spotify track URI (cached), instead of hardcoding IDs.
export async function findTrack(artist: string, title: string): Promise<string | null> {
  const key = `${artist}|${title}`.toLowerCase()
  let cache: Record<string, string> = {}
  try {
    cache = JSON.parse(store.get(KEYS.uris) || '{}')
  } catch {
    cache = {}
  }
  if (cache[key]) return cache[key]
  const q = encodeURIComponent(`track:${title} artist:${artist}`)
  const { status, data } = await api(`/search?type=track&limit=1&q=${q}`)
  const uri = status === 200 ? (data as { tracks?: { items?: { uri: string }[] } })?.tracks?.items?.[0]?.uri : undefined
  if (!uri) return null
  cache[key] = uri
  store.set(KEYS.uris, JSON.stringify(cache))
  return uri
}

export function explain(status: number, data: unknown): PlayResult {
  const err = (data as { error?: { reason?: string; message?: string } } | null)?.error
  if (status === 401) return { ok: false, reason: 'auth', message: 'Spotify session expired. Connect again.' }
  if (status === 404 || err?.reason === 'NO_ACTIVE_DEVICE') return { ok: false, reason: 'no-device', message: 'Open Spotify on your phone or computer, play anything for a second, then tap Sync again.' }
  if (status === 403) return { ok: false, reason: 'premium', message: 'Spotify only lets apps control playback on Premium accounts.' }
  return { ok: false, reason: 'error', message: err?.message || `Spotify error ${status}` }
}

// Tell the user's Spotify app to play `uri` starting at `positionMs`.
export async function playAt(uri: string, positionMs: number): Promise<PlayResult> {
  const { status, data } = await api('/me/player/play', { method: 'PUT', body: JSON.stringify({ uris: [uri], position_ms: Math.max(0, Math.round(positionMs)) }) })
  return status >= 200 && status < 300 ? { ok: true } : explain(status, data)
}

export async function seek(positionMs: number): Promise<PlayResult> {
  const { status, data } = await api(`/me/player/seek?position_ms=${Math.max(0, Math.round(positionMs))}`, { method: 'PUT' })
  return status >= 200 && status < 300 ? { ok: true } : explain(status, data)
}

export async function pause(): Promise<void> {
  await api('/me/player/pause', { method: 'PUT' })
}

export async function getPlayback(): Promise<Playback | null> {
  const { status, data } = await api('/me/player')
  if (status !== 200 || !data) return null
  const d = data as { is_playing: boolean; progress_ms: number; item?: { uri: string; name: string }; device?: { name: string } }
  return { isPlaying: d.is_playing, progressMs: d.progress_ms ?? 0, trackUri: d.item?.uri, trackName: d.item?.name, deviceName: d.device?.name }
}
