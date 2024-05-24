import { Home } from 'components/templates'
import { client } from 'libs/client'

export const revalidate = 600

export default async function HomePage() {
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

  const props = {
    contents,
    categories: category.contents,
  }
  return <Home {...props} />
}
