import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/store'
import { useComposer } from '../components/Composer'
import { FeedList } from '../components/FeedList'
import { Avatar, Tabs } from '../components/ui'
import { discoverFeed, followingFeed } from '../lib/feed'

type Mode = 'following' | 'discover'

export default function Home() {
  const { state, dispatch, me } = useStore()
  const compose = useComposer()
  const [mode, setMode] = useState<Mode>('following')
  // Remember when you last looked, then mark now as seen.
  const [seenAt] = useState(state.lastSeen)
  useEffect(() => {
    dispatch({ type: 'markSeen', at: Date.now() })
  }, [dispatch])

  if (!me) return null
  const items = mode === 'following' ? followingFeed(state.posts, me) : discoverFeed(state.posts, Object.keys(me.fanSince))

  return (
    <>
      <header className="page-head sticky">
        <h2>Home</h2>
        <Tabs<Mode>
          tabs={[
            { id: 'following', label: 'Following' },
            { id: 'discover', label: 'Discover' },
          ]}
          value={mode}
          onChange={setMode}
        />
      </header>
      {me.handle === 'guest' && (
        <div className="guest-banner">
          <div>
            <strong>You’re exploring as a guest</strong>
            <div className="muted small">Pick your artists and build your Fan Passport in 30 seconds.</div>
          </div>
          <Link to="/welcome" className="btn primary small">
            Create profile
          </Link>
        </div>
      )}
      <button className="compose-inline" onClick={() => compose()}>
        <Avatar user={me} size={36} />
        <span className="muted">What’s happening in your fandom?</span>
      </button>
      <FeedList
        items={items}
        caughtUpAfter={mode === 'following' ? seenAt : undefined}
        empty="Follow some fans or join a fandom to fill your feed."
      />
    </>
  )
}
