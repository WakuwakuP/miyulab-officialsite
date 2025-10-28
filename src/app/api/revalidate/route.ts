/* eslint-disable no-console */
import { revalidateTag } from 'next/cache'

export const revalidate = 0

export async function POST(request: Request) {
  if (request.body === null) return new Response(null, { status: 400 })

  const data = await request.json()

  if (data.id === undefined) return new Response(null, { status: 400 })

  revalidateTag('home', 'default')
  console.log('revalidate: /')

  revalidateTag('feed', 'default')
  console.log('revalidate: /feed')

  revalidateTag('contents-latest', 'default')
  console.log('revalidate: /content/latest/*')

  revalidateTag('contents-category', 'default')
  console.log('revalidate: /content/category/*')

  revalidateTag(`content-detail-${data.id}`, 'default')
  console.log(`revalidate: /content/detail/${data.id}`)

  revalidateTag('categories', 'default')
  console.log('revalidate: categories')

  return new Response(null, { status: 200 })
}
