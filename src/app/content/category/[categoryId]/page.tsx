import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'

import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'

export const revalidate = 600

export async function generateMetadata({ params: { categoryId } }: { params: { categoryId: string } }) {
  return {
    title: categoryId,
  }
}

const getContentsCategory = async (categoryId: string) => {
  return await client.get({
    endpoint: 'contents',
    queries: {
      filters: `category[contains]${categoryId},contentsCategory[contains]article`,
      orders: '-publishedAt',
      limit: PAGE_LIMIT,
    },
  })
}

const cachedGetContentsCategory = (categoryId: string) =>
  unstable_cache(
    async () => {
      return await getContentsCategory(categoryId)
    },
    [`contents-category-${categoryId}-page-1`],
    {
      tags: ['contents-category'],
    },
  )

export default async function ContentsCategory({ params: { categoryId } }: { params: { categoryId: string } }) {
  const getContentsCategory = cachedGetContentsCategory(categoryId)
  const data = await getContentsCategory()
  const contents = data.contents
  const totalCount = data.totalCount
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT)

  if (!data || data.contents.length === 0) {
    notFound()
  }

  return (
    <>
      <ContentLatest categoryId={categoryId} contents={contents} page={1} totalPage={totalPage} />
    </>
  )
}
