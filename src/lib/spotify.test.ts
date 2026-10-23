import { beforeEach, describe, expect, it, vi } from 'vitest'
import { DRIFT_TOLERANCE_MS, driftMs, partyPosition } from './party'

// Minimal browser stubs for the Node test environment.
const mem = new Map<string, string>()
vi.stubGlobal('localStorage', {
  getItem: (k: string) => mem.get(k) ?? null,
  setItem: (k: string, v: string) => void mem.set(k, v),
  removeItem: (k: string) => void mem.delete(k),
})
const loc = { origin: 'https://fan.example', pathname: '/Fandome/', search: '', hash: '#/party/x', assign: vi.fn() }
vi.stubGlobal('location', loc)
vi.stubGlobal('history', { replaceState: vi.fn() })

const spotify = await import('./spotify')

const json = (status: number, body?: unknown) => new Response(body === undefined ? null : JSON.stringify(body), { status })

beforeEach(() => {
  mem.clear()
  loc.search = ''
  vi.restoreAllMocks()
})

describe('PKCE', () => {
  it('matches the RFC 7636 example challenge', async () => {
    expect(await spotify.codeChallenge('dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk')).toBe('E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM')
  })

  it('login redirects to Spotify with S256 challenge and our redirect URI', async () => {
    spotify.setClientId('abc123')
    await spotify.login('#/party/x')
    const url = new URL(loc.assign.mock.calls[loc.assign.mock.calls.length - 1][0])
    expect(url.origin).toBe('https://accounts.spotify.com')
    expect(url.searchParams.get('client_id')).toBe('abc123')
    expect(url.searchParams.get('code_challenge_method')).toBe('S256')
    expect(url.searchParams.get('redirect_uri')).toBe('https://fan.example/Fandome/')
    expect(url.searchParams.get('scope')).toContain('user-modify-playback-state')
  })

  it('handleRedirect exchanges the code and restores the hash route', async () => {
    spotify.setClientId('abc123')
    await spotify.login('#/party/x')
    const state = new URL(loc.assign.mock.calls[loc.assign.mock.calls.length - 1][0]).searchParams.get('state')
    loc.search = `?code=CODE&state=${state}`
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(json(200, { access_token: 'T', refresh_token: 'R', expires_in: 3600 }))
    expect(await spotify.handleRedirect()).toBe('Spotify connected')
    const body = String((fetchMock.mock.calls[0][1] as RequestInit).body)
    expect(body).toContain('grant_type=authorization_code')
    expect(body).toContain('code_verifier=')
    expect(spotify.isConnected()).toBe(true)
    expect(history.replaceState).toHaveBeenCalledWith(null, '', '/Fandome/#/party/x')
  })

  it('rejects a redirect whose state does not match', async () => {
    loc.search = '?code=CODE&state=forged'
    expect(await spotify.handleRedirect()).toMatch(/could not be verified/)
    expect(spotify.isConnected()).toBe(false)
  })
})

describe('playback control', () => {
  beforeEach(() => {
    mem.set('fandome:spotify:tokens', JSON.stringify({ access: 'T', refresh: 'R', expiresAt: Date.now() + 60_000 }))
  })

  it('plays the track at the party position on the user device', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(json(204))
    expect(await spotify.playAt('spotify:track:1', 61_234.6)).toEqual({ ok: true })
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe('https://api.spotify.com/v1/me/player/play')
    expect(JSON.parse(String(init.body))).toEqual({ uris: ['spotify:track:1'], position_ms: 61235 })
  })

  it('explains the common failures', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(json(404, { error: { reason: 'NO_ACTIVE_DEVICE' } }))
    expect(await spotify.playAt('u', 0)).toMatchObject({ ok: false, reason: 'no-device' })
    expect(spotify.explain(403, { error: { reason: 'PREMIUM_REQUIRED' } })).toMatchObject({ reason: 'premium' })
  })

  it('finds a track once and caches the URI', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(json(200, { tracks: { items: [{ uri: 'spotify:track:hung' }] } }))
    expect(await spotify.findTrack('Madonna', 'Hung Up')).toBe('spotify:track:hung')
    expect(await spotify.findTrack('Madonna', 'Hung Up')).toBe('spotify:track:hung')
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('refreshes an expired token before calling the API', async () => {
    mem.set('fandome:spotify:tokens', JSON.stringify({ access: 'OLD', refresh: 'R', expiresAt: Date.now() - 1 }))
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(json(200, { access_token: 'NEW', expires_in: 3600 }))
      .mockResolvedValueOnce(json(204))
    await spotify.seek(1000)
    expect((fetchMock.mock.calls[1][1] as RequestInit).headers).toMatchObject({ Authorization: 'Bearer NEW' })
  })
})

describe('party clock', () => {
  const tracks = [
    { title: 'A', seconds: 100 },
    { title: 'B', seconds: 50 },
  ]
  it('maps time to track and position, looping the album', () => {
    expect(partyPosition(tracks, 30_000)).toEqual({ idx: 0, ms: 30_000 })
    expect(partyPosition(tracks, 120_000)).toEqual({ idx: 1, ms: 20_000 })
    expect(partyPosition(tracks, 155_000)).toEqual({ idx: 0, ms: 5_000 })
  })
  it('measures drift with a tolerance', () => {
    expect(driftMs(12_000, 10_000)).toBe(2000)
    expect(Math.abs(driftMs(12_000, 10_000)) > DRIFT_TOLERANCE_MS).toBe(false)
  })
})
