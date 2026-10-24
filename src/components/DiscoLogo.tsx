import { useEffect, useRef } from 'react'

// The dot-matrix logo with a very subtle "disco" touch: now and then single dots light up in
// neon rainbow colours and fade out, and every ~10s a faint rainbow wave crosses the word.
// The real font dots are found by drawing the text once off-screen, so sparks sit exactly on them.
const NEON = ['#ff2bd6', '#ffe600', '#00f0ff', '#39ff14', '#ff7a00', '#8a5cff', '#ff3b3b']

interface Dot {
  x: number
  y: number
  r: number
}
interface Spark {
  dot: number
  color: string
  start: number
  life: number
}

export function findDots(text: string, font: string, w: number, h: number, scale: number): Dot[] {
  const c = document.createElement('canvas')
  c.width = Math.ceil(w * scale)
  c.height = Math.ceil(h * scale)
  const ctx = c.getContext('2d', { willReadFrequently: true })!
  ctx.scale(scale, scale)
  ctx.font = font
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#000'
  ctx.fillText(text, 0, h / 2)
  const { data, width, height } = ctx.getImageData(0, 0, c.width, c.height)
  const seen = new Uint8Array(width * height)
  const dots: Dot[] = []
  // Connected components of opaque pixels = one dot each.
  for (let i = 0; i < width * height; i++) {
    if (seen[i] || data[i * 4 + 3] < 120) continue
    let sx = 0
    let sy = 0
    let n = 0
    const stack = [i]
    seen[i] = 1
    while (stack.length) {
      const k = stack.pop()!
      const x = k % width
      const y = (k - x) / width
      sx += x
      sy += y
      n++
      for (const nb of [k - 1, k + 1, k - width, k + width]) {
        if (nb < 0 || nb >= width * height || seen[nb] || data[nb * 4 + 3] < 120) continue
        if (Math.abs((nb % width) - x) > 1) continue
        seen[nb] = 1
        stack.push(nb)
      }
    }
    if (n < 2) continue
    dots.push({ x: sx / n / scale, y: sy / n / scale, r: Math.sqrt(n / Math.PI) / scale })
  }
  return dots
}

// fast: the intro version, lively from the first frame (wave at once, more sparks).
export function DiscoLogo({ text, fast = false }: { text: string; fast?: boolean }) {
  const wrap = useRef<HTMLSpanElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = wrap.current
    const cv = canvas.current
    if (!el || !cv) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let alive = true
    let dots: Dot[] = []
    const sparks: Spark[] = []
    let nextSpark = 0
    let nextWave = performance.now() + (fast ? 250 : 4000)
    let waveStart = -1
    const dpr = Math.min(3, window.devicePixelRatio || 1)

    const setup = async () => {
      const cs = getComputedStyle(el)
      const font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
      await document.fonts.load(font).catch(() => undefined)
      if (!alive) return
      const w = el.offsetWidth
      const h = el.offsetHeight
      cv.width = Math.ceil(w * dpr)
      cv.height = Math.ceil(h * dpr)
      cv.style.width = `${w}px`
      cv.style.height = `${h}px`
      // letter-spacing isn't applied by canvas fillText: draw letter by letter.
      const ls = parseFloat(cs.letterSpacing) || 0
      const probe = document.createElement('canvas').getContext('2d')!
      probe.font = font
      let x = 0
      dots = []
      for (const ch of text) {
        const cw = probe.measureText(ch).width
        for (const d of findDots(ch, font, Math.ceil(cw + 2), h, 6)) dots.push({ ...d, x: d.x + x })
        x += cw + ls
      }
      raf = requestAnimationFrame(tick)
    }

    let last = 0
    const tick = (t: number) => {
      if (!alive) return
      // 30 fps is plenty for slow fades and keeps the phone cool.
      if (t - last < 32) {
        raf = requestAnimationFrame(tick)
        return
      }
      last = t
      const ctx = cv.getContext('2d')!
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, cv.width, cv.height)
      if (dots.length) {
        // Test hook: light every dot to check alignment.
        if ((window as Window & { __discoDebug?: boolean }).__discoDebug) {
          ctx.fillStyle = '#ff2bd6'
          for (const d of dots) {
            ctx.beginPath()
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
            ctx.fill()
          }
          raf = requestAnimationFrame(tick)
          return
        }
        // A new spark every ~0.5–1.2s, at most 3 at a time: very subtle.
        if (t > nextSpark && sparks.length < (fast ? 7 : 3)) {
          sparks.push({ dot: Math.floor(Math.random() * dots.length), color: NEON[Math.floor(Math.random() * NEON.length)], start: t, life: 900 + Math.random() * 900 })
          nextSpark = t + (fast ? 60 + Math.random() * 120 : 500 + Math.random() * 700)
        }
        if (t > nextWave) {
          waveStart = t
          nextWave = t + (fast ? 1500 : 9000 + Math.random() * 5000)
        }
        for (let i = sparks.length - 1; i >= 0; i--) {
          const s = sparks[i]
          const k = (t - s.start) / s.life
          if (k >= 1) {
            sparks.splice(i, 1)
            continue
          }
          const d = dots[s.dot]
          ctx.globalAlpha = Math.sin(k * Math.PI) // fade in and out
          ctx.shadowColor = s.color
          ctx.shadowBlur = 6
          ctx.fillStyle = s.color
          ctx.beginPath()
          ctx.arc(d.x, d.y, d.r * 1.05, 0, Math.PI * 2)
          ctx.fill()
        }
        // Rainbow wave: a soft band of colour sweeping left to right over ~1.4s.
        if (waveStart > 0) {
          const k = (t - waveStart) / 1400
          if (k >= 1) waveStart = -1
          else {
            const w = cv.width / dpr
            const cx = -20 + k * (w + 40)
            for (const d of dots) {
              const dist = Math.abs(d.x - cx)
              if (dist > 14) continue
              const col = `hsl(${(d.x / w) * 300} 100% 58%)`
              ctx.globalAlpha = (1 - dist / 14) * 0.75
              ctx.shadowColor = col
              ctx.shadowBlur = 5
              ctx.fillStyle = col
              ctx.beginPath()
              ctx.arc(d.x, d.y, d.r * 1.05, 0, Math.PI * 2)
              ctx.fill()
            }
          }
        }
        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
      }
      raf = requestAnimationFrame(tick)
    }

    // Pause when the app is in the background.
    const onVis = () => {
      cancelAnimationFrame(raf)
      if (document.visibilityState === 'visible' && dots.length) raf = requestAnimationFrame(tick)
    }
    document.addEventListener('visibilitychange', onVis)
    void setup()
    return () => {
      alive = false
      cancelAnimationFrame(raf)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [text, fast])

  return (
    <span className="disco-logo" ref={wrap}>
      {text}
      <canvas ref={canvas} className="disco-logo-canvas" aria-hidden />
    </span>
  )
}

