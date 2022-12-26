import type { GetStaticPaths, GetStaticProps } from 'next'

import { NextSeo } from 'next-seo'

import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'

import type { ContentModify } from 'types'

interface Props {
  contents: ContentModify[]
  totalPage: number
  page: number
}

const ContentLatestPage = ({ contents, page, totalPage }: Props) => {
  return (
    <>
      <NextSeo title='Latest' />
      <ContentLatest contents={contents} page={page} totalPage={totalPage} />
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
  const page = Number(context.params?.page)
  if (Number.isNaN(page)) {
    return {
      notFound: true,
    }
  }
  const data = await client.get({
    endpoint: 'contents',
    queries: {
      filters: 'contentsCategory[contains]article',
      orders: '-publishedAt',
      offset: (page - 1) * PAGE_LIMIT,
      limit: PAGE_LIMIT,
    },
  })
  const contents = data.contents
  const totalCount = data.totalCount
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT)

  return {
    props: {
      contents,
      totalPage,
      page,
    },
    revalidate: 600,
    notFound: contents.length === 0,
  }
}

export default ContentLatestPage
