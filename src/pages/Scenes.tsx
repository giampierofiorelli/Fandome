import { Link } from 'react-router-dom'
import { useStore } from '../store/store'
import { albums, artists } from '../data/seed'
import { SCENE_DEFS, buildScene } from '../lib/scenePath'
import { DotRing } from '../components/DotRing'

// Scenes home: the scenes of the plan, with your level in each.
export default function ScenesPage() {
  const { state, me } = useStore()
  return (
    <>
      <header className="hello">
        <div className="eyebrow">Scenes</div>
        <h1 className="display">
          Discover a <span className="display-strong">scene</span>
        </h1>
        <p className="muted scenes-lead">Step by step, from the artists closest to what you love to the deep cuts. Your progress stays on your device.</p>
      </header>
      <div className="scene-cards">
        {SCENE_DEFS.map((def) => {
          const path = def.ready ? buildScene(def.id, { me, users: state.users, posts: state.posts, artists, albums }) : null
          const inner = (
            <>
              <span className="grow">
                <span className="scene-card-lang">{def.language}</span>
                <strong className="scene-card-name">{def.name}</strong>
                <span className="muted small block">{def.intro}</span>
                {path && <span className="scene-card-level">{me ? `${path.level.name} · ${path.artistIds.length} artists` : `${path.artistIds.length} artists`}</span>}
                {!def.ready && <span className="chip scene-soon">Coming soon</span>}
              </span>
              {path && (
                <span className="scene-card-ring">
                  <DotRing value={path.skills[0].value} total={path.skills[0].total} size={64} />
                  <span className="scene-card-num">{path.level.n}</span>
                </span>
              )}
            </>
          )
          return def.ready ? (
            <Link key={def.id} to={`/scenes/${def.id}`} className="scene-card glass-card">
              {inner}
            </Link>
          ) : (
            <div key={def.id} className="scene-card glass-card soon" aria-disabled="true">
              {inner}
            </div>
          )
        })}
      </div>
      <p className="muted small suggest-why">
        More scenes, “Surprise me” and genres to explore are coming. No streaks, no rankings: levels only describe what you have explored.{' '}
        <Link to="/terms#feeds" className="link-btn">
          How it works
        </Link>
      </p>
    </>
  )
}
