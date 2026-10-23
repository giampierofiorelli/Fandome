import { MotionConfig } from 'motion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { StoreProvider } from './store/store'
import { ComposerProvider } from './components/Composer'
import { ToastProvider } from './components/Toast'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Respect the OS "reduce motion" setting: springs become simple fades. */}
    <MotionConfig reducedMotion="user">
      {/* HashRouter: GitHub Pages has no server-side routing */}
      <HashRouter>
        <StoreProvider>
          <ToastProvider>
            <ComposerProvider>
              <App />
            </ComposerProvider>
          </ToastProvider>
        </StoreProvider>
      </HashRouter>
    </MotionConfig>
  </StrictMode>,
)
