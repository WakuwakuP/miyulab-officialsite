import {
  GetStaticPaths,
  GetStaticProps,
} from 'next'
import { client } from 'libs/client'
import type { Content } from 'types/Content'
import ContentCard from 'components/ContentCard'
import { Pagination } from 'components/Pagination'
import { PAGE_LIMIT } from 'libs/const'
import styles from 'styles/pages/content/Latest.module.css'

type Props = {
  contents: Content[]
  totalCount: number
}

const ContentLatestPage = ({ contents, totalCount }: Props) => {
  return (
    <>
      <div className={styles.newContnetList}>
        {
          contents.map((content: Content) => (
            <ContentCard content={content} key={content.id} />
          ))
        }
      </div>
      <Pagination totalCount={totalCount} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context.params?.page);
  if (page === NaN) {
    return {
      notFound: true,
    };
  }
  const data = (await client.get({
    endpoint: 'contents',
    queries: {
      filters: 'contentsCategory[contains]article',
      orders: '-createdAt',
      offset: (page - 1) * PAGE_LIMIT,
      limit: PAGE_LIMIT,
    },
  }))
  const contents = data.contents
  const totalCount = data.totalCount

  return {
    props: {
      contents,
      totalCount,
    },
    revalidate: 600,
    notFound: contents.length === 0,
  }
}

export default ContentLatestPage
