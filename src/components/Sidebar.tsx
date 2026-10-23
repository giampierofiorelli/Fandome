import { Link, useLocation } from 'react-router-dom'
import { concerts, starterPacks } from '../data/seed'
import { useStore } from '../store/store'
import { artistById, formatDate, isUpcoming, trending } from '../lib/util'

export function Trending({ artistId, title }: { artistId?: string; title?: string }) {
  const { state } = useStore()
  const list = trending(state.posts, { artistId })
  const artist = artistById(artistId)
  return (
    <section className="card">
      <h3>{title ?? (artist ? `Trending in ${artist.name}` : 'Trending in your fandoms')}</h3>
      {list.length === 0 && <p className="muted small">Nothing yet. Start a #tag!</p>}
      <ol className="trend-list">
        {list.map((t, i) => (
          <li key={t.tag}>
            <Link to={`/explore?tag=${encodeURIComponent(t.tag)}`}>
              <span className="muted small">{i + 1} · Trending</span>
              <strong>#{t.tag}</strong>
              <span className="muted small">{t.posts} posts</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Sidebar() {
  const { me } = useStore()
  // Sidebar lives outside <Routes>, so read the artist from the path directly.
  const artistId = useLocation().pathname.match(/^\/a\/([^/]+)/)?.[1]
  const mine = me ? Object.keys(me.fanSince) : []
  const upcoming = concerts.filter((c) => isUpcoming(c.date) && (mine.includes(c.artistId) || !mine.length))
  const packs = starterPacks.filter((p) => !mine.includes(p.artistId)).slice(0, 3)
  return (
    <>
      <Trending artistId={artistId} />
      {upcoming.length > 0 && (
        <section className="card">
          <h3>Upcoming shows</h3>
          {upcoming.map((c) => (
            <Link key={c.id} to={`/c/${c.id}`} className="side-row">
              <span className="dot" style={{ background: artistById(c.artistId)?.color }} />
              <span>
                <strong>{artistById(c.artistId)?.name}</strong> · {c.city}
                <br />
                <span className="muted small">{formatDate(c.date)} · demo date</span>
              </span>
            </Link>
          ))}
        </section>
      )}
      {packs.length > 0 && (
        <section className="card">
          <h3>Starter packs</h3>
          {packs.map((p) => (
            <Link key={p.id} to={`/starter/${p.id}`} className="side-row">
              <span className="dot" style={{ background: artistById(p.artistId)?.color }} />
              <span>
                {p.title}
                <br />
                <span className="muted small">{p.userIds.length} fans to follow</span>
              </span>
            </Link>
          ))}
        </section>
      )}
      <p className="muted small foot-note">Fandome is an independent fan community. Artist names identify topics only.</p>
    </>
  )
}
