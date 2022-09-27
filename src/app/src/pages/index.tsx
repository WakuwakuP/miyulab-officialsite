import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { client } from 'libs/client'
import { Category } from 'types/Category';
import { Content } from 'types/Content';
import Link from 'next/link';

type Props = {
  contents: Content[];
  categories: Category[];
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ contents, categories }: Props) => {
  return (
    <main>
      {
        contents.map((content: Content) => (
          <section key={content.id}>
            <Link href={`content/detail/${content.id}`} passHref>
              <h3>{content.title}</h3>
            </Link>
          </section>
        ))
      }
    </main>
  )
}

export const getStaticProps = async () => {
  const contents = (await client.get({
    endpoint: 'contents',
    queries: {
      filters: 'contentsCategory[contains]article',
      orders: '-createdAt',
      limit: 20
    }
  })).contents;
  const category = await client.get({ endpoint: "categories" });

  return {
    props: {
      contents,
      categories: category.contents,
    },
    revalidate: 600,
  };
};

export default Home
