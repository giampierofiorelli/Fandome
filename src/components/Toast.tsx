import { AnimatePresence, motion } from 'motion/react'
import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'
import { springSnappy } from '../lib/motion'
import { IconCheck } from './icons'

// Lightweight completion feedback ("Link copied", "Reposted").
const Ctx = createContext<(msg: string) => void>(() => {})
export const useToast = () => useContext(Ctx)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ id: number; msg: string } | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>()
  const show = useCallback((msg: string) => {
    clearTimeout(timer.current)
    setToast({ id: Date.now(), msg })
    timer.current = setTimeout(() => setToast(null), 1800)
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
              initial={{ opacity: 0, y: 16, scale: 0.96, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 8, scale: 0.98, filter: 'blur(4px)' }}
              transition={springSnappy}
            >
              <IconCheck size={16} /> {toast.msg}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Ctx.Provider>
  )
}
