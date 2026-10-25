import { describe as group, expect, it } from 'vitest'
import { allConnections, describe, rootsAndHeirs, yourConnections } from './connections'
import { buildScene, listenFor, startWith } from './scenePath'
import { albums, artists, seedUsers } from '../data/seed'
import type { User } from '../data/types'

const name = (id: string) => artists.find((a) => a.id === id)?.name ?? id
const fan = (fans: string[]) => ({ id: 'me', name: 'Me', fanSince: Object.fromEntries(fans.map((f) => [f, 2020])), following: [], ratings: {} }) as unknown as User

group('connections', () => {
  it('reads documented links from the album descriptors', () => {
    const list = allConnections(artists)
    expect(list.some((c) => c.from === 'madonna' && c.to === 'moroder' && c.type === 'influenced')).toBe(true)
    expect(list.some((c) => c.from === 'blanco' && c.to === 'mahmood' && c.type === 'soundslike')).toBe(true)
  })

  it('tells your connection in plain words', () => {
    const c = yourConnections('moroder', new Set(['madonna']), artists)[0]
    expect(describe(c, name, 'moroder', new Set(['madonna']))).toBe('Madonna’s Confessions on a Dance Floor draws on Giorgio Moroder')
  })

  it('opens the Italy path with artists connected to yours', () => {
    const p = buildScene('italy', { me: fan(['madonna']), users: seedUsers, posts: [], artists, albums })!
    const start = p.units[0].steps
    expect(start.map((s) => s.artistId)).toContain('moroder')
    expect(start.find((s) => s.artistId === 'moroder')!.connection).toMatch(/draws on Giorgio Moroder/)
  })

  it('finds roots and heirs inside a scene', () => {
    const ids = new Set(buildScene('italy', { me: null, users: seedUsers, posts: [], artists, albums })!.artistIds)
    expect(rootsAndHeirs('annalisa', ids, artists).roots).toContain('mina')
    expect(rootsAndHeirs('mina', ids, artists).heirs).toContain('annalisa')
    expect(rootsAndHeirs('mahmood', ids, artists).heirs).toContain('blanco')
  })

  it('suggests where to start and what to listen for', () => {
    expect(startWith('annalisa', albums)?.albumId).toBe('annalisa-epoisiamofinitinelvortice')
    const cues = listenFor('annalisa-epoisiamofinitinelvortice')!
    expect(cues.cues.length).toBeGreaterThan(0)
    expect(listenFor('k-fever')).toBeUndefined()
  })
})

group('scene step extras', () => {
  it('suggests a comparison: the influence first, then the album that picks it up', async () => {
    const { compareFor } = await import('./scenePath')
    const c = compareFor('moroder', new Set(['madonna']), artists, albums)!
    expect(c.second).toBe('m-confessions')
    expect(c.first.startsWith('moroder-')).toBe(true)
    expect(c.text).toBe('Hear how Madonna picks up Giorgio Moroder.')
  })

  it('gives facts from the descriptions, without repeating your connection', async () => {
    const { didYouKnow } = await import('./scenePath')
    const facts = didYouKnow('annalisa', albums)
    expect(facts[0]).toMatch(/^E poi siamo finiti nel vortice was produced by Davide Simonetta/)
    expect(didYouKnow('mina', albums).some((f) => f.includes('Studio Uno'))).toBe(true)
    expect(didYouKnow('battisti', albums)).toEqual([]) // no descriptors yet
  })
})

group('quiz', () => {
  it('asks two questions with the right answer among three options, stable for each artist', async () => {
    const { quizFor } = await import('./scenePath')
    for (const id of ['annalisa', 'mina', 'moroder', 'battisti']) {
      const qs = quizFor(id, artists, albums)
      expect(qs.length).toBe(2)
      for (const q of qs) {
        expect(q.options).toHaveLength(3)
        expect(q.options).toContain(q.answer)
        expect(new Set(q.options).size).toBe(3)
      }
      expect(quizFor(id, artists, albums)).toEqual(qs)
    }
    expect(quizFor('annalisa', artists, albums)[0].q).toBe('Who produced E poi siamo finiti nel vortice?')
  })
})
