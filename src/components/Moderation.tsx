import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Post, Report, ReportReason, User } from '../data/types'
import { newId, useStore } from '../store/store'
import { isAdmin, isModerator, recentlyActive, reportsFor } from '../store/reducer'
import { artistById, timeAgo } from '../lib/util'
import { useToast } from './Toast'
import { ArtistDisc, Avatar, Modal, Tabs, useModalClose } from './ui'
import { PostCard } from './PostCard'
import { IconShield } from './icons'

export const REASONS: { id: ReportReason; label: string; hint: string }[] = [
  { id: 'spam', label: 'Spam or scam', hint: 'Fake tickets, ads, repeated posts' },
  { id: 'harassment', label: 'Harassment or bullying', hint: 'Attacks on a person' },
  { id: 'hate', label: 'Hate speech', hint: 'Against a group or identity' },
  { id: 'violence', label: 'Threats or violence', hint: 'Including self-harm' },
  { id: 'sexual', label: 'Sexual content', hint: 'Anything involving minors is reported to the police' },
  { id: 'privacy', label: 'Private information', hint: 'Addresses, phone numbers, photos without consent' },
  { id: 'copyright', label: 'Copyright', hint: 'Photos, videos or music that aren’t theirs' },
  { id: 'impersonation', label: 'Impersonation', hint: 'Pretending to be an artist, staff or someone else' },
  { id: 'misinformation', label: 'False information', hint: 'Fake news about artists or events' },
  { id: 'offtopic', label: 'Not about music', hint: 'Fandome is only about music and artists' },
  { id: 'other', label: 'Something else', hint: 'Tell us more below' },
]
export const reasonLabel = (r: ReportReason) => REASONS.find((x) => x.id === r)?.label ?? r

// Moderator badge. Shows which fandoms they look after. The admin never gets one.
export function ModBadge({ user, label }: { user?: User; label?: boolean }) {
  if (!isModerator(user)) return null
  const names = user!.mod!.artistIds.map((a) => artistById(a)?.name).filter(Boolean)
  const title = `Moderator · ${names.join(', ')}`
  return label ? (
    <span className="mod-badge labeled" title={title}>
      <IconShield size={15} filled /> Moderator · {names.join(', ')}
    </span>
  ) : (
    <span className="mod-badge" title={title} aria-label={title}>
      <IconShield size={15} filled />
    </span>
  )
}

// "Report": notice and action (EU DSA art. 16).
export function ReportModal({ target, onClose, what }: { target: Report['target']; onClose: () => void; what: string }) {
  return (
    <Modal title={`Report ${what}`} onClose={onClose}>
      <ReportForm target={target} />
    </Modal>
  )
}
function ReportForm({ target }: { target: Report['target'] }) {
  const { state, dispatch, me } = useStore()
  const close = useModalClose()
  const toast = useToast()
  const [reason, setReason] = useState<ReportReason | null>(null)
  const [note, setNote] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [faith, setFaith] = useState(false)
  if (!me) return null
  const guest = me.handle === 'guest'
  const already = state.reports.some((r) => r.by === me.id && r.status === 'open' && r.target.kind === target.kind && r.target.id === target.id)
  if (already) return <p className="muted">You already reported this. We’ll let you know what we decide.</p>
  // Without a profile the law asks for a name and email, except for child sexual abuse (anonymous).
  const needContact = guest && reason !== 'sexual'
  const contactOk = !needContact || (name.trim().length > 1 && /.+@.+\..+/.test(email))
  const can = reason && faith && contactOk && (reason !== 'other' || note.trim())
  return (
    <div className="report-form">
      <p className="muted small" style={{ marginTop: 0 }}>
        Anyone can report, with or without a profile. The person you report won’t know who you are.
      </p>
      <div className="report-reasons" role="radiogroup">
        {REASONS.map((r) => (
          <button key={r.id} role="radio" aria-checked={reason === r.id} className={reason === r.id ? 'report-reason on' : 'report-reason'} onClick={() => setReason(r.id)}>
            <strong>{r.label}</strong>
            <span className="muted small">{r.hint}</span>
          </button>
        ))}
      </div>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} maxLength={1000} placeholder={reason === 'other' ? 'Explain what’s wrong (required)' : 'Why is it a problem? If you think it’s illegal, say which law (optional)'} />
      {guest && (
        <div className="report-contact">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder={needContact ? 'Your name' : 'Your name (optional)'} aria-label="Your name" autoComplete="name" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={needContact ? 'Your email' : 'Your email (optional)'} aria-label="Your email" type="email" inputMode="email" autoComplete="email" />
          <span className="muted small">{reason === 'sexual' ? 'You can report child sexual abuse anonymously.' : 'Used only to handle this report and tell you the outcome.'}</span>
        </div>
      )}
      <label className="ob-agree">
        <input type="checkbox" checked={faith} onChange={(e) => setFaith(e.target.checked)} />
        <span>I believe in good faith that this report is accurate and complete.</span>
      </label>
      <p className="report-law small">
        Fandome is a non-commercial community run by volunteer fans. We review every report carefully, fairly and as quickly as we can, usually within 72 hours; threats to someone’s safety and abuse of minors come first. We’ll tell you what we decide (EU Digital Services Act, art. 16). In an emergency call 112.{' '}
        <Link to="/terms" onClick={() => close()}>
          How moderation works
        </Link>
      </p>
      <div className="row-end">
        <button
          className="pill-btn ink"
          disabled={!can}
          onClick={() => {
            dispatch({ type: 'report', id: newId(), at: Date.now(), target, reason: reason!, note, goodFaith: faith, contact: guest && email ? { name: name.trim(), email: email.trim() } : undefined })
            toast('Report received. We’ll let you know what we decide.')
            close()
          }}
        >
          Send report
        </button>
      </div>
    </div>
  )
}

