import type { InferGetStaticPropsType, NextPage } from 'next'

import type { Category } from 'types/Category'
import type { Content } from 'types/Content'

import { Home } from 'components/templates'
import { client } from 'libs/client'

type Props = {
  contents: Content[]
  categories: Category[]
}

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props: Props) => {
  return <Home {...props} />
}

export const getStaticProps = async () => {
  const contents = (
    await client.get({
      endpoint: 'contents',
      queries: {
        filters: 'contentsCategory[contains]article',
        orders: '-publishdAt',
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

export default HomePage
