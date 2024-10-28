import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'

import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'

export const revalidate = 600

export const metadata = {
  title: 'Latest',
}

type Params = Promise<{ page: string }>

const getContentLatest = async (page: string) => {
  return await client
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
}

const cachedGetContentLatest = (page: string) =>
  unstable_cache(
    async () => {
      return await getContentLatest(page)
    },
    [`contents-latest-page-${page}`],
    {
      tags: ['contents-latest'],
    },
  )

export default async function ContentLatestPage({ params }: { params: Params }) {
  const { page } = await params
  const getContentLatest = cachedGetContentLatest(page)
  const data = await getContentLatest()

  if (!data || !data.contents || data.contents.length === 0) {
    notFound()
  }

  const contents = data.contents
  const totalCount = data.totalCount
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT)

  return <ContentLatest contents={contents} page={Number(page)} totalPage={totalPage} />
}
