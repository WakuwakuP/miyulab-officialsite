import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'
import { type Metadata } from 'next'
import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Latest',
}

const getContentLatest = async () =>
  await client
    .get({
      endpoint: 'contents',
      queries: {
        filters: 'contentsCategory[contains]article',
        limit: PAGE_LIMIT,
        orders: '-publishedAt',
      },
    })
    .catch(() => {})

const cachedGetContentLatest = () =>
  unstable_cache(
    async () => await getContentLatest(),
    ['contents-latest-page-1'],
    {
      tags: ['contents-latest'],
    },
  )

export default async function ContentLatestPage() {
  const getContentLatest = cachedGetContentLatest()

  const data = await getContentLatest()

  if (!data?.contents || data.contents.length === 0) {
    notFound()
  }

  const contents = data.contents
  const totalCount = data.totalCount
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT)

  return <ContentLatest contents={contents} totalPage={totalPage} />
}
