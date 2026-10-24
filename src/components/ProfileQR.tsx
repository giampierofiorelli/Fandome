import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import qrcode from 'qrcode-generator'
import type { User } from '../data/types'
import { spring, springSnappy } from '../lib/motion'
import { useToast } from './Toast'
import { IconCheck, IconDownload, IconLink, IconShare, IconX } from './icons'

// Backgrounds you cycle through with "Color" (the first one is the person's own colour).
const THEMES = (c: string): { bg: string; a: string; b: string; light?: boolean }[] => [
  { bg: `linear-gradient(160deg, color-mix(in srgb, ${c} 70%, #fff), ${c} 55%, color-mix(in srgb, ${c} 60%, #000))`, a: c, b: `color-mix(in srgb, ${c} 55%, #000)` },
  { bg: 'linear-gradient(140deg,#6fc3cf,#e9b48c 50%,#b99be6)', a: '#3a8fa0', b: '#8a63d2' },
  { bg: 'linear-gradient(160deg,#f6c445,#f0a43a 40%,#e8457c)', a: '#f0a43a', b: '#e8457c' },
  { bg: 'linear-gradient(160deg,#1b1b2f,#3c2f6b 50%,#9b7cf0)', a: '#5b3fb0', b: '#1b1b2f' },
  { bg: 'linear-gradient(160deg,#eef1f4,#cfd6de)', a: '#0d1015', b: '#3a3f4b', light: true },
]

export const profileUrl = (handle: string) => `${location.origin}${location.pathname}#/u/${handle}`

function useQr(text: string) {
  return useMemo(() => {
    const qr = qrcode(0, 'H') // high error correction: room for the avatar in the middle
    qr.addData(text)
    qr.make()
    const n = qr.getModuleCount()
    const dark = (r: number, c: number) => qr.isDark(r, c)
    return { n, dark }
  }, [text])
}
// The three corner markers are drawn as round "records" (ring + centre disc): our own look, and
// verified to scan. Rounded squares looked like a certain camera logo.
const ring = (cx: number, cy: number, ro: number, ri: number) => `M${cx - ro} ${cy}a${ro} ${ro} 0 1 0 ${ro * 2} 0a${ro} ${ro} 0 1 0 ${-ro * 2} 0zM${cx - ri} ${cy}a${ri} ${ri} 0 1 0 ${ri * 2} 0a${ri} ${ri} 0 1 0 ${-ri * 2} 0z`
const inFinder = (r: number, c: number, n: number) => (r < 7 && c < 7) || (r < 7 && c >= n - 7) || (r >= n - 7 && c < 7)
// Alignment patterns (small squares) must stay solid too, or scanners lose their grip on dotted codes.
const ALIGN: number[][] = [[], [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90]]
function alignCentres(n: number): [number, number][] {
  const pos = ALIGN[(n - 17) / 4] ?? []
  const out: [number, number][] = []
  for (const r of pos) for (const c of pos) if (!inFinder(r, c, n) && !inFinder(r - 2, c - 2, n) && !inFinder(r + 2, c + 2, n) && !inFinder(r - 2, c + 2, n) && !inFinder(r + 2, c - 2, n)) out.push([r, c])
  return out
}
const inAlign = (r: number, c: number, al: [number, number][]) => al.some(([ar, ac]) => Math.abs(r - ar) <= 2 && Math.abs(c - ac) <= 2)