// Your reports and what happened to them (DSA art. 16(5): the reporter is told the decision).
export function MyReports() {
  const { state, me } = useStore()
  if (!me) return null
  const mine = state.reports.filter((r) => r.by === me.id)
  if (!mine.length) return null
  return (
    <div className="my-reports">
      <span className="small">
        <strong>Your reports</strong>
      </span>
      {mine.slice(0, 5).map((r) => (
        <span key={r.id} className="my-report small">
          <span>
            {reasonLabel(r.reason)} · {r.target.kind} · {timeAgo(r.at)}
          </span>
          <span className={`my-report-status ${r.status}`}>{r.status === 'open' ? 'Under review' : r.status === 'removed' ? 'Action taken' : 'No rule broken'}</span>
        </span>
      ))}
    </div>
  )
}

// What the author of a removed post sees: the reason (DSA art. 17) and an appeal.
export function RemovedBanner({ post }: { post: Post }) {
  const { me } = useStore()
  const [appeal, setAppeal] = useState(false)
  const r = post.removed!
  const mine = me?.id === post.authorId
  return (
    <div className="removed-banner" onClick={(e) => e.stopPropagation()}>
      <strong>{mine ? 'Removed by moderators' : 'Removed · visible only to moderators and the author'}</strong>
      <span className="small">
        Rule broken: {reasonLabel(r.reason)}
        {r.note ? ` — ${r.note}` : ''} · {timeAgo(r.at)}
      </span>
      {mine && !r.appeal && (
        <button className="pill-btn glass small" onClick={() => setAppeal(true)}>
          Appeal this decision
        </button>
      )}
      {r.appeal?.status === 'pending' && <span className="small muted">Appeal sent · the site team will review it</span>}
      {r.appeal?.status === 'upheld' && <span className="small muted">Appeal reviewed: the post stays removed</span>}
      {appeal && <AppealModal post={post} onClose={() => setAppeal(false)} />}
    </div>
  )
}
function AppealModal({ post, onClose }: { post: Post; onClose: () => void }) {
  return (
    <Modal title="Appeal" onClose={onClose}>
      <AppealForm post={post} />
    </Modal>
  )
}
function AppealForm({ post }: { post: Post }) {
  const { dispatch } = useStore()
  const close = useModalClose()
  const toast = useToast()
  const [text, setText] = useState('')
  return (
    <>
      <p className="muted small" style={{ marginTop: 0 }}>
        Tell us why the post doesn’t break the rules. Someone who didn’t take the decision will review it.
      </p>
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} maxLength={1000} placeholder="Why should it come back?" autoFocus />
      <div className="row-end">
        <button
          className="pill-btn ink"
          disabled={!text.trim()}
          onClick={() => {
            dispatch({ type: 'appeal', postId: post.id, text, at: Date.now() })
            toast('Appeal sent')
            close()
          }}
        >
          Send appeal
        </button>
      </div>
    </>
  )
}

