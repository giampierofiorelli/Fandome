// Per-device preferences (not part of the shared demo state).
const AUTO_EMBEDS = 'fandome:autoEmbeds'

// Off by default: nothing loads from YouTube/X/Instagram… until you tap,
// which is faster and keeps those platforms from tracking readers.
export function autoEmbeds(): boolean {
  try {
    return localStorage.getItem(AUTO_EMBEDS) === '1'
  } catch {
    return false
  }
}
export function setAutoEmbeds(on: boolean) {
  try {
    localStorage.setItem(AUTO_EMBEDS, on ? '1' : '0')
  } catch {
    // ignore
  }
}
