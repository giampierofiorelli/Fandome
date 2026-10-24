import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CONTACT_EMAIL, OWNER_ADDRESS, OWNER_NAME, OWNER_VAT } from '../config'
import { resetConsent, setConsent, useConsent } from '../lib/prefs'
import { spring } from '../lib/motion'
import { artists } from '../data/seed'
import { PhotoCredit, artistPhoto } from '../components/ui'

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
            Fandome uses only what it needs to work, saved on your device. No analytics, no tracking. Videos and music players (YouTube, Spotify, Instagram…) come from other companies that may set cookies and see your IP: load them automatically?
          </p>
          <p className="consent-note">If you say no, each one stays closed and opens only if you tap it. You can change your choice anytime in Settings or from “Privacy choices” at the bottom of every page.</p>
          <div className="consent-actions">
            <button className="pill-btn ink" onClick={() => setConsent(false)}>
              Only essential
            </button>
            <button className="pill-btn ink" onClick={() => setConsent(true)}>
              Allow media
            </button>
          </div>
          <Link to="/privacy" className="consent-link">
            Privacy policy
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Footer on every page: who runs the site, how to reach us, legal pages, privacy choices, credits.
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <section className="manifesto" aria-label="Why Fandome exists">
        <div className="dotmatrix manifesto-kicker">OUR MANIFESTO</div>
        <p className="manifesto-lead">Made by music lovers, for music lovers, and above all to support the artists.</p>
        <p>
          The internet and social media were born with a promise: open and democratic, for the people who listen and for the people who make music. It hasn’t gone that way. Algorithms and
          playlists decide what we hear, and if you’re not on the right playlist, nobody gets to know you.
        </p>
        <p>
          Fandome wants a truer, more open and more democratic way to discover music and to be discovered: fans bring the artists they love to other fans, and you can always see why
          something is shown to you.
        </p>
        <p>No hate, no bullying, no body shaming: here fans of different artists discover each other’s music, they don’t fight.</p>
      </section>
      <nav className="footer-links" aria-label="Legal">
        <Link to="/legal">Legal notice</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms & rules</Link>
        <button onClick={resetConsent}>Privacy choices</button>
        <Link to="/legal#report">Report illegal content</Link>
      </nav>
      <p>
        © {year} Fandome · by music lovers, for music lovers
        {CONTACT_EMAIL && (
          <>
            {' '}
            · <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </>
        )}
      </p>
      <p>Independent, non-commercial fan community. Not affiliated with, endorsed or sponsored by any artist, label or ticket seller. Artist names identify topics only; names, marks and logos belong to their owners.</p>
      <p className="footer-credits">
        Prototype with demo data · Fonts Geist & Doto (SIL OFL 1.1) · Brand icons Simple Icons (CC0) · <Link to="/legal#photos">Artist photos Wikimedia Commons</Link> · Concert dates Ticketmaster · Music data MusicBrainz
      </p>
    </footer>
  )
}

// Links like /legal#report: scroll to the section once the page is shown.
function useScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => {
      const el = document.getElementById(hash.slice(1))
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    }, 150)
    return () => clearTimeout(t)
  }, [hash, pathname])
}

