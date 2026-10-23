import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/store'
import { exportMyData } from '../store/reducer'

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
