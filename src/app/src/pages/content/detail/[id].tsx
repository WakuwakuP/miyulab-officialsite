import {
  GetStaticPaths,
  GetStaticProps,
} from 'next'
import { client } from 'libs/client';
import type { Content } from 'types/Content';
import { Category } from 'types/Category';

type Props = {
  content: Content;
};

const ContentPage = ({ content }: Props) => {
  return (
    <main>
      <h1>{content.title} </h1>
      <p> {content.publishedAt} </p>
      {
        content.category.map((category: Category) => (
          <li key={category.id} >
            #{category.name}
          </li>
        ))
      }
      <div
        dangerouslySetInnerHTML={
          {
            __html: `${content.content}`,
          }
        }
      />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const idExceptARray = id instanceof Array ? id[0] : id;
  const content = await client.get({
    endpoint: 'contents',
    contentId: idExceptARray
  });

  return {
    props: {
      content,
    },
    revalidate: 600,
  };
}

export default ContentPage;