// Legal notice (who we are, how to reach us): EU e-commerce rules (D.Lgs. 70/2003 art. 7) and the
// Digital Services Act single points of contact (arts. 11–12).
export function LegalNotice() {
  useScrollToHash()
  return (
    <article className="legal-page">
      <div className="eyebrow">Legal notice</div>
      <h1 className="display">Who runs <span className="display-strong">Fandome</span></h1>
      <p className="muted small">Draft for the prototype · to be reviewed by a lawyer before public launch.</p>

      <h2>Service provider</h2>
      <p>
        {owner}
        <br />
        {OWNER_ADDRESS || '[address, to be added]'}
        <br />
        Email: {email}
        {OWNER_VAT && (
          <>
            <br />
            VAT: {OWNER_VAT}
          </>
        )}
      </p>
      <p>Fandome is an independent, non-commercial community run by volunteer fans. It is not affiliated with, endorsed or sponsored by any artist, label, management, promoter or ticket seller.</p>

      <h2>Contact point (EU Digital Services Act)</h2>
      <p>
        For users and for authorities of EU countries, the European Commission and the European Board for Digital Services: {email}. Languages: English and Italian. We answer as quickly as we can.
      </p>

      <h2 id="report">Report illegal content</h2>
      <p>
        Use “Report” on the post, story, profile, message, listing or collection piece: anyone can report, with or without a profile. If you can’t use the button, write to {email} with the link to the content, why
        you think it’s illegal, your name and email (not needed for child sexual abuse material) and a statement that the report is made in good faith. In an emergency call 112.{' '}
        <Link to="/terms#reporting">How moderation works</Link>
      </p>

      <h2>Copyright and trademarks</h2>
      <p>
        Posts belong to the people who wrote them. Artist names are used only to identify the topic of discussion; names, marks, logos and artwork belong to their owners. If you hold rights in something shared
        here, report it with “Report” → Copyright, or write to {email}.
      </p>

      <h2>Supervisory authorities</h2>
      <p>
        Digital services: AGCOM (Autorità per le Garanzie nelle Comunicazioni), Italy’s Digital Services Coordinator. Personal data: Garante per la protezione dei dati personali (garanteprivacy.it).
      </p>

      <h2>Credits</h2>
      <p>
        Fonts: Geist and Doto, SIL Open Font License 1.1. Brand icons: Simple Icons (CC0); marks belong to their owners. Music data: MusicBrainz. Concert dates: Ticketmaster. Hosting: GitHub Pages.
      </p>
      <h3 id="photos">Artist photos</h3>
      <p>
        Freely licensed photos from Wikimedia Commons (public domain or Creative Commons BY / BY-SA), shown unchanged and stored with the site. They are by independent photographers, not
        official images, and do not imply any endorsement by the artists. If you are a rights holder or the person pictured and want a photo changed, write to us or use “Report illegal content”.
      </p>
      <ul className="photo-credits">
        {artists
          .filter((a) => artistPhoto(a.id) && !artistPhoto(a.id)!.provided)
          .map((a) => (
            <li key={a.id}>
              <strong>{a.name}</strong> <PhotoCredit id={a.id} />
            </li>
          ))}
      </ul>
    </article>
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
      <p>No analytics and no tracking cookies. Fonts are served from this site, not from Google.</p>

      <h2>Hosting</h2>
      <p>
        The site is hosted on GitHub Pages (GitHub Inc.). To deliver the pages GitHub processes your IP address and technical data in its server logs (legitimate interest, art. 6(1)(f) GDPR). See
        GitHub’s privacy statement.
      </p>

      <h2>Embedded media (only with your consent)</h2>
      <p>
        Posts can embed players from YouTube, Spotify, Apple Music, SoundCloud, Deezer, TIDAL, Mixcloud, Audiomack, Vimeo, X, Instagram and TikTok. These load only if you choose “Allow media”, or when
        you tap a single player. Tapping one when you chose “Only essential” loads only that player, for that time: your saved choice does not change and nothing else loads. They may set cookies and receive your IP address under their own privacy policies (consent, art. 6(1)(a) GDPR). You can change or withdraw your choice anytime in Settings or with “Privacy choices” at the bottom of every page; withdrawing stops future loading but cannot remove cookies a platform already set (you can clear them in your browser).
      </p>

      <h2>Link previews</h2>
      <p>
        When you write a post with a web link and tap “Add link preview”, your browser asks Microlink (microlink.io), a metadata service, for the page’s title and image, and then fetches that image
        from the linked site; both receive the link and your IP address. This happens only when you ask for it. The image is shrunk and saved in the post, so people reading it never contact the linked site. You can remove the preview before posting. Links to news articles show only the headline, never the article’s image (press publishers’ right, art. 43-bis of the Italian copyright law).
      </p>

      <h2>Spotify and concert dates</h2>
      <p>
        If you choose “Connect Spotify”, you log in on Spotify and the access key is kept only in your browser. Concert dates come from Ticketmaster through a nightly job: no personal data is sent;
        ticket links open Ticketmaster’s own site.
      </p>
      <p>
        Saved posts are private and stay on your device. “Add to calendar” gives you a calendar file made by Fandome; the Google Calendar option opens Google, which then receives the show details
        under its own privacy policy.
      </p>

      <h2>Moderation</h2>
      <p>
        If you report content, the report (what, why, when, and your name and email if you have no profile) is kept only to handle it and tell you the outcome. If moderators remove your content we tell you why and you can appeal. Moderators see only reported public posts;
        private messages are looked at only if one of the people in the chat reports them.
      </p>

      <h2>Profile links</h2>
      <p>
        You can add links to your other profiles. When someone taps one, we add 1 to that link’s counter. We store only the number: no visitor identity, no IP address, no cookie. Only the profile owner
        sees the numbers.
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
  useScrollToHash()
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

      <h2 id="rules">Community rules</h2>
      <ol className="rules">
        <li>
          Fandome is only about music. Every post is about at least one artist; posts on other topics (politics, unrelated ads, off-topic chatter) don’t belong here and may be removed.
          Please report them with “Not about music”.
        </li>
        <li>
          No hate, bullying or body shaming, towards artists or fans: no mocking of looks, bodies, age, identity or private lives. No fan wars: rivalries are welcome when they’re about the
          music and help people discover new artists.
        </li>
        <li>Critique the work or the opinion, never attack the person.</li>
        <li>No hate, threats, harassment or sexual content involving anyone without consent; nothing involving minors.</li>
        <li>Don’t share other people’s private information.</li>
        <li>No spam, scams or ticket touting. Buy tickets only from official sellers, never via messages.</li>
        <li>Meetups only in public places.</li>
      </ol>

      <h2 id="feeds">How feeds and suggestions work</h2>
      <p>
        No profiling: everything is worked out on your device from what you chose to follow (DSA art. 27). Following: posts from people you follow, newest first. Latest:
        every post about the artists you follow, newest first. Trending: posts about your artists from the last 48 hours (a week when it is quiet), ranked by how many different people replied
        (counts most), reposted or quoted, or liked them, with older posts fading; each person counts once, and at most two posts per author are shown. Artist suggestions in Explore mix two things, half each: the
        artists followed by people you follow and by fans of your artists, and how close their albums sound to the albums you rated 8 or more and to those of the artists you follow; each one says why it is shown. “Because you rated…” shows albums by other artists close to your best-rated album. To help you discover other scenes, artists and albums from a local scene none of your artists come from (outside the US, UK, Canada, Australia and Ireland, singing mainly in their own language) get a small extra push, and say where they are from. Albums you rated 4/10 or lower, and albums you hid, push similar albums down. “Not for me” (×) hides a suggestion for good; “New to me” (✦) keeps it in your private discoveries, in the Saved tab of your profile. Discover in Explore offers three paths, always towards local scenes, never the global markets: a Bridge from an artist you follow to a close artist from another country’s scene, Go deeper into the scene of an artist you follow from abroad, and a scene you don’t know yet (it changes every week). All of this is worked out and stored on your device. “If you like this album” (album pages) and “Similar” (artist pages) compare albums using descriptions written by Fandome’s editors from published reviews and credits: genres (the main ones count most, and related genres count too, like deep house and house), sound (energy, electronic or acoustic, mood, danceability…), voice, lyric themes, era, scene and language, and documented links such as the same producer, a shared influence, a critic’s comparison or a connection through a third artist. An artist’s profile is computed from all their albums. Lists are kept varied and show at most two albums per artist; each item says why. These lists don’t use anything about you. Latest is always there if you prefer a plain timeline. Today there is no advertising and nothing is boosted for money; if sponsored content ever appears, it will always be clearly labelled as such (DSA art. 26) and never disguised as a recommendation.
      </p>

      <h2 id="reporting">Reporting and moderation</h2>
      <p>
        <strong>Anyone can report</strong>, with or without a profile, using “Report” on a post, story, profile or private chat (notice and action mechanism, EU Digital Services Act art. 16). A report
        should say what’s wrong and, if you think it’s illegal, why. Without a profile we ask for your name and email so we can reply; reports of child sexual abuse can be anonymous. You confirm the
        report is made in good faith. The person reported is not told who reported them.
      </p>
      <p>
        <strong>Who decides and how fast.</strong> Fandome is a non-commercial community run by volunteer fans, not a company with a moderation team. The law asks every service to handle reports in a
        timely, diligent, non-arbitrary and objective way, without setting a fixed deadline; we do our best to review each report within 72 hours, and first of all anything that threatens someone’s life or
        safety or involves minors. Volunteer moderators, shown with a badge on their profile, review reports about posts in the fandoms they look after; reports about people, stories and private chats are
        handled by the site team. Nobody decides on their own posts or reports.
      </p>
      <p>
        <strong>What happens next.</strong> We tell the reporter what we decided. If we remove something, we tell the author which rule it broke and why (statement of reasons, DSA art. 17), and the author
        can appeal once; the appeal is reviewed by someone else. Content that seems to be a crime threatening life or safety is reported to the police (DSA art. 18). Orders from authorities are followed as
        the law requires. In an emergency, call 112.
      </p>

      <h2>Tickets</h2>
      <p>
        The ticket board on a show only helps fans find each other. <strong>Fandome doesn’t sell, buy, hold, check or guarantee tickets and doesn’t handle payments</strong>: any exchange is a private
        matter between the people involved, who are responsible for it. Under Italian law (art. 1, par. 545, Law 232/2016) only a private person may pass on a ticket, occasionally, without a
        commercial purpose and at <strong>face value or less</strong>; selling above face value is forbidden and fined by AGCOM. Many big concerts have named tickets: use the ticket seller’s official
        name change or fan-to-fan resale. Never pay by gift card, crypto or bank transfer to strangers, meet only in public places, and report suspicious listings with “Report”. Listings that break these
        rules are removed; touts and scammers are banned.
      </p>

      <h2>Collections</h2>
      <p>
        Your profile can show your collection (records, CDs, tickets, memorabilia) with your own photos and stories. It’s a showcase, not a shop: no prices, offers or sales. A marketplace may come in the
        future only with proper protections (identity checks, protected payments, legal review). Photos of items should be your own.
      </p>

      <h2>Suggestions and sharing</h2>
      <p>You can suggest an artist room or send a post to people you can message. They arrive as a card in their private messages; nobody is added to anything without tapping.</p>

      <h2>Messages and activity</h2>
      <p>Private messages disappear 24 hours after they’re seen. Messaging and some features need you to have been active in the last 30 days.</p>

      <h2>Liability</h2>
      <p>
        Fandome is a non-commercial fan community, provided as it is. As a hosting service we aren’t responsible for what users post or agree among themselves, as long as we don’t know about illegal
        content and act quickly once it’s reported to us (EU Digital Services Act, art. 6). We don’t check content before it’s published and we give no guarantee about events, dates, tickets or other
        users. Concert dates come from third parties and can change: always check with the official organiser. Nothing on Fandome is endorsed by the artists, who are named only to identify the topic.
      </p>
      <p className="small">
        <Link to="/privacy">Privacy policy</Link>
      </p>
    </article>
  )
}
