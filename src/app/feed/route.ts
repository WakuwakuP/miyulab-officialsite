import { unstable_cache } from 'next/cache'

import RSS from 'rss'

import { client } from 'libs/client'

import type { Content } from 'types'

export const revalidate = 0

if (!process.env.BASE_URL) {
  throw new Error('BASE_URL is not set')
}

const BASE_URL = process.env.BASE_URL

const getCache = unstable_cache(generateFeedXml, ['contents', 'contentsCategory', 'article'], { tags: ['feed'] })

async function generateFeedXml() {
  const feed = new RSS({
    title: 'Miyulab Blog',
    description: 'Miyulab Official website Blog feed',
    site_url: `https://${BASE_URL}`,
    feed_url: `https://${BASE_URL}/feed`,
    language: 'ja',
  })

  const { contents } = await client.get({
    endpoint: 'contents',
    queries: {
      filters: 'contentsCategory[contains]article',
      orders: '-publishedAt',
    },
  })

  contents?.forEach((content: Content) => {
    feed.item({
      title: content.title,
      description: content.content.reduce((acc: string, cur) => acc + (cur.html || ''), ''),
      date: content.publishedAt ? new Date(content.publishedAt) : '',
      url: `http://${BASE_URL}/content/detail/${content.id}`,
    })
  })

  return feed.xml()
}

export async function GET() {
  const xml = await getCache()

  return new Response(xml, {
    status: 200,
    headers: {
      'Cache-Control': 's-maxage=600, stale-while-revalidate',
      'Content-Type': 'text/xml',
    },
  })
}
