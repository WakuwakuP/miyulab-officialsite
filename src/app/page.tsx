import { unstable_cache } from 'next/cache'

import { Home } from 'components/templates'
import { client } from 'libs/client'

export const revalidate = 600

const getHomeContents = async () => {
  return await client.get({
    endpoint: 'contents',
    queries: {
      filters: 'contentsCategory[contains]article',
      orders: '-publishedAt',
      limit: 2,
    },
  })
}

const useCacheGetHomeContents = () =>
  unstable_cache(
    async () => {
      return await getHomeContents()
    },
    ['home'],
    {
      tags: ['home'],
    },
  )

export default async function HomePage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cacheGetHomeContents = useCacheGetHomeContents()
  const contents = (await cacheGetHomeContents()).contents
  const category = await client.get({ endpoint: 'categories' })

  const props = {
    contents,
    categories: category.contents,
  }
  return <Home {...props} />
}
