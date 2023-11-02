import type { GetStaticPaths, GetStaticProps } from 'next'

import * as cheerio from 'cheerio'
import hljs from 'highlight.js'
import { createTableOfContents, processer } from 'microcms-richedit-processer'
import { NextSeo } from 'next-seo'

import { ContentDetail } from 'components/templates'
import { client } from 'libs/client'

import type { CreateTableOfContentsOptions } from 'microcms-richedit-processer/lib/types'
import type { NextSeoProps } from 'next-seo'
import type { ContentModify } from 'types'

interface ContentDetailPageProps {
  content: ContentModify
  toc: {
    id: string
    text: string
    name: string
  }[]
  seo: NextSeoProps
}

const ContentDetailPage = ({ content, toc, seo }: ContentDetailPageProps) => {
  return (
    <>
      <NextSeo {...seo} />
      <ContentDetail content={content} toc={toc} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const BASE_URL = process.env.BASE_URL
  const SITE_TITLE = process.env.SITE_TITLE
  const id = context.params?.id
  const idExceptArray = id instanceof Array ? id[0] : id
  const content = await client.get({
    endpoint: 'contents',
    contentId: idExceptArray,
  })

  if (!content) {
    return {
      redirect: {
        permanent: false,
        destination: `/404`,
      },
      revalidate: 60,
    }
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

  return {
    props: {
      content: {
        ...content,
        content: await processer(body, {
          img: { lazy: false },
          iframe: { lazy: false },
          code: { enabled: true },
        }),
      },
      toc: createTableOfContents(body, tocOption),
      seo: {
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
      },
    },
    revalidate: 60,
  }
}

export default ContentDetailPage
