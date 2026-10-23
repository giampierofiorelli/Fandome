import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { artists } from '../data/seed'
import { starterPack } from '../lib/packs'
import { PENDING_INVITE_KEY } from './Invite'
import { useStore } from '../store/store'
import { Avatar } from '../components/ui'
import { IconCheck, IconChevronLeft } from '../components/icons'
import { spring, springSnappy } from '../lib/motion'

const STEPS = 3

// Immersive onboarding: one question per screen, pill choices, Skip / Next.
// Step 3 is a Bluesky-style starter pack so the feed is alive on day one.
export default function Onboarding() {
  const { state, dispatch, userById } = useStore()
  const nav = useNavigate()
  const [step, setStep] = useState(0)
  // GDPR (Italy): consent to data processing from age 14; terms accepted before joining.
  const [agreed, setAgreed] = useState(false)
  const [dir, setDir] = useState(1)
  const [name, setName] = useState('')
  const [handle, setHandle] = useState('')
  const [location, setLocation] = useState('')
  const [picked, setPicked] = useState<string[]>([])
  const [follow, setFollow] = useState<string[] | null>(null)
  const packUsers = Array.from(new Set(picked.flatMap((a) => starterPack(state.posts, state.users, a).map((m) => m.userId))))
  const following = follow ?? packUsers
  const cleanHandle = handle.toLowerCase().replace(/[^a-z0-9_.]/g, '')

  const go = (n: number) => {
    setDir(n > step ? 1 : -1)
    setStep(n)
  }
  const canNext = step === 0 ? name.trim().length > 0 && cleanHandle.length >= 3 && agreed : step === 1 ? picked.length > 0 : true
  const finish = () => {
    dispatch({ type: 'onboard', name: name.trim(), handle: cleanHandle, location: location.trim(), artistIds: picked, followIds: following })
    // Came from an invite link? Go back to it so they can accept.
    let invite: string | null = null
    try {
      invite = localStorage.getItem(PENDING_INVITE_KEY)
      localStorage.removeItem(PENDING_INVITE_KEY)
    } catch {
      invite = null
    }
    nav(invite ? `/invite/${invite}` : '/')
  }

  return (
    <div className="ob">
      <div className="ob-top">
        {step > 0 ? (
          <button className="glass-circle" onClick={() => go(step - 1)} aria-label="Back">
            <IconChevronLeft size={18} />
          </button>
        ) : (
          <span className="ob-brand dotmatrix">FANDOME</span>
        )}
        <div className="ob-progress">
          {Array.from({ length: STEPS }, (_, i) => (
            <span key={i}>
              <motion.i initial={false} animate={{ scaleX: i <= step ? 1 : 0 }} transition={spring} />
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait" custom={dir} initial={false}>
        <motion.section
          key={step}
          className="ob-body"
          custom={dir}
          initial={{ opacity: 0, x: dir * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -40 }}
          transition={spring}
        >
          {step === 0 && (
            <>
              <div className="ob-kicker">Step 1 · You</div>
              <h1 className="ob-q">
                Your fandom.
                <br />
                <span className="soft">All in one place.</span>
              </h1>
              <div className="ob-fields">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" aria-label="Display name" />
                <input value={handle} onChange={(e) => setHandle(e.target.value)} placeholder="@handle" aria-label="Handle" />
                <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City (for local meetups)" aria-label="City" />
              </div>
              <label className="ob-agree">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                <span>
                  I’m 14 or older and I accept the{' '}
                  <a href="#/terms" target="_blank" rel="noopener">
                    terms
                  </a>{' '}
                  and the{' '}
                  <a href="#/privacy" target="_blank" rel="noopener">
                    privacy policy
                  </a>
                  .
                </span>
              </label>
              <p className="ob-note">Independent fan community — not affiliated with any artist.</p>
            </>
          )}
          {step === 1 && (
            <>
              <div className="ob-kicker">Select all that apply</div>
              <h1 className="ob-q">Who are you a fan of?</h1>
              <div className="ob-pills">
                {artists.map((a, i) => {
                  const on = picked.includes(a.id)
                  return (
                    <motion.button
                      key={a.id}
                      className={on ? 'ob-pill on' : 'ob-pill'}
                      style={{ ['--tint' as string]: a.color }}
                      onClick={() => setPicked(on ? picked.filter((x) => x !== a.id) : [...picked, a.id])}
                      whileTap={{ scale: 0.95 }}
                      transition={springSnappy}
                    >
                      <span className="ob-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="ob-name">{a.name}</span>
                      <AnimatePresence>
                        {on && (
                          <motion.span className="ob-check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: 'spring', bounce: 0.5, visualDuration: 0.3 }}>
                            <IconCheck size={14} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  )
                })}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="ob-kicker">Starter pack · this month’s most active fans</div>
              <h1 className="ob-q">Follow these fans so your feed isn’t empty</h1>
              <p className="ob-note ob-explain">Picked automatically: the fans whose posts about your artists got the most likes, replies and reposts in the last 30 days. Not the most followed, the most engaging. Unfollow anyone, anytime.</p>
              <div className="ob-people">
                {packUsers.map((id) => {
                  const u = userById(id)
                  const on = following.includes(id)
                  return (
                    <button key={id} className={on ? 'ob-person on' : 'ob-person'} onClick={() => setFollow(on ? following.filter((x) => x !== id) : [...following, id])}>
                      <Avatar user={u} size={40} />
                      <span className="grow">
                        <strong>{u?.name}</strong>
                        <span className="ob-bio">{u?.bio}</span>
                      </span>
                      <span className="ob-toggle">{on ? <IconCheck size={14} /> : '+'}</span>
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </motion.section>
      </AnimatePresence>

      <div className="ob-bar">
        <button className="ob-skip" onClick={() => nav('/')}>
          Skip
        </button>
        <button className="pill-btn light big" disabled={!canNext} onClick={() => (step < STEPS - 1 ? go(step + 1) : finish())}>
          {step < STEPS - 1 ? 'Next' : `Start · ${following.length} following`} <span aria-hidden>›</span>
        </button>
      </div>
    </div>
  )
}
