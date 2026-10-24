import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Modal } from './ui'
import { findDots } from './DiscoLogo'
import { useToast } from './Toast'
import { IconDownload, IconShare } from './icons'
import { springSnappy } from '../lib/motion'

// Shareable image card (for Instagram/TikTok stories), drawn locally on a canvas in the app's
// look: light glass, the dot-matrix FANDOME logo with a few neon dots, big light numerals.
export interface CardSpec {
  kicker: string // e.g. FAN PASSPORT, I WAS THERE
  title: string
  subtitle?: string
  stats?: { n: number | string; label: string }[]
  rows: string[]
  handle: string
  color: string
}

export function ShareCardButton({ label, ...spec }: CardSpec & { label: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="btn" onClick={() => setOpen(true)}>
        {label}
      </button>
      {open && <ShareCardModal spec={spec} onClose={() => setOpen(false)} />}
    </>
  )
}

function ShareCardModal({ spec, onClose }: { spec: CardSpec; onClose: () => void }) {
  const toast = useToast()
  const [file, setFile] = useState<File | null>(null)
  const [url, setUrl] = useState('')
  const key = JSON.stringify(spec)

  useEffect(() => {
    let alive = true
    let made = ''
    renderCard(spec)
      .then((blob) => {
        if (!alive) return
        made = URL.createObjectURL(blob)
        setFile(new File([blob], 'fandome-card.png', { type: 'image/png' }))
        setUrl(made)
      })
      .catch(() => toast('Couldn’t create the image'))
    return () => {
      alive = false
      if (made) URL.revokeObjectURL(made)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  // iPhone/Android: the native share sheet ("Save Image", Instagram…). It must be called
  // straight from the tap, so the file is prepared beforehand.
  const canShareFile = !!file && typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] })
  const share = async () => {
    if (!file) return
    try {
      await navigator.share({ files: [file], title: 'Fandome' })
    } catch {
      // share sheet closed
    }
  }
  const save = () => {
    if (!url) return
    const a = document.createElement('a')
    a.href = url
    a.download = 'fandome-card.png'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <Modal title="Share card" onClose={onClose}>
      {url ? <img src={url} className="share-canvas" alt={`${spec.kicker}: ${spec.title}`} /> : <div className="share-canvas share-canvas-wait" />}
      <div className="row-end share-card-actions">
        {canShareFile && (
          <motion.button className="btn primary" onClick={share} whileTap={{ scale: 0.94 }} transition={springSnappy}>
            <IconShare size={17} /> Share or save
          </motion.button>
        )}
        <motion.button className={canShareFile ? 'btn' : 'btn primary'} onClick={save} disabled={!url} whileTap={{ scale: 0.94 }} transition={springSnappy}>
          <IconDownload size={17} /> Download
        </motion.button>
      </div>
      <p className="share-card-hint">Tip: on iPhone you can also press and hold the image to add it to Photos.</p>
    </Modal>
  )
}

const NEON = ['#ff2bd6', '#ffe600', '#00f0ff', '#39ff14', '#ff7a00', '#8a5cff']
const INK = '#0d1015'
const MUTED = '#6b7280'
const SANS = '"Geist Variable", Geist, system-ui, sans-serif'
const DOT = 'Doto, "Geist Mono", monospace'

// Canvas doesn't understand every CSS colour (e.g. color-mix): resolve through the DOM.
function resolveColor(col: string) {
  const el = document.createElement('span')
  el.style.color = col
  document.body.appendChild(el)
  const v = getComputedStyle(el).color
  el.remove()
  return v || col
}

function withAlpha(rgb: string, a: number) {
  const m = rgb.match(/[\d.]+/g)
  if (!m || m.length < 3) return `rgba(227,48,127,${a})`
  return `rgba(${m[0]},${m[1]},${m[2]},${a})`
}

