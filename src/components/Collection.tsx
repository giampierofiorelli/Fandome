import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { artists } from '../data/seed'
import { COLLECTION_FORMATS, type CollectionItem, type User } from '../data/types'
import { newId, useStore } from '../store/store'
import { MAX_ITEMS } from '../store/reducer'
import { compressImage } from '../lib/media'
import { artistById } from '../lib/util'
import { spring } from '../lib/motion'
import { useToast } from './Toast'
import { ArtistDisc, Modal, useModalClose } from './ui'
import { ReportModal } from './Moderation'
import { IconCamera, IconDisc, IconFlag, IconImage, IconPlus, IconTrash } from './icons'

// Collection showcase on the profile: records, CDs, ticket stubs… with the story behind them.
// Only to show and tell: no prices, nothing is sold on Fandome.
export function CollectionGrid({ user, isMe }: { user: User; isMe: boolean }) {
  const [open, setOpen] = useState<CollectionItem | null>(null)
  const [adding, setAdding] = useState(false)
  const items = user.collection ?? []
  return (
    <div className="collection">
      <p className="muted small center collection-note">{isMe ? 'Show your collection and tell its stories. It’s a showcase: nothing is for sale.' : `${items.length} ${items.length === 1 ? 'piece' : 'pieces'} · a showcase, not a shop`}</p>
      <div className="coll-grid">
        {isMe && items.length < MAX_ITEMS && (
          <button className="coll-tile add" onClick={() => setAdding(true)}>
            <span className="coll-art add">
              <IconPlus size={26} />
            </span>
            <span className="coll-title">Add a piece</span>
            <span className="muted small">Vinyl, CDs, tickets…</span>
          </button>
        )}
        {items.map((it, i) => (
          <motion.button key={it.id} className="coll-tile" onClick={() => setOpen(it)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: Math.min(i, 8) * 0.03 }}>
            <ItemArt item={it} />
            <span className="coll-title">{it.title}</span>
            <span className="muted small">
              {it.format}
              {it.year ? ` · ${it.year}` : ''}
            </span>
          </motion.button>
        ))}
      </div>
      {!items.length && !isMe && <p className="empty">No collection yet.</p>}
      {open && <ItemModal item={open} owner={user} isMe={isMe} onClose={() => setOpen(null)} />}
      {adding && (
        <Modal title="Add to your collection" onClose={() => setAdding(false)}>
          <AddItemForm />
        </Modal>
      )}
    </div>
  )
}

function ItemArt({ item, big }: { item: CollectionItem; big?: boolean }) {
  const a = artistById(item.artistId)
  return (
    <span className={big ? 'coll-art big' : 'coll-art'} style={item.photo ? { backgroundImage: `url(${item.photo})` } : { background: item.image ?? `radial-gradient(120% 90% at 20% 10%, ${a?.color ?? '#888'}, #15161c 75%)` }}>
      {!item.photo && !item.image && <IconDisc size={big ? 44 : 30} />}
      {a && (
        <span className="coll-artist">
          <ArtistDisc id={a.id} size={big ? 24 : 18} />
        </span>
      )}
    </span>
  )
}

function ItemModal({ item, owner, isMe, onClose }: { item: CollectionItem; owner: User; isMe: boolean; onClose: () => void }) {
  const [reporting, setReporting] = useState(false)
  return (
    <>
      <Modal title={item.title} onClose={onClose}>
        <ItemDetail item={item} owner={owner} isMe={isMe} onReport={() => setReporting(true)} />
      </Modal>
      {reporting && <ReportModal target={{ kind: 'item', id: item.id }} what="collection piece" onClose={() => setReporting(false)} />}
    </>
  )
}
function ItemDetail({ item, owner, isMe, onReport }: { item: CollectionItem; owner: User; isMe: boolean; onReport: () => void }) {
  const { dispatch } = useStore()
  const close = useModalClose()
  const toast = useToast()
  const a = artistById(item.artistId)
  return (
    <div className="coll-detail">
      <ItemArt item={item} big />
      <div className="coll-meta">
        {a && (
          <span className="artist-token" style={{ ['--c' as string]: a.color }}>
            <ArtistDisc id={a.id} size={22} />
            <span>{a.name}</span>
          </span>
        )}
        <span className="muted small">
          {item.format}
          {item.year ? ` · ${item.year}` : ''} · in {isMe ? 'your' : `${owner.name}’s`} collection
        </span>
      </div>
      {item.note && <p className="coll-story">{item.note}</p>}
      <p className="muted small">Not for sale · Fandome is a showcase, not a marketplace.</p>
      <div className="row-end">
        {isMe ? (
          <button
            className="pill-btn glass small danger"
            onClick={() => {
              dispatch({ type: 'removeItem', id: item.id })
              toast('Removed from your collection')
              close()
            }}
          >
            <IconTrash size={15} /> Remove
          </button>
        ) : (
          <button className="pill-btn glass small" onClick={onReport}>
            <IconFlag size={15} /> Report
          </button>
        )}
      </div>
    </div>
  )
}

