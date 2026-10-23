import { Link, useSearchParams } from 'react-router-dom'
import { artists, concerts } from '../data/seed'
import { useStore } from '../store/store'
import { FeedList } from '../components/FeedList'
import { Avatar } from '../components/ui'
import { tagFeed } from '../lib/feed'
import { IconArrowUpRight, IconPin, IconSearch } from '../components/icons'
import { artistById, formatDate, trending } from '../lib/util'

export default function Explore() {
  const { state } = useStore()
  const [params, setParams] = useSearchParams()
  const tag = params.get('tag')
  const q = (params.get('q') ?? '').trim().toLowerCase()

  const people = q ? state.users.filter((u) => `${u.name} ${u.handle} ${u.bio} ${u.location}`.toLowerCase().includes(q)) : []
  const rooms = q ? artists.filter((a) => a.name.toLowerCase().includes(q)) : []
  const shows = q ? concerts.filter((c) => `${c.city} ${c.venue} ${c.tour} ${c.date.slice(0, 4)}`.toLowerCase().includes(q)) : []
  const posts = q ? state.posts.filter((p) => `${p.text} ${p.translation ?? ''}`.toLowerCase().includes(q)) : []

  const trends = trending(state.posts, { limit: 6 })
  return (
    <>
      <header className="hello">
        <div className="eyebrow">Explore</div>
        <h1 className="display">
          Find your <span className="display-strong">people</span>
        </h1>
        <div className="search-wrap">
          <IconSearch size={18} />
          <input
            className="search"
            type="search"
            placeholder="Fans, fandoms, shows… try “Turin”"
            value={params.get('q') ?? ''}
            onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})}
          />
        </div>
      </header>

      {tag && (
        <>
          <div className="section-head">
            <h2>#{tag}</h2>
          </div>
          <FeedList items={tagFeed(state.posts, tag)} empty="No posts with this tag yet." />
        </>
      )}

      {q && (
        <>
          {rooms.length + people.length + shows.length > 0 && (
            <div className="glass-card list">
              {rooms.map((a) => (
                <Link key={a.id} to={`/a/${a.id}`} className="row-item">
                  <span className="dot big" style={{ background: a.color }} />
                  <span className="grow">
                    <strong>{a.name}</strong>
                    <span className="muted small block">Fan room · {a.tagline}</span>
                  </span>
                </Link>
              ))}
              {people.map((u) => (
                <Link key={u.id} to={`/u/${u.handle}`} className="row-item">
                  <Avatar user={u} size={36} />
                  <span className="grow">
                    <strong>{u.name}</strong>
                    <span className="muted small block">@{u.handle}</span>
                  </span>
                </Link>
              ))}
              {shows.map((c) => (
                <Link key={c.id} to={`/c/${c.id}`} className="row-item">
                  <span className="icon-bubble">
                    <IconPin size={16} />
                  </span>
                  <span className="grow">
                    <strong>
                      {artistById(c.artistId)?.name} · {c.city}
                    </strong>
                    <span className="muted small block">{formatDate(c.date)}</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
          <FeedList items={posts.map((p) => ({ key: p.id, post: p, at: p.createdAt }))} empty={people.length + rooms.length + shows.length ? ' ' : 'No results.'} />
        </>
      )}

      {!tag && !q && (
        <>
          <div className="section-head">
            <h2>Trending</h2>
          </div>
          <div className="trend-grid">
            {trends.map((t, i) => (
              <Link key={t.tag} to={`/explore?tag=${encodeURIComponent(t.tag)}`} className="trend-pill">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="trend-tag">#{t.tag}</span>
                <span className="muted small">{t.posts} posts</span>
              </Link>
            ))}
          </div>
          <div className="section-head">
            <h2>Fan rooms</h2>
          </div>
          <div className="room-grid">
            {artists.map((a) => (
              <Link key={a.id} to={`/a/${a.id}`} className="room-tile" style={{ ['--tint' as string]: a.color }}>
                <span className="room-name">{a.name}</span>
                <span className="room-sub">{a.tagline}</span>
                <span className="room-go">
                  <IconArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  )
}
