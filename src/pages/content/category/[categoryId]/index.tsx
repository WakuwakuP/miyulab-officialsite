import type { GetStaticPaths, GetStaticProps } from 'next'

import { NextSeo } from 'next-seo'

import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'

import type { ContentModify } from 'types'

type Props = {
  categoryId: string
  contents: ContentModify[]
  totalPage: number
}

const ContentLatestPage = ({ categoryId, contents, totalPage }: Props) => {
  return (
    <>
      <NextSeo title={categoryId} />
      <ContentLatest categoryId={categoryId} contents={contents} totalPage={totalPage} />
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
  const categoryId = context.params?.categoryId
  const data = await client.get({
    endpoint: 'contents',
    queries: {
      filters: `category[contains]${categoryId},contentsCategory[contains]article`,
      orders: '-publishedAt',
      limit: PAGE_LIMIT,
    },
  })
  const contents = data.contents
  const totalCount = data.totalCount
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT)

  return {
    props: {
      categoryId,
      contents,
      totalPage,
    },
    revalidate: 60,
  }
}

export default ContentLatestPage
