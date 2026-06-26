/* eslint-disable no-console */
import { revalidateTag } from 'next/cache'

export const revalidate = 0

export async function POST(request: Request) {
  const secret = request.headers.get('x-api-key')
  if (
    !process.env.REVALIDATE_SECRET ||
    secret !== process.env.REVALIDATE_SECRET
  ) {
    return new Response(null, { status: 401 })
  }

  if (request.body === null) return new Response(null, { status: 400 })

  const data = await request.json()

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
