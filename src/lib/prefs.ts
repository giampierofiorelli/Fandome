// Per-device preferences (not part of the shared demo state).
const AUTO_EMBEDS = 'fandome:autoEmbeds'

// On by default: videos and posts from other socials show already expanded.
// Readers can switch it off in Settings (faster feed, less tracking).
export function autoEmbeds(): boolean {
  try {
    return localStorage.getItem(AUTO_EMBEDS) !== '0'
  } catch {
    return true
  }
}
export function setAutoEmbeds(on: boolean) {
  try {
    localStorage.setItem(AUTO_EMBEDS, on ? '1' : '0')
  } catch {
    // ignore
  }
}