// Text with letter-spacing, drawn letter by letter (canvas letterSpacing isn't everywhere).
function spaced(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, ls: number) {
  let xx = x
  for (const ch of text) {
    ctx.fillText(ch, xx, y)
    xx += ctx.measureText(ch).width + ls
  }
  return xx - ls - x
}
function spacedWidth(ctx: CanvasRenderingContext2D, text: string, ls: number) {
  let w = 0
  for (const ch of text) w += ctx.measureText(ch).width + ls
  return w - ls
}

function fit(ctx: CanvasRenderingContext2D, text: string, max: number) {
  if (ctx.measureText(text).width <= max) return text
  let t = text
  while (t.length > 1 && ctx.measureText(`${t}…`).width > max) t = t.slice(0, -1)
  return `${t.trimEnd()}…`
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, max: number, maxLines: number) {
  const words = text.split(' ')
  const out: string[] = []
  let line = ''
  for (const w of words) {
    const test = line ? `${line} ${w}` : w
    if (ctx.measureText(test).width > max && line) {
      out.push(line)
      line = w
    } else line = test
  }
  out.push(line)
  if (out.length > maxLines) {
    const kept = out.slice(0, maxLines)
    kept[maxLines - 1] = fit(ctx, out.slice(maxLines - 1).join(' '), max)
    return kept
  }
  return out
}