export function ProfileQR({ user, onClose }: { user: User; onClose: () => void }) {
  const toast = useToast()
  const [t, setT] = useState(0)
  const themes = THEMES(user.color)
  const theme = themes[t % themes.length]
  const url = profileUrl(user.handle)
  const { n, dark } = useQr(url)
  const hole = Math.ceil(n * 0.22) // clear area for the avatar
  const lo = Math.floor((n - hole) / 2)
  const hi = lo + hole

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('no-scroll')
    }
  }, [onClose])

  const al = alignCentres(n)
  const dots: [number, number][] = []
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (dark(r, c) && !inFinder(r, c, n) && !inAlign(r, c, al) && !(r >= lo && r < hi && c >= lo && c < hi)) dots.push([r, c])
  const finders: [number, number][] = [
    [0, 0],
    [0, n - 7],
    [n - 7, 0],
  ]
  const gid = `qrg-${t}`

  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title: `${user.name} on Fandome`, url })
      else {
        await navigator.clipboard.writeText(url)
        toast('Link copied')
      }
    } catch {
      // share sheet closed
    }
  }
  const [done, setDone] = useState<'copy' | 'download' | null>(null)
  const flash = (k: 'copy' | 'download') => {
    setDone(k)
    navigator.vibrate?.(8)
    setTimeout(() => setDone((d) => (d === k ? null : d)), 1600)
  }
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      flash('copy')
    } catch {
      prompt('Copy link', url)
    }
  }
  const download = async () => {
    try {
      const blob = await renderPng(user, n, dark, lo, hi, theme)
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `fandome-${user.handle}.png`
      a.click()
      flash('download')
      setTimeout(() => URL.revokeObjectURL(a.href), 2000)
    } catch {
      toast('Couldn’t create the image')
    }
  }

  return createPortal(
    <motion.div className={theme.light ? 'pqr-root light' : 'pqr-root'} style={{ background: theme.bg }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <div className="pqr-top">
        <button className="glass-circle" onClick={onClose} aria-label="Close">
          <IconX size={20} />
        </button>
        <button className="live-pill pqr-color" onClick={() => setT(t + 1)}>
          COLOR
        </button>
        <span style={{ width: 44 }} />
      </div>
      <motion.div className="pqr-card" initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} transition={spring}>
        <svg viewBox={`-1 -1 ${n + 2} ${n + 2}`} className="pqr-code" role="img" aria-label={`QR code for @${user.handle}`}>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={theme.a} />
              <stop offset="1" stopColor={theme.b} />
            </linearGradient>
          </defs>
          <g fill={`url(#${gid})`}>
            {dots.map(([r, c]) => (
              <circle key={`${r}-${c}`} cx={c + 0.5} cy={r + 0.5} r={0.45} />
            ))}
            {al.map(([r, c]) => (
              <g key={`a${r}${c}`}>
                <path d={ring(c + 0.5, r + 0.5, 2.5, 1.5)} fillRule="evenodd" />
                <circle cx={c + 0.5} cy={r + 0.5} r={0.6} />
              </g>
            ))}
            {finders.map(([r, c]) => (
              <g key={`f${r}${c}`}>
                <path d={ring(c + 3.5, r + 3.5, 3.5, 2.5)} fillRule="evenodd" />
                <circle cx={c + 3.5} cy={r + 3.5} r={1.5} />
              </g>
            ))}
          </g>
          <circle cx={n / 2} cy={n / 2} r={hole / 2 - 0.3} fill={`url(#${gid})`} />
          <text x={n / 2} y={n / 2} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={hole * 0.5} fontWeight={600} fontFamily="Geist Variable, Geist, sans-serif">
            {user.name.slice(0, 1).toUpperCase()}
          </text>
        </svg>
        <div className="pqr-handle" style={{ backgroundImage: `linear-gradient(90deg, ${theme.a}, ${theme.b})` }}>
          @{user.handle.toUpperCase()}
        </div>
        <div className="pqr-brand dotmatrix">FANDOME</div>
      </motion.div>
      <div className="pqr-actions">
        <motion.button onClick={share} whileTap={{ scale: 0.92 }} transition={springSnappy}>
          <IconShare size={22} />
          Share profile
        </motion.button>
        <ActionButton onClick={copy} done={done === 'copy'} icon={<IconLink size={22} />} label="Copy link" doneLabel="Copied" />
        <ActionButton onClick={download} done={done === 'download'} icon={<IconDownload size={22} />} label="Download" doneLabel="Saved" />
      </div>
    </motion.div>,
    document.body,
  )
}

