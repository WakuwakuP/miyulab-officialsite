import type { GetStaticPaths, GetStaticProps } from 'next'

import type { Content } from 'types/Content'

import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'

type Props = {
  categoryId: string
  contents: Content[]
  totalPage: number
  page: number
}

const ContentLatestPage = ({ categoryId, page, contents, totalPage }: Props) => {
  return <ContentLatest categoryId={categoryId} contents={contents} page={page} totalPage={totalPage} />
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
    revalidate: 600,
  }
}

export default ContentLatestPage
