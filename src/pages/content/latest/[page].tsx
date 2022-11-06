import { GetStaticPaths, GetStaticProps } from 'next'

import type { Content } from 'types/Content'

import ContentCard from 'components/containers/ContentCard'
import { Pagination } from 'components/containers/Pagination/Pagination'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'
import styles from 'styles/pages/content/Latest.module.css'

interface Props {
  contents: Content[]
  totalPage: number
  page: number
}

const ContentLatestPage = ({ contents, page, totalPage }: Props) => {
  return (
    <>
      <div className={styles.newContnetList}>
        {contents.map((content: Content) => (
          <ContentCard content={content} key={content.id} />
        ))}
      </div>
      <Pagination totalPage={totalPage} page={page} />
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
      orders: '-createdAt',
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
