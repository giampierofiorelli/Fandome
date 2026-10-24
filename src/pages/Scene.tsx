import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useStore } from '../store/store'
import { albums, artists } from '../data/seed'
import { buildScene, LEVEL_NAMES } from '../lib/scenePath'
import { artistById } from '../lib/util'
import { ArtistDisc } from '../components/ui'
import { DotRing } from '../components/DotRing'
import { IconCheck } from '../components/icons'

// One scene: your level, four skills and the path of units (open any unit you like).
export default function ScenePage() {
  const { sceneId } = useParams()
  const { state, me, dispatch } = useStore()
  const path = buildScene(sceneId ?? '', { me, users: state.users, posts: state.posts, artists, albums })
  const current = path?.units.find((u) => u.steps.some((s) => !s.done))?.id
  const [open, setOpen] = useState<string | null>(null)
  if (!path || !path.def.ready) return <Navigate to="/scenes" replace />
  const openId = open ?? current ?? path.units[0].id
  const { level } = path

  return (
    <>
      <header className="hero-soft scene-hero">
        <div className="hero-kicker">Scene · {path.def.language}</div>
        <h1 className="hero-name">{path.def.name}</h1>
        <p className="hero-tagline">{path.def.intro}</p>
        <p className="hero-scene">
          {path.artistIds.length} artists · {path.decades[0]}s to today
        </p>
      </header>

      <section className="glass-card scene-level">
        <div className="scene-level-top">
          <span className="scene-level-ring">
            <DotRing value={level.n} total={LEVEL_NAMES.length - 1} size={84} dots={30} />
            <span className="bignum">{level.n}</span>
          </span>
          <span className="grow">
            <span className="scene-card-lang">Your level</span>
            <strong className="scene-level-name">{me ? level.name : 'Curious'}</strong>
            <span className="small block">{me ? level.text : 'Join Fandome to keep your progress.'}</span>
            {me && level.next && <span className="muted small block scene-next">{level.next}</span>}
          </span>
        </div>
        <div className="scene-skills">
          {path.skills.map((s) => (
            <div key={s.label} className="scene-skill">
              <span className="small">{s.label}</span>
              <span className="scene-bar">
                <i style={{ width: `${s.total ? (Math.min(s.value, s.total) / s.total) * 100 : 0}%` }} />
              </span>
              <span className="muted small">
                {s.value}/{s.total}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="scene-path">
        {path.units.map((u) => {
          const done = u.steps.filter((s) => s.done).length
          const isOpen = openId === u.id
          return (
            <section key={u.id} className={`scene-unit glass-card${isOpen ? ' open' : ''}${done === u.steps.length ? ' complete' : ''}`}>
              <button className="scene-unit-head" onClick={() => setOpen(isOpen ? '' : u.id)} aria-expanded={isOpen}>
                <span className="grow">
                  <span className="scene-card-lang">{u.kicker}</span>
                  <strong>{u.title}</strong>
                </span>
                <span className="muted small">
                  {done}/{u.steps.length}
                </span>
                <DotRing value={done} total={u.steps.length} size={30} dots={u.steps.length * 2} />
              </button>
              {isOpen && (
                <div className="scene-steps">
                  {u.steps.map((s) => {
                    const a = artistById(s.artistId)
                    if (!a) return null
                    const listened = Boolean(me?.listened?.includes(a.id))
                    return (
                      <div key={s.artistId} className={`row-item scene-step${s.done ? ' done' : ''}`}>
                        <Link to={`/a/${a.id}`} className="suggest-link">
                          <ArtistDisc id={a.id} size={40} />
                          <span className="grow">
                            <strong>{a.name}</strong>
                            <span className="muted small block">{s.reason}</span>
                          </span>
                        </Link>
                        {me && (
                          <button
                            className={s.done ? 'scene-check on' : 'scene-check'}
                            aria-pressed={listened}
                            aria-label={`I listened to ${a.name}`}
                            title={s.done && !listened ? 'Explored (followed, rated or new to you)' : 'I listened'}
                            onClick={() => dispatch({ type: 'markListened', artistId: a.id })}
                          >
                            <IconCheck size={15} />
                          </button>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </section>
          )
        })}
      </div>
      <p className="muted small suggest-why">
        A step counts when you follow the artist, rate one of their albums, mark it “New to me” or tap the check after listening. Two steps close to your taste, then one a step further. Your progress stays on this device.{' '}
        <Link to="/terms#feeds" className="link-btn">
          How it works
        </Link>
      </p>
    </>
  )
}
