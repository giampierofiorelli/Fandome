import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { parties } from '../data/seed'
import { useStore } from '../store/store'
import { Chat } from '../components/Chat'
import { Avatar } from '../components/ui'
import { artistById } from '../lib/util'
import { IconChevronLeft } from '../components/icons'

const PARTY_LINES = ['THIS SONG 😭', 'Volume up!!', 'The bridge on this one…', 'Who’s listening from Brazil? 🇧🇷', 'Italia presente 🇮🇹', 'Dancing in my kitchen rn', 'Underrated track alert', 'Skip? Never.']

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

// Stationhead-style listening party. The playhead is derived from the clock,
// so everyone opening the page hears the same track at the same moment.
// Music itself stays on the streaming service.
export default function Party() {
  const { partyId } = useParams()
  const party = parties.find((p) => p.id === partyId)
  const { state, me, userById } = useStore()
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  if (!party || !me) return <Navigate to="/" replace />

  const artist = artistById(party.artistId)!
  const total = party.tracks.reduce((n, t) => n + t.seconds, 0)
  let pos = Math.floor(now / 1000) % total
  let idx = 0
  while (pos >= party.tracks[idx].seconds) {
    pos -= party.tracks[idx].seconds
    idx++
  }
  const track = party.tracks[idx]
  const listeners = state.users.filter((u) => u.fanSince[party.artistId] && u.id !== me.id)
  const query = encodeURIComponent(`${artist.name} ${track.title}`)

  return (
    <>
      <header className="artist-hero" style={{ background: `linear-gradient(160deg, ${artist.color}66, transparent 75%)` }}>
        <Link to={`/a/${artist.id}`} className="muted small">
          <IconChevronLeft size={14} /> {artist.name}
        </Link>
        <div className="live-pill"><i /> LIVE</div>
        <h2>{party.title}</h2>
        <p className="muted small">
          Hosted by @{userById(party.hostId)?.handle} · {listeners.length + 1} listening
        </p>
        <div className="now-playing">
          <div className="np-art" style={{ background: `conic-gradient(from ${(now / 40) % 360}deg, ${artist.color}, #222, ${artist.color})` }} />
          <div className="grow">
            <div className="muted small">
              Track {idx + 1} of {party.tracks.length}
            </div>
            <strong className="np-title">{track.title}</strong>
            <div className="progress">
              <span style={{ width: `${(pos / track.seconds) * 100}%` }} />
            </div>
            <div className="muted small row-between">
              <span>{fmt(pos)}</span>
              <span>{fmt(track.seconds)}</span>
            </div>
          </div>
        </div>
        <div className="hero-actions">
          <a className="btn small" href={`https://open.spotify.com/search/${query}`} target="_blank" rel="noreferrer">
            Play on Spotify
          </a>
          <a className="btn small" href={`https://music.apple.com/search?term=${query}`} target="_blank" rel="noreferrer">
            Apple Music
          </a>
          <a className="btn small" href={`https://music.youtube.com/search?q=${query}`} target="_blank" rel="noreferrer">
            YouTube Music
          </a>
        </div>
        <p className="muted small">Press play on your own app and seek to {fmt(pos)} to sync. Full in-app sync comes with streaming integrations.</p>
        <div className="avatars-row">
          {listeners.map((u) => (
            <Avatar key={u.id} user={u} size={26} />
          ))}
        </div>
      </header>
      <div className="party-grid">
        <Chat room={`party:${party.id}`} crowd={listeners.map((u) => u.id)} lines={PARTY_LINES} />
        <ol className="tracklist">
          {party.tracks.map((t, i) => (
            <li key={t.title} className={i === idx ? 'on' : i < idx ? 'done' : ''}>
              <span>{t.title}</span>
              <span className="muted">{fmt(t.seconds)}</span>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
