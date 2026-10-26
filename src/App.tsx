import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useStore } from './store/store'
import { conversations } from './store/reducer'
import { useComposer } from './components/Composer'
import { useToast } from './components/Toast'
import { DiscoLogo } from './components/DiscoLogo'
import { IconGlobe, IconHeadphones, IconMic, IconHome, IconPlus, IconSearch, IconSend, IconUser } from './components/icons'
import { seedPosts, seedUsers } from './data/seed'
import { albumById, artistById, concertById } from './lib/util'
import type { ComposeOpts } from './components/Composer'
import { starterPack } from './lib/packs'
import { spring } from './lib/motion'
import Home from './pages/Home'
import Explore from './pages/Explore'
import ArtistPage from './pages/Artist'
import ConcertPage from './pages/Concert'
import Profile from './pages/Profile'
import Thread from './pages/Thread'
import Party from './pages/Party'
import AlbumPage from './pages/Album'
import StarterPackPage from './pages/StarterPack'
import Settings from './pages/Settings'
import Onboarding from './pages/Onboarding'
import ScenesPage from './pages/Scenes'
import ArtistsPage from './pages/Artists'
import ScenePage from './pages/Scene'
import PageNew from './pages/PageNew'
import PageManage from './pages/PageManage'
import Invite from './pages/Invite'
import { Conversation, Inbox } from './pages/Messages'
import { ConsentBanner, Footer, LegalNotice, Privacy, Terms } from './pages/Legal'
import { ModQueue } from './components/Moderation'

export const GUEST_HANDLE = 'guest'
const GUEST_ARTISTS = ['madonna', 'kylie', 'psb']
const guestFollows = () => {
  const now = Date.now()
  const posts = seedPosts(now)
  return Array.from(new Set(GUEST_ARTISTS.flatMap((a) => starterPack(posts, seedUsers, a, now).map((m) => m.userId))))
}

// Tab with a shared glass pill that glides to the active item.
function Tab({ to, end, icon, label }: { to: string; end?: boolean; icon: ReactNode; label: string }) {
  return (
    <NavLink to={to} end={end} aria-label={label} className="tabbar-item">
      {({ isActive }) => (
        <>
          {isActive && <motion.span layoutId="tabbar-pill" className="tabbar-pill" transition={spring} />}
          <span className="tabbar-icon">{icon}</span>
        </>
      )}
    </NavLink>
  )
}

// Soft blurred colour field behind everything (the "aurora"), plus film grain.
export function Backdrop() {
  return (
    <div className="backdrop" aria-hidden>
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      <span className="grain" />
    </div>
  )
}

// Logo + messages on every page. The logo always leads home.
function TopBar() {
  const { state } = useStore()
  const loc = useLocation()
  const unread = conversations(state, Date.now()).reduce((n, c) => n + c.unread, 0)
  const inMessages = loc.pathname.startsWith('/messages')
  return (
    <div className="home-top">
      <Link to="/" className="dotmatrix brand-mini" aria-label="Fandome home">
        <DiscoLogo text="FANDOME" />
      </Link>
      {!inMessages && (
        <Link to="/messages" className="glass-circle dm-btn" aria-label={unread ? `Messages, ${unread} unread` : 'Messages'}>
          <IconSend size={18} />
          {unread > 0 && (
            <motion.span className="dm-badge" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.5, visualDuration: 0.3 }}>
              {unread}
            </motion.span>
          )}
        </Link>
      )}
    </div>
  )
}

// Reload for a new version without replaying the intro.
function reloadQuietly() {
  try {
    sessionStorage.setItem(SKIP_INTRO, '1')
  } catch {
    // ignore
  }
  location.reload()
}

// Keep phones on the latest version: the app is a single page that is rarely
// reloaded, so check for a newer build when you come back to it and every few minutes.
function useAutoUpdate() {
  const toast = useToast()
  useEffect(() => {
    const current = document.querySelector<HTMLScriptElement>('script[src*="/assets/index-"]')?.src.match(/index-[\w-]+\.js/)?.[0]
    if (!current) return // dev server
    let offered = false
    const check = async (reloadNow: boolean) => {
      try {
        const html = await (await fetch(`${import.meta.env.BASE_URL}index.html?v=${Date.now()}`, { cache: 'no-store' })).text()
        const latest = html.match(/index-[\w-]+\.js/)?.[0]
        if (!latest || latest === current) return
        if (reloadNow) return reloadQuietly()
        if (offered) return
        offered = true
        toast('A new version of Fandome is ready', { label: 'Refresh', onClick: reloadQuietly })
      } catch {
        // offline: try again later
      }
    }
    const onVisible = () => document.visibilityState === 'visible' && check(true)
    document.addEventListener('visibilitychange', onVisible)
    const t = setInterval(() => document.visibilityState === 'visible' && check(false), 5 * 60_000)
    void check(true)
    return () => {
      document.removeEventListener('visibilitychange', onVisible)
      clearInterval(t)
    }
  }, [toast])
}

