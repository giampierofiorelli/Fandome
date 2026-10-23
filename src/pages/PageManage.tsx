import { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { newId, useStore } from '../store/store'
import { canCreatePage, canManagePage } from '../store/reducer'
import { useToast } from '../components/Toast'
import { Avatar } from '../components/ui'
import { IconArrowLeft, IconCheck, IconLink, IconX } from '../components/icons'
import { prettyUrl } from '../lib/media'
import { PAGE_CATEGORIES, normaliseUrl } from './PageNew'

export const inviteUrl = (code: string) => `${location.origin}${location.pathname}#/invite/${code}`

// Admin area of a Page: details, website verification, team and invites.
export default function PageManage() {
  const { handle } = useParams()
  const { state, dispatch, me, userById } = useStore()
  const toast = useToast()
  const nav = useNavigate()
  const page = state.users.find((u) => u.handle === handle && u.kind === 'page')
  const [name, setName] = useState(page?.name ?? '')
  const [bio, setBio] = useState(page?.bio ?? '')
  const [website, setWebsite] = useState(page?.page?.website ?? '')
  const [category, setCategory] = useState(page?.page?.category ?? PAGE_CATEGORIES[0])
  const [who, setWho] = useState('')
  if (!me || !page?.page) return <Navigate to="/" replace />
  if (!canManagePage(state, page.id, me.id)) return <Navigate to={`/u/${page.handle}`} replace />

  const info = page.page
  const myRole = info.members.find((m) => m.userId === me.id)?.role
  const pending = info.invites.filter((i) => i.status === 'pending')
  const q = who.trim().replace(/^@/, '').toLowerCase()
  const matches = q
    ? state.users.filter((u) => u.kind !== 'page' && u.handle !== 'guest' && u.id !== 'u-mod' && !info.members.some((m) => m.userId === u.id) && `${u.name} ${u.handle}`.toLowerCase().includes(q)).slice(0, 4)
    : []
  const host = prettyUrl(info.website).host

  const copy = async (text: string, msg: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast(msg)
    } catch {
      prompt('Copy', text)
    }
  }
  const inviteUser = (userId: string) => {
    dispatch({ type: 'invitePageAdmin', pageId: page.id, inviteId: newId(), code: `${newId()}${newId()}`, toUserId: userId, at: Date.now() })
    setWho('')
    toast(`Invite sent to @${userById(userId)?.handle}`)
  }
  const createLink = () => {
    const code = `${newId()}${newId()}`
    dispatch({ type: 'invitePageAdmin', pageId: page.id, inviteId: newId(), code, at: Date.now() })
    void copy(inviteUrl(code), 'Invite link copied')
  }

  return (
    <>
      <header className="page-head row-between">
        <button className="glass-circle" onClick={() => nav(-1)} aria-label="Back">
          <IconArrowLeft size={18} />
        </button>
        <Link to={`/u/${page.handle}`} className="pill-btn glass small">
          View page
        </Link>
      </header>
      <div className="hello">
        <div className="eyebrow">Manage page · you are {myRole}</div>
        <h1 className="display">{page.name}</h1>
      </div>

      <section className="card">
        <h3>Website verification</h3>
        {info.verification === 'verified' ? (
          <p className="ok-line">
            <IconCheck size={16} /> {host} is verified. Posts from this page show a verified Site badge.
          </p>
        ) : (
          <>
            <p className="muted small">Prove that {host} is yours (like Bluesky and LinkedIn do). Add one of these to the website, then ask us to check:</p>
            <div className="code-row">
              <code className="code block">{`<meta name="fandome-verification" content="${info.verifyCode}">`}</code>
              <button className="icon-btn" onClick={() => copy(`<meta name="fandome-verification" content="${info.verifyCode}">`, 'Copied')} aria-label="Copy meta tag">
                <IconLink size={15} />
              </button>
            </div>
            <p className="muted small">or a DNS TXT record on {host}:</p>
            <div className="code-row">
              <code className="code block">{`fandome-verification=${info.verifyCode}`}</code>
              <button className="icon-btn" onClick={() => copy(`fandome-verification=${info.verifyCode}`, 'Copied')} aria-label="Copy TXT record">
                <IconLink size={15} />
              </button>
            </div>
            <div className="row-end">
              <button className="pill-btn ink" disabled={info.verification === 'pending'} onClick={() => dispatch({ type: 'requestVerification', pageId: page.id })}>
                {info.verification === 'pending' ? 'Check requested' : 'I’ve added it, check now'}
              </button>
            </div>
            {info.verification === 'pending' && <p className="muted small">The check runs on Fandome’s servers. In this prototype it stays pending.</p>}
          </>
        )}
      </section>

      <section className="card">
        <h3>Team</h3>
        <p className="muted small">Admins post as the page and manage it from their own account. They never see each other’s private accounts.</p>
        <div className="list">
          {info.members.map((m) => {
            const u = userById(m.userId)
            if (!u) return null
            const canRemove = m.role !== 'owner' && (myRole === 'owner' || m.userId === me.id)
            return (
              <div key={m.userId} className="row-item">
                <Avatar user={u} size={36} />
                <span className="grow">
                  <strong>{u.name}</strong>
                  <span className="muted small block">
                    @{u.handle} · {m.role}
                  </span>
                </span>
                {canRemove && (
                  <button className="pill-btn glass small" onClick={() => dispatch({ type: 'removePageMember', pageId: page.id, userId: m.userId })}>
                    {m.userId === me.id ? 'Leave' : 'Remove'}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <h3 className="sub">Invite an admin</h3>
        <p className="muted small">Already on Fandome? Find them and they’ll get the invite in their app.</p>
        <input value={who} onChange={(e) => setWho(e.target.value)} placeholder="Search @handle or name" aria-label="Search people to invite" />
        {matches.length > 0 && (
          <div className="list suggestions">
            {matches.map((u) => (
              <div key={u.id} className="row-item">
                <Avatar user={u} size={32} />
                <span className="grow">
                  <strong>{u.name}</strong> <span className="muted small">@{u.handle}</span>
                </span>
                <button className="pill-btn ink small" onClick={() => inviteUser(u.id)} disabled={pending.some((i) => i.toUserId === u.id)}>
                  {pending.some((i) => i.toUserId === u.id) ? 'Invited' : 'Invite'}
                </button>
              </div>
            ))}
          </div>
        )}
        <p className="muted small">Not on Fandome yet? Send an invite link: they create their personal profile, then accept.</p>
        <button className="pill-btn glass" onClick={createLink}>
          <IconLink size={15} /> Create invite link
        </button>

        {pending.length > 0 && (
          <>
            <h3 className="sub">Pending invites</h3>
            <div className="list">
              {pending.map((i) => {
                const to = i.toUserId ? userById(i.toUserId) : undefined
                return (
                  <div key={i.id} className="row-item">
                    <span className="grow">
                      <strong>{to ? `@${to.handle}` : 'Invite link'}</strong>
                      <span className="muted small block">admin · waiting for them to accept</span>
                    </span>
                    {!to && (
                      <button className="icon-btn" onClick={() => copy(inviteUrl(i.code), 'Invite link copied')} aria-label="Copy invite link">
                        <IconLink size={15} />
                      </button>
                    )}
                    <button className="icon-btn" onClick={() => dispatch({ type: 'revokeInvite', pageId: page.id, inviteId: i.id })} aria-label="Cancel invite">
                      <IconX size={15} />
                    </button>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </section>

      <section className="card form">
        <h3>Details</h3>
        <label>
          <span>Name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <span>Website</span>
          <input value={website} onChange={(e) => setWebsite(e.target.value)} inputMode="url" />
        </label>
        <label>
          <span>Type</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {PAGE_CATEGORIES.map((c) => {
              const ok = c === page?.page?.category || (me ? canCreatePage(state, me.id, c, Date.now()) : false)
              return (
                <option key={c} disabled={!ok}>
                  {c}
                  {ok ? '' : ' · needs recent activity'}
                </option>
              )
            })}
          </select>
        </label>
        <label>
          <span>About</span>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} />
        </label>
        <p className="muted small">Changing the website removes verification until it’s checked again.</p>
        <div className="row-end">
          <button
            className="pill-btn ink"
            disabled={!name.trim()}
            onClick={() => {
              dispatch({ type: 'updatePage', pageId: page.id, name: name.trim(), bio: bio.trim(), website: normaliseUrl(website), category })
              toast('Saved')
            }}
          >
            Save
          </button>
        </div>
      </section>
    </>
  )
}
