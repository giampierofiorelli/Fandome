// Voice notes: record from the mic (MediaRecorder) or pick an audio file.
// Stored as a data URL in the demo; a backend would upload the blob instead.
export const MAX_VOICE_SECONDS = 60
export const MAX_AUDIO_BYTES = 3 * 1024 * 1024

export interface VoiceNote {
  src: string // data URL
  duration: number // seconds
  peaks: number[] // 0..1, for the waveform
}

export const blobToDataUrl = (b: Blob) =>
  new Promise<string>((res, rej) => {
    const r = new FileReader()
    r.onload = () => res(String(r.result))
    r.onerror = () => rej(r.error)
    r.readAsDataURL(b)
  })

// Downsample the audio into N bars (RMS per bucket), normalised to 0..1.
export function peaksFrom(samples: Float32Array, bars = 40): number[] {
  if (!samples.length) return Array(bars).fill(0.1)
  const size = Math.max(1, Math.floor(samples.length / bars))
  const out: number[] = []
  for (let i = 0; i < bars; i++) {
    let sum = 0
    const start = i * size
    const end = Math.min(samples.length, start + size)
    for (let j = start; j < end; j++) sum += samples[j] * samples[j]
    out.push(Math.sqrt(sum / Math.max(1, end - start)))
  }
  const max = Math.max(...out, 1e-6)
  return out.map((v) => Math.max(0.08, v / max))
}

export async function analyse(blob: Blob): Promise<{ duration: number; peaks: number[] }> {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new Ctx()
    const buf = await ctx.decodeAudioData(await blob.arrayBuffer())
    void ctx.close()
    return { duration: buf.duration, peaks: peaksFrom(buf.getChannelData(0)) }
  } catch {
    return { duration: 0, peaks: Array(40).fill(0.3) }
  }
}

export async function fileToVoiceNote(file: File): Promise<VoiceNote> {
  if (!file.type.startsWith('audio/')) throw new Error('That file isn’t audio')
  if (file.size > MAX_AUDIO_BYTES) throw new Error('Audio must be under 3 MB')
  const { duration, peaks } = await analyse(file)
  return { src: await blobToDataUrl(file), duration, peaks }
}

// Small recorder wrapper: start() → stop() resolves with the note.
export function createRecorder() {
  let rec: MediaRecorder | null = null
  let chunks: Blob[] = []
  let stream: MediaStream | null = null
  let startedAt = 0
  return {
    async start() {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const type = ['audio/webm;codecs=opus', 'audio/mp4', 'audio/webm'].find((t) => MediaRecorder.isTypeSupported?.(t))
      rec = new MediaRecorder(stream, type ? { mimeType: type, audioBitsPerSecond: 32000 } : undefined)
      chunks = []
      rec.ondataavailable = (e) => e.data.size && chunks.push(e.data)
      rec.start()
      startedAt = Date.now()
    },
    elapsed: () => (startedAt ? (Date.now() - startedAt) / 1000 : 0),
    stop(): Promise<VoiceNote> {
      return new Promise((res, rej) => {
        if (!rec) return rej(new Error('Not recording'))
        rec.onstop = async () => {
          stream?.getTracks().forEach((t) => t.stop())
          const blob = new Blob(chunks, { type: rec?.mimeType || 'audio/webm' })
          const { duration, peaks } = await analyse(blob)
          res({ src: await blobToDataUrl(blob), duration: duration || (Date.now() - startedAt) / 1000, peaks })
        }
        rec.stop()
      })
    },
    cancel() {
      rec?.state === 'recording' && rec.stop()
      stream?.getTracks().forEach((t) => t.stop())
    },
  }
}
