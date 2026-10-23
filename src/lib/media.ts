// Media helpers for posts: YouTube embeds (the video stays on YouTube) and
// on-device photo compression so uploads stay small.

const YT = /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/

export function youtubeId(text: string): string | undefined {
  return text.match(YT)?.[1]
}

// Remove the raw link from the visible text once it is shown as a player.
export function stripYoutubeLink(text: string): string {
  return text.replace(/\s*https?:\/\/(?:www\.|m\.)?(?:youtube\.com|youtu\.be)\/\S+/g, '').trim()
}

export async function compressImage(file: File, max = 1280, quality = 0.82): Promise<string> {
  const url = URL.createObjectURL(file)
  try {
    const img = await new Promise<HTMLImageElement>((res, rej) => {
      const i = new Image()
      i.onload = () => res(i)
      i.onerror = () => rej(new Error('Not an image'))
      i.src = url
    })
    const scale = Math.min(1, max / Math.max(img.width, img.height))
    const c = document.createElement('canvas')
    c.width = Math.round(img.width * scale)
    c.height = Math.round(img.height * scale)
    c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height)
    return c.toDataURL('image/jpeg', quality)
  } finally {
    URL.revokeObjectURL(url)
  }
}
