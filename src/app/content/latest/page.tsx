import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Latest',
}

export default async function ContentLatestPage() {
  const data = await client
    .get({
      endpoint: 'contents',
      queries: {
        filters: 'contentsCategory[contains]article',
        orders: '-publishedAt',
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
