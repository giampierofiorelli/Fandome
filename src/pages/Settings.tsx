import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/store'
import { useState } from 'react'
import { exportMyData } from '../store/reducer'
import * as spotify from '../lib/spotify'
import { useToast } from '../components/Toast'

export default function Settings() {
  const { state, dispatch } = useStore()
  const nav = useNavigate()

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
          className="pill-btn glass danger"
          onClick={() => {
            if (confirm('Reset the demo? This deletes your profile and posts from this browser and starts again as a guest.')) {
              dispatch({ type: 'reset', now: Date.now() })
              nav('/')
            }
          }}
        >
          Reset demo
        </button>
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
