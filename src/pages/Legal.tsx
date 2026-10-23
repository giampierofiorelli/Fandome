import { AnimatePresence, motion } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import { CONTACT_EMAIL, OWNER_NAME } from '../config'
import { setConsent, useConsent } from '../lib/prefs'
import { spring } from '../lib/motion'

const owner = OWNER_NAME || '[site owner’s name, to be added]'
const email = CONTACT_EMAIL || '[contact email, to be added]'

// First visit: ask before anything from other companies loads. Both choices are
// equally easy, closing means "only essential", and nothing is pre-ticked.
export function ConsentBanner() {
  const consent = useConsent()
  const loc = useLocation()
  const hidden = consent || loc.pathname === '/privacy' || loc.pathname === '/terms'
  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div className="consent" role="dialog" aria-label="Privacy choices" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={spring}>
          <button className="consent-x" aria-label="Close: only essential" onClick={() => setConsent(false)}>
            ×
          </button>
          <strong>Your privacy</strong>
          <p>
            Fandome uses only what it needs to work, saved on your device. No ads, no analytics. Videos and music players (YouTube, Spotify, Instagram…) come from other companies that may set cookies and see your IP: load them automatically?
          </p>
          <div className="consent-actions">
            <button className="pill-btn ink" onClick={() => setConsent(false)}>
              Only essential
            </button>
            <button className="pill-btn ink" onClick={() => setConsent(true)}>
              Allow media
            </button>
          </div>
          <Link to="/privacy" className="consent-link">
            Privacy policy · change it anytime in Settings
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Privacy() {
  return (
    <article className="legal-page">
      <div className="eyebrow">Privacy policy</div>
      <h1 className="display">Your data, <span className="display-strong">plainly</span></h1>
      <p className="muted small">Draft for the prototype · last updated October 2026 · to be reviewed by a lawyer before public launch.</p>

      <h2>Who is responsible</h2>
      <p>
        Data controller: {owner}. Contact: {email}. Fandome is an independent fan community, not affiliated with any artist or label.
      </p>

      <h2>What this prototype stores</h2>
      <p>
        Everything you create (profile, posts, photos, voice notes, stories, messages, ratings) is saved <strong>only in your browser</strong> on this device (local storage and IndexedDB). There is
        no Fandome server and no account database yet: we cannot see your content. Deleting the site data in your browser, or “Reset demo” in Settings, deletes it.
      </p>

      <h2>No tracking</h2>
      <p>No advertising, no analytics, no tracking cookies. Fonts are served from this site, not from Google.</p>

      <h2>Hosting</h2>
      <p>
        The site is hosted on GitHub Pages (GitHub Inc.). To deliver the pages GitHub processes your IP address and technical data in its server logs (legitimate interest, art. 6(1)(f) GDPR). See
        GitHub’s privacy statement.
      </p>

      <h2>Embedded media (only with your consent)</h2>
      <p>
        Posts can embed players from YouTube, Spotify, Apple Music, SoundCloud, Deezer, TIDAL, Mixcloud, Audiomack, Vimeo, X, Instagram and TikTok. These load only if you choose “Allow media”, or when
        you tap a single player. They may set cookies and receive your IP address under their own privacy policies (consent, art. 6(1)(a) GDPR). You can withdraw consent anytime in Settings.
      </p>

      <h2>Spotify and concert dates</h2>
      <p>
        If you choose “Connect Spotify”, you log in on Spotify and the access key is kept only in your browser. Concert dates come from Ticketmaster through a nightly job: no personal data is sent;
        ticket links open Ticketmaster’s own site.
      </p>

      <h2>Moderation</h2>
      <p>
        If you report content, the report (what, why, when) is kept to handle it. If moderators remove your content we tell you why and you can appeal. Moderators see only reported public posts;
        private messages are looked at only if one of the people in the chat reports them.
      </p>

      <h2>Age</h2>
      <p>You must be at least 14 to join (art. 2-quinquies of the Italian Privacy Code). Below 14, a parent’s consent is required.</p>

      <h2>Your rights</h2>
      <p>
        Access and copy your data (Settings → Export my data), correct it, delete it (Reset demo), withdraw consent, object. Write to {email}. You can complain to the Italian data protection authority,
        the Garante per la protezione dei dati personali (garanteprivacy.it).
      </p>
      <p className="small">
        <Link to="/terms">Terms & community rules</Link>
      </p>
    </article>
  )
}

export function Terms() {
  return (
    <article className="legal-page">
      <div className="eyebrow">Terms & community rules</div>
      <h1 className="display">How Fandome <span className="display-strong">works</span></h1>
      <p className="muted small">Draft for the prototype · to be reviewed by a lawyer before public launch.</p>

      <h2>Who we are</h2>
      <p>
        Fandome is an independent community for music fans, run by {owner}. It is not affiliated with, authorised or sponsored by any artist, label or rights holder. Contact point for users and
        authorities (EU Digital Services Act, arts. 11–12): {email}, in English or Italian.
      </p>

      <h2>Joining</h2>
      <p>You must be 14 or older. Use your own identity; don’t pretend to be an artist, their team, a promoter, a venue or Fandome.</p>

      <h2>Your content</h2>
      <p>
        You keep the rights to what you post. You let Fandome show it on the service. Post only what you have the right to share: no copyrighted photos, videos or music that aren’t yours or embedded from
        the official platform.
      </p>

      <h2>Community rules</h2>
      <ol className="rules">
        <li>Critique the work or the opinion, never attack the person.</li>
        <li>No hate, threats, harassment or sexual content involving anyone without consent; nothing involving minors.</li>
        <li>Don’t share other people’s private information.</li>
        <li>No spam, scams or ticket touting. Buy tickets only from official sellers, never via messages.</li>
        <li>Meetups only in public places.</li>
      </ol>

      <h2>Reporting and moderation</h2>
      <p>
        Anyone can report a post, story, profile or message with “Report” (notice and action, DSA art. 16). Volunteer moderators, shown with a badge on their profile, review reports for the fandoms they
        look after. When we remove something we tell the author which rule it broke and why (statement of reasons, DSA art. 17), and the author can appeal once; the appeal is reviewed by the site team.
        Threats to someone’s life or safety are reported to the authorities.
      </p>

      <h2>Messages and activity</h2>
      <p>Private messages disappear 24 hours after they’re seen. Messaging and some features need you to have been active in the last 30 days.</p>

      <h2>Liability</h2>
      <p>Fandome is provided as it is, as a prototype. We’re not responsible for what users post, but we act quickly when something illegal is reported.</p>
      <p className="small">
        <Link to="/privacy">Privacy policy</Link>
      </p>
    </article>
  )
}
