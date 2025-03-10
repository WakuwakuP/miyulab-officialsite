import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'

import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'

export const revalidate = 600

type Params = Promise<{ categoryId: string; page: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { categoryId } = await params
  return {
    title: categoryId,
  }
}

const getContentsCategory = async (categoryId: string, page: string) => {
  return await client.get({
    endpoint: 'contents',
    queries: {
      filters: `category[contains]${categoryId},contentsCategory[contains]article`,
      orders: '-publishedAt',
      offset: (Number(page) - 1) * PAGE_LIMIT,
      limit: PAGE_LIMIT,
    },
  })
}

const getCacheContentsCategory = (categoryId: string, page: string) =>
  unstable_cache(
    async () => {
      return await getContentsCategory(categoryId, page)
    },
    [`contents-category-${categoryId}-page-${page}`],
    {
      tags: ['contents-category'],
    },
  )

export default async function ContentsCategory({ params }: { params: Params }) {
  const { categoryId, page } = await params
  const getContentsCategory = getCacheContentsCategory(categoryId, page)
  const data = await getContentsCategory()

  if (!data || data.contents.length === 0) {
    notFound()
  }

  const contents = data.contents
  const totalCount = data.totalCount
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT)
  const pageNumber = Number(page)

  return <ContentLatest categoryId={categoryId} contents={contents} page={pageNumber} totalPage={totalPage} />
}
