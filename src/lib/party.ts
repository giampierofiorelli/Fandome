// Shared party clock: everyone derives the same track and position from the time,
// so the room stays in sync without a server.
export interface PartyTrack {
  title: string
  seconds: number
}

export function partyPosition(tracks: PartyTrack[], nowMs: number) {
  const total = tracks.reduce((n, t) => n + t.seconds, 0)
  let ms = nowMs % (total * 1000)
  let idx = 0
  while (ms >= tracks[idx].seconds * 1000) {
    ms -= tracks[idx].seconds * 1000
    idx++
  }
  return { idx, ms }
}

// How far the listener is from the room, in ms (positive = ahead).
export const driftMs = (listenerMs: number, partyMs: number) => listenerMs - partyMs
// Small gaps are inaudible in a group listen; correct only bigger ones.
export const DRIFT_TOLERANCE_MS = 3000
