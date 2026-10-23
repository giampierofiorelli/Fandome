// Spring presets (Apple-style: damping 1.0 by default, bounce only after momentum).
// In Motion, `bounce: 0` = critically damped; `visualDuration` ≈ Apple's "response".
export const spring = { type: 'spring', bounce: 0, visualDuration: 0.35 } as const
export const springSnappy = { type: 'spring', bounce: 0, visualDuration: 0.22 } as const
export const springBouncy = { type: 'spring', bounce: 0.25, visualDuration: 0.35 } as const // after flicks / celebrations
export const springSheet = { type: 'spring', bounce: 0.12, visualDuration: 0.3 } as const

// Apple's momentum projection (Designing Fluid Interfaces): where a flick would come to rest.
export function project(velocity: number, decelerationRate = 0.998) {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate)
}
