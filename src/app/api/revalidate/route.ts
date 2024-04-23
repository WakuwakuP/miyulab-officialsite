/* eslint-disable no-console */
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  if (request.body === null) return new Response(null, { status: 400 })

  const data = await request.json()

  if (data.id === undefined) return new Response(null, { status: 400 })

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  revalidatePath(`/content/detail/${data.id}`, 'page')
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`revalidate: /content/detail/${data.id}`)

  if (data.contents.old?.status[0] !== data.contents.new?.status[0]) {
    revalidatePath('/', 'page')
    revalidatePath('/content/latest/', 'page')
    revalidatePath('/content/latest/[page]', 'page')
    revalidatePath('/content/category/[categoryId]/', 'page')
    revalidatePath('/content/category/[categoryId]/[page]', 'page')
    revalidatePath('/feed')

    console.log('revalidate: /')
    console.log('revalidate: /feed')
    console.log('revalidate: /content/latest/*')
    console.log('revalidate: /content/category/*')
  }

  return new Response(null, { status: 200 })
}