export async function renderCard(spec: CardSpec): Promise<Blob> {
  await Promise.all([
    document.fonts.load(`800 52px ${DOT}`),
    document.fonts.load(`200 200px ${SANS}`),
    document.fonts.load(`600 100px ${SANS}`),
    document.fonts.load(`400 30px ${SANS}`),
  ]).catch(() => undefined)

  const W = 1080
  const H = 1350
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  const ctx = c.getContext('2d')!
  const accent = resolveColor(spec.color)

  // Background: the app's calm light grey with soft colour fields (like the page backdrop).
  ctx.fillStyle = '#e6eaee'
  ctx.fillRect(0, 0, W, H)
  const f1 = ctx.createRadialGradient(W * 0.92, 40, 0, W * 0.92, 40, 900)
  f1.addColorStop(0, withAlpha(accent, 0.55))
  f1.addColorStop(1, withAlpha(accent, 0))
  ctx.fillStyle = f1
  ctx.fillRect(0, 0, W, H)
  const f2 = ctx.createRadialGradient(80, H - 60, 0, 80, H - 60, 760)
  f2.addColorStop(0, withAlpha(accent, 0.22))
  f2.addColorStop(1, withAlpha(accent, 0))
  ctx.fillStyle = f2
  ctx.fillRect(0, 0, W, H)

  // Glass panel.
  const P = 56
  ctx.save()
  ctx.shadowColor = 'rgba(13,16,21,0.10)'
  ctx.shadowBlur = 60
  ctx.shadowOffsetY = 20
  ctx.fillStyle = 'rgba(255,255,255,0.58)'
  ctx.beginPath()
  ctx.roundRect(P, P, W - P * 2, H - P * 2, 64)
  ctx.fill()
  ctx.restore()
  ctx.strokeStyle = 'rgba(255,255,255,0.9)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.roundRect(P + 1, P + 1, W - P * 2 - 2, H - P * 2 - 2, 63)
  ctx.stroke()

  const X = 124
  const R = W - 124
  ctx.textBaseline = 'alphabetic'

  // Logo: FANDOME in Doto, with a few dots lit in neon (the "disco" touch, frozen).
  const logoFont = `800 52px ${DOT}`
  ctx.font = logoFont
  const ls = 52 * 0.06
  const logoY = 196
  ctx.fillStyle = INK
  ctx.textBaseline = 'middle'
  let lx = X
  const lit: { x: number; y: number; r: number }[] = []
  for (const ch of 'FANDOME') {
    const cw = ctx.measureText(ch).width
    ctx.fillText(ch, lx, logoY)
    try {
      for (const d of findDots(ch, logoFont, Math.ceil(cw + 2), 80, 2)) lit.push({ x: d.x + lx, y: d.y - 40 + logoY, r: d.r })
    } catch {
      // no dots found: plain logo
    }
    lx += cw + ls
  }
  const pick = [3, 11, 19, 28, 37, 46, 55, 64].map((i) => lit[(i * 7) % Math.max(1, lit.length)]).filter(Boolean).slice(0, 6)
  pick.forEach((d, i) => {
    const col = NEON[i % NEON.length]
    ctx.save()
    ctx.shadowColor = col
    ctx.shadowBlur = 18
    ctx.fillStyle = col
    ctx.beginPath()
    ctx.arc(d.x, d.y, d.r * 1.25, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  })

  // Kicker pill, top right.
  ctx.font = `800 24px ${DOT}`
  const kw = spacedWidth(ctx, spec.kicker, 2)
  const pillW = kw + 48
  ctx.fillStyle = INK
  ctx.beginPath()
  ctx.roundRect(R - pillW, logoY - 28, pillW, 56, 28)
  ctx.fill()
  ctx.fillStyle = '#fff'
  spaced(ctx, spec.kicker, R - pillW + 24, logoY + 1, 2)

  // Title + subtitle.
  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = INK
  let titleSize = 104
  ctx.font = `600 ${titleSize}px ${SANS}`
  let lines = wrapLines(ctx, spec.title, R - X, 2)
  if (lines.length > 1) {
    titleSize = 84
    ctx.font = `600 ${titleSize}px ${SANS}`
    lines = wrapLines(ctx, spec.title, R - X, 2)
  }
  let y = 410
  for (const l of lines) {
    spaced(ctx, l, X, y, -titleSize * 0.03)
    y += titleSize * 1.06
  }
  if (spec.subtitle) {
    ctx.font = `800 34px ${DOT}`
    ctx.fillStyle = accent
    spaced(ctx, fit(ctx, spec.subtitle.toUpperCase(), R - X), X, y - titleSize * 0.42, 2)
    y += 10
  }

  // Big light numerals.
  if (spec.stats?.length) {
    y += 190
    const colW = (R - X) / spec.stats.length
    spec.stats.forEach((s, i) => {
      const sx = X + i * colW
      ctx.fillStyle = INK
      ctx.font = `200 190px ${SANS}`
      spaced(ctx, String(s.n), sx - 6, y, -190 * 0.05)
      ctx.fillStyle = MUTED
      ctx.font = `400 30px ${SANS}`
      ctx.fillText(s.label, sx, y + 48)
    })
    y += 110
  } else y += 40

  // Rows as glass chips with a colour dot.
  const rowH = 78
  const gap = 18
  const footerTop = H - P - 150
  const room = Math.max(0, Math.floor((footerTop - y + gap) / (rowH + gap)))
  ctx.font = `500 32px ${SANS}`
  for (const r of spec.rows.slice(0, room)) {
    const text = fit(ctx, r, R - X - 110)
    const w = Math.min(R - X, ctx.measureText(text).width + 104)
    ctx.fillStyle = 'rgba(255,255,255,0.78)'
    ctx.beginPath()
    ctx.roundRect(X, y, w, rowH, rowH / 2)
    ctx.fill()
    ctx.fillStyle = accent
    ctx.beginPath()
    ctx.arc(X + 40, y + rowH / 2, 9, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = INK
    ctx.textBaseline = 'middle'
    ctx.fillText(text, X + 70, y + rowH / 2 + 1)
    ctx.textBaseline = 'alphabetic'
    y += rowH + gap
  }

  // Footer: handle in Doto, disclaimer.
  ctx.fillStyle = INK
  ctx.font = `800 32px ${DOT}`
  spaced(ctx, fit(ctx, `@${spec.handle.toUpperCase()}`, R - X), X, H - P - 98, 2)
  ctx.fillStyle = MUTED
  ctx.font = `400 23px ${SANS}`
  ctx.fillText('Independent fan community · not affiliated with the artist', X, H - P - 50)

  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error('no blob'))), 'image/png'))
}
