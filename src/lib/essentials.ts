import { DESCRIPTORS } from './descriptors'

// The records to start with for an artist: what a newcomer should hear first.
// From the reception file (0-5): career-defining albums (importance 5), plus albums critics hold in the
// highest regard (acclaim 5) that also mattered in the career (importance 4+). Same rule for every artist.
// Without reception data, the descriptor's landmark flag stands in. Chronological, at most six.
export type EssentialKind = 'essential' | 'defining' | 'acclaimed' | 'key'

export const ESSENTIAL_LABEL: Record<EssentialKind, string> = {
  essential: 'Essential',
  defining: 'Career-defining',
  acclaimed: 'Critics’ pick',
  key: 'Key album',
}

export function essentialKind(albumId: string): EssentialKind | null {
  const d = DESCRIPTORS[albumId]
  if (!d) return null
  const imp = d.importance ?? -1
  const acc = d.acclaim ?? -1
  if (imp === 5 && acc === 5) return 'essential'
  if (imp === 5) return 'defining'
  if (acc === 5 && imp >= 4) return 'acclaimed'
  return null
}

export function essentialAlbums(albumIds: string[], max = 6): { id: string; kind: EssentialKind }[] {
  const picked = albumIds.flatMap((id) => {
    const kind = essentialKind(id)
    return kind ? [{ id, kind }] : []
  })
  if (picked.length >= 2) return picked.slice(0, max)
  // Few or no top marks: the strongest of the rest (importance first, then critics), or the landmark flag.
  const score = (id: string) => {
    const d = DESCRIPTORS[id]
    if (!d) return -1
    if (d.importance === undefined && d.acclaim === undefined) return d.landmark ? 6 : -1
    return (d.importance ?? 0) * 2 + (d.acclaim ?? 0)
  }
  const rest = albumIds
    .filter((id) => !picked.some((p) => p.id === id) && score(id) >= 6 && (DESCRIPTORS[id]?.importance ?? 4) >= 3)
    .sort((a, b) => score(b) - score(a))
    .slice(0, Math.max(0, 3 - picked.length))
    .map((id) => ({ id, kind: 'key' as const }))
  const order = new Map(albumIds.map((id, i) => [id, i]))
  return [...picked, ...rest].sort((a, b) => order.get(a.id)! - order.get(b.id)!).slice(0, max)
}
