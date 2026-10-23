import { motion } from 'motion/react'
import { useEffect, type ReactNode } from 'react'
import { NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useStore } from './store/store'
import { useComposer } from './components/Composer'
import { IconHeadphones, IconHome, IconPlus, IconSearch, IconUser } from './components/icons'
import { seedPosts, seedUsers } from './data/seed'
import { starterPack } from './lib/packs'
import { spring } from './lib/motion'
import Home from './pages/Home'
import Explore from './pages/Explore'
import ArtistPage from './pages/Artist'
import ConcertPage from './pages/Concert'
import Profile from './pages/Profile'
import Thread from './pages/Thread'
import Party from './pages/Party'
import StarterPackPage from './pages/StarterPack'
import Settings from './pages/Settings'
import Onboarding from './pages/Onboarding'
import PageNew from './pages/PageNew'
import PageManage from './pages/PageManage'
import Invite from './pages/Invite'

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

export default function App() {
  const { me, dispatch } = useStore()
  const compose = useComposer()
  const loc = useLocation()

  // New page starts at the top (keep position only for back/forward).
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [loc.pathname])

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
        <motion.div key={loc.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={spring}>
          <Routes location={loc}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/a/:artistId" element={<ArtistPage />} />
            <Route path="/c/:concertId" element={<ConcertPage />} />
            <Route path="/u/:handle" element={<Profile />} />
            <Route path="/p/:postId" element={<Thread />} />
            <Route path="/party/:partyId" element={<Party />} />
            <Route path="/starter/:packId" element={<StarterPackPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pages/new" element={<PageNew />} />
            <Route path="/pages/:handle/manage" element={<PageManage />} />
            <Route path="/invite/:code" element={<Invite />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
        <p className="legal">Fandome prototype · demo data · independent fan community, not affiliated with any artist</p>
      </main>

      <nav className="tabbar" aria-label="Main">
        <Tab to="/" end icon={<IconHome size={22} />} label="Home" />
        <Tab to="/explore" icon={<IconSearch size={22} />} label="Explore" />
        <motion.button className="tabbar-plus" onClick={() => compose()} aria-label="New post" whileTap={{ scale: 0.88 }} transition={spring}>
          <IconPlus size={22} />
        </motion.button>
        <Tab to="/party/party-confessions" icon={<IconHeadphones size={22} />} label="Listening party" />
        {me && <Tab to={`/u/${me.handle}`} icon={<IconUser size={22} />} label="Profile" />}
      </nav>
    </>
  )
}
