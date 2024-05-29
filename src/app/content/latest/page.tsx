import type { Metadata } from 'next'
import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'

import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Latest',
}

const getContentLatest = async () => {
  return await client
    .get({
      endpoint: 'contents',
      queries: {
        filters: 'contentsCategory[contains]article',
        orders: '-publishedAt',
        limit: PAGE_LIMIT,
      },
    })
    .catch(() => undefined)
}

const cachedGetContentLatest = () =>
  unstable_cache(
    async () => {
      return await getContentLatest()
    },
    ['contents-latest'],
    {
      tags: ['contents-latest'],
    },
  )

export default async function ContentLatestPage() {
  const getContentLatest = cachedGetContentLatest()

  const data = await getContentLatest()

  if (!data || !data.contents || data.contents.length === 0) {
    notFound()
  }

  const contents = data.contents
  const totalCount = data.totalCount
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT)

  return <ContentLatest contents={contents} totalPage={totalPage} />
}
