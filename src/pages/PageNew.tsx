import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { newId, useStore } from '../store/store'
import { useToast } from '../components/Toast'
import { IconArrowLeft } from '../components/icons'

export const PAGE_CATEGORIES = ['Fan website', 'Fan club', 'Podcast', 'Fan magazine', 'Shop', 'Other']
const COLORS = ['#7a8cff', '#e8457c', '#f0a43a', '#3ab5f0', '#5fd38d', '#9b7cf0']

export function normaliseUrl(input: string) {
  const v = input.trim()
  if (!v) return ''
  return /^https?:\/\//i.test(v) ? v : `https://${v}`
}

// Create a Page from your personal account. You become its owner; the page
// has no password of its own.
export default function PageNew() {
  const { state, dispatch, me } = useStore()
  const toast = useToast()
  const nav = useNavigate()
  const [name, setName] = useState('')
  const [handle, setHandle] = useState('')
  const [website, setWebsite] = useState('')
  const [category, setCategory] = useState(PAGE_CATEGORIES[0])
  const [bio, setBio] = useState('')
  if (!me) return null

  if (me.handle === 'guest') {
    return (
      <div className="hello">
        <div className="eyebrow">Pages</div>
        <h1 className="display">Create your profile first</h1>
        <p className="muted">A page is always run from a personal account, so you’ll need one.</p>
        <Link to="/welcome" className="pill-btn ink">
          Create profile
        </Link>
      </div>
    )
  }

  const cleanHandle = handle.toLowerCase().replace(/[^a-z0-9_.]/g, '')
  const taken = state.users.some((u) => u.handle === cleanHandle)
  let url = ''
  try {
    url = website ? new URL(normaliseUrl(website)).toString() : ''
  } catch {
    url = ''
  }
  const can = name.trim().length > 1 && cleanHandle.length >= 3 && !taken && Boolean(url)

  const create = () => {
    if (!can) return
    const id = `pg-${newId()}`
    dispatch({
      type: 'createPage',
      id,
      handle: cleanHandle,
      name: name.trim(),
      website: url,
      category,
      bio: bio.trim(),
      color: COLORS[cleanHandle.length % COLORS.length],
      verifyCode: `fdm-${newId()}${newId()}`,
      at: Date.now(),
    })
    toast('Page created')
    nav(`/pages/${cleanHandle}/manage`)
  }

  return (
    <>
      <header className="page-head row-between">
        <button className="glass-circle" onClick={() => nav(-1)} aria-label="Back">
          <IconArrowLeft size={18} />
        </button>
        <span />
      </header>
      <div className="hello">
        <div className="eyebrow">New page</div>
        <h1 className="display">
          A home for your <span className="display-strong">site</span>
        </h1>
        <p className="muted">For fan websites, clubs, podcasts and zines. You run it from your personal account and can add other admins.</p>
      </div>
      <div className="glass-card form">
        <label>
          <span>Page name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ray of Light Archive" />
        </label>
        <label>
          <span>Handle</span>
          <input value={handle} onChange={(e) => setHandle(e.target.value)} placeholder="rayoflightarchive" />
          {taken && <span className="field-error">That handle is taken</span>}
        </label>
        <label>
          <span>Website</span>
          <input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="yoursite.com" inputMode="url" />
        </label>
        <label>
          <span>Type</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {PAGE_CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          <span>About</span>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} placeholder="What the site is about" />
        </label>
        <p className="muted small">Don’t present the page as the artist or their official team. To prove the website is yours, you’ll add a short code to it after creating the page.</p>
        <div className="row-end">
          <button className="pill-btn ink" disabled={!can} onClick={create}>
            Create page
          </button>
        </div>
      </div>
    </>
  )
}
