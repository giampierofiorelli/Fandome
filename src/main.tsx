import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { StoreProvider } from './store/store'
import { ComposerProvider } from './components/Composer'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* HashRouter: GitHub Pages has no server-side routing */}
    <HashRouter>
      <StoreProvider>
        <ComposerProvider>
          <App />
        </ComposerProvider>
      </StoreProvider>
    </HashRouter>
  </StrictMode>,
)
