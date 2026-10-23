import { describe, expect, it } from 'vitest'
import { angleToProgress, DIAL_START, DIAL_SWEEP } from './Dial'
import { scoreFromProgress, toScore } from './AlbumRater'
import { initialState, reducer, type State } from '../store/reducer'

const NOW = 1_800_000_000_000
const at = (deg: number) => [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)] as const

function onboarded(): State {
  return reducer(initialState(NOW), { type: 'onboard', name: 'Test', handle: 'tester', location: 'Milan', artistIds: ['madonna'], followIds: [] })
}

describe('dial scoring', () => {
  it('maps angles inside the arc to 0..1', () => {
    expect(angleToProgress(...at(DIAL_START + 1e-6), 0)).toBeCloseTo(0, 3)
    expect(angleToProgress(...at(DIAL_START + DIAL_SWEEP / 2), 0)).toBeCloseTo(0.5, 3)
    expect(angleToProgress(...at(DIAL_START + DIAL_SWEEP - 1e-6), 0)).toBeCloseTo(1, 3)
  })
  it('clamps to the nearest end inside the gap', () => {
    const gap = DIAL_START + DIAL_SWEEP + 20
    expect(angleToProgress(...at(gap), 0.9)).toBe(1)
    expect(angleToProgress(...at(gap), 0.1)).toBe(0)
  })
  it('turns progress into half-point scores out of 10', () => {
    expect(scoreFromProgress(0)).toBe(0.5)
    expect(scoreFromProgress(0.5)).toBe(5)
    expect(scoreFromProgress(0.87)).toBe(8.5)
    expect(scoreFromProgress(1)).toBe(10)
    expect(toScore(4.5)).toBe(9)
  })
})

describe('tours and undo', () => {
  it('toggles "I was there" for a past tour', () => {
    let s = onboarded()
    s = reducer(s, { type: 'toggleTour', key: 'madonna::Celebration Tour' })
    expect(s.users.find((u) => u.id === s.meId)!.tours).toEqual(['madonna::Celebration Tour'])
    s = reducer(s, { type: 'toggleTour', key: 'madonna::Celebration Tour' })
    expect(s.users.find((u) => u.id === s.meId)!.tours).toEqual([])
  })
  it('restores only my own deleted post', () => {
    let s = onboarded()
    s = reducer(s, { type: 'post', id: 'mine1', at: NOW, text: 'hello', artistId: 'madonna' })
    const mine = s.posts.find((p) => p.id === 'mine1')!
    const other = s.posts.find((p) => p.authorId !== s.meId)!
    s = reducer(s, { type: 'delete', postId: 'mine1' })
    expect(s.posts.some((p) => p.id === 'mine1')).toBe(false)
    s = reducer(s, { type: 'restorePost', post: mine })
    expect(s.posts.some((p) => p.id === 'mine1')).toBe(true)
    const before = s.posts.length
    s = reducer(s, { type: 'restorePost', post: mine })
    expect(s.posts.length).toBe(before)
    const fake = { ...other, id: 'ghost' }
    expect(reducer(s, { type: 'restorePost', post: fake }).posts.length).toBe(before)
  })
})
