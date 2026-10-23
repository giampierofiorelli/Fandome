// Shared tick dial (listening party playhead, album score).
// Geometry: a 260° arc opening at the bottom, drawn clockwise from 7 o'clock.
export const DIAL_START = -220
export const DIAL_SWEEP = 260

export function Dial({ progress, color }: { progress: number; color: string }) {
  const R = 118
  const C = 150
  const ang = (t: number) => ((DIAL_START + DIAL_SWEEP * t) * Math.PI) / 180
  const pt = (t: number, r: number) => [C + r * Math.cos(ang(t)), C + r * Math.sin(ang(t))]
  const ticks = Array.from({ length: 61 }, (_, i) => i / 60)
  const [kx, ky] = pt(progress, R)
  const arc = (t0: number, t1: number, r: number) => {
    const [x0, y0] = pt(t0, r)
    const [x1, y1] = pt(t1, r)
    return `M ${x0} ${y0} A ${r} ${r} 0 ${DIAL_SWEEP * (t1 - t0) > 180 ? 1 : 0} 1 ${x1} ${y1}`
  }
  return (
    <svg viewBox="0 0 300 300" className="dial" aria-hidden>
      {ticks.map((t, i) => {
        const long = i % 5 === 0
        const [x0, y0] = pt(t, R + 10)
        const [x1, y1] = pt(t, R + (long ? 26 : 18))
        return <line key={i} x1={x0} y1={y0} x2={x1} y2={y1} className={t <= progress + 1e-9 ? 'tick on' : 'tick'} strokeWidth={long ? 2 : 1.2} />
      })}
      <path d={arc(0, 1, R)} className="dial-track" />
      <path d={arc(0, Math.max(0.001, progress), R)} className="dial-fill" style={{ stroke: color }} />
      <circle cx={kx} cy={ky} r="9" className="dial-knob-halo" />
      <circle cx={kx} cy={ky} r="4.5" className="dial-knob" />
      <circle cx={C} cy={C} r="84" className="dial-ring" />
      <circle cx={C} cy={C} r="72" className="dial-ring" />
    </svg>
  )
}

// Pointer position → 0..1 along the arc. In the gap at the bottom we stay at
// whichever end the finger came from, so a drag past the max doesn't wrap to 0.
export function angleToProgress(dx: number, dy: number, prev: number): number {
  const deg = (Math.atan2(dy, dx) * 180) / Math.PI
  const rel = (((deg - DIAL_START) % 360) + 360) % 360
  if (rel <= DIAL_SWEEP) return rel / DIAL_SWEEP
  return prev > 0.5 ? 1 : 0
}