// Button that confirms itself: press, then the icon pops into a check and the label changes.
function ActionButton({ onClick, done, icon, label, doneLabel }: { onClick: () => void; done: boolean; icon: React.ReactNode; label: string; doneLabel: string }) {
  return (
    <motion.button onClick={onClick} whileTap={{ scale: 0.92 }} animate={done ? { scale: [1, 1.06, 1] } : { scale: 1 }} transition={springSnappy} className={done ? 'done' : ''} aria-live="polite">
      <span className="pqr-icon">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span key={done ? 'ok' : 'icon'} initial={{ scale: 0.3, opacity: 0, rotate: done ? -45 : 45 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} exit={{ scale: 0.3, opacity: 0 }} transition={{ type: 'spring', bounce: 0.5, visualDuration: 0.3 }} style={{ display: 'inline-flex' }}>
            {done ? <IconCheck size={22} /> : icon}
          </motion.span>
        </AnimatePresence>
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={done ? doneLabel : label} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }} transition={{ type: 'spring', bounce: 0, visualDuration: 0.2 }}>
          {done ? doneLabel : label}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

// Same card as a PNG, drawn locally (nothing leaves the device).
async function renderPng(user: User, n: number, dark: (r: number, c: number) => boolean, lo: number, hi: number, theme: { a: string; b: string }): Promise<Blob> {
  await document.fonts.load('800 64px Doto').catch(() => undefined)
  const W = 1080
  const H = 1300
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  const ctx = c.getContext('2d')!
  // colour-mix() isn't understood by canvas: resolve the theme colours through the DOM first.
  const resolve = (col: string) => {
    const el = document.createElement('span')
    el.style.color = col
    document.body.appendChild(el)
    const v = getComputedStyle(el).color
    el.remove()
    return v
  }
  const a = resolve(theme.a)
  const b = resolve(theme.b)
  ctx.fillStyle = '#fff'
  ctx.beginPath()
  ctx.roundRect(0, 0, W, H, 80)
  ctx.fill()
  const pad = 120
  const s = (W - pad * 2) / n
  const grad = ctx.createLinearGradient(pad, pad, W - pad, pad + n * s)
  grad.addColorStop(0, a)
  grad.addColorStop(1, b)
  ctx.fillStyle = grad
  const x0 = pad
  const y0 = pad
  const al = alignCentres(n)
  for (let r = 0; r < n; r++)
    for (let col = 0; col < n; col++) {
      if (!dark(r, col) || inFinder(r, col, n) || inAlign(r, col, al) || (r >= lo && r < hi && col >= lo && col < hi)) continue
      ctx.beginPath()
      ctx.arc(x0 + (col + 0.5) * s, y0 + (r + 0.5) * s, s * 0.45, 0, Math.PI * 2)
      ctx.fill()
    }
  for (const [r, col] of al) {
    const X = x0 + (col + 0.5) * s
    const Y = y0 + (r + 0.5) * s
    ctx.beginPath()
    ctx.arc(X, Y, 2.5 * s, 0, Math.PI * 2)
    ctx.arc(X, Y, 1.5 * s, 0, Math.PI * 2, true)
    ctx.fill('evenodd')
    ctx.beginPath()
    ctx.arc(X, Y, 0.6 * s, 0, Math.PI * 2)
    ctx.fill()
  }
  for (const [r, col] of [
    [0, 0],
    [0, n - 7],
    [n - 7, 0],
  ]) {
    const X = x0 + (col + 3.5) * s
    const Y = y0 + (r + 3.5) * s
    ctx.beginPath()
    ctx.arc(X, Y, 3.5 * s, 0, Math.PI * 2)
    ctx.arc(X, Y, 2.5 * s, 0, Math.PI * 2, true)
    ctx.fill('evenodd')
    ctx.beginPath()
    ctx.arc(X, Y, 1.5 * s, 0, Math.PI * 2)
    ctx.fill()
  }
  const cx = x0 + (n / 2) * s
  const cy = y0 + (n / 2) * s
  ctx.beginPath()
  ctx.arc(cx, cy, ((hi - lo) / 2 - 0.3) * s, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#fff'
  ctx.font = `600 ${(hi - lo) * s * 0.5}px "Geist Variable", Geist, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(user.name.slice(0, 1).toUpperCase(), cx, cy)
  ctx.fillStyle = grad
  ctx.font = '800 64px Doto, monospace'
  ctx.fillText(`@${user.handle.toUpperCase()}`, W / 2, y0 + n * s + 90, W - 100)
  ctx.fillStyle = '#9aa1ab'
  ctx.font = '800 30px Doto, monospace'
  ctx.fillText('FANDOME', W / 2, H - 60)
  return new Promise((res, rej) => c.toBlob((bl) => (bl ? res(bl) : rej(new Error('no blob'))), 'image/png'))
}
