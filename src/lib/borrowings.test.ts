import { describe, expect, it } from 'vitest'
import { BORROWINGS, parseBorrowings, borrowingsOf } from './borrowings'
import { BORROWING_KINDS } from './borrowings'

describe('borrowings ("riprende")', () => {
  it('reads the work, the kind and the share of songs', () => {
    const [b] = parseBorrowings('album_id,source,kind,songs,sources\nx-y,Pyotr Ilyich Tchaikovsky (The Nutcracker),interpolation,1/13,a review\n')
    expect(b).toMatchObject({ albumId: 'x-y', artist: 'Pyotr Ilyich Tchaikovsky', title: 'The Nutcracker', kind: 'interpolation', part: { songs: 1, of: 13 } })
  })
  it('keeps every row to a known kind, with sources', () => {
    for (const b of BORROWINGS) {
      expect(BORROWING_KINDS, b.albumId).toContain(b.kind)
      expect(b.sources.length, b.albumId).toBeGreaterThan(0)
    }
    expect(borrowingsOf('madonna-madamex').map((b) => b.title)).toContain('The Nutcracker')
  })
})
