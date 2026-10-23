import { useCallback, useEffect, useRef, useState } from 'react'
import { DRIFT_TOLERANCE_MS, driftMs, partyPosition, type PartyTrack } from './party'
import * as spotify from './spotify'

export type SyncStatus = 'idle' | 'starting' | 'synced' | 'off-track' | 'error'

// Keeps the listener's own Spotify app aligned with the party clock:
// start the right track at the right second, follow track changes, and
// nudge (seek) if the listener drifts. Audio always plays in Spotify.
export function useSpotifySync(artist: string, tracks: PartyTrack[]) {
  const [connected, setConnected] = useState(spotify.isConnected())
  const [status, setStatus] = useState<SyncStatus>('idle')
  const [message, setMessage] = useState('')
  const [playback, setPlayback] = useState<spotify.Playback | null>(null)
  const [drift, setDrift] = useState<number | null>(null)
  const current = useRef<{ idx: number; uri: string } | null>(null)
  const statusRef = useRef(status)
  statusRef.current = status

  const fail = (r: { ok: false; reason: string; message: string }) => {
    setStatus('error')
    setMessage(r.message)
    if (r.reason === 'auth') setConnected(false)
  }

  // Start (or restart) the party's current track on the listener's device.
  const join = useCallback(async () => {
    setStatus('starting')
    setMessage('')
    const { idx } = partyPosition(tracks, Date.now())
    const uri = await spotify.findTrack(artist, tracks[idx].title)
    if (!uri) {
      if (!spotify.isConnected()) setConnected(false)
      return fail({ ok: false, reason: 'not-found', message: `Couldn’t find “${tracks[idx].title}” on Spotify.` })
    }
    // Re-read the clock after the search so we start exactly where the room is.
    const res = await spotify.playAt(uri, partyPosition(tracks, Date.now()).ms + 250)
    if (!res.ok) return fail(res)
    current.current = { idx, uri }
    setStatus('synced')
  }, [artist, tracks])

  const leave = useCallback(() => {
    current.current = null
    setStatus('idle')
    setDrift(null)
    setMessage('')
  }, [])

  // While synced: follow track changes and correct drift every few seconds.
  useEffect(() => {
    if (status !== 'synced' && status !== 'off-track') return
    let alive = true
    const tick = async () => {
      const party = partyPosition(tracks, Date.now())
      if (statusRef.current === 'synced' && current.current && party.idx !== current.current.idx) {
        await join() // the room moved to the next song
        return
      }
      const pb = await spotify.getPlayback()
      if (!alive) return
      setPlayback(pb)
      if (!pb || !current.current) return
      if (pb.trackUri !== current.current.uri) {
        setStatus('off-track') // listener picked something else; don't fight them
        setDrift(null)
        return
      }
      if (statusRef.current === 'off-track') setStatus('synced')
      const d = driftMs(pb.progressMs, party.ms)
      setDrift(d)
      if (pb.isPlaying && Math.abs(d) > DRIFT_TOLERANCE_MS) await spotify.seek(partyPosition(tracks, Date.now()).ms + 200)
    }
    void tick()
    const t = setInterval(tick, 4000)
    return () => {
      alive = false
      clearInterval(t)
    }
  }, [status, tracks, join])

  const connect = useCallback(async () => {
    try {
      await spotify.login(location.hash || '#/')
    } catch (e) {
      setStatus('error')
      setMessage((e as Error).message)
    }
  }, [])

  const disconnect = useCallback(() => {
    spotify.disconnect()
    setConnected(false)
    leave()
  }, [leave])

  return { connected, status, message, playback, drift, join, leave, connect, disconnect, hasClientId: Boolean(spotify.getClientId()) }
}
