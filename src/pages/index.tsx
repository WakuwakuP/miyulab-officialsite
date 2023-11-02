import type { InferGetStaticPropsType, NextPage } from 'next'

import { Home } from 'components/templates'
import { client } from 'libs/client'

import type { Category, ContentModify } from 'types'

type Props = {
  contents: ContentModify[]
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
        orders: '-publishedAt',
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
    revalidate: 60,
  }
}

export default HomePage
