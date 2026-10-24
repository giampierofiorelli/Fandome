import { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { concerts } from '../data/seed'
import { newId, useStore } from '../store/store'
import { useToast } from '../components/Toast'
import { ReportModal } from '../components/Moderation'
import { useComposer } from '../components/Composer'
import { Chat } from '../components/Chat'
import { FeedList } from '../components/FeedList'
import { ShareCardButton } from '../components/ShareCard'
import { Avatar, Tabs } from '../components/ui'
import { IconArrowLeft, IconCheck, IconFlag, IconPen } from '../components/icons'
import { artistById, isUpcoming, timeAgo } from '../lib/util'

const CROWD_LINES = ['Who’s near the front?', 'Meeting at the usual spot!', 'This setlist 😭', 'Anyone selling a spare? (official resale only pls)', 'Flying in tomorrow ✈️', 'Best night of my life', 'Did you see the outfit change?!']

type Tab = 'posts' | 'tickets' | 'chat' | 'setlist' | 'people'

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
        {upcoming && <div className="hero-note">{concert.source === 'ticketmaster' ? 'Date from Ticketmaster' : 'Demo date'} · meetups in public places only · tickets only at face value, through the official resale</div>}
        <div className="hero-actions">
          <button className={mine ? 'pill-btn glass' : 'pill-btn light'} onClick={() => dispatch({ type: upcoming ? 'toggleGoing' : 'toggleAttended', concertId: concert.id })}>
            {mine && <IconCheck size={16} />}
            {upcoming ? (mine ? 'Going' : 'I’m going') : 'I was there'}
          </button>
          <button className="pill-btn glass" onClick={() => compose({ concertId: concert.id, artistId: artist.id })}>
            <IconPen size={15} /> {upcoming ? 'Meetup' : 'Memory'}
          </button>
          {upcoming && concert.url && (
            <a className="pill-btn glass" href={concert.url} target="_blank" rel="noopener noreferrer">
              Tickets ↗
            </a>
          )}
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
            ...(upcoming ? [{ id: 'tickets' as Tab, label: 'Tickets' }] : []),
            { id: 'chat', label: 'Chat' },
            { id: 'setlist', label: 'Setlist' },
            { id: 'people', label: 'Fans' },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      {tab === 'posts' && <FeedList items={posts.map((p) => ({ key: p.id, post: p, at: p.createdAt }))} empty="No posts yet. Share the first one." />}
      {tab === 'tickets' && upcoming && <TicketsTab concertId={concert.id} />}
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

// Ticket board: fans who need a ticket and fans with a spare find each other here.
// No selling on Fandome: they talk in private, then use the official name change or resale.
function TicketsTab({ concertId }: { concertId: string }) {
  const { state, dispatch, me, userById } = useStore()
  const toast = useToast()
  const nav = useNavigate()
  const [kind, setKind] = useState<'need' | 'spare'>('need')
  const [qty, setQty] = useState(1)
  const [note, setNote] = useState('')
  const [face, setFace] = useState(false)
  const [reporting, setReporting] = useState<string | null>(null)
  const list = state.tickets.filter((t) => t.concertId === concertId && !t.closed)
  const mine = list.find((t) => t.userId === me?.id)
  const guest = !me || me.handle === 'guest'
  const can = !guest && !mine && (kind === 'need' || face)
  const row = (k: 'need' | 'spare') => list.filter((t) => t.kind === k)
  return (
    <div className="tickets">
      <div className="ticket-rules">
        <strong>How it works</strong>
        <span className="small">
          Fandome only helps fans find each other: we don’t sell, hold or check tickets and we don’t handle payments. Pass tickets on <b>at face value or less</b> (in Italy reselling above face value
          is illegal) and use the <b>official name change or fan-to-fan resale</b> of the ticket seller: many big concerts have named tickets. Never pay by gift card, crypto or bank transfer to strangers.
          Meet only in public places.{' '}
          <Link to="/terms">Rules</Link>
        </span>
      </div>

      {mine ? (
        <div className="ticket-mine">
          <span className="grow">
            <strong>Your listing</strong>
            <span className="muted small block">
              {mine.kind === 'spare' ? 'You have' : 'You’re looking for'} {mine.qty} {mine.qty === 1 ? 'ticket' : 'tickets'}
            </span>
          </span>
          <button className="pill-btn glass small" onClick={() => (dispatch({ type: 'closeListing', id: mine.id }), toast('Listing closed'))}>
            {mine.kind === 'spare' ? 'Gone · close' : 'Found one · close'}
          </button>
        </div>
      ) : guest ? (
        <p className="muted small center">
          <Link to="/welcome" className="tag">
            Create your profile
          </Link>{' '}
          to post on the ticket board.
        </p>
      ) : (
        <div className="ticket-form">
          <div className="seg small" role="tablist">
            {(['need', 'spare'] as const).map((k) => (
              <button key={k} className={kind === k ? 'seg-btn solid' : 'seg-btn'} onClick={() => setKind(k)}>
                <span className="seg-label">{k === 'need' ? 'I’m looking' : 'I have spare'}</span>
              </button>
            ))}
          </div>
          <div className="ticket-qty">
            <span className="small">How many?</span>
            {[1, 2, 3, 4].map((n) => (
              <button key={n} className={qty === n ? 'qty on' : 'qty'} onClick={() => setQty(n)}>
                {n}
              </button>
            ))}
          </div>
          <input value={note} onChange={(e) => setNote(e.target.value)} maxLength={200} placeholder={kind === 'need' ? 'Seat preference, how you’d meet… (optional)' : 'Seats, section… no prices above face value (optional)'} />
          {kind === 'spare' && (
            <label className="ob-agree">
              <input type="checkbox" checked={face} onChange={(e) => setFace(e.target.checked)} />
              <span>I’ll pass them on at face value or less, as a private fan, through the official name change or resale.</span>
            </label>
          )}
          <div className="row-end">
            <button
              className="pill-btn ink"
              disabled={!can}
              onClick={() => {
                dispatch({ type: 'addListing', id: newId(), concertId, kind, qty, note, at: Date.now(), faceValue: face })
                setNote('')
                toast('Posted on the ticket board')
              }}
            >
              Post
            </button>
          </div>
        </div>
      )}

      {(['spare', 'need'] as const).map((k) => (
        <section key={k}>
          <div className="section-head">
            <h2>{k === 'spare' ? 'Spare tickets' : 'Looking for tickets'}</h2>
          </div>
          {row(k).length ? (
            row(k).map((t) => {
              const u = userById(t.userId)
              const me2 = t.userId === me?.id
              return (
                <div key={t.id} className="ticket-row">
                  <Avatar user={u} size={40} />
                  <span className="grow">
                    <strong>
                      {u?.name} · {t.qty} {t.qty === 1 ? 'ticket' : 'tickets'}
                    </strong>
                    {t.note && <span className="small block">{t.note}</span>}
                    <span className="muted small block">{timeAgo(t.at)}</span>
                  </span>
                  {!me2 && (
                    <span className="ticket-actions">
                      <button className="pill-btn ink small" disabled={guest} onClick={() => nav(`/messages/${u?.handle}?about=${t.id}`)}>
                        Message
                      </button>
                      <button className="icon-btn" aria-label="Report listing" onClick={() => setReporting(t.id)}>
                        <IconFlag size={16} />
                      </button>
                    </span>
                  )}
                </div>
              )
            })
          ) : (
            <p className="muted small">{k === 'spare' ? 'No spare tickets yet.' : 'Nobody is looking yet.'}</p>
          )}
        </section>
      ))}
      {reporting && <ReportModal target={{ kind: 'ticket', id: reporting }} what="listing" onClose={() => setReporting(null)} />}
    </div>
  )
}