// A crown drawn with dots, same "disco" touch as the logo but livelier and starting at once:
// a rainbow wave sweeps across it every few seconds and single dots spark in neon.
// Small, narrow crown: three points and a band, elegant at small sizes.
const CROWN = ['1...1...1', '.1.1.1.1.', '.1111111.', '.1111111.', '.........', '.1111111.']

export function DotCrown({ pitch = 5, color = 'currentColor' }: { pitch?: number; color?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const w = CROWN[0].length * pitch
  const h = CROWN.length * pitch
  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const dpr = Math.min(3, window.devicePixelRatio || 1)
    cv.width = Math.ceil(w * dpr)
    cv.height = Math.ceil(h * dpr)
    const ctx = cv.getContext('2d')!
    const base = color === 'currentColor' ? getComputedStyle(cv).color : color
    const dots: Dot[] = []
    CROWN.forEach((row, y) => [...row].forEach((c, x) => c === '1' && dots.push({ x: (x + 0.5) * pitch, y: (y + 0.5) * pitch, r: pitch * 0.36 })))
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sparks: Spark[] = []
    let nextSpark = 0
    let waveStart = performance.now() + 150 // first wave right away
    let raf = 0
    let last = 0
    const draw = (t: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      ctx.fillStyle = base
      for (const d of dots) {
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
      if (still) return
      if (t > nextSpark && sparks.length < 4) {
        sparks.push({ dot: Math.floor(Math.random() * dots.length), color: NEON[Math.floor(Math.random() * NEON.length)], start: t, life: 700 + Math.random() * 700 })
        nextSpark = t + 220 + Math.random() * 380
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        const k = (t - s.start) / s.life
        if (k >= 1) {
          sparks.splice(i, 1)
          continue
        }
        const d = dots[s.dot]
        ctx.globalAlpha = Math.sin(k * Math.PI)
        ctx.shadowColor = s.color
        ctx.shadowBlur = pitch * 1.4
        ctx.fillStyle = s.color
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r * 1.1, 0, Math.PI * 2)
        ctx.fill()
      }
      const k = (t - waveStart) / 1300
      if (k >= 1) waveStart = t + 2600 + Math.random() * 1600
      else if (k >= 0) {
        const cx = -pitch * 3 + k * (w + pitch * 6)
        for (const d of dots) {
          const dist = Math.abs(d.x - cx)
          if (dist > pitch * 3) continue
          const col = `hsl(${(d.x / w) * 300} 100% 58%)`
          ctx.globalAlpha = (1 - dist / (pitch * 3)) * 0.95
          ctx.shadowColor = col
          ctx.shadowBlur = pitch * 1.2
          ctx.fillStyle = col
          ctx.beginPath()
          ctx.arc(d.x, d.y, d.r * 1.1, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }
    const tick = (t: number) => {
      if (t - last >= 32) {
        last = t
        draw(t)
      }
      raf = requestAnimationFrame(tick)
    }
    draw(performance.now())
    if (!still) raf = requestAnimationFrame(tick)
    const onVis = () => {
      cancelAnimationFrame(raf)
      if (document.visibilityState === 'visible' && !still) raf = requestAnimationFrame(tick)
    }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [pitch, color, w, h])
  return <canvas ref={ref} className="dot-crown" style={{ width: w, height: h }} aria-hidden />
}