function AddItemForm() {
  const { dispatch, me } = useStore()
  const close = useModalClose()
  const toast = useToast()
  const [title, setTitle] = useState('')
  const [artistId, setArtistId] = useState<string | undefined>(me ? Object.keys(me.fanSince)[0] : undefined)
  const [format, setFormat] = useState<CollectionItem['format']>('Vinyl LP')
  const [year, setYear] = useState('')
  const [note, setNote] = useState('')
  const [photo, setPhoto] = useState<string | null>(null)
  const [share, setShare] = useState(true)
  const camera = useRef<HTMLInputElement>(null)
  const gallery = useRef<HTMLInputElement>(null)
  if (!me) return null
  const mine = Object.keys(me.fanSince)
  const sorted = [...artists].sort((x, y) => Number(mine.includes(y.id)) - Number(mine.includes(x.id)))
  const y = Number(year)
  const yearOk = !year || (Number.isInteger(y) && y >= 1950 && y <= new Date().getFullYear() + 1)
  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    e.target.value = ''
    if (!f) return
    try {
      setPhoto(await compressImage(f, 900, 0.78))
    } catch {
      toast('That file isn’t an image')
    }
  }
  const save = () => {
    const at = Date.now()
    const item: CollectionItem = { id: newId(), title, artistId, format, year: year ? y : undefined, note, photo: photo ?? undefined, at }
    dispatch({ type: 'addItem', item })
    if (share) {
      const a = artistById(artistId)
      const text = `New in my collection: ${title.trim()}${a ? ` · ${a.name}` : ''} (${format}${year ? `, ${year}` : ''})${note.trim() ? `\n\n${note.trim()}` : ''} #collectors`
      dispatch({ type: 'post', id: newId(), at, text, artistId, photo: photo ?? undefined })
    }
    toast(share ? 'Added and shared' : 'Added to your collection')
    close()
  }
  return (
    <div className="coll-form">
      <div className="coll-photo" style={photo ? { backgroundImage: `url(${photo})` } : undefined}>
        {!photo && (
          <span className="coll-photo-btns">
            <button className="pill" onClick={() => camera.current?.click()}>
              <IconCamera size={15} /> Take a photo
            </button>
            <button className="pill" onClick={() => gallery.current?.click()}>
              <IconImage size={15} /> Gallery
            </button>
          </span>
        )}
        {photo && (
          <button className="pill coll-photo-remove" onClick={() => setPhoto(null)}>
            Change photo
          </button>
        )}
      </div>
      <input ref={camera} type="file" accept="image/*" capture="environment" hidden onChange={onFile} />
      <input ref={gallery} type="file" accept="image/*" hidden onChange={onFile} />
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title (e.g. Like a Prayer, Italian 12&quot;)" maxLength={80} />
      <div className="artist-picker">
        {sorted.map((a) => (
          <button key={a.id} type="button" className={artistId === a.id ? 'pick on' : 'pick'} style={{ ['--c' as string]: a.color }} aria-pressed={artistId === a.id} onClick={() => setArtistId(artistId === a.id ? undefined : a.id)}>
            <ArtistDisc id={a.id} size={20} />
            {a.name}
          </button>
        ))}
      </div>
      <div className="coll-row">
        <select value={format} onChange={(e) => setFormat(e.target.value as CollectionItem['format'])} aria-label="Format">
          {COLLECTION_FORMATS.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
        <input value={year} onChange={(e) => setYear(e.target.value.replace(/\D/g, '').slice(0, 4))} placeholder="Year" inputMode="numeric" aria-label="Year" />
      </div>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} maxLength={500} placeholder="The story: where you found it, what makes it special…" />
      <label className="ob-agree">
        <input type="checkbox" checked={share} onChange={(e) => setShare(e.target.checked)} />
        <span>Also share it as a post</span>
      </label>
      <p className="muted small" style={{ margin: 0 }}>
        Showcase only: don’t add prices or offers. Use your own photos.
      </p>
      <div className="row-end">
        <button className="pill-btn ink" disabled={!title.trim() || !yearOk} onClick={save}>
          Add to collection
        </button>
      </div>
    </div>
  )
}
