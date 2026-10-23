// Loads YouTube's IFrame Player API once, only when someone taps play.
export interface YTPlayer {
  playVideo(): void
  mute(): void
  unMute(): void
  getPlayerState(): number // 1 playing, 3 buffering
  destroy(): void
}
interface YTNamespace {
  Player: new (
    el: HTMLElement,
    opts: { host?: string; videoId: string; playerVars?: Record<string, number>; events?: { onReady?: (e: { target: YTPlayer }) => void } },
  ) => YTPlayer
}
declare global {
  interface Window {
    YT?: YTNamespace & { loaded?: number }
    onYouTubeIframeAPIReady?: () => void
  }
}

let pending: Promise<YTNamespace> | null = null

export function loadYouTubeApi(timeoutMs = 8000): Promise<YTNamespace> {
  if (window.YT?.Player && window.YT.loaded) return Promise.resolve(window.YT)
  if (pending) return pending
  pending = new Promise<YTNamespace>((res, rej) => {
    const prev = window.onYouTubeIframeAPIReady
    const t = setTimeout(() => {
      pending = null
      rej(new Error('YouTube API timeout'))
    }, timeoutMs)
    window.onYouTubeIframeAPIReady = () => {
      prev?.()
      clearTimeout(t)
      res(window.YT!)
    }
    const s = document.createElement('script')
    s.src = 'https://www.youtube.com/iframe_api'
    s.async = true
    s.onerror = () => {
      clearTimeout(t)
      pending = null
      rej(new Error('YouTube API blocked'))
    }
    document.head.appendChild(s)
  })
  return pending
}
