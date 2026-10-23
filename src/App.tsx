import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useStore } from './store/store'
import { useComposer } from './components/Composer'
import { Avatar } from './components/ui'
import { Sidebar } from './components/Sidebar'
import { artistById } from './lib/util'
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
          ✦ Fandome
        </Link>
        <NavLink to="/" end>🏠 <span>Home</span></NavLink>
        <NavLink to="/explore"># <span>Explore</span></NavLink>
        <NavLink to="/party/party-confessions">🎧 <span>Listening party</span></NavLink>
        {me && <NavLink to={`/u/${me.handle}`}>👤 <span>Profile</span></NavLink>}
        <NavLink to="/settings">⚙️ <span>Settings</span></NavLink>
        <div className="nav-fandoms">
          <div className="muted small">Your fandoms</div>
          {me &&
            Object.keys(me.fanSince).map((id) => {
              const a = artistById(id)
              return a ? (
                <NavLink key={id} to={`/a/${id}`}>
                  <span className="dot" style={{ background: a.color }} /> <span>{a.name}</span>
                </NavLink>
              ) : null
            })}
        </div>
        <button className="btn primary wide" onClick={() => compose()}>
          Post
        </button>
        {me && (
          <Link to={`/u/${me.handle}`} className="nav-me">
            <Avatar user={me} size={32} /> <span>@{me.handle}</span>
          </Link>
        )}
      </nav>

      <main className="center">
        <div className="proto-banner">Prototype · demo data · independent fan platform, not affiliated with any artist</div>
        <Routes>
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
      </main>

      <aside className="rightcol">
        <Sidebar />
      </aside>

      <nav className="bottomnav" aria-label="Mobile">
        <NavLink to="/" end aria-label="Home">🏠</NavLink>
        <NavLink to="/explore" aria-label="Explore">#</NavLink>
        <button className="fab" onClick={() => compose()} aria-label="New post">＋</button>
        <NavLink to="/party/party-confessions" aria-label="Listening party">🎧</NavLink>
        {me && <NavLink to={`/u/${me.handle}`} aria-label="Profile">👤</NavLink>}
      </nav>
    </div>
  )
}
