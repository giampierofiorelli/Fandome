import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { concerts } from '../data/seed'
import { useStore } from '../store/store'
import { useComposer } from '../components/Composer'
import { Chat } from '../components/Chat'
import { FeedList } from '../components/FeedList'
import { ShareCardButton } from '../components/ShareCard'
import { Avatar, Tabs } from '../components/ui'
import { artistById, formatDate, isUpcoming } from '../lib/util'
import { IconCheck, IconChevronLeft, IconPen } from '../components/icons'

const CROWD_LINES = ['Who’s near the front?', 'Meeting at the usual spot!', 'This setlist 😭', 'Anyone selling a spare? (official resale only pls)', 'Flying in tomorrow ✈️', 'Best night of my life', 'Did you see the outfit change?!']

type Tab = 'posts' | 'chat' | 'setlist' | 'people'

// Every show is a social object: before (who's going, meetups),
// during (live chat) and after (memories, "I was there" stamp).
export default function ConcertPage() {
  const { concertId = '' } = useParams()
  const concert = concerts.find((c) => c.id === concertId)
  const { state, dispatch, me } = useStore()
  const compose = useComposer()
  const [tab, setTab] = useState<Tab>('posts')
  if (!concert || !me) return <Navigate to="/" replace />

  const artist = artistById(concert.artistId)!
  const upcoming = isUpcoming(concert.date)
  const attendees = state.users.filter((u) => (upcoming ? u.going : u.attended).includes(concert.id))
  const mine = upcoming ? me.going.includes(concert.id) : me.attended.includes(concert.id)
  const posts = state.posts.filter((p) => p.concertId === concert.id && !p.replyTo).sort((a, b) => b.createdAt - a.createdAt)
  const crowd = attendees.filter((u) => u.id !== me.id).map((u) => u.id)

  return (
    <>
      <header className="artist-hero" style={{ background: `linear-gradient(160deg, ${artist.color}55, transparent 70%)` }}>
        <Link to={`/a/${artist.id}`} className="muted small">
          <IconChevronLeft size={14} /> {artist.name}
        </Link>
        <h1>
          {concert.city} {upcoming ? '' : `’${concert.date.slice(2, 4)}`}
        </h1>
        <p>
          {concert.venue}, {concert.country} · {formatDate(concert.date)}
          {upcoming && <span className="chip warn">demo date</span>}
        </p>
        <p className="muted small">{concert.tour}</p>
        <div className="avatars-row">
          {attendees.slice(0, 8).map((u) => (
            <Avatar key={u.id} user={u} size={28} />
          ))}
          <span className="small">
            <strong>{attendees.length}</strong> {upcoming ? 'going' : 'were there'}
          </span>
        </div>
        <div className="hero-actions">
          <button
            className={mine ? 'btn active' : 'btn primary'}
            onClick={() => dispatch({ type: upcoming ? 'toggleGoing' : 'toggleAttended', concertId: concert.id })}
          >
            {mine && <IconCheck size={16} />}
            {upcoming ? (mine ? 'Going' : 'I’m going') : 'I was there'}
          </button>
          <button className="btn" onClick={() => compose({ concertId: concert.id, artistId: artist.id })}>
            <IconPen size={15} /> {upcoming ? 'Propose a meetup' : 'Share a memory'}
          </button>
          {mine && (
            <ShareCardButton
              label="Share card"
              color={artist.color}
              title={upcoming ? `I’m going to ${artist.name} in ${concert.city}` : `I was there: ${artist.name}, ${concert.city}`}
              lines={[concert.venue, formatDate(concert.date), concert.tour, `@${me.handle}`]}
            />
          )}
        </div>
        {upcoming && <p className="muted small">Meetups: public places only. Tickets: buy from official sellers — never via DMs.</p>}
      </header>
      <div className="sticky">
        <Tabs<Tab>
          tabs={[
            { id: 'posts', label: upcoming ? 'Plans' : 'Memories' },
            { id: 'chat', label: upcoming ? 'Group chat' : 'Live chat' },
            { id: 'setlist', label: 'Setlist' },
            { id: 'people', label: upcoming ? 'Going' : 'Were there' },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      {tab === 'posts' && <FeedList items={posts.map((p) => ({ key: p.id, post: p, at: p.createdAt }))} empty="No posts yet. Share the first one!" />}
      {tab === 'chat' && <Chat room={`concert:${concert.id}`} crowd={crowd} lines={CROWD_LINES} />}
      {tab === 'setlist' &&
        (concert.setlist.length ? (
          <ol className="setlist">
            {concert.setlist.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        ) : (
          <p className="empty">Setlist will appear after the show (sourced from fans, with links to the original source).</p>
        ))}
      {tab === 'people' && (
        <div>
          {attendees.map((u) => (
            <Link key={u.id} to={`/u/${u.handle}`} className="list-row">
              <Avatar user={u} size={36} /> <strong>{u.name}</strong> <span className="muted">@{u.handle} · {u.location}</span>
            </Link>
          ))}
          {!attendees.length && <p className="empty">Nobody yet.</p>}
        </div>
      )}
    </>
  )
}
