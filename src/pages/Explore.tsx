import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { artists, concerts, demoAlbumBuzz } from '../data/seed'
import { useStore } from '../store/store'
import { FeedList } from '../components/FeedList'
import { AlbumCover, ArtistDisc, artistPhoto, Avatar, photoPos } from '../components/ui'
import { discussedAlbums, tagFeed } from '../lib/feed'
import { DotCrown } from '../components/DiscoLogo'
import { IconArrowUpRight, IconPin, IconSearch } from '../components/icons'
import { albumById, artistById, formatDate, trending } from '../lib/util'
import { suggestArtists } from '../lib/suggest'

export default function Explore() {
  const { state, me, dispatch } = useStore()
  const [params, setParams] = useSearchParams()
  const tag = params.get('tag')
  const q = (params.get('q') ?? '').trim().toLowerCase()

  const people = q ? state.users.filter((u) => `${u.name} ${u.handle} ${u.bio} ${u.location}`.toLowerCase().includes(q)) : []
  const fold = (t: string) => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const rooms = q ? artists.filter((a) => fold(a.name).includes(fold(q))) : []
  const shows = q ? concerts.filter((c) => `${c.city} ${c.venue} ${c.tour} ${c.date.slice(0, 4)}`.toLowerCase().includes(q)) : []
  const posts = q ? state.posts.filter((p) => `${p.text} ${p.translation ?? ''}`.toLowerCase().includes(q)) : []

  const trends = trending(state.posts, { limit: 6 })
  // Albums people are talking about: last 24 hours, or the last week when it's quiet.
  const discussedDay = discussedAlbums(state.posts, Date.now(), 24, demoAlbumBuzz)
  const discussed = (discussedDay.length >= 3 ? discussedDay : discussedAlbums(state.posts, Date.now(), 24 * 7, demoAlbumBuzz)).slice(0, 5)
  const discussedWindow = discussedDay.length >= 3 ? 'today' : 'this week'
  const suggestions = me ? suggestArtists(me, state.users, artists) : []
  const [allRooms, setAllRooms] = useState(false)
  // Your rooms first, then A–Z; the full list on request.
  const mine = me ? Object.keys(me.fanSince) : []
  const sortedRooms = [...artists].sort((x, y) => Number(mine.includes(y.id)) - Number(mine.includes(x.id)) || x.name.localeCompare(y.name, 'en', { sensitivity: 'base' }))
  const shownRooms = allRooms ? sortedRooms : sortedRooms.slice(0, Math.max(8, mine.length))
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
                  <ArtistDisc id={a.id} size={44} />
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
          {suggestions.length > 0 && (
            <>
              <div className="section-head">
                <h2>Artists you might like</h2>
              </div>
              <div className="glass-card list">
                {suggestions.map(({ artist: a, reason }) => (
                  <div key={a.id} className="row-item">
                    <Link to={`/a/${a.id}`} className="suggest-link">
                      <ArtistDisc id={a.id} size={44} />
                      <span className="grow">
                        <strong>{a.name}</strong>
                        <span className="muted small block">{reason}</span>
                      </span>
                    </Link>
                    <button className="pill-btn light small" onClick={() => dispatch({ type: 'followArtist', artistId: a.id })}>
                      Follow
                    </button>
                  </div>
                ))}
              </div>
              <p className="muted small suggest-why">
                Based on who you follow and what fans of your artists follow.{' '}
                <Link to="/terms#feeds" className="link-btn">
                  How it works
                </Link>
              </p>
            </>
          )}
          {discussed.length > 0 && (
            <>
              <div className="section-head">
                <h2>Most discussed albums</h2>
                <span className="muted small">{discussedWindow}</span>
              </div>
              <div className="album-chart">
                {discussed.map((d, i) => {
                  const al = albumById(d.albumId)
                  if (!al) return null
                  const artist = artistById(al.artistId)
                  const talking = `${d.people} ${d.people === 1 ? 'fan' : 'fans'} talking`
                  if (i === 0)
                    return (
                      <Link key={al.id} to={`/album/${al.id}`} className="chart-top" style={{ ['--tint' as string]: artist?.color }}>
                        <span className="chart-num" aria-label="Number 1">
                          1
                        </span>
                        <AlbumCover album={al} size={104} />
                        <span className="chart-top-info">
                          <DotCrown pitch={3} />
                          <strong className="chart-top-title">{al.title}</strong>
                          <span className="chart-artist">
                            <ArtistDisc id={al.artistId} size={20} /> {artist?.name}
                          </span>
                          <span className="chart-talk">{talking}</span>
                        </span>
                      </Link>
                    )
                  return (
                    <Link key={al.id} to={`/album/${al.id}`} className="chart-row">
                      <span className="chart-num">{i + 1}</span>
                      <AlbumCover album={al} size={52} />
                      <span className="grow chart-row-info">
                        <strong>{al.title}</strong>
                        <span className="muted small block">
                          {artist?.name} · {talking}
                        </span>
                      </span>
                      <IconArrowUpRight size={16} />
                    </Link>
                  )
                })}
              </div>
            </>
          )}
          <div className="section-head">
            <h2>Trending tags</h2>
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
            {shownRooms.map((a) => (
              <Link key={a.id} to={`/a/${a.id}`} className="room-tile" style={{ ['--tint' as string]: a.color }}>
                {artistPhoto(a.id) && <img className="room-photo" src={artistPhoto(a.id)!.url} alt="" loading="lazy" decoding="async" style={{ objectPosition: photoPos(artistPhoto(a.id)) }} />}
                <span className="room-name">{a.name}</span>
                <span className="room-sub">{a.tagline}</span>
                <span className="room-go">
                  <IconArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
          {shownRooms.length < sortedRooms.length && (
            <button className="btn rooms-more" onClick={() => setAllRooms(true)}>
              Show all {sortedRooms.length} artists
            </button>
          )}
        </>
      )}
    </>
  )
}
