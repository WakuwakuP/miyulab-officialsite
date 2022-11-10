import type { GetStaticProps } from 'next'

import type { Content } from 'types/Content'

import { ContentLatest } from 'components/templates'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'

type Props = {
  contents: Content[]
  totalPage: number
}

const ContentLatestPage = ({ contents, totalPage }: Props) => {
  return <ContentLatest contents={contents} totalPage={totalPage} />
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: 'contents',
    queries: {
      filters: 'contentsCategory[contains]article',
      orders: '-publishdAt',
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
    },
    revalidate: 600,
  }
}

export default ContentLatestPage
