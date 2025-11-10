import * as cheerio from 'cheerio'
import { ContentDetail } from 'components/templates'
import hljs from 'highlight.js'
import { client } from 'libs/client'
import { createTableOfContents, processer } from 'microcms-richedit-processer'
import { type CreateTableOfContentsOptions } from 'microcms-richedit-processer/lib/types'
import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'
import { ImgixFormat } from 'ts-imgix'

export const revalidate = 600

type Params = Promise<{ id: string }>

const getContentDetail = async (id: string) =>
  await client
    .get({
      contentId: id,
      endpoint: 'contents',
    })
    .catch(() => {})

const cachedGetContentDetail = (id: string) =>
  unstable_cache(
    async () => await getContentDetail(id),
    ['content-detail', id],
    {
      tags: [`content-detail-${id}`],
    },
  )

const getNextContent = async (publishedAt: string) =>
  await client
    .get({
      endpoint: 'contents',
      queries: {
        filters: `publishedAt[less_than]${publishedAt}`,
        limit: 1,
        orders: '-publishedAt',
      },
    })
    .catch(() => {})

const cachedGetNextContent = (publishedAt: string, id: string) =>
  unstable_cache(
    async () => await getNextContent(publishedAt),
    ['content-detail-next', id],
    {
      tags: [`content-detail-${id}`],
    },
  )

const getPrevContent = async (publishedAt: string) =>
  await client
    .get({
      endpoint: 'contents',
      queries: {
        filters: `publishedAt[greater_than]${publishedAt}`,
        limit: 1,
        orders: 'publishedAt',
      },
    })
    .catch(() => {})

const cachedGetPreviousContent = (publishedAt: string, id: string) =>
  unstable_cache(
    async () => await getPrevContent(publishedAt),
    ['content-detail-prev', id],
    {
      tags: [`content-detail-${id}`],
    },
  )

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params
  const BASE_URL = process.env.BASE_URL
  const SITE_TITLE = process.env.SITE_TITLE

  const getContentDetail = cachedGetContentDetail(id)

  const content = await getContentDetail()

  if (content == null) {
    return {}
  }

  return {
    description: content?.description ?? undefined,
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
}: {
  params: Params
}) {
  const { id } = await params
  const getContentDetail = cachedGetContentDetail(id)

  const content = await getContentDetail()

  if (content == null) {
    notFound()
  }

  const getNextContent = cachedGetNextContent(content.publishedAt, id)
  const getPreviousContent = cachedGetPreviousContent(content.publishedAt, id)
  const nextContent = (await getNextContent()).contents[0] ?? null
  const previousContent = (await getPreviousContent()).contents[0] ?? null

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
      nextContent={nextContent ?? null}
      previousContent={previousContent ?? null}
      toc={createTableOfContents(body, tocOption)}
    />
  )
}
