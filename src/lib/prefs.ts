// Per-device privacy choices (GDPR / ePrivacy). Nothing from other companies
// (YouTube, Spotify, Instagram, X, TikTok…) loads until the person agrees.
import { useEffect, useState } from 'react'

const KEY = 'fandome:consent'
export const CONSENT_VERSION = 1
export interface Consent {
  media: boolean // embedded players and posts from other platforms
  at: number
  v: number
}

export function getConsent(): Consent | null {
  try {
    const c = JSON.parse(localStorage.getItem(KEY) ?? 'null') as Consent | null
    return c && c.v === CONSENT_VERSION ? c : null
  } catch {
    return null
  }
}
export function setConsent(media: boolean) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ media, at: Date.now(), v: CONSENT_VERSION }))
  } catch {
    // private mode: the choice lasts for this visit only
  }
  window.dispatchEvent(new Event('fandome:consent'))
}
// "Privacy choices": forget the choice so the banner asks again (withdrawing is as easy as giving).
export function resetConsent() {
  try {
    localStorage.removeItem(KEY)
  } catch {
    // ignore
  }
  window.dispatchEvent(new Event('fandome:consent'))
}
export function useConsent(): Consent | null {
  const [c, setC] = useState(getConsent)
  useEffect(() => {
    const on = () => setC(getConsent())
    window.addEventListener('fandome:consent', on)
    return () => window.removeEventListener('fandome:consent', on)
  }, [])
  return c
}

// Embeds open expanded only with consent; otherwise each one waits for a tap.
export const autoEmbeds = () => getConsent()?.media === true
