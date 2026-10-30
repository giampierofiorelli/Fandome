import { describe, expect, it } from 'vitest'
import { buildScene, groupOf, SCENE_DEFS } from './scenePath'
import { albums, artists, seedUsers } from '../data/seed'
import { SCENES } from '../data/scenes'
import type { User } from '../data/types'

const fan = (fans: string[], extra: Partial<User> = {}) => ({ id: 'me', name: 'Me', fanSince: Object.fromEntries(fans.map((f) => [f, 2020])), following: [], ratings: {}, ...extra }) as unknown as User
const ctx = (me: User | null) => ({ me, users: seedUsers, posts: [], artists, albums })

describe('scenes', () => {
  it('starts with the plan scenes; only Italy is ready today', () => {
    expect(SCENE_DEFS.map((s) => s.id)).toEqual(['italy', 'brazil', 'latin', 'france', 'afro', 'korea'])
    expect(SCENE_DEFS.filter((s) => s.ready).map((s) => s.id)).toEqual(['italy', 'afro'])
  })

  it('builds the Italy path: start here, now, eras, sub-scenes, deep cuts', () => {
    const p = buildScene('italy', ctx(fan(['charlixcx'])))!
    expect(p.artistIds.every((id) => SCENES[id].country === 'IT')).toBe(true)
    const ids = p.units.map((u) => u.id)
    expect(ids[0]).toBe('start')
    expect(ids).toContain('now')
    expect(ids).toContain('era-1960')
    expect(ids).toContain('group-songwriter')
    expect(ids[ids.length - 1]).toBe('deep')
    expect(ids).not.toContain('group-pop')
    expect(p.units.every((u) => u.steps.every((s) => s.reason.length > 0))).toBe(true)
  })

  it('enters through the artists closest to you and alternates close and further', () => {
    const p = buildScene('italy', ctx(fan(['charlixcx'])))!
    expect(p.units[0].steps.map((s) => s.artistId)).toContain('annalisa')
    const now = p.units.find((u) => u.id === 'now')!
    expect(now.steps[2].reason).toMatch(/^A step further/)
  })

  it('groups artists by their main genre family', () => {
    expect(groupOf('battisti')).toBe('songwriter')
    expect(groupOf('pavarotti')).toBe('classical')
  })

  it('levels come only from what you explored, and say what is next', () => {
    const none = buildScene('italy', ctx(fan(['charlixcx'])))!
    expect(none.level.n).toBe(0)
    expect(none.level.next).toMatch(/^Next: Listener · 3 more artists/)
    const listened = ['mina', 'battisti', 'dalla', 'annalisa', 'elodie', 'mahmood', 'pavarotti', 'vasco']
    const p = buildScene('italy', ctx(fan(['charlixcx'], { listened })))!
    expect(p.level.n).toBe(2)
    expect(p.level.name).toBe('Explorer')
    expect(p.skills[0].value).toBe(listened.length)
    expect(p.units.flatMap((u) => u.steps).filter((s) => listened.includes(s.artistId)).every((s) => s.done)).toBe(true)
  })

  it('works without an account', () => {
    const p = buildScene('italy', ctx(null))!
    expect(p.level.n).toBe(0)
    expect(p.units[0].steps).toHaveLength(3)
  })
})
