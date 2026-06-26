/* eslint-disable no-console */
import crypto from 'node:crypto'
import { revalidateTag } from 'next/cache'

export const revalidate = 0

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

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature),
  )
}

export async function POST(request: Request) {
  const secret = process.env.MICROCMS_WEBHOOK_SECRET
  if (!secret) {
    return new Response(null, { status: 401 })
  }

  if (request.body === null) return new Response(null, { status: 400 })

  const body = await request.text()
  const signature = request.headers.get('x-microcms-signature')

  if (!verifyMicroCMSSignature(body, signature, secret)) {
    return new Response(null, { status: 401 })
  }

  const data = JSON.parse(body)

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
