import { client } from 'libs/client'
import { unstable_cache } from 'next/cache'
import RSS from 'rss'

import { type Content } from 'types'

export const revalidate = 0

// Handle missing BASE_URL gracefully during build
const BASE_URL = process.env.BASE_URL || 'localhost:3000'

const getCache = unstable_cache(
  generateFeedXml,
  ['contents', 'contentsCategory', 'article'],
  { tags: ['feed'] },
)

async function generateFeedXml() {
  const feed = new RSS({
    description: 'Miyulab Official website Blog feed',
    feed_url: `https://${BASE_URL}/feed`,
    language: 'ja',
    site_url: `https://${BASE_URL}`,
    title: 'Miyulab Blog',
  })

  // Handle missing microCMS environment variables gracefully during build
  if (!(process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY)) {
    console.warn(
      'microCMS environment variables not available. Generating empty feed.',
    )
    return feed.xml()
  }

  try {
    const { contents } = await client.get({
      endpoint: 'contents',
      queries: {
        filters: 'contentsCategory[contains]article',
        orders: '-publishedAt',
      },
    })

    contents?.forEach((content: Content) => {
      feed.item({
        date: content.publishedAt ? new Date(content.publishedAt) : '',
        description: content.content.reduce(
          (acc: string, cur) => acc + (cur.html || ''),
          '',
        ),
        title: content.title,
        url: `https://${BASE_URL}/content/detail/${content.id}`,
      })
    })
  } catch (error) {
    console.warn('Failed to fetch contents for RSS feed:', error)
  }

  return feed.xml()
}

export async function GET() {
  const xml = await getCache()

  return new Response(xml, {
    headers: {
      'Cache-Control': 's-maxage=600, stale-while-revalidate',
      'Content-Type': 'text/xml',
    },
    status: 200,
  })
}
