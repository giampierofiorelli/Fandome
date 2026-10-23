import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { artists, starterPacks } from '../data/seed'
import { useStore } from '../store/store'
import { Avatar } from '../components/ui'

// Onboarding: pick your fandoms, then follow a Bluesky-style starter pack
// so the feed is never empty on day one.
export default function Onboarding() {
  const { dispatch, userById, me } = useStore()
  const nav = useNavigate()
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [handle, setHandle] = useState('')
  const [location, setLocation] = useState('')
  const [picked, setPicked] = useState<string[]>([])
  const packs = starterPacks.filter((p) => picked.includes(p.artistId))
  const packUsers = Array.from(new Set(packs.flatMap((p) => p.userIds)))
  const [follow, setFollow] = useState<string[] | null>(null)
  const following = follow ?? packUsers

  const cleanHandle = handle.toLowerCase().replace(/[^a-z0-9_.]/g, '')

  if (me && step === 0) {
    return (
      <div className="onboard">
        <h1>✦ Fandome</h1>
        <p>You’re already in, @{me.handle}.</p>
        <button className="btn primary" onClick={() => nav('/')}>
          Go to your feed
        </button>
      </div>
    )
  }

  return (
    <div className="onboard">
      <div className="steps">{[0, 1, 2].map((i) => <span key={i} className={i <= step ? 'on' : ''} />)}</div>
      {step === 0 && (
        <>
          <h1>✦ Fandome</h1>
          <p className="lead">The social network for music fans. Your fan story, your people, every show.</p>
          <p className="muted small">Independent fan community — not affiliated with any artist.</p>
          <label>
            Display name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Giulia" />
          </label>
          <label>
            Handle
            <input value={handle} onChange={(e) => setHandle(e.target.value)} placeholder="giulia_vogue" />
          </label>
          <label>
            City (approximate, for local meetups)
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Milan, IT" />
          </label>
          <button className="btn primary wide" disabled={!name.trim() || cleanHandle.length < 3} onClick={() => setStep(1)}>
            Continue
          </button>
        </>
      )}
      {step === 1 && (
        <>
          <h2>Who are you a fan of?</h2>
          <p className="muted">Pick at least one. You can join more rooms later.</p>
          <div className="artist-grid">
            {artists.map((a) => {
              const on = picked.includes(a.id)
              return (
                <button
                  key={a.id}
                  className={on ? 'artist-tile on' : 'artist-tile'}
                  style={{ borderColor: on ? a.color : undefined, background: on ? `${a.color}22` : undefined }}
                  onClick={() => setPicked(on ? picked.filter((x) => x !== a.id) : [...picked, a.id])}
                >
                  <span className="dot big" style={{ background: a.color }} />
                  <strong>{a.name}</strong>
                  <span className="muted small">{a.tagline}</span>
                </button>
              )
            })}
          </div>
          <div className="row-between">
            <button className="btn" onClick={() => setStep(0)}>
              Back
            </button>
            <button className="btn primary" disabled={!picked.length} onClick={() => setStep(2)}>
              Continue
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <h2>Your starter pack</h2>
          <p className="muted">Fans curated by the community. Follow them so your feed starts alive.</p>
          {packs.map((p) => (
            <div key={p.id} className="card">
              <h3>{p.title}</h3>
              <p className="muted small">Curated by @{userById(p.curatorId)?.handle}</p>
              {p.userIds.map((id) => {
                const u = userById(id)
                const on = following.includes(id)
                return (
                  <div key={id} className="person-row">
                    <Avatar user={u} size={36} />
                    <div className="grow">
                      <strong>{u?.name}</strong> <span className="muted">@{u?.handle}</span>
                      <div className="muted small">{u?.bio}</div>
                    </div>
                    <button className={on ? 'btn small' : 'btn primary small'} onClick={() => setFollow(on ? following.filter((x) => x !== id) : [...following, id])}>
                      {on ? 'Following' : 'Follow'}
                    </button>
                  </div>
                )
              })}
            </div>
          ))}
          <div className="row-between">
            <button className="btn" onClick={() => setStep(1)}>
              Back
            </button>
            <button
              className="btn primary"
              onClick={() => {
                dispatch({ type: 'onboard', name: name.trim(), handle: cleanHandle, location: location.trim(), artistIds: picked, followIds: following })
                nav('/')
              }}
            >
              Start ({following.length} following)
            </button>
          </div>
        </>
      )}
    </div>
  )
}
