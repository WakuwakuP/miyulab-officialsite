import type { InferGetStaticPropsType, NextPage } from 'next'

import ContentCard from 'components/containers/ContentCard'
import { client } from 'libs/client'
import styles from 'styles/pages/Home.module.css'
import { Category } from 'types/Category'
import { Content } from 'types/Content'

type Props = {
  contents: Content[]
  categories: Category[]
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ contents, categories }: Props) => {
  return (
    <>
      <div className={styles.newContnetList}>
        {contents.map((content: Content) => (
          <ContentCard content={content} key={content.id} />
        ))}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const contents = (
    await client.get({
      endpoint: 'contents',
      queries: {
        filters: 'contentsCategory[contains]article',
        orders: '-createdAt',
        limit: 2,
      },
    })
  ).contents
  const category = await client.get({ endpoint: 'categories' })

  return {
    props: {
      contents,
      categories: category.contents,
    },
    revalidate: 600,
  }
}

export default Home
