import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { parties } from '../data/seed'
import { useStore } from '../store/store'
import { Chat } from '../components/Chat'
import { Avatar } from '../components/ui'
import { IconArrowLeft, IconHeart } from '../components/icons'
import { artistById } from '../lib/util'

const PARTY_LINES = ['THIS SONG 😭', 'Volume up!!', 'The bridge on this one…', 'Who’s listening from Brazil? 🇧🇷', 'Italia presente 🇮🇹', 'Dancing in my kitchen rn', 'Underrated track alert', 'Skip? Never.']

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

// Dial: tick marks around a ring, a progress arc and a knob at the playhead.
function Dial({ progress, color }: { progress: number; color: string }) {
  const R = 118
  const C = 150
  const start = -220
  const sweep = 260
  const ang = (t: number) => ((start + sweep * t) * Math.PI) / 180
  const pt = (t: number, r: number) => [C + r * Math.cos(ang(t)), C + r * Math.sin(ang(t))]
  const ticks = Array.from({ length: 61 }, (_, i) => i / 60)
  const [kx, ky] = pt(progress, R)
  const arc = (t0: number, t1: number, r: number) => {
    const [x0, y0] = pt(t0, r)
    const [x1, y1] = pt(t1, r)
    return `M ${x0} ${y0} A ${r} ${r} 0 ${sweep * (t1 - t0) > 180 ? 1 : 0} 1 ${x1} ${y1}`
  }
  return (
    <svg viewBox="0 0 300 300" className="dial" aria-hidden>
      {ticks.map((t, i) => {
        const long = i % 5 === 0
        const [x0, y0] = pt(t, R + 10)
        const [x1, y1] = pt(t, R + (long ? 26 : 18))
        return <line key={i} x1={x0} y1={y0} x2={x1} y2={y1} className={t <= progress ? 'tick on' : 'tick'} strokeWidth={long ? 2 : 1.2} />
      })}
      <path d={arc(0, 1, R)} className="dial-track" />
      <path d={arc(0, Math.max(0.001, progress), R)} className="dial-fill" style={{ stroke: color }} />
      <circle cx={kx} cy={ky} r="9" className="dial-knob-halo" />
      <circle cx={kx} cy={ky} r="4.5" className="dial-knob" />
      <circle cx={C} cy={C} r="84" className="dial-ring" />
      <circle cx={C} cy={C} r="72" className="dial-ring" />
    </svg>
  )
}

// Stationhead-style listening party. The playhead is derived from the clock,
// so everyone opening the page hears the same track at the same moment.
export default function Party() {
  const { partyId } = useParams()
  const party = parties.find((p) => p.id === partyId)
  const { state, me, userById } = useStore()
  const nav = useNavigate()
  const [now, setNow] = useState(Date.now())
  const [hearts, setHearts] = useState<number[]>([])
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
      <header className="party">
        <div className="hero-nav">
          <button className="glass-circle" onClick={() => nav(-1)} aria-label="Back">
            <IconArrowLeft size={18} />
          </button>
          <span className="live-pill">
            <i /> LIVE · {listeners.length + 1}
          </span>
        </div>
        <div className="party-kicker">Hosted by @{userById(party.hostId)?.handle}</div>
        <div className="party-index">
          <span className="bignum xl">{String(idx + 1).padStart(2, '0')}</span>
          <span className="party-of">/ {party.tracks.length}</span>
        </div>
        <h1 className="party-title">{track.title}</h1>
        <div className="party-album">{artist.name} — Confessions on a Dance Floor</div>

        <div className="dial-wrap">
          <Dial progress={pos / track.seconds} color={artist.color} />
          <motion.button
            className="dial-center"
            aria-label="Send love"
            whileTap={{ scale: 0.9 }}
            onClick={() => setHearts((h) => [...h.slice(-8), Date.now()])}
          >
            <IconHeart size={26} filled />
          </motion.button>
          {hearts.map((h) => (
            <motion.span
              key={h}
              className="float-heart"
              initial={{ opacity: 1, y: 0, x: 0, scale: 0.6 }}
              animate={{ opacity: 0, y: -140, x: (h % 7) * 8 - 24, scale: 1.2 }}
              transition={{ duration: 1.4, ease: [0.2, 0.7, 0.3, 1] }}
              onAnimationComplete={() => setHearts((hs) => hs.filter((x) => x !== h))}
            >
              <IconHeart size={18} filled />
            </motion.span>
          ))}
          <div className="dial-time">
            <span>{fmt(pos)}</span>
            <span>{fmt(track.seconds)}</span>
          </div>
        </div>

        <div className="hero-actions center">
          <a className="pill-btn ink" href={`https://open.spotify.com/search/${query}`} target="_blank" rel="noreferrer">
            Play on Spotify
          </a>
          <a className="pill-btn glass" href={`https://music.apple.com/search?term=${query}`} target="_blank" rel="noreferrer">
            Apple Music
          </a>
        </div>
        <p className="hero-note center">Press play in your own app and seek to {fmt(pos)}. The music stays on the streaming service.</p>
        <div className="stack center">
          {listeners.map((u) => (
            <Avatar key={u.id} user={u} size={28} />
          ))}
        </div>
      </header>

      <div className="glass-card flush">
        <Chat room={`party:${party.id}`} crowd={listeners.map((u) => u.id)} lines={PARTY_LINES} />
      </div>
      <ol className="glass-card numbered">
        {party.tracks.map((t, i) => (
          <li key={t.title} className={i === idx ? 'on' : i < idx ? 'done' : ''}>
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <span className="grow">{t.title}</span>
            <span className="muted">{fmt(t.seconds)}</span>
          </li>
        ))}
      </ol>
    </>
  )
}
