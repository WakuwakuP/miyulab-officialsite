import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'
import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'

export const revalidate = 600

type Params = Promise<{ categoryId: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { categoryId } = await params
  return {
    title: categoryId,
  }
}

const getContentsCategory = async (categoryId: string) =>
  await client.get({
    endpoint: 'contents',
    queries: {
      filters: `category[contains]${categoryId},contentsCategory[contains]article`,
      limit: PAGE_LIMIT,
      orders: '-publishedAt',
    },
  })

const cachedGetContentsCategory = (categoryId: string) =>
  unstable_cache(
    async () => await getContentsCategory(categoryId),
    [`contents-category-${categoryId}-page-1`],
    {
      tags: ['contents-category'],
    },
  )

export default async function ContentsCategory({ params }: { params: Params }) {
  const { categoryId } = await params
  const getContentsCategory = cachedGetContentsCategory(categoryId)
  const data = await getContentsCategory()
  const contents = data.contents
  const totalCount = data.totalCount
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT)

  if (!data || data.contents.length === 0) {
    notFound()
  }

  return (
    <ContentLatest
      categoryId={categoryId}
      contents={contents}
      page={1}
      totalPage={totalPage}
    />
  )
}
