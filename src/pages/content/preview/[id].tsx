import type { GetServerSideProps } from 'next'

import * as cheerio from 'cheerio'
import hljs from 'highlight.js'
import { createTableOfContents, processer } from 'microcms-richedit-processer'

import { ContentPreview } from 'components/templates'
import { client } from 'libs/client'

import type { CreateTableOfContentsOptions } from 'microcms-richedit-processer/lib/types'
import type { Content } from 'types/Content'

interface ContentDetailPageProps {
  content: Content
  toc: {
    id: string
    text: string
    name: string
  }[]
}

const ContentDetailPage = ({ content, toc }: ContentDetailPageProps) => {
  return <ContentPreview content={content} toc={toc} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  const draftKey = context.query?.draftKey as string | undefined
  const idExceptArray = id instanceof Array ? id[0] : id

  const content = await client.get({
    endpoint: 'contents',
    contentId: idExceptArray,
    queries: { draftKey: draftKey },
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
    },
  }
}

export default ContentDetailPage
