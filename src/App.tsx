import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useStore } from './store/store'
import { useComposer } from './components/Composer'
import { Avatar } from './components/ui'
import { Sidebar } from './components/Sidebar'
import { IconHeadphones, IconHome, IconPlus, IconSearch, IconSettings, IconSparkle, IconUser } from './components/icons'
import { artistById } from './lib/util'
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

// Nav link with a shared "pill" that glides to the active item.
function NavItem({ to, end, icon, label, pill }: { to: string; end?: boolean; icon: ReactNode; label: ReactNode; pill: string }) {
  return (
    <NavLink to={to} end={end} aria-label={typeof label === 'string' ? label : undefined}>
      {({ isActive }) => (
        <>
          {isActive && <motion.span layoutId={pill} className="nav-pill" transition={spring} />}
          <span className="nav-icon">{icon}</span>
          <span className="nav-label">{label}</span>
        </>
      )}
    </NavLink>
  )
}

export default function App() {
  const { me } = useStore()
  const compose = useComposer()
  const loc = useLocation()

  if (!me && !loc.pathname.startsWith('/welcome') && !loc.pathname.startsWith('/starter')) {
    return <Navigate to="/welcome" replace />
  }
  if (loc.pathname.startsWith('/welcome')) return <Onboarding />

  return (
    <div className="shell">
      <nav className="leftnav" aria-label="Main">
        <Link to="/" className="logo">
          <IconSparkle size={22} /> <span>Fandome</span>
        </Link>
        <NavItem to="/" end icon={<IconHome size={22} />} label="Home" pill="nav" />
        <NavItem to="/explore" icon={<IconSearch size={22} />} label="Explore" pill="nav" />
        <NavItem to="/party/party-confessions" icon={<IconHeadphones size={22} />} label="Listening party" pill="nav" />
        {me && <NavItem to={`/u/${me.handle}`} icon={<IconUser size={22} />} label="Profile" pill="nav" />}
        <NavItem to="/settings" icon={<IconSettings size={22} />} label="Settings" pill="nav" />
        <div className="nav-fandoms">
          <div className="nav-caption">Your fandoms</div>
          {me &&
            Object.keys(me.fanSince).map((id) => {
              const a = artistById(id)
              return a ? <NavItem key={id} to={`/a/${id}`} icon={<span className="dot" style={{ background: a.color }} />} label={a.name} pill="nav" /> : null
            })}
        </div>
        <button className="btn primary wide" onClick={() => compose()}>
          <IconPlus size={18} /> <span>Post</span>
        </button>
        {me && (
          <Link to={`/u/${me.handle}`} className="nav-me">
            <Avatar user={me} size={32} />
            <span>
              <strong>{me.name}</strong>
              <br />
              <span className="muted small">@{me.handle}</span>
            </span>
          </Link>
        )}
      </nav>

      <main className="center">
        <div className="proto-banner">Prototype · demo data · independent fan platform, not affiliated with any artist</div>
        {/* Keyed by path: each page fades up into place. No exit, so navigation never waits. */}
        <motion.div key={loc.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={spring}>
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      </main>

      <aside className="rightcol">
        <Sidebar />
      </aside>

      <nav className="bottomnav" aria-label="Mobile">
        <NavItem to="/" end icon={<IconHome size={24} />} label="Home" pill="tabbar" />
        <NavItem to="/explore" icon={<IconSearch size={24} />} label="Explore" pill="tabbar" />
        <motion.button className="fab" onClick={() => compose()} aria-label="New post" whileTap={{ scale: 0.9 }} transition={spring}>
          <IconPlus size={24} />
        </motion.button>
        <NavItem to="/party/party-confessions" icon={<IconHeadphones size={24} />} label="Party" pill="tabbar" />
        {me && <NavItem to={`/u/${me.handle}`} icon={<IconUser size={24} />} label="Profile" pill="tabbar" />}
      </nav>
    </div>
  )
}
