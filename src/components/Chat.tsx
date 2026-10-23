import { useEffect, useRef, useState } from 'react'
import { newId, useStore } from '../store/store'
import { timeAgo } from '../lib/util'
import { Avatar } from './ui'

// Live chat used for concert pages and listening parties.
// `crowd` simulates other fans talking while the room is open (prototype only).
export function Chat({ room, crowd, lines }: { room: string; crowd: string[]; lines: string[] }) {
  const { state, dispatch, me, userById } = useStore()
  const [text, setText] = useState('')
  const listRef = useRef<HTMLDivElement>(null)
  const messages = state.chats[room] ?? []

  // Keep the latest crowd/lines in a ref so the timer isn't reset on every render.
  const sim = useRef({ crowd, lines })
  sim.current = { crowd, lines }
  useEffect(() => {
    const t = setInterval(() => {
      const { crowd, lines } = sim.current
      if (!crowd.length || !lines.length) return
      const userId = crowd[Math.floor(Math.random() * crowd.length)]
      const line = lines[Math.floor(Math.random() * lines.length)]
      dispatch({ type: 'chat', room, id: newId(), userId, text: line, at: Date.now() })
    }, 7000)
    return () => clearInterval(t)
  }, [room, dispatch])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
  }, [messages.length])

  const send = () => {
    if (!text.trim() || !me) return
    dispatch({ type: 'chat', room, id: newId(), text: text.trim(), at: Date.now() })
    setText('')
  }

  return (
    <div className="chat">
      <div className="chat-list" ref={listRef}>
        {messages.map((m) => {
          const u = userById(m.userId)
          return (
            <div key={m.id} className={m.userId === me?.id ? 'msg mine' : 'msg'}>
              <Avatar user={u} size={26} />
              <div>
                <span className="small">
                  <strong>{u?.name}</strong> <span className="muted">{timeAgo(m.at)}</span>
                </span>
                <p>{m.text}</p>
              </div>
            </div>
          )
        })}
      </div>
      <form
        className="chat-form"
        onSubmit={(e) => {
          e.preventDefault()
          send()
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Say something…" maxLength={200} />
        <button className="btn primary" disabled={!text.trim()}>
          Send
        </button>
      </form>
    </div>
  )
}
