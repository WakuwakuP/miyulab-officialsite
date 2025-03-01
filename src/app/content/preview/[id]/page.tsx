import { notFound } from 'next/navigation'

import * as cheerio from 'cheerio'
import hljs from 'highlight.js'
import { createTableOfContents, processer } from 'microcms-richedit-processer'
import { ImgixFormat } from 'ts-imgix'

import { ContentDetail } from 'components/templates'
import { client } from 'libs/client'

import type { CreateTableOfContentsOptions } from 'microcms-richedit-processer/lib/types'

export const revalidate = 0

export const dynamic = 'force-dynamic'

if (!process.env.BASE_URL || !process.env.SITE_TITLE) {
  throw new Error('BASE_URL or SITE_TITLE is not set')
}

const BASE_URL = process.env.BASE_URL
const SITE_TITLE = process.env.SITE_TITLE

type Params = Promise<{ id: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params
  const content = await client
    .get({
      endpoint: 'contents',
      contentId: id,
    })
    .catch(() => undefined)

  if (!content) {
    return {}
  }

  return {
    title: content.title,
    openGraph: {
      title: `${content.title} | ${SITE_TITLE}`,
      url: `https://${BASE_URL}/content/detail/${content.id}`,
      type: 'article',
      images: [
        {
          url: content.thumbnail?.url
            ? `${content.thumbnail.url}?fit=crop&w=1200&h=630`
            : `https://${BASE_URL}/img/ogp.png`,
        },
      ],
    },
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

  if (!key || !id) {
    notFound()
  }

  const content = await client
    .get({
      endpoint: 'contents',
      contentId: id,
      queries: { draftKey: key },
    })
    .catch(() => undefined)

  if (!content) {
    notFound()
  }

  const body = content.content.reduce((acc: string, cur: { fieldId: string; html: string }) => acc + cur.html, '')

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
      .attr('style', 'border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;')
  })

  const tocOption: CreateTableOfContentsOptions = {
    tags: 'h2, h3',
  }

  return (
    <ContentDetail
      content={{
        ...content,
        content: await processer(body, {
          img: {
            lazy: false,
            parameters: {
              fm: ImgixFormat.webp,
              q: 75,
            },
            deviceSizes: [640, 800],
          },
          iframe: { lazy: false },
          code: { enabled: true },
        }),
      }}
      toc={createTableOfContents(body, tocOption)}
    />
  )
}
