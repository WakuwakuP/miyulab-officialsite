import * as cheerio from 'cheerio'
import hljs from 'highlight.js'
import { createTableOfContents, processer } from 'microcms-richedit-processer'
import { GetStaticPaths, GetStaticProps } from 'next'

import type { Category } from 'types/Category'
import type { Content } from 'types/Content'

import { client } from 'libs/client'
import styles from 'styles/pages/content/Detail.module.css'

import 'highlight.js/styles/github-dark.css'

type Props = {
  content: Content
  toc: any
}

const ContentDetailPage = ({ content, toc }: Props) => {
  return (
    <>
      <h1>{content.title} </h1>
      <p> {content.publishedAt} </p>
      {content.category.map((category: Category) => (
        <li key={category.id}>#{category.name}</li>
      ))}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${content.content}`,
        }}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
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

  const $ = cheerio.load(content.content)
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

  return {
    props: {
      content: {
        ...content,
        // content: $.html(),
        content: await processer(content.content, {
          img: { lazy: false },
          iframe: { lazy: false },
          code: { enabled: true },
        }),
      },
      toc: createTableOfContents(content.content),
    },
    revalidate: 600,
  }
}

export default ContentDetailPage
