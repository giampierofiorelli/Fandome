import type { SVGProps } from 'react'

// Minimal stroke icon set (24px grid, 1.75 stroke) — replaces emoji for a consistent, professional look.
type P = SVGProps<SVGSVGElement> & { size?: number }

function Svg({ size = 20, children, ...rest }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...rest}>
      {children}
    </svg>
  )
}

export const IconHome = (p: P) => (
  <Svg {...p}>
    <path d="M3.5 10.5 12 3.5l8.5 7" />
    <path d="M5.5 9v10.5h13V9" />
    <path d="M10 19.5v-5h4v5" />
  </Svg>
)
export const IconSearch = (p: P) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2" />
  </Svg>
)
export const IconHeadphones = (p: P) => (
  <Svg {...p}>
    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
    <rect x="3.5" y="14" width="4.5" height="6.5" rx="2" />
    <rect x="16" y="14" width="4.5" height="6.5" rx="2" />
  </Svg>
)
export const IconUser = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="8.5" r="4" />
    <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
  </Svg>
)
export const IconSettings = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.1-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9c.26.6.85 1 1.51 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1z" />
  </Svg>
)
export const IconPlus = (p: P) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
)
export const IconReply = (p: P) => (
  <Svg {...p}>
    <path d="M20.5 11.5a8 8 0 0 1-11.8 7L3.5 20l1.5-4.7A8 8 0 1 1 20.5 11.5z" />
  </Svg>
)
export const IconRepost = (p: P) => (
  <Svg {...p}>
    <path d="m17 2.5 3.5 3.5L17 9.5" />
    <path d="M3.5 11.5V10a4 4 0 0 1 4-4h13" />
    <path d="m7 21.5-3.5-3.5L7 14.5" />
    <path d="M20.5 12.5V14a4 4 0 0 1-4 4h-13" />
  </Svg>
)
export const IconHeart = ({ filled, ...p }: P & { filled?: boolean }) => (
  <Svg {...p} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 4 4 7.6 4c2 0 3.4 1.1 4.4 2.6C13 5.1 14.4 4 16.4 4 20 4 22.4 7.6 21.2 11.1 19.5 15.9 12 20.5 12 20.5z" />
  </Svg>
)
export const IconShare = (p: P) => (
  <Svg {...p}>
    <path d="M12 3.5v12" />
    <path d="m7.5 8 4.5-4.5L16.5 8" />
    <path d="M5 13v5.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V13" />
  </Svg>
)
export const IconTrash = (p: P) => (
  <Svg {...p}>
    <path d="M4 7h16M10 11v6M14 11v6" />
    <path d="M6 7l1 12.5a2 2 0 0 0 2 1.5h6a2 2 0 0 0 2-1.5L18 7" />
    <path d="M9 7V4.5h6V7" />
  </Svg>
)
export const IconGlobe = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.5 2.4 3.5 5.3 3.5 8.5s-1 6.1-3.5 8.5c-2.5-2.4-3.5-5.3-3.5-8.5s1-6.1 3.5-8.5z" />
  </Svg>
)
export const IconPin = (p: P) => (
  <Svg {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.3" />
  </Svg>
)
export const IconPoll = (p: P) => (
  <Svg {...p}>
    <path d="M5 20V10M12 20V4M19 20v-7" />
  </Svg>
)
export const IconCheck = (p: P) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Svg>
)
export const IconX = (p: P) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
)
export const IconChevronLeft = (p: P) => (
  <Svg {...p}>
    <path d="m14.5 5.5-6.5 6.5 6.5 6.5" />
  </Svg>
)
export const IconTicket = (p: P) => (
  <Svg {...p}>
    <path d="M3.5 8.5V6.5a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v2a2.5 2.5 0 0 0 0 5v2a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-2a2.5 2.5 0 0 0 0-5z" />
    <path d="M14 6v12" strokeDasharray="2 2.5" />
  </Svg>
)
export const IconDisc = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="2.5" />
  </Svg>
)
export const IconPackage = (p: P) => (
  <Svg {...p}>
    <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z" />
    <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
  </Svg>
)
export const IconPen = (p: P) => (
  <Svg {...p}>
    <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z" />
    <path d="m13.5 6.5 4 4" />
  </Svg>
)
export const IconDownload = (p: P) => (
  <Svg {...p}>
    <path d="M12 3.5v12" />
    <path d="m7.5 11 4.5 4.5 4.5-4.5" />
    <path d="M5 20.5h14" />
  </Svg>
)
export const IconSparkle = (p: P) => (
  <Svg {...p}>
    <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7z" fill="currentColor" stroke="none" />
  </Svg>
)
export const IconLink = (p: P) => (
  <Svg {...p}>
    <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1" />
    <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" />
  </Svg>
)
export const IconQuote = (p: P) => (
  <Svg {...p}>
    <path d="M4 20h16M4 4h16v11H4z" />
  </Svg>
)
export const IconTag = (p: P) => (
  <Svg {...p}>
    <path d="M3.5 12.5V4.5a1 1 0 0 1 1-1h8l8 8-9 9z" />
    <circle cx="8" cy="8" r="1.3" />
  </Svg>
)
export const IconArrowUpRight = (p: P) => (
  <Svg {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Svg>
)
export const IconArrowLeft = (p: P) => (
  <Svg {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Svg>
)
export const IconArrowRight = (p: P) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
)
export const IconPlay = (p: P) => (
  <Svg {...p}>
    <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
  </Svg>
)
// Generic "sound waves in a circle" mark (not the Spotify logo).
export const IconSpotify = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M7.5 9.5c3-1 6.5-.7 9 .8M8 12.6c2.5-.7 5.2-.4 7.3.8M8.7 15.5c1.9-.5 3.8-.3 5.4.6" />
  </Svg>
)
export const IconImage = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
    <circle cx="9" cy="10" r="1.8" />
    <path d="m4 17 5-4.5 4 3.5 2.5-2 4.5 4" />
  </Svg>
)
export const IconPause = (p: P) => (
  <Svg {...p}>
    <rect x="6.5" y="5" width="3.6" height="14" rx="1.2" fill="currentColor" stroke="none" />
    <rect x="13.9" y="5" width="3.6" height="14" rx="1.2" fill="currentColor" stroke="none" />
  </Svg>
)
export const IconMic = (p: P) => (
  <Svg {...p}>
    <rect x="9" y="3.5" width="6" height="11" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
  </Svg>
)
export const IconSend = (p: P) => (
  <Svg {...p}>
    <path d="M21 3 10.5 13.5M21 3l-6.5 18-4-7.5L3 9.5z" />
  </Svg>
)
export const IconMusic = (p: P) => (
  <Svg {...p}>
    <path d="M9 18V5.5l11-2V16" />
    <circle cx="6.5" cy="18" r="2.5" />
    <circle cx="17.5" cy="16" r="2.5" />
  </Svg>
)
export const IconCamera = (p: P) => (
  <Svg {...p}>
    <path d="M3.5 8.5a2 2 0 0 1 2-2h2l1.5-2h6l1.5 2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" />
    <circle cx="12" cy="13" r="3.5" />
  </Svg>
)
export const IconVideo = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="6" width="12.5" height="12" rx="2.5" />
    <path d="m15.5 10.5 5-3v9l-5-3" />
  </Svg>
)
export const IconVolume = (p: P) => (
  <Svg {...p}>
    <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
    <path d="M15.5 9a4.5 4.5 0 0 1 0 6" />
    <path d="M18 6.5a8 8 0 0 1 0 11" />
  </Svg>
)
export const IconMute = (p: P) => (
  <Svg {...p}>
    <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
    <path d="m16 9.5 5 5" />
    <path d="m21 9.5-5 5" />
  </Svg>
)
export const IconMore = (p: P) => (
  <Svg {...p}>
    <circle cx="5.5" cy="12" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="18.5" cy="12" r="1.3" fill="currentColor" stroke="none" />
  </Svg>
)
export const IconPushpin = (p: P) => (
  <Svg {...p}>
    <path d="M9 3.5h6l-1 5 3.5 3.5v1.5h-11V12L10 8.5z" />
    <path d="M12 13.5v7" />
  </Svg>
)
export const IconShield = ({ filled, ...p }: P & { filled?: boolean }) => (
  <Svg {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6z" fill={filled ? 'currentColor' : 'none'} />
    <path d="m9 12 2.2 2.2L15.5 10" stroke={filled ? 'var(--on-ink, #fff)' : 'currentColor'} />
  </Svg>
)
export const IconFlag = (p: P) => (
  <Svg {...p}>
    <path d="M5 21V4" />
    <path d="M5 4.5h11l-2 4 2 4H5" />
  </Svg>
)
export const IconChevronUp = (p: P) => (
  <Svg {...p}>
    <path d="m6 15 6-6 6 6" />
  </Svg>
)
export const IconQr = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.6" />
    <rect x="14" y="3.5" width="6.5" height="6.5" rx="1.6" />
    <rect x="3.5" y="14" width="6.5" height="6.5" rx="1.6" />
    <path d="M14 14h2.5v2.5H14zM18 18h2.5v2.5H18zM14 18.5v2M18.5 14h2" />
  </Svg>
)
export const IconUsers = (p: P) => (
  <Svg {...p}>
    <circle cx="9" cy="8.5" r="3.5" />
    <path d="M2.5 19.5c.6-3.3 3.3-5.5 6.5-5.5s5.9 2.2 6.5 5.5" />
    <circle cx="17" cy="9.5" r="2.7" />
    <path d="M16.5 14.2c2.6.2 4.5 2 5 4.6" />
  </Svg>
)