// Home: tell people when something of theirs was removed.
export function RemovedNotice() {
  const { state, me } = useStore()
  if (!me) return null
  const list = state.posts.filter((p) => p.authorId === me.id && p.removed && !p.removed.appeal)
  if (!list.length) return null
  return (
    <Link to={`/p/${list[0].id}`} className="dm-pause paused removed-notice">
      <span className="grow">
        <strong>{list.length === 1 ? 'One of your posts was removed' : `${list.length} of your posts were removed`}</strong>
        <span className="small block">See which rule it broke and appeal if you think it’s a mistake.</span>
      </span>
    </Link>
  )
}

// Own profile: apply to moderate one or more of your fandoms.
export function BecomeModCard() {
  const { state, dispatch, me } = useStore()
  const toast = useToast()
  const [open, setOpen] = useState(false)
  if (!me || me.handle === 'guest' || me.kind === 'page') return null
  const req = me.modRequest
  const mine = Object.keys(me.fanSince).filter((a) => !me.mod?.artistIds.includes(a))
  if (!mine.length) return null
  return (
    <section className="card become-mod">
      <div className="row-between">
        <span className="grow">
          <strong className="become-mod-title">
            <IconShield size={16} filled /> {isModerator(me) ? 'Moderate another fandom' : 'Become a moderator'}
          </strong>
          <span className="muted small block">
            {req?.status === 'pending'
              ? `Request sent for ${req.artistIds.map((a) => artistById(a)?.name).join(', ')} · waiting for review`
              : req?.status === 'declined'
                ? 'Your last request wasn’t approved. You can try again later.'
                : 'Help keep your fandom kind and safe. Moderators get a badge on their profile.'}
          </span>
        </span>
        {req?.status === 'pending' ? (
          <button className="pill-btn glass small" onClick={() => (dispatch({ type: 'cancelModRequest' }), toast('Request withdrawn'))}>
            Withdraw
          </button>
        ) : (
          <button className="pill-btn ink small" onClick={() => setOpen(true)}>
            Apply
          </button>
        )}
      </div>
      {open && (
        <Modal title="Become a moderator" onClose={() => setOpen(false)}>
          <ModRequestForm artistIds={mine} active={recentlyActive(state, me.id, Date.now())} />
        </Modal>
      )}
    </section>
  )
}
function ModRequestForm({ artistIds, active }: { artistIds: string[]; active: boolean }) {
  const { dispatch } = useStore()
  const close = useModalClose()
  const toast = useToast()
  const [picked, setPicked] = useState<string[]>(artistIds.slice(0, 1))
  const [reason, setReason] = useState('')
  const [ok, setOk] = useState(false)
  if (!active) return <p className="muted">Moderators need to be active members. Post, like, vote or share a story, then apply again.</p>
  return (
    <div className="report-form">
      <p className="muted small" style={{ marginTop: 0 }}>
        Which fandom do you want to look after?
      </p>
      <div className="artist-picker wrap">
        {artistIds.map((a) => {
          const on = picked.includes(a)
          return (
            <button key={a} type="button" className={on ? 'pick on' : 'pick'} style={{ ['--c' as string]: artistById(a)?.color }} aria-pressed={on} onClick={() => setPicked(on ? picked.filter((x) => x !== a) : [...picked, a])}>
              <ArtistDisc id={a} size={20} />
              {artistById(a)?.name}
            </button>
          )
        })}
      </div>
      <textarea value={reason} onChange={(e) => setReason(e.target.value)} rows={3} maxLength={500} placeholder="Why would you be a good moderator?" />
      <label className="ob-agree">
        <input type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} />
        <span>
          I’ll apply the <Link to="/terms">community rules</Link> fairly, explain every removal, and never moderate my own posts or reports.
        </span>
      </label>
      <div className="row-end">
        <button
          className="pill-btn ink"
          disabled={!picked.length || reason.trim().length < 10 || !ok}
          onClick={() => {
            dispatch({ type: 'requestMod', artistIds: picked, reason, at: Date.now() })
            toast('Request sent')
            close()
          }}
        >
          Send request
        </button>
      </div>
    </div>
  )
}

