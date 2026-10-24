import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Modal, Tabs } from './ui'
import { findDots } from './DiscoLogo'
import { useToast } from './Toast'
import { IconDownload, IconShare } from './icons'
import { springSnappy } from '../lib/motion'

// Shareable card (for Instagram/TikTok stories), drawn locally on a canvas in the app's look:
// light glass, the dot-matrix FANDOME logo with neon dots, big light numerals.
// "Photo" is a PNG; "Video" records the same card animated (a few seconds) with the browser's
// own MediaRecorder: no server, nothing leaves the phone until the person shares it.
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

type Mode = 'photo' | 'video'
interface Made {
  file: File
  url: string
}

const canShare = (f: File | undefined) => !!f && typeof navigator.canShare === 'function' && navigator.canShare({ files: [f] })
const videoSupported = () => typeof MediaRecorder !== 'undefined' && typeof HTMLCanvasElement.prototype.captureStream === 'function'

function ShareCardModal({ spec, onClose }: { spec: CardSpec; onClose: () => void }) {
  const toast = useToast()
  const [mode, setMode] = useState<Mode>('photo')
  const [photo, setPhoto] = useState<Made>()
  const [video, setVideo] = useState<Made>()
  const [progress, setProgress] = useState(0) // 0..1 while recording
  const live = useRef<HTMLCanvasElement>(null)
  const key = JSON.stringify(spec)

  useEffect(() => {
    let alive = true
    let made = ''
    renderCard(spec)
      .then((blob) => {
        if (!alive) return
        made = URL.createObjectURL(blob)
        setPhoto({ file: new File([blob], 'fandome-card.png', { type: 'image/png' }), url: made })
      })
      .catch(() => toast('Couldn’t create the image'))
    return () => {
      alive = false
      if (made) URL.revokeObjectURL(made)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  // Record the video the first time the Video tab is opened (the live canvas is the preview).
  useEffect(() => {
    if (mode !== 'video' || video || !live.current) return
    const ctl = { stop: false }
    let made = ''
    recordCard(spec, live.current, setProgress, ctl)
      .then(({ blob, ext }) => {
        if (ctl.stop) return
        made = URL.createObjectURL(blob)
        setVideo({ file: new File([blob], `fandome-card.${ext}`, { type: blob.type }), url: made })
      })
      .catch(() => !ctl.stop && toast('Couldn’t create the video on this browser'))
    return () => {
      ctl.stop = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, key])
  useEffect(() => () => video && URL.revokeObjectURL(video.url), [video])

  const current = mode === 'photo' ? photo : video
  // iPhone/Android: the native share sheet ("Save Image/Video", Instagram…). It must be called
  // straight from the tap, so the file is prepared beforehand.
  const shareable = canShare(current?.file)
  const share = async () => {
    if (!current) return
    try {
      await navigator.share({ files: [current.file], title: 'Fandome' })
    } catch {
      // share sheet closed
    }
  }
  const save = () => {
    if (!current) return
    const a = document.createElement('a')
    a.href = current.url
    a.download = current.file.name
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <Modal title="Share card" onClose={onClose}>
      {videoSupported() && <Tabs<Mode> tabs={[{ id: 'photo', label: 'Photo' }, { id: 'video', label: 'Video' }]} value={mode} onChange={setMode} />}
      <div className="share-stage">
        {mode === 'photo' ? (
          photo ? <img src={photo.url} className="share-canvas" alt={`${spec.kicker}: ${spec.title}`} /> : <div className="share-canvas share-canvas-wait" />
        ) : video ? (
          <video src={video.url} className="share-canvas" autoPlay loop muted playsInline aria-label={`${spec.kicker}: ${spec.title}, video`} />
        ) : (
          <>
            <canvas ref={live} className="share-canvas" aria-label="Making your video" />
            <div className="share-rec" aria-live="polite">
              <span className="share-rec-dot" /> Making your video…
              <span className="share-rec-bar">
                <span style={{ transform: `scaleX(${progress})` }} />
              </span>
            </div>
          </>
        )}
      </div>
      <div className="row-end share-card-actions">
        {shareable && (
          <motion.button className="btn primary" onClick={share} whileTap={{ scale: 0.94 }} transition={springSnappy}>
            <IconShare size={17} /> Share or save
          </motion.button>
        )}
        <motion.button className={shareable ? 'btn' : 'btn primary'} onClick={save} disabled={!current} whileTap={{ scale: 0.94 }} transition={springSnappy}>
          <IconDownload size={17} /> Download
        </motion.button>
      </div>
      <p className="share-card-hint">
        {mode === 'photo' ? 'Tip: on iPhone you can also press and hold the image to add it to Photos.' : 'A 6-second loop for stories and reels. Made on your device.'}
      </p>
    </Modal>
  )
}

const NEON = ['#ff2bd6', '#ffe600', '#00f0ff', '#39ff14', '#ff7a00', '#8a5cff']
const INK = '#0d1015'
const MUTED = '#6b7280'
const SANS = '"Geist Variable", Geist, system-ui, sans-serif'
const DOT = 'Doto, "Geist Mono", monospace'
const W = 1080
const H = 1350
const P = 56
const X = 124
const R = W - 124
const LOGO_Y = 196
const DURATION = 6 // seconds

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

interface Prep {
  spec: CardSpec
  accent: string
  base: HTMLCanvasElement // background + glass panel, drawn once
  dots: { x: number; y: number; r: number }[] // logo dots, for the neon sparks
}

async function prepare(spec: CardSpec): Promise<Prep> {
  await Promise.all([
    document.fonts.load(`800 52px ${DOT}`),
    document.fonts.load(`200 200px ${SANS}`),
    document.fonts.load(`600 100px ${SANS}`),
    document.fonts.load(`500 32px ${SANS}`),
    document.fonts.load(`400 30px ${SANS}`),
  ]).catch(() => undefined)
  const accent = resolveColor(spec.color)
  const base = document.createElement('canvas')
  base.width = W
  base.height = H
  const ctx = base.getContext('2d')!
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
  // Logo dots.
  const logoFont = `800 52px ${DOT}`
  ctx.font = logoFont
  const dots: Prep['dots'] = []
  let lx = X
  for (const ch of 'FANDOME') {
    const cw = ctx.measureText(ch).width
    try {
      for (const d of findDots(ch, logoFont, Math.ceil(cw + 2), 80, 2)) dots.push({ x: d.x + lx, y: d.y - 40 + LOGO_Y, r: d.r })
    } catch {
      // no dots found: plain logo
    }
    lx += cw + 52 * 0.06
  }
  return { spec, accent, base, dots }
}

const clamp01 = (v: number) => Math.max(0, Math.min(1, v))
const easeOut = (v: number) => 1 - Math.pow(1 - clamp01(v), 3)
// Progress of a step that runs from a to b seconds.
const step = (t: number, a: number, b: number) => easeOut((t - a) / (b - a))

function glowDot(ctx: CanvasRenderingContext2D, d: { x: number; y: number; r: number }, col: string, alpha: number, blur = 18) {
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.shadowColor = col
  ctx.shadowBlur = blur
  ctx.fillStyle = col
  ctx.beginPath()
  ctx.arc(d.x, d.y, d.r * 1.25, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

// One frame. t = seconds into the animation; Infinity = the finished still image.
function drawFrame(ctx: CanvasRenderingContext2D, prep: Prep, t: number) {
  const { spec, accent, dots } = prep
  const still = !Number.isFinite(t)
  ctx.globalAlpha = 1
  ctx.drawImage(prep.base, 0, 0)
  ctx.textBaseline = 'middle'

  // Logo.
  ctx.font = `800 52px ${DOT}`
  ctx.fillStyle = INK
  spaced(ctx, 'FANDOME', X, LOGO_Y, 52 * 0.06)
  if (dots.length) {
    if (still) {
      const pick = [3, 11, 19, 28, 37, 46].map((i) => dots[(i * 7) % dots.length])
      pick.forEach((d, i) => glowDot(ctx, d, NEON[i % NEON.length], 1))
    } else {
      // Neon sparks: a new one every ~0.3s, each fading in and out over ~1s.
      for (let k = 0; k < 24; k++) {
        const start = 0.1 + k * 0.27
        const life = 0.9 + ((k * 37) % 5) * 0.12
        const u = (t - start) / life
        if (u <= 0 || u >= 1) continue
        glowDot(ctx, dots[(k * 53 + 7) % dots.length], NEON[(k * 5) % NEON.length], Math.sin(u * Math.PI))
      }
      // Rainbow wave sweeping across the word, twice.
      for (const ws of [2.2, 4.4]) {
        const u = (t - ws) / 1.2
        if (u <= 0 || u >= 1) continue
        const x0 = X - 30
        const x1 = X + spacedWidth(ctx, 'FANDOME', 52 * 0.06) + 30
        const cx = x0 + u * (x1 - x0)
        for (const d of dots) {
          const dist = Math.abs(d.x - cx)
          if (dist > 34) continue
          glowDot(ctx, d, `hsl(${((d.x - X) / (x1 - X)) * 300} 100% 55%)`, (1 - dist / 34) * 0.9, 12)
        }
      }
    }
  }

  // Kicker pill, top right (pops in).
  const kp = still ? 1 : step(t, 0.2, 0.7)
  ctx.save()
  ctx.globalAlpha = kp
  ctx.font = `800 24px ${DOT}`
  const kw = spacedWidth(ctx, spec.kicker, 2)
  const pillW = kw + 48
  const sc = 0.85 + 0.15 * kp
  ctx.translate(R - pillW / 2, LOGO_Y)
  ctx.scale(sc, sc)
  ctx.fillStyle = INK
  ctx.beginPath()
  ctx.roundRect(-pillW / 2, -28, pillW, 56, 28)
  ctx.fill()
  ctx.fillStyle = '#fff'
  spaced(ctx, spec.kicker, -pillW / 2 + 24, 1, 2)
  ctx.restore()

  // Title + subtitle (fade up).
  ctx.textBaseline = 'alphabetic'
  let titleSize = 104
  ctx.font = `600 ${titleSize}px ${SANS}`
  let lines = wrapLines(ctx, spec.title, R - X, 2)
  if (lines.length > 1) {
    titleSize = 84
    ctx.font = `600 ${titleSize}px ${SANS}`
    lines = wrapLines(ctx, spec.title, R - X, 2)
  }
  const tp = still ? 1 : step(t, 0.15, 0.85)
  ctx.save()
  ctx.globalAlpha = tp
  ctx.fillStyle = INK
  let y = 410
  for (const l of lines) {
    spaced(ctx, l, X, y + (1 - tp) * 30, -titleSize * 0.03)
    y += titleSize * 1.06
  }
  ctx.restore()
  if (spec.subtitle) {
    const sp = still ? 1 : step(t, 0.4, 1)
    ctx.save()
    ctx.globalAlpha = sp
    ctx.font = `800 34px ${DOT}`
    ctx.fillStyle = accent
    spaced(ctx, fit(ctx, spec.subtitle.toUpperCase(), R - X), X, y - titleSize * 0.42 + (1 - sp) * 20, 2)
    ctx.restore()
    y += 10
  }

  // Big light numerals, counting up.
  if (spec.stats?.length) {
    y += 190
    const colW = (R - X) / spec.stats.length
    spec.stats.forEach((s, i) => {
      const a = 0.6 + i * 0.12
      const cp = still ? 1 : step(t, a, a + 1.3)
      const n = typeof s.n === 'number' ? String(Math.round(s.n * cp)) : s.n
      const sx = X + i * colW
      ctx.save()
      ctx.globalAlpha = still ? 1 : step(t, a, a + 0.35)
      ctx.fillStyle = INK
      ctx.font = `200 190px ${SANS}`
      spaced(ctx, n, sx - 6, y, -190 * 0.05)
      ctx.fillStyle = MUTED
      ctx.font = `400 30px ${SANS}`
      ctx.fillText(s.label, sx, y + 48)
      ctx.restore()
    })
    y += 110
  } else y += 40

  // Rows as glass chips with a colour dot (slide in one after the other).
  const rowH = 78
  const gap = 18
  const footerTop = H - P - 150
  const room = Math.max(0, Math.floor((footerTop - y + gap) / (rowH + gap)))
  ctx.font = `500 32px ${SANS}`
  spec.rows.slice(0, room).forEach((r, i) => {
    const a = 1.2 + i * 0.16
    const rp = still ? 1 : step(t, a, a + 0.55)
    const text = fit(ctx, r, R - X - 110)
    const w = Math.min(R - X, ctx.measureText(text).width + 104)
    const ox = (1 - rp) * -40
    ctx.save()
    ctx.globalAlpha = rp
    ctx.fillStyle = 'rgba(255,255,255,0.78)'
    ctx.beginPath()
    ctx.roundRect(X + ox, y, w, rowH, rowH / 2)
    ctx.fill()
    ctx.fillStyle = accent
    ctx.beginPath()
    ctx.arc(X + ox + 40, y + rowH / 2, 9, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = INK
    ctx.textBaseline = 'middle'
    ctx.fillText(text, X + ox + 70, y + rowH / 2 + 1)
    ctx.restore()
    y += rowH + gap
  })

  // Footer: handle in Doto, disclaimer.
  ctx.save()
  ctx.globalAlpha = still ? 1 : step(t, 1.8, 2.4)
  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = INK
  ctx.font = `800 32px ${DOT}`
  spaced(ctx, fit(ctx, `@${spec.handle.toUpperCase()}`, R - X), X, H - P - 98, 2)
  ctx.fillStyle = MUTED
  ctx.font = `400 23px ${SANS}`
  ctx.fillText('Independent fan community · not affiliated with the artist', X, H - P - 50)
  ctx.restore()
}

export async function renderCard(spec: CardSpec): Promise<Blob> {
  const prep = await prepare(spec)
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  drawFrame(c.getContext('2d')!, prep, Infinity)
  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error('no blob'))), 'image/png'))
}

// MP4 where the browser can (Safari, recent Chrome: what Instagram accepts), WebM otherwise.
function pickMime() {
  for (const m of ['video/mp4;codecs=avc1.42E01E', 'video/mp4;codecs=avc1', 'video/mp4', 'video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'])
    if (MediaRecorder.isTypeSupported(m)) return m
  return ''
}

// Plays the animation on the given canvas while recording it (real time: takes DURATION seconds).
export async function recordCard(spec: CardSpec, canvas: HTMLCanvasElement, onProgress: (p: number) => void, ctl: { stop: boolean }): Promise<{ blob: Blob; ext: string }> {
  const prep = await prepare(spec)
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!
  drawFrame(ctx, prep, 0)
  const mime = pickMime()
  const stream = canvas.captureStream(30)
  const rec = new MediaRecorder(stream, { ...(mime ? { mimeType: mime } : {}), videoBitsPerSecond: 8_000_000 })
  const chunks: Blob[] = []
  rec.ondataavailable = (e) => e.data.size && chunks.push(e.data)
  const done = new Promise<void>((res) => (rec.onstop = () => res()))
  rec.start(250)
  const t0 = performance.now()
  await new Promise<void>((res) => {
    const tick = () => {
      if (ctl.stop) return res()
      const t = (performance.now() - t0) / 1000
      drawFrame(ctx, prep, Math.min(t, DURATION))
      onProgress(Math.min(1, t / DURATION))
      if (t >= DURATION + 0.1) return res()
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
  rec.stop()
  stream.getTracks().forEach((tr) => tr.stop())
  await done
  if (ctl.stop) throw new Error('cancelled')
  const type = (rec.mimeType || mime || 'video/webm').split(';')[0]
  return { blob: new Blob(chunks, { type }), ext: type.includes('mp4') ? 'mp4' : 'webm' }
}
