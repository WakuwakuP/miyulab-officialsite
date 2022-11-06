import { GetStaticPaths, GetStaticProps } from 'next'

import type { Content } from 'types/Content'

import ContentCard from 'components/containers/ContentCard'
import { Pagination } from 'components/containers/Pagination/Pagination'
import { client } from 'libs/client'
import { PAGE_LIMIT } from 'libs/const'
import styles from 'styles/pages/content/Latest.module.css'

type Props = {
  contents: Content[]
  totalPage: number
}

const ContentLatest = ({ contents, totalPage }: Props) => {
  return (
    <>
      <div className={styles.newContnetList}>
        {contents.map((content: Content) => (
          <ContentCard content={content} key={content.id} />
        ))}
      </div>
      <Pagination totalPage={totalPage} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: 'contents',
    queries: {
      filters: 'contentsCategory[contains]article',
      orders: '-createdAt',
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

export default ContentLatest
