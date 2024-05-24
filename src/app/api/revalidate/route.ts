/* eslint-disable no-console */
import { revalidatePath } from 'next/cache'

export const revalidate = 0

export async function POST(request: Request) {
  if (request.body === null) return new Response(null, { status: 400 })

  const data = await request.json()

  if (data.id === undefined) return new Response(null, { status: 400 })

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  revalidatePath(`/content/detail/${data.id}`)
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`revalidate: /content/detail/${data.id}`)

  revalidatePath('/')
  revalidatePath('/feed')
  revalidatePath('/content/latest/')
  revalidatePath('/content/latest/[page]')
  revalidatePath('/content/category/[categoryId]/')
  revalidatePath('/content/category/[categoryId]/[page]')

  console.log('revalidate: /')
  console.log('revalidate: /feed')
  console.log('revalidate: /content/latest/*')
  console.log('revalidate: /content/category/*')

  return new Response(null, { status: 200 })
}
