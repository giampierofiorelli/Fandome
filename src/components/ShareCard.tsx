import { useEffect, useRef, useState } from 'react'
import { Modal } from './ui'

// Shareable image card (for Instagram/TikTok stories) drawn on a canvas.
// This is the growth loop: every card carries the Fandome name back to socials.
export function ShareCardButton({ label, title, lines, color }: { label: string; title: string; lines: string[]; color: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="btn" onClick={() => setOpen(true)}>
        {label}
      </button>
      {open && <ShareCardModal title={title} lines={lines} color={color} onClose={() => setOpen(false)} />}
    </>
  )
}

function ShareCardModal({ title, lines, color, onClose }: { title: string; lines: string[]; color: string; onClose: () => void }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [url, setUrl] = useState('')

  useEffect(() => {
    const c = ref.current
    const ctx = c?.getContext('2d')
    if (!c || !ctx) return
    const W = 1080
    const H = 1350
    c.width = W
    c.height = H
    const g = ctx.createLinearGradient(0, 0, W, H)
    g.addColorStop(0, color)
    g.addColorStop(0.6, '#1a1024')
    g.addColorStop(1, '#0b0b10')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, W, H)
    ctx.fillStyle = 'rgba(255,255,255,0.08)'
    for (let i = 0; i < 40; i++) {
      ctx.beginPath()
      ctx.arc((i * 137) % W, (i * 251) % H, 4 + (i % 5) * 3, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.fillStyle = '#fff'
    ctx.font = 'bold 54px system-ui, sans-serif'
    ctx.fillText('✦ Fandome', 80, 130)
    ctx.font = 'bold 96px system-ui, sans-serif'
    wrap(ctx, title, 80, 520, W - 160, 108)
    ctx.font = '44px system-ui, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.85)'
    lines.forEach((l, i) => ctx.fillText(l, 80, 900 + i * 64))
    ctx.font = '32px system-ui, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.6)'
    ctx.fillText('Independent fan community · not affiliated with the artist', 80, H - 80)
    setUrl(c.toDataURL('image/png'))
  }, [title, lines, color])

  return (
    <Modal title="Share card" onClose={onClose}>
      <canvas ref={ref} className="share-canvas" />
      <div className="row-end">
        {url && (
          <a className="btn primary" href={url} download="fandome-card.png">
            Download PNG
          </a>
        )}
      </div>
    </Modal>
  )
}

function wrap(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, max: number, lh: number) {
  const words = text.split(' ')
  let line = ''
  let yy = y
  for (const w of words) {
    const test = line ? `${line} ${w}` : w
    if (ctx.measureText(test).width > max && line) {
      ctx.fillText(line, x, yy)
      line = w
      yy += lh
    } else line = test
  }
  ctx.fillText(line, x, yy)
}
