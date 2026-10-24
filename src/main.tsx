import { MotionConfig } from 'motion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { loadInitialState, StoreProvider } from './store/store'
import type { State } from './store/reducer'
import { ComposerProvider } from './components/Composer'
import { ToastProvider } from './components/Toast'
import { handleRedirect } from './lib/spotify'
import { loadLiveConcerts } from './lib/liveConcerts'
// Fonts are served from this site (no requests to Google: GDPR).
import '@fontsource-variable/geist/wght.css'
import '@fontsource/doto/latin-500.css'
import '@fontsource/doto/latin-700.css'
import '@fontsource/doto/latin-800.css'
import '@fontsource/doto/latin-900.css'
import './styles.css'

const render = (spotifyMessage: string | null, initial: State) =>
  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Respect the OS "reduce motion" setting: springs become simple fades. */}
    <MotionConfig reducedMotion="user">
      {/* HashRouter: GitHub Pages has no server-side routing */}
      <HashRouter>
        <StoreProvider initial={initial}>
          <ToastProvider initial={spotifyMessage}>
            <ComposerProvider>
              <App />
            </ComposerProvider>
          </ToastProvider>
        </StoreProvider>
      </HashRouter>
    </MotionConfig>
  </StrictMode>,
  )

// Finish a Spotify login round-trip (if any) before the router reads the URL,
// and pull tonight's concert dates (max 2.5s, then the app starts anyway).
Promise.all([handleRedirect().catch(() => null), loadLiveConcerts(), loadInitialState()]).then(([msg, , initial]) => render(msg, initial))