// Moderation queue (/mod): reports for moderators; requests, appeals and the team for the admin.
type QTab = 'reports' | 'requests' | 'appeals' | 'team'
export function ModQueue() {
  const { state, me } = useStore()
  const [tab, setTab] = useState<QTab>('reports')
  if (!me) return null
  const admin = isAdmin(state)
  if (!admin && !isModerator(me))
    return (
      <header className="hello">
        <div className="eyebrow">Moderation</div>
        <h1 className="display">Moderators only</h1>
        <p className="muted">You can apply to become a moderator from your profile.</p>
      </header>
    )
  const reports = reportsFor(state, me.id)
  const requests = state.users.filter((u) => u.modRequest?.status === 'pending')
  const appeals = state.posts.filter((p) => p.removed?.appeal?.status === 'pending')
  const team = state.users.filter((u) => isModerator(u))
  const tabs: { id: QTab; label: string }[] = [{ id: 'reports', label: `Reports ${reports.length || ''}`.trim() }]
  if (admin) tabs.push({ id: 'requests', label: `Requests ${requests.length || ''}`.trim() }, { id: 'appeals', label: `Appeals ${appeals.length || ''}`.trim() }, { id: 'team', label: 'Moderators' })
  return (
    <>
      <header className="hello">
        <div className="eyebrow">Moderation</div>
        <h1 className="display">
          Keep it <span className="display-strong">kind</span>
        </h1>
        <p className="muted small">
          {admin ? 'Site team view.' : `You moderate ${me.mod!.artistIds.map((a) => artistById(a)?.name).join(', ')}.`} Every removal tells the author which rule it broke.
        </p>
      </header>
      <div className="tabs-sticky">
        <Tabs tabs={tabs} value={tab} onChange={setTab} />
      </div>
      {tab === 'reports' && (reports.length ? reports.map((r) => <ReportItem key={r.id} report={r} />) : <p className="empty">No open reports. Nice.</p>)}
      {tab === 'requests' && (requests.length ? requests.map((u) => <RequestItem key={u.id} user={u} />) : <p className="empty">No requests.</p>)}
      {tab === 'appeals' && (appeals.length ? appeals.map((p) => <AppealItem key={p.id} post={p} />) : <p className="empty">No appeals.</p>)}
      {tab === 'team' && (team.length ? team.map((u) => <TeamItem key={u.id} user={u} />) : <p className="empty">No moderators yet.</p>)}
    </>
  )
}

