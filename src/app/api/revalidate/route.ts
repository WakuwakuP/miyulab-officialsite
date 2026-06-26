/* eslint-disable no-console */
import crypto from 'node:crypto'
import { revalidateTag } from 'next/cache'

export const revalidate = 0

const MAX_WEBHOOK_BODY_BYTES = 64 * 1024
const SIGNATURE_HEX_LENGTH = 64

function isValidSignatureFormat(signature: string | null): signature is string {
  return (
    signature !== null &&
    signature.length === SIGNATURE_HEX_LENGTH &&
    /^[0-9a-f]+$/i.test(signature)
  )
}

async function readBodyWithLimit(
  request: Request,
  maxBytes: number,
): Promise<string | null> {
  const contentLength = request.headers.get('content-length')
  if (contentLength !== null) {
    const length = Number.parseInt(contentLength, 10)
    if (!Number.isFinite(length) || length < 0 || length > maxBytes) {
      return null
    }
  }

  const reader = request.body?.getReader()
  if (!reader) return null

  const chunks: Uint8Array[] = []
  let totalSize = 0

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      totalSize += value.byteLength
      if (totalSize > maxBytes) {
        await reader.cancel()
        return null
      }

      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }

  return Buffer.concat(chunks).toString('utf8')
}

function verifyMicroCMSSignature(
  body: string,
  signature: string | null,
  secret: string,
): boolean {
  if (!signature) return false

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body, 'utf8')
    .digest('hex')

  const signatureBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expectedSignature)

  if (signatureBuffer.length !== expectedBuffer.length) return false

  return crypto.timingSafeEqual(signatureBuffer, expectedBuffer)
}

export async function POST(request: Request) {
  const secret = process.env.MICROCMS_WEBHOOK_SECRET
  if (!secret) {
    return new Response(null, { status: 401 })
  }

  const signature = request.headers.get('x-microcms-signature')
  if (!isValidSignatureFormat(signature)) {
    return new Response(null, { status: 401 })
  }

  if (request.body === null) return new Response(null, { status: 400 })

  const body = await readBodyWithLimit(request, MAX_WEBHOOK_BODY_BYTES)
  if (body === null) {
    return new Response(null, { status: 413 })
  }

  if (!verifyMicroCMSSignature(body, signature, secret)) {
    return new Response(null, { status: 401 })
  }

  let data: { id?: unknown }
  try {
    data = JSON.parse(body)
  } catch {
    return new Response(null, { status: 400 })
  }

  if (data.id === undefined) return new Response(null, { status: 400 })

  revalidateTag('home', 'max')
  console.log('revalidate: /')

  revalidateTag('feed', 'max')
  console.log('revalidate: /feed')

  revalidateTag('contents-latest', 'max')
  console.log('revalidate: /content/latest/*')

  revalidateTag('contents-category', 'max')
  console.log('revalidate: /content/category/*')

  revalidateTag(`content-detail-${data.id}`, 'max')
  console.log(`revalidate: /content/detail/${data.id}`)

  revalidateTag('categories', 'max')
  console.log('revalidate: categories')

  return new Response(null, { status: 200 })
}