// Every time the site is opened (or reloaded): the animated logo, big, for a moment. Tap to skip.
// Not after the automatic reload to a new version.
const SKIP_INTRO = 'fandome:skipIntro'
function Intro() {
  const [show, setShow] = useState(() => {
    try {
      if (sessionStorage.getItem(SKIP_INTRO)) {
        sessionStorage.removeItem(SKIP_INTRO)
        return false
      }
    } catch {
      // storage blocked: just show it
    }
    return true
  })
  useEffect(() => {
    if (!show) return
    const t = setTimeout(() => setShow(false), 2300)
    return () => clearTimeout(t)
  }, [show])
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="intro" onClick={() => setShow(false)} initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} aria-hidden>
          <motion.div className="dotmatrix intro-logo" initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.04 }} transition={spring}>
            <DiscoLogo text="FANDOME" fast />
          </motion.div>
          <motion.p className="intro-tag" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
            by music lovers, for music lovers
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const { me, dispatch } = useStore()
  const compose = useComposer()
  const loc = useLocation()
  useAutoUpdate()

  // New page starts at the top (keep position only for back/forward).
  useEffect(() => {
    if (!loc.hash) window.scrollTo({ top: 0 }) // links to a section (/legal#report) scroll there instead
  }, [loc.pathname, loc.hash])

  // No login wall: first-time visitors land straight in the app as a guest.
  const needsGuest = !me && !loc.pathname.startsWith('/welcome')
  useEffect(() => {
    if (needsGuest) dispatch({ type: 'onboard', name: 'Guest', handle: GUEST_HANDLE, location: '', artistIds: GUEST_ARTISTS, followIds: guestFollows() })
  }, [needsGuest, dispatch])
  if (needsGuest) return <Backdrop />
  if (loc.pathname.startsWith('/welcome')) return <Onboarding />

  return (
    <>
      <Backdrop />
      <main className="app">
        <TopBar />
        <motion.div key={loc.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={spring}>
          <Routes location={loc}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/scenes" element={<ScenesPage />} />
            <Route path="/scenes/:sceneId" element={<ScenePage />} />
            <Route path="/a/:artistId" element={<ArtistPage />} />
            <Route path="/c/:concertId" element={<ConcertPage />} />
            <Route path="/u/:handle" element={<Profile />} />
            <Route path="/p/:postId" element={<Thread />} />
            <Route path="/party/:partyId" element={<Party />} />
            <Route path="/album/:albumId" element={<AlbumPage />} />
            <Route path="/starter/:packId" element={<StarterPackPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pages/new" element={<PageNew />} />
            <Route path="/pages/:handle/manage" element={<PageManage />} />
            <Route path="/invite/:code" element={<Invite />} />
            <Route path="/messages" element={<Inbox />} />
            <Route path="/messages/:handle" element={<Conversation />} />
            <Route path="/mod" element={<ModQueue />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/legal" element={<LegalNotice />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
        <Footer />
      </main>

      <Intro />
      <ConsentBanner />
      <nav className="tabbar" aria-label="Main">
        <Tab to="/" end icon={<IconHome size={22} />} label="Home" />
        <Tab to="/explore" icon={<IconSearch size={22} />} label="Explore" />
        <Tab to="/artists" icon={<IconMic size={22} />} label="Artists" />
        <motion.button className="tabbar-plus" onClick={() => compose(composeContext(loc.pathname))} aria-label="New post" whileTap={{ scale: 0.88 }} transition={spring}>
          <IconPlus size={22} />
        </motion.button>
        <Tab to="/scenes" icon={<IconGlobe size={22} />} label="Scenes" />
        <Tab to="/party/party-confessions" icon={<IconHeadphones size={22} />} label="Listening party" />
        {me ? <Tab to={`/u/${me.handle}`} icon={<IconUser size={22} />} label="Profile" /> : <Tab to="/welcome" icon={<IconUser size={22} />} label="Join Fandome" />}
      </nav>
    </>
  )
}

// The "+" pre-tags what the page is about (editable in the composer):
// an album page tags its artist and the album, an artist or concert page only the artist.
function composeContext(path: string): ComposeOpts | undefined {
  const [, kind, raw] = path.split('/')
  const id = raw ? decodeURIComponent(raw) : ''
  if (kind === 'album') {
    const al = albumById(id)
    return al ? { artistId: al.artistId, albumId: al.id } : undefined
  }
  if (kind === 'a') return artistById(id) ? { artistId: id } : undefined
  if (kind === 'c') {
    const c = concertById(id)
    return c ? { artistId: c.artistId } : undefined
  }
  return undefined
}
