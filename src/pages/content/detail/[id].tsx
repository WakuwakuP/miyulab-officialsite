import type { GetStaticPaths, GetStaticProps } from 'next'

import * as cheerio from 'cheerio'
import hljs from 'highlight.js'
import { createTableOfContents, processer } from 'microcms-richedit-processer'

import type { CreateTableOfContentsOptions } from 'microcms-richedit-processer/lib/types'
import type { Content } from 'types/Content'

import { ContentDetail } from 'components/templates/ContentDetail/ContentDetail'
import { client } from 'libs/client'

interface ContentDetailPageProps {
  content: Content
  toc: unknown
}

const ContentDetailPage = ({ content, toc }: ContentDetailPageProps) => {
  return <ContentDetail content={content} toc={toc} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id
  const idExceptArray = id instanceof Array ? id[0] : id
  const content = await client.get({
    endpoint: 'contents',
    contentId: idExceptArray,
  })

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
    },
    revalidate: 600,
  }
}

export default ContentDetailPage
