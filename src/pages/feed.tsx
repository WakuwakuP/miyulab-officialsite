import type { GetServerSidePropsContext } from 'next'

import RSS from 'rss'

import { client } from 'libs/client'

import type { Content } from 'types'

async function generateFeedXml() {
  const feed = new RSS({
    title: 'Miyulab Blog',
    description: 'Miyulab Official website Blog feed',
    site_url: `https://${process.env.BASE_URL}`,
    feed_url: `https://${process.env.BASE_URL}/feed`,
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
      url: ``,
    })
  })

  return feed.xml()
}

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateFeedXml()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)

  return {
    props: {},
  }
}

const Page = () => null
export default Page
