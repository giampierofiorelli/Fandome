import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useStore } from '../store/store'
import { albums, artists } from '../data/seed'
import { buildScene, listenFor, LEVEL_NAMES, startWith, type ScenePath } from '../lib/scenePath'
import { rootsAndHeirs } from '../lib/connections'
import { albumById } from '../lib/util'
import { artistById } from '../lib/util'
import { AlbumCover, ArtistDisc, Modal } from '../components/ui'
import { sceneLine } from '../data/scenes'
import type { Step } from '../lib/scenePath'
import { DotRing } from '../components/DotRing'
import { IconCheck } from '../components/icons'

// One scene: your level, four skills and the path of units (open any unit you like).
export default function ScenePage() {
  const { sceneId } = useParams()
  const { state, me, dispatch } = useStore()
  const path = buildScene(sceneId ?? '', { me, users: state.users, posts: state.posts, artists, albums })
  const current = path?.units.find((u) => u.steps.some((s) => !s.done))?.id
  const [open, setOpen] = useState<string | null>(null)
  const [step, setStep] = useState<Step | null>(null)
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
                        <button className="suggest-link scene-step-open" onClick={() => setStep(s)}>
                          <ArtistDisc id={a.id} size={40} />
                          <span className="grow">
                            <strong>{a.name}</strong>
                            <span className="muted small block">{s.reason}</span>
                          </span>
                        </button>
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
        Tap a step to see what to do. A step counts when you follow the artist, rate one of their albums, mark it “New to me” or tap the check after listening. Two steps close to your taste, then one a step further. Your progress stays on this device.{' '}
        <Link to="/terms#feeds" className="link-btn">
          How it works
        </Link>
      </p>
      <AnimatePresence>{step && <StepSheet key={step.artistId} step={step} path={path} onOpen={setStep} onClose={() => setStep(null)} />}</AnimatePresence>
    </>
  )
}

// One step, explained: who it is, why it's here, and what you can do (each action completes it).
function StepSheet({ step, path, onOpen, onClose }: { step: Step; path: ScenePath; onOpen: (s: Step) => void; onClose: () => void }) {
  const { me, dispatch } = useStore()
  const a = artistById(step.artistId)
  if (!a) return null
  const sceneId = path.def.id
  const sceneName = path.def.name
  const allSteps = path.units.flatMap((u) => u.steps)
  const stepOf = (id: string): Step => allSteps.find((s) => s.artistId === id) ?? { artistId: id, reason: sceneLine(id) ?? '', done: false }
  const family = rootsAndHeirs(a.id, new Set(path.artistIds), artists)
  const begin = startWith(a.id, albums)
  const beginAlbum = begin ? albumById(begin.albumId) : undefined
  const cues = begin ? listenFor(begin.albumId) : undefined
  const theirs = albums.filter((al) => al.artistId === a.id).sort((x, y) => x.year - y.year)
  const listened = Boolean(me?.listened?.includes(a.id))
  const following = Boolean(me?.fanSince[a.id])
  const q = encodeURIComponent(beginAlbum ? `${a.name} ${beginAlbum.title}` : a.name)
  const done = step.done || listened || following
  return (
    <Modal title={a.name} onClose={onClose}>
      <div className="step-sheet">
        <div className="step-head">
          <ArtistDisc id={a.id} size={64} />
          <span className="grow">
            <strong className="step-name">{a.name}</strong>
            {sceneLine(a.id) && <span className="muted small block">{sceneLine(a.id)}</span>}
          </span>
        </div>
        {step.connection && (
          <p className="step-why step-connection">
            <span className="scene-card-lang">Your connection</span>
            {step.connection}
          </p>
        )}
        {step.reason !== step.connection && (
          <p className="step-why">
            <span className="scene-card-lang">Why it’s here</span>
            {step.reason}
          </p>
        )}
        {beginAlbum && (
          <div className="step-todo">
            <span className="scene-card-lang">Start with</span>
            <Link to={`/album/${beginAlbum.id}?from=${sceneId}`} className="album-chip" onClick={onClose}>
              <AlbumCover album={beginAlbum} size={28} />
              <span>
                {beginAlbum.title} · {beginAlbum.year}
              </span>
            </Link>
            <span className="muted small block">{begin!.why}</span>
            {cues && (
              <p className="step-listen">
                <strong>Listen for: </strong>
                {cues.cues.join(', ')}
                {cues.notes && <span className="muted block">{cues.notes}</span>}
              </p>
            )}
          </div>
        )}
        <div className="step-todo">
          <span className="scene-card-lang">1 · Listen</span>
          <div className="step-links">
            <a className="pill-btn glass small" href={`https://open.spotify.com/search/${q}`} target="_blank" rel="noopener noreferrer">
              Spotify
            </a>
            <a className="pill-btn glass small" href={`https://music.apple.com/search?term=${q}`} target="_blank" rel="noopener noreferrer">
              Apple Music
            </a>
            <a className="pill-btn glass small" href={`https://www.youtube.com/results?search_query=${q}`} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </div>
          <span className="muted small block">Opens the other app or site in a new tab.</span>
        </div>
        <div className="step-todo">
          <span className="scene-card-lang">2 · Then tell us</span>
          {me ? (
            <div className="step-links">
              <button className={listened ? 'pill-btn ink small' : 'pill-btn light small'} onClick={() => dispatch({ type: 'markListened', artistId: a.id })}>
                <IconCheck size={14} /> {listened ? 'Listened' : 'I listened'}
              </button>
              <button className={following ? 'pill-btn glass small' : 'pill-btn light small'} onClick={() => dispatch({ type: 'followArtist', artistId: a.id })}>
                {following ? 'Following' : 'Follow'}
              </button>
            </div>
          ) : (
            <span className="muted small block">Join Fandome to keep your progress.</span>
          )}
        </div>
        {(family.roots.length > 0 || family.heirs.length > 0) && (
          <div className="step-todo">
            <span className="scene-card-lang">In the family</span>
            {family.roots.length > 0 && (
              <div className="step-family">
                <span className="muted small">Draws on</span>
                {family.roots.map((id) => (
                  <button key={id} className="chip step-family-chip" onClick={() => onOpen(stepOf(id))}>
                    <ArtistDisc id={id} size={20} /> {artistById(id)?.name}
                  </button>
                ))}
              </div>
            )}
            {family.heirs.length > 0 && (
              <div className="step-family">
                <span className="muted small">Inspired</span>
                {family.heirs.map((id) => (
                  <button key={id} className="chip step-family-chip" onClick={() => onOpen(stepOf(id))}>
                    <ArtistDisc id={id} size={20} /> {artistById(id)?.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        {theirs.length > 0 && (
          <div className="step-todo">
            <span className="scene-card-lang">3 · Rate an album (optional)</span>
            <div className="album-chips">
              {theirs.map((al) => (
                <Link key={al.id} to={`/album/${al.id}?from=${sceneId}`} className="album-chip" onClick={onClose}>
                  <AlbumCover album={al} size={28} />
                  <span>
                    {al.title} · {al.year}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="step-foot">
          {done && <span className="small step-done">✓ This step is done</span>}
          <Link to={`/a/${a.id}?from=${sceneId}`} className="link-btn small" onClick={onClose}>
            Open {a.name}’s fan room
          </Link>
          <button className="pill-btn ink" onClick={onClose}>
            Back to {sceneName}
          </button>
        </div>
      </div>
    </Modal>
  )
}
