// Progress as a ring of dots (Doto dot-matrix accent): filled dots for what is done.
export function DotRing({ value, total, size = 56, dots = 24, color = 'var(--accent)' }: { value: number; total: number; size?: number; dots?: number; color?: string }) {
  const filled = total ? Math.round((Math.min(value, total) / total) * dots) : 0
  const r = size / 2 - 4
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="dot-ring" aria-hidden="true">
      {Array.from({ length: dots }, (_, i) => {
        const a = (i / dots) * Math.PI * 2 - Math.PI / 2
        return <circle key={i} cx={size / 2 + r * Math.cos(a)} cy={size / 2 + r * Math.sin(a)} r={size / 30 + 0.8} fill={i < filled ? color : 'var(--glass-line)'} />
      })}
    </svg>
  )
}
