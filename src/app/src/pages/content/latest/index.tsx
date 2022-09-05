import {
  GetStaticPaths,
  GetStaticProps,
} from 'next'
import { client } from 'libs/client'
import type { Content } from 'types/Content'
import ContentCard from 'components/ContentCard'

type Props = {
  contents: Content[]
}

const ContentLatest = ({ contents }: Props) => {
  return (
    <main>
      {
        contents.map(content => (
          <ContentCard key={content.id} content={content} />
        ))
      }
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const contents = (await client.get({
    endpoint: 'contents',
    queries: {
      filters: 'contentsCategory[contains]article',
      orders: '-createdAt',
      limit: 20
    }
  })).contents

  return {
    props: {
      contents,
    },
    revalidate: 600,
  }
}

export default ContentLatest
