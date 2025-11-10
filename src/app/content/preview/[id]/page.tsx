import * as cheerio from 'cheerio'
import { ContentDetail } from 'components/templates'
import hljs from 'highlight.js'
import { client } from 'libs/client'
import { createTableOfContents, processer } from 'microcms-richedit-processer'
import { type CreateTableOfContentsOptions } from 'microcms-richedit-processer/lib/types'
import { notFound } from 'next/navigation'
import { ImgixFormat } from 'ts-imgix'

export const revalidate = 0

export const dynamic = 'force-dynamic'

// Handle missing environment variables gracefully during build
const BASE_URL = process.env.BASE_URL || 'localhost:3000'
const SITE_TITLE = process.env.SITE_TITLE || 'Miyulab Official Site'

type Params = Promise<{ id: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params
  const content = await client
    .get({
      contentId: id,
      endpoint: 'contents',
    })
    .catch(() => {})

  if (!content) {
    return {}
  }

  return {
    openGraph: {
      images: [
        {
          url: content.thumbnail?.url
            ? `${content.thumbnail.url}?fit=crop&w=1200&h=630`
            : `https://${BASE_URL}/img/ogp.png`,
        },
      ],
      title: `${content.title} | ${SITE_TITLE}`,
      type: 'article',
      url: `https://${BASE_URL}/content/detail/${content.id}`,
    },
    title: content.title,
  }
}

export default async function ContentDetailPage({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) {
  const { id } = await params
  const { draftKey } = await searchParams
  const key = typeof draftKey === 'string' ? draftKey : undefined

  if (!(key && id)) {
    notFound()
  }

  const content = await client
    .get({
      contentId: id,
      endpoint: 'contents',
      queries: { draftKey: key },
    })
    .catch(() => {})

  if (!content) {
    notFound()
  }

  const body = content.content.reduce(
    (acc: string, cur: { fieldId: string; html: string }) => acc + cur.html,
    '',
  )

  const $ = cheerio.load(body)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  $('iframe').each((_, elm) => {
    const wrapDiv = $(
      '<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"></div>',
    )
    $(elm).wrap(wrapDiv)
    $(elm)
      .attr('width', null)
      .attr('height', null)
      .attr(
        'style',
        'border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;',
      )
  })

  const tocOption: CreateTableOfContentsOptions = {
    tags: 'h2, h3',
  }

  return (
    <ContentDetail
      content={{
        ...content,
        content: await processer(body, {
          code: { enabled: true },
          iframe: { lazy: false },
          img: {
            // biome-ignore lint/style/noMagicNumbers: Device sizes for responsive images from microCMS
            deviceSizes: [640, 800],
            lazy: false,
            parameters: {
              fm: ImgixFormat.webp,
              q: 75,
            },
          },
        }),
      }}
      toc={createTableOfContents(body, tocOption)}
    />
  )
}
