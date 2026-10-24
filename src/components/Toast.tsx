import { AnimatePresence, motion } from 'motion/react'
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { springSnappy } from '../lib/motion'
import { IconCheck } from './icons'

// Lightweight completion feedback ("Link copied", "Reposted").
type ToastAction = { label: string; onClick: () => void }
const Ctx = createContext<(msg: string, action?: ToastAction) => void>(() => {})
export const useToast = () => useContext(Ctx)

export function ToastProvider({ children, initial }: { children: ReactNode; initial?: string | null }) {
  const [toast, setToast] = useState<{ id: number; msg: string; action?: ToastAction } | null>(initial ? { id: 1, msg: initial } : null)
  const timer = useRef<ReturnType<typeof setTimeout>>()
  useEffect(() => {
    const onFull = () => show('Storage full: this demo keeps photos in your browser. Delete a few photo posts.')
    window.addEventListener('fandome:storage-full', onFull)
    return () => window.removeEventListener('fandome:storage-full', onFull)
  })
  useEffect(() => {
    if (initial) timer.current = setTimeout(() => setToast(null), 2600)
  }, [initial])
  const show = useCallback((msg: string, action?: ToastAction) => {
    clearTimeout(timer.current)
    setToast({ id: Date.now(), msg, action })
    timer.current = setTimeout(() => setToast(null), action ? 5000 : 1800)
  }, [])
  return (
    <Ctx.Provider value={show}>
      {children}
      <div className="toast-layer" aria-live="polite">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              className="toast"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={springSnappy}
            >
              <IconCheck size={16} /> {toast.msg}
              {toast.action && (
                <button
                  className="toast-action"
                  onClick={() => {
                    toast.action!.onClick()
                    setToast(null)
                  }}
                >
                  {toast.action.label}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Ctx.Provider>
  )
}
