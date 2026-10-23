import { useEffect, useRef, useState } from 'react'
import { IconPause, IconPlay } from './icons'

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

// Voice-note player: round play button + waveform that fills as it plays.
// Tap or drag on the waveform to seek.
export function AudioPlayer({ src, duration, peaks }: { src: string; duration: number; peaks: number[] }) {
  const ref = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [t, setT] = useState(0)
  const total = duration || ref.current?.duration || 0

  useEffect(() => {
    const a = ref.current
    if (!a) return
    let raf = 0
    const loop = () => {
      setT(a.currentTime)
      raf = requestAnimationFrame(loop)
    }
    const onPlay = () => {
      setPlaying(true)
      raf = requestAnimationFrame(loop)
    }
    const onStop = () => {
      setPlaying(false)
      cancelAnimationFrame(raf)
      setT(a.currentTime)
    }
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onStop)
    a.addEventListener('ended', onStop)
    return () => {
      cancelAnimationFrame(raf)
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onStop)
      a.removeEventListener('ended', onStop)
    }
  }, [])

  const seekTo = (clientX: number, el: HTMLElement) => {
    const a = ref.current
    if (!a || !total) return
    const r = el.getBoundingClientRect()
    a.currentTime = Math.min(1, Math.max(0, (clientX - r.left) / r.width)) * total
    setT(a.currentTime)
  }
  const progress = total ? t / total : 0

  return (
    <div className="voice" onClick={(e) => e.stopPropagation()}>
      <audio ref={ref} src={src} preload="metadata" />
      <button className="voice-btn" aria-label={playing ? 'Pause' : 'Play voice note'} onClick={() => (playing ? ref.current?.pause() : void ref.current?.play())}>
        {playing ? <IconPause size={18} /> : <IconPlay size={18} />}
      </button>
      <div
        className="wave"
        role="slider"
        aria-label="Seek"
        aria-valuemin={0}
        aria-valuemax={Math.round(total)}
        aria-valuenow={Math.round(t)}
        tabIndex={0}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          seekTo(e.clientX, e.currentTarget)
        }}
        onPointerMove={(e) => e.buttons && seekTo(e.clientX, e.currentTarget)}
      >
        {peaks.map((p, i) => (
          <i key={i} className={i / peaks.length < progress ? 'on' : ''} style={{ height: `${Math.round(p * 100)}%` }} />
        ))}
      </div>
      <span className="voice-time">{fmt(playing || t ? t : total)}</span>
    </div>
  )
}
