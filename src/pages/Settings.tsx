import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/store'
import { useState } from 'react'
import { exportMyData, isAdmin, isModerator, pagesManagedBy, reportsFor } from '../store/reducer'
import { Link } from 'react-router-dom'
import { Avatar } from '../components/ui'
import * as spotify from '../lib/spotify'
import { useToast } from '../components/Toast'
import { setConsent, useConsent } from '../lib/prefs'
import { MyReports } from '../components/Moderation'

export default function Settings() {
  const { state, dispatch } = useStore()
  const nav = useNavigate()
  // Two taps instead of confirm(): iOS home-screen apps can block native dialogs.
  const [armed, setArmed] = useState(false)

  const download = () => {
    const blob = new Blob([JSON.stringify(exportMyData(state), null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'fandome-my-data.json'
    a.click()
    URL.revokeObjectURL(a.href)
  }

  return (
    <>
      <header className="hello">
        <div className="eyebrow">Settings</div>
        <h1 className="display">Your <span className="display-strong">space</span></h1>
      </header>
      <PagesCard />
      <PrivacyCard />
      <ModerationCard />
      <ReportsCard />
      <SpotifyCard />
      <section className="card">
        <h3>Your data</h3>
        <p className="muted small">Your posts, profile and likes belong to you. Download them any time.</p>
        <button className="pill-btn glass" onClick={download}>
          Export my data (JSON)
        </button>
      </section>
      <section className="card">
        <h3>Community rules</h3>
        <ol className="rules">
          <li>Critique the work or the opinion, never attack the person.</li>
          <li>Don’t share other people’s private information.</li>
          <li>Don’t pretend to be an artist, staff, promoter, venue or Fandome.</li>
          <li>Post only what you have the right to share.</li>
          <li>Tickets, sales and meetups follow specific safety rules.</li>
        </ol>
      </section>
      <section className="card">
        <h3>About this prototype</h3>
        <p className="muted small">
          Fandome is an independent fan community. Artist names identify topics only; there is no affiliation with, authorisation or sponsorship by any artist or rights holder. All data in
          this prototype is demo data stored only in your browser. Future concert dates are fictional.
        </p>
        <button
          className={armed ? 'pill-btn danger-solid' : 'pill-btn glass danger'}
          onClick={() => {
            if (!armed) {
              setArmed(true)
              setTimeout(() => setArmed(false), 4000)
              return
            }
            dispatch({ type: 'reset', now: Date.now() })
            nav('/')
          }}
        >
          {armed ? 'Tap again to reset everything' : 'Reset demo'}
        </button>
        {armed && <p className="muted small">This deletes your profile and posts from this browser and starts again as a guest.</p>}
      </section>
    </>
  )
}

// Spotify connection for listening parties (Stationhead-style remote control).
function SpotifyCard() {
  const toast = useToast()
  const [clientId, setClientIdState] = useState(spotify.getClientId())
  const [connected, setConnected] = useState(spotify.isConnected())
  const redirect = spotify.redirectUri()
  const builtIn = Boolean(spotify.builtInClientId())
  const save = () => {
    spotify.setClientId(clientId)
    toast(clientId.trim() ? 'Client ID saved' : 'Client ID removed')
  }
  return (
    <section className="card">
      <div className="row-between">
        <h3>Spotify</h3>
        <span className="soft-chip">{connected ? 'Connected' : 'Not connected'}</span>
      </div>
      <p className="muted small">
        Listening parties play each song in your own Spotify app, in sync with the room. Fandome never streams audio. Requires Spotify Premium.
      </p>
      {!builtIn && (
        <>
      <p className="small"><strong>One-time setup for the site owner</strong> (visitors never see this once the Client ID is built in):</p>
      <ol className="rules small">
        <li>
          Open <a className="tag" href="https://developer.spotify.com/dashboard" target="_blank" rel="noreferrer">developer.spotify.com/dashboard</a> and create an app (free).
        </li>
        <li>
          Add this Redirect URI: <code className="code">{redirect}</code>
        </li>
        <li>Tick “Web API”, save, then paste the app’s Client ID below.</li>
      </ol>
      <div className="row-field">
        <input value={clientId} onChange={(e) => setClientIdState(e.target.value)} placeholder="Spotify Client ID" aria-label="Spotify Client ID" />
        <button className="pill-btn glass" onClick={save}>
          Save
        </button>
      </div>
        </>
      )}
      <div className="row-end">
        {connected ? (
          <button
            className="pill-btn glass"
            onClick={() => {
              spotify.disconnect()
              setConnected(false)
              toast('Spotify disconnected')
            }}
          >
            Disconnect
          </button>
        ) : (
          <button
            className="pill-btn ink"
            disabled={!clientId.trim()}
            onClick={() => {
              spotify.setClientId(clientId)
              void spotify.login('#/party/party-confessions')
            }}
          >
            Connect Spotify
          </button>
        )}
      </div>
    </section>
  )
}

// Pages (websites, fan clubs…) the user runs from their personal account.
function PagesCard() {
  const { state, me } = useStore()
  if (!me) return null
  const pages = pagesManagedBy(state, me.id)
  return (
    <section className="card">
      <h3>Your pages</h3>
      <p className="muted small">Run a fan website, club or podcast as its own account. You manage it from this personal profile and can invite other admins.</p>
      {pages.length > 0 && (
        <div className="list">
          {pages.map((p) => (
            <Link key={p.id} to={`/pages/${p.handle}/manage`} className="row-item">
              <Avatar user={p} size={36} />
              <span className="grow">
                <strong>{p.name}</strong>
                <span className="muted small block">
                  @{p.handle} · {p.page?.members.find((m) => m.userId === me.id)?.role}
                </span>
              </span>
              <span className="muted small">Manage</span>
            </Link>
          ))}
        </div>
      )}
      <div className="row-end">
        <Link to="/pages/new" className="pill-btn ink">
          Create a page
        </Link>
      </div>
    </section>
  )
}

// Embedded posts (YouTube, X, Instagram, TikTok, music players): tap to load, or load right away.
function PrivacyCard() {
  const consent = useConsent()
  const on = consent?.media === true
  return (
    <section className="card">
      <div className="row-between">
        <h3>Privacy & embedded media</h3>
        <button className={on ? 'switch on' : 'switch'} role="switch" aria-checked={on} aria-label="Load videos and posts from other platforms automatically" onClick={() => setConsent(!on)}>
          <i />
        </button>
      </div>
      <p className="muted small">
        {on
          ? 'Videos, music players and posts from YouTube, Spotify, Instagram and other platforms open already expanded. Those companies may set cookies and see your IP address.'
          : 'Videos, music players and posts from other platforms stay closed until you tap them, so those companies learn nothing about you just for scrolling.'}
        {consent && ` Choice saved on ${new Date(consent.at).toLocaleDateString('en-GB')}.`}
      </p>
      <p className="small legal-links">
        <Link to="/privacy">Privacy policy</Link> · <Link to="/terms">Terms & community rules</Link>
      </p>
    </section>
  )
}

function ReportsCard() {
  const { state, me } = useStore()
  if (!me || !state.reports.some((r) => r.by === me.id)) return null
  return (
    <section className="card">
      <MyReports />
    </section>
  )
}

// Moderation: queue for moderators and the site admin; the admin role is never shown publicly.
function ModerationCard() {
  const { state, dispatch, me } = useStore()
  if (!me || me.handle === 'guest') return null
  const admin = isAdmin(state)
  const mod = isModerator(me)
  const open = reportsFor(state, me.id).length
  return (
    <section className="card">
      <h3>Moderation</h3>
      {admin || mod ? (
        <div className="row-between">
          <span className="muted small">{open ? `${open} open ${open === 1 ? 'report' : 'reports'} waiting` : 'Nothing waiting right now.'}</span>
          <Link to="/mod" className="pill-btn ink small">
            Open queue
          </Link>
        </div>
      ) : (
        <p className="muted small">Moderators are fans who help keep a fandom safe. You can apply from your profile.</p>
      )}
      <div className="row-between admin-row">
        <span className="small">
          <strong>Admin tools on this device</strong>
          <span className="muted block">Prototype only: lets whoever runs the site review requests and appeals. Never shown to other people.</span>
        </span>
        <button className={admin ? 'switch on' : 'switch'} role="switch" aria-checked={admin} aria-label="Admin tools" onClick={() => dispatch({ type: 'setAdmin', on: !admin })}>
          <i />
        </button>
      </div>
    </section>
  )
}
