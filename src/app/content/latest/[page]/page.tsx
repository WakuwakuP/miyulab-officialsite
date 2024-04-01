import { notFound } from 'next/navigation'

import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'

export const revalidate = 600

export const metadata = {
  title: 'Latest',
}

export default async function ContentLatestPage({ params: { page } }: { params: { page: string } }) {
  const data = await client
    .get({
      endpoint: 'contents',
      queries: {
        filters: 'contentsCategory[contains]article',
        orders: '-publishedAt',
        offset: (Number(page) - 1) * PAGE_LIMIT,
        limit: PAGE_LIMIT,
      },
    })
    .catch(() => undefined)

  if (!data || data.contents.length === 0) {
    notFound()
  }

  const contents = data.contents
  const totalCount = data.totalCount
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT)

  return <ContentLatest contents={contents} totalPage={totalPage} />
}
