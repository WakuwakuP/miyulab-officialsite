import type { Metadata } from 'next'
import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'

import { ContentDetail } from 'components/templates'
import { client } from 'libs/client'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Detail',
}

const getContentDetail = async (id: string) => {
  return await client
    .get({
      endpoint: 'contents',
      contentId: id,
    })
    .catch(() => undefined)
}

const getNextArticle = async (publishedAt: string) => {
  return await client
    .get({
      endpoint: 'contents',
      queries: {
        filters: `publishedAt[greater_than]${publishedAt}`,
        orders: 'publishedAt',
        limit: 1,
      },
    })
    .catch(() => undefined)
}

const getPreviousArticle = async (publishedAt: string) => {
  return await client
    .get({
      endpoint: 'contents',
      queries: {
        filters: `publishedAt[less_than]${publishedAt}`,
        orders: '-publishedAt',
        limit: 1,
      },
    })
    .catch(() => undefined)
}

const cachedGetContentDetail = (id: string) =>
  unstable_cache(
    async () => {
      return await getContentDetail(id)
    },
    ['content-detail', id],
    {
      tags: ['content-detail'],
    },
  )

const cachedGetNextArticle = (publishedAt: string) =>
  unstable_cache(
    async () => {
      return await getNextArticle(publishedAt)
    },
    ['next-article', publishedAt],
    {
      tags: ['next-article'],
    },
  )

const cachedGetPreviousArticle = (publishedAt: string) =>
  unstable_cache(
    async () => {
      return await getPreviousArticle(publishedAt)
    },
    ['previous-article', publishedAt],
    {
      tags: ['previous-article'],
    },
  )

export default async function ContentDetailPage({ params }: { params: { id: string } }) {
  const getContentDetail = cachedGetContentDetail(params.id)

  const data = await getContentDetail()

  if (!data) {
    notFound()
  }

  const content = data
  const nextArticle = cachedGetNextArticle(content.publishedAt)
  const previousArticle = cachedGetPreviousArticle(content.publishedAt)

  return (
    <ContentDetail
      content={content}
      nextArticle={nextArticle?.contents[0] || null}
      previousArticle={previousArticle?.contents[0] || null}
    />
  )
}
