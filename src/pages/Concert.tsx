import { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { concerts } from '../data/seed'
import { useStore } from '../store/store'
import { useComposer } from '../components/Composer'
import { Chat } from '../components/Chat'
import { FeedList } from '../components/FeedList'
import { ShareCardButton } from '../components/ShareCard'
import { Avatar, Tabs } from '../components/ui'
import { IconArrowLeft, IconCheck, IconPen } from '../components/icons'
import { artistById, isUpcoming } from '../lib/util'

const CROWD_LINES = ['Who’s near the front?', 'Meeting at the usual spot!', 'This setlist 😭', 'Anyone selling a spare? (official resale only pls)', 'Flying in tomorrow ✈️', 'Best night of my life', 'Did you see the outfit change?!']

type Tab = 'posts' | 'chat' | 'setlist' | 'people'

// Every show is a social object: before (who's going, meetups),
// during (live chat) and after (memories, "I was there" stamp).
export default function ConcertPage() {
  const { concertId = '' } = useParams()
  const concert = concerts.find((c) => c.id === concertId)
  const { state, dispatch, me } = useStore()
  const compose = useComposer()
  const nav = useNavigate()
  const [tab, setTab] = useState<Tab>('posts')
  if (!concert || !me) return <Navigate to="/" replace />

  const artist = artistById(concert.artistId)!
  const upcoming = isUpcoming(concert.date)
  const attendees = state.users.filter((u) => (upcoming ? u.going : u.attended).includes(concert.id))
  const mine = upcoming ? me.going.includes(concert.id) : me.attended.includes(concert.id)
  const posts = state.posts.filter((p) => p.concertId === concert.id && !p.replyTo).sort((a, b) => b.createdAt - a.createdAt)
  const crowd = attendees.filter((u) => u.id !== me.id).map((u) => u.id)
  const d = new Date(concert.date + 'T12:00:00')
  const days = Math.ceil((d.getTime() - Date.now()) / 86_400_000)

  return (
    <>
      <header className="hero-solid" style={{ ['--tint' as string]: artist.color }}>
        <div className="hero-nav">
          <button className="glass-circle" onClick={() => nav(-1)} aria-label="Back">
            <IconArrowLeft size={18} />
          </button>
          <Link to={`/a/${artist.id}`} className="hero-tag">
            {artist.name}
          </Link>
        </div>
        <div className="hero-kicker">{concert.tour}</div>
        <h1 className="hero-city">{concert.city}</h1>
        <div className="hero-meta">
          <div>
            <div className="bignum light">
              {d.getDate()}
              <small>{d.toLocaleDateString('en-GB', { month: 'short' })}</small>
            </div>
            <div className="hero-label">{d.getFullYear()} · {concert.venue}</div>
          </div>
          <div className="right">
            <div className="bignum light">
              {upcoming ? days : attendees.length}
              <small>{upcoming ? 'days' : 'fans'}</small>
            </div>
            <div className="hero-label">{upcoming ? `${attendees.length} going` : 'were there'}</div>
          </div>
        </div>
        {upcoming && <div className="hero-note">Demo date · meetups in public places only · tickets from official sellers, never via DMs</div>}
        <div className="hero-actions">
          <button className={mine ? 'pill-btn glass' : 'pill-btn light'} onClick={() => dispatch({ type: upcoming ? 'toggleGoing' : 'toggleAttended', concertId: concert.id })}>
            {mine && <IconCheck size={16} />}
            {upcoming ? (mine ? 'Going' : 'I’m going') : 'I was there'}
          </button>
          <button className="pill-btn glass" onClick={() => compose({ concertId: concert.id, artistId: artist.id })}>
            <IconPen size={15} /> {upcoming ? 'Meetup' : 'Memory'}
          </button>
          {mine && (
            <ShareCardButton
              label="Share"
              color={artist.color}
              title={upcoming ? `I’m going to ${artist.name} in ${concert.city}` : `I was there: ${artist.name}, ${concert.city}`}
              lines={[concert.venue, d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }), concert.tour, `@${me.handle}`]}
            />
          )}
        </div>
      </header>

      <div className="section-head center">
        <Tabs<Tab>
          tabs={[
            { id: 'posts', label: upcoming ? 'Plans' : 'Memories' },
            { id: 'chat', label: 'Chat' },
            { id: 'setlist', label: 'Setlist' },
            { id: 'people', label: 'Fans' },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      {tab === 'posts' && <FeedList items={posts.map((p) => ({ key: p.id, post: p, at: p.createdAt }))} empty="No posts yet. Share the first one." />}
      {tab === 'chat' && (
        <div className="glass-card flush">
          <Chat room={`concert:${concert.id}`} crowd={crowd} lines={CROWD_LINES} />
        </div>
      )}
      {tab === 'setlist' &&
        (concert.setlist.length ? (
          <ol className="glass-card numbered big">
            {concert.setlist.map((s, i) => (
              <li key={s}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                {s}
              </li>
            ))}
          </ol>
        ) : (
          <p className="empty">The setlist appears after the show, sourced by fans.</p>
        ))}
      {tab === 'people' && (
        <div className="glass-card list">
          {attendees.map((u) => (
            <Link key={u.id} to={`/u/${u.handle}`} className="row-item">
              <Avatar user={u} size={40} />
              <span className="grow">
                <strong>{u.name}</strong>
                <span className="muted small block">@{u.handle} · {u.location}</span>
              </span>
            </Link>
          ))}
          {!attendees.length && <p className="empty">Nobody yet.</p>}
        </div>
      )}
    </>
  )
}
