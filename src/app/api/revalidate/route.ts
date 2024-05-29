/* eslint-disable no-console */
import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidate = 0

export async function POST(request: Request) {
  if (request.body === null) return new Response(null, { status: 400 })

  const data = await request.json()

  if (data.id === undefined) return new Response(null, { status: 400 })

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  revalidatePath(`/content/detail/${data.id}`, 'page')

  revalidateTag('home')
  console.log('revalidate: /')

  revalidateTag('feed')
  console.log('revalidate: /feed')

  revalidateTag('contents-latest')
  console.log('revalidate: /content/latest/*')

  revalidateTag('contents-category')
  console.log('revalidate: /content/category/*')

  revalidateTag(`content-detail-${data.id}`)
  console.log(`revalidate: /content/detail/${data.id}`)

  return new Response(null, { status: 200 })
}
