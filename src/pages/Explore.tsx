import { Link, useSearchParams } from 'react-router-dom'
import { artists, concerts } from '../data/seed'
import { useStore } from '../store/store'
import { FeedList } from '../components/FeedList'
import { Trending } from '../components/Sidebar'
import { Avatar } from '../components/ui'
import { tagFeed } from '../lib/feed'
import { IconPin, IconSearch } from '../components/icons'
import { artistById, formatDate } from '../lib/util'

export default function Explore() {
  const { state } = useStore()
  const [params, setParams] = useSearchParams()
  const tag = params.get('tag')
  const q = (params.get('q') ?? '').trim().toLowerCase()

  const people = q ? state.users.filter((u) => `${u.name} ${u.handle} ${u.bio} ${u.location}`.toLowerCase().includes(q)) : []
  const rooms = q ? artists.filter((a) => a.name.toLowerCase().includes(q)) : []
  const shows = q ? concerts.filter((c) => `${c.city} ${c.venue} ${c.tour} ${c.date.slice(0, 4)}`.toLowerCase().includes(q)) : []
  const posts = q ? state.posts.filter((p) => `${p.text} ${p.translation ?? ''}`.toLowerCase().includes(q)) : []

  return (
    <>
      <header className="page-head sticky">
        <div className="search-wrap">
          <IconSearch size={18} />
          <input
          className="search"
          type="search"
          placeholder="Search fans, fandoms, shows, posts… try “Turin” or “vinyl”"
          value={params.get('q') ?? ''}
          onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})}
          />
        </div>
      </header>

      {tag && (
        <>
          <h2 className="section-title">#{tag}</h2>
          <FeedList items={tagFeed(state.posts, tag)} empty="No posts with this tag yet." />
        </>
      )}

      {q && (
        <>
          {rooms.length > 0 && <h3 className="section-title">Fandoms</h3>}
          {rooms.map((a) => (
            <Link key={a.id} to={`/a/${a.id}`} className="list-row">
              <span className="dot big" style={{ background: a.color }} /> <strong>{a.name}</strong> <span className="muted small">{a.tagline}</span>
            </Link>
          ))}
          {people.length > 0 && <h3 className="section-title">People</h3>}
          {people.map((u) => (
            <Link key={u.id} to={`/u/${u.handle}`} className="list-row">
              <Avatar user={u} size={32} /> <strong>{u.name}</strong> <span className="muted">@{u.handle}</span>
            </Link>
          ))}
          {shows.length > 0 && <h3 className="section-title">Shows</h3>}
          {shows.map((c) => (
            <Link key={c.id} to={`/c/${c.id}`} className="list-row">
              <IconPin size={15} /> <strong>{artistById(c.artistId)?.name}</strong> · {c.city} · <span className="muted">{formatDate(c.date)}</span>
            </Link>
          ))}
          {posts.length > 0 && <h3 className="section-title">Posts</h3>}
          <FeedList items={posts.map((p) => ({ key: p.id, post: p, at: p.createdAt }))} empty={people.length + rooms.length + shows.length ? ' ' : 'No results.'} />
        </>
      )}

      {!tag && !q && (
        <>
          <Trending title="Trending across Fandome" />
          <h3 className="section-title">Fandom rooms</h3>
          <div className="artist-grid">
            {artists.map((a) => (
              <Link key={a.id} to={`/a/${a.id}`} className="artist-tile" style={{ borderColor: a.color }}>
                <span className="dot big" style={{ background: a.color }} />
                <strong>{a.name}</strong>
                <span className="muted small">{a.tagline}</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  )
}
