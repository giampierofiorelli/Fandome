import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../store/store'
import { findInvite } from '../store/reducer'
import { useToast } from '../components/Toast'
import { Avatar } from '../components/ui'

export const PENDING_INVITE_KEY = 'fandome:pendingInvite'

// Opening an invite link: create your personal profile if needed, then accept
// to become an admin of the page.
export default function Invite() {
  const { code = '' } = useParams()
  const { state, dispatch, me, userById } = useStore()
  const toast = useToast()
  const nav = useNavigate()
  const found = findInvite(state, code)

  if (!found || found.invite.status !== 'pending') {
    return (
      <div className="hello">
        <div className="eyebrow">Invite</div>
        <h1 className="display">This invite isn’t valid anymore</h1>
        <p className="muted">It may have been used or cancelled. Ask the page owner for a new link.</p>
        <Link to="/" className="pill-btn glass">
          Go home
        </Link>
      </div>
    )
  }
  const { page, invite } = found
  const from = userById(invite.invitedBy)
  const forSomeoneElse = invite.toUserId && invite.toUserId !== me?.id
  const guest = !me || me.handle === 'guest'

  return (
    <div className="invite">
      <div className="glass-card center invite-card">
        <Avatar user={page} size={80} />
        <div className="eyebrow">{page.page?.category}</div>
        <h1 className="display">{page.name}</h1>
        <p className="muted">
          {from ? `${from.name} (@${from.handle})` : 'The team'} invited you to help run this page as an <b>admin</b>. You’ll manage it from your personal account.
        </p>
        {forSomeoneElse ? (
          <p className="muted">This invite is for @{userById(invite.toUserId!)?.handle}.</p>
        ) : guest ? (
          <>
            <button
              className="pill-btn ink big"
              onClick={() => {
                try {
                  localStorage.setItem(PENDING_INVITE_KEY, code)
                } catch {
                  // storage unavailable: user can reopen the link after signing up
                }
                nav('/welcome')
              }}
            >
              Create your profile to accept
            </button>
            <p className="muted small">First you make your own fan profile. Then you come back here and accept.</p>
          </>
        ) : (
          <div className="hero-actions center">
            <button
              className="pill-btn ink big"
              onClick={() => {
                dispatch({ type: 'acceptInvite', code, at: Date.now() })
                toast(`You’re now an admin of ${page.name}`)
                nav(`/pages/${page.handle}/manage`)
              }}
            >
              Accept
            </button>
            {invite.toUserId && (
              <button className="pill-btn glass big" onClick={() => dispatch({ type: 'declineInvite', code })}>
                Decline
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
