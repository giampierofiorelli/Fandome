import { Link, useSearchParams } from 'react-router-dom'
import { sceneDef } from '../lib/scenePath'
import { IconArrowLeft } from './icons'

// Shown on artist and album pages opened from a scene path, so you never get lost.
export function SceneBack() {
  const [params] = useSearchParams()
  const def = sceneDef(params.get('from') ?? undefined)
  if (!def) return null
  return (
    <Link to={`/scenes/${def.id}`} className="scene-back pill-btn glass small">
      <IconArrowLeft size={15} /> Back to the {def.name} path
    </Link>
  )
}