function ReportItem({ report }: { report: Report }) {
  const { state, dispatch, userById } = useStore()
  const toast = useToast()
  const [reason, setReason] = useState<ReportReason>(report.reason)
  const [note, setNote] = useState('')
  const count = state.reports.filter((r) => r.status === 'open' && r.target.kind === report.target.kind && r.target.id === report.target.id).length
  const post = report.target.kind === 'post' ? state.posts.find((p) => p.id === report.target.id) : undefined
  const user = report.target.kind === 'user' || report.target.kind === 'dm' ? userById(report.target.id) : undefined
  const story = report.target.kind === 'story' ? state.stories.find((s) => s.id === report.target.id) : undefined
  const ticket = report.target.kind === 'ticket' ? state.tickets.find((t) => t.id === report.target.id && !t.closed) : undefined
  const itemOwner = report.target.kind === 'item' ? state.users.find((u) => u.collection?.some((i) => i.id === report.target.id)) : undefined
  const item = itemOwner?.collection?.find((i) => i.id === report.target.id)
  const msgs = report.target.kind === 'dm' ? state.dms.filter((m) => m.from === report.target.id && m.to === report.by).slice(-3) : []
  const act = (action: 'remove' | 'dismiss') => {
    dispatch({ type: 'resolveReport', reportId: report.id, action, reason, note, at: Date.now() })
    toast(action === 'remove' ? (report.target.kind === 'post' ? 'Removed · the author has been told why' : 'Done') : 'Kept · report closed')
  }
  return (
    <section className="card report-item">
      <div className="row-between">
        <span className="report-tag">{reasonLabel(report.reason)}</span>
        <span className="muted small">
          {count > 1 ? `${count} reports · ` : ''}
          {timeAgo(report.at)}
        </span>
      </div>
      {report.note && <p className="report-note">“{report.note}”</p>}
      {post && <PostCard post={post} embedded />}
      {user && (
        <Link to={`/u/${user.handle}`} className="row-item">
          <Avatar user={user} size={36} />
          <span className="grow">
            <strong>{user.name}</strong>
            <span className="muted small block">
              @{user.handle}
              {report.target.kind === 'dm' ? ' · reported from a private chat' : ''}
            </span>
          </span>
        </Link>
      )}
      {msgs.map((m) => (
        <p key={m.id} className="report-note">
          {m.text ?? 'Voice message'}
        </p>
      ))}
      {story && <p className="report-note">Story: {story.text ?? story.kind}</p>}
      {ticket && (
        <p className="report-note">
          Ticket listing by {userById(ticket.userId)?.name}: {ticket.kind === 'spare' ? 'spare' : 'looking for'} {ticket.qty} · {ticket.note ?? 'no note'}
        </p>
      )}
      {item && (
        <p className="report-note">
          Collection piece by {itemOwner?.name}: {item.title} ({item.format}){item.note ? ` · ${item.note}` : ''}
        </p>
      )}
      {!post && !user && !story && !ticket && !item && <p className="muted small">The content is no longer available.</p>}
      {report.target.kind === 'post' && post && (
        <div className="report-decide">
          <select value={reason} onChange={(e) => setReason(e.target.value as ReportReason)} aria-label="Rule broken">
            {REASONS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
          <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note to the author (optional)" maxLength={300} />
        </div>
      )}
      <div className="row-end report-actions">
        <button className="pill-btn glass small" onClick={() => act('dismiss')}>
          Keep it
        </button>
        {(post || story || ticket || item) && (
          <button className="pill-btn danger-solid small" onClick={() => act('remove')}>
            Remove
          </button>
        )}
        {user && (
          <button className="pill-btn ink small" onClick={() => act('remove')}>
            Mark handled
          </button>
        )}
      </div>
    </section>
  )
}

function RequestItem({ user }: { user: User }) {
  const { dispatch } = useStore()
  const toast = useToast()
  const req = user.modRequest!
  return (
    <section className="card">
      <div className="row-item">
        <Avatar user={user} size={40} />
        <span className="grow">
          <strong>{user.name}</strong>
          <span className="muted small block">
            @{user.handle} · wants to moderate {req.artistIds.map((a) => artistById(a)?.name).join(', ')}
          </span>
        </span>
      </div>
      <p className="report-note">“{req.reason}”</p>
      <div className="row-end report-actions">
        <button className="pill-btn glass small" onClick={() => (dispatch({ type: 'decideModRequest', userId: user.id, approve: false, at: Date.now() }), toast('Declined'))}>
          Decline
        </button>
        <button className="pill-btn ink small" onClick={() => (dispatch({ type: 'decideModRequest', userId: user.id, approve: true, at: Date.now() }), toast(`${user.name} is now a moderator`))}>
          Approve
        </button>
      </div>
    </section>
  )
}

function AppealItem({ post }: { post: Post }) {
  const { dispatch } = useStore()
  const toast = useToast()
  return (
    <section className="card report-item">
      <span className="report-tag">Removed for: {reasonLabel(post.removed!.reason)}</span>
      <PostCard post={{ ...post, removed: undefined }} embedded />
      <p className="report-note">Appeal: “{post.removed!.appeal!.text}”</p>
      <div className="row-end report-actions">
        <button className="pill-btn glass small" onClick={() => (dispatch({ type: 'decideAppeal', postId: post.id, restore: false }), toast('Kept removed'))}>
          Keep removed
        </button>
        <button className="pill-btn ink small" onClick={() => (dispatch({ type: 'decideAppeal', postId: post.id, restore: true }), toast('Post restored'))}>
          Restore post
        </button>
      </div>
    </section>
  )
}

function TeamItem({ user }: { user: User }) {
  const { dispatch } = useStore()
  return (
    <section className="card">
      <div className="row-item">
        <Avatar user={user} size={40} />
        <span className="grow">
          <strong>{user.name}</strong>
          <span className="muted small block">
            {user.mod!.artistIds.map((a) => artistById(a)?.name).join(', ')} · since {new Date(user.mod!.since).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
          </span>
        </span>
        <button className="pill-btn glass small" onClick={() => dispatch({ type: 'removeMod', userId: user.id })}>
          Remove role
        </button>
      </div>
    </section>
  )
}
