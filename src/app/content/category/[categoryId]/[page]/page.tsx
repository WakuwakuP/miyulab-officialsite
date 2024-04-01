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

export default async function ContentsCategory({
  params: { categoryId, page },
}: {
  params: { categoryId: string; page: string }
}) {
  const data = await client.get({
    endpoint: 'contents',
    queries: {
      filters: `category[contains]${categoryId},contentsCategory[contains]article`,
      orders: '-publishedAt',
      offset: (Number(page) - 1) * PAGE_LIMIT,
      limit: PAGE_LIMIT,
    },
  })

  if (!data || data.contents.length === 0) {
    notFound()
  }

  const contents = data.contents
  const totalCount = data.totalCount
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT)
  const pageNumber = Number(page)

  return <ContentLatest categoryId={categoryId} contents={contents} page={pageNumber} totalPage={totalPage} />
}
