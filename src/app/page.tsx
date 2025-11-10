import { Home } from 'components/templates'
import { client } from 'libs/client'
import { unstable_cache } from 'next/cache'

export const revalidate = 600

const getHomeContents = async () =>
  await client.get({
    endpoint: 'contents',
    queries: {
      filters: 'contentsCategory[contains]article',
      limit: 2,
      orders: '-publishedAt',
    },
  })

const useCacheGetHomeContents = () =>
  unstable_cache(async () => await getHomeContents(), ['home'], {
    tags: ['home'],
  })

export default async function HomePage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cacheGetHomeContents = useCacheGetHomeContents()
  const contents = (await cacheGetHomeContents()).contents
  const category = await client.get({ endpoint: 'categories' })

  const props = {
    categories: category.contents,
    contents,
  }
  return <Home {...props} />
}
