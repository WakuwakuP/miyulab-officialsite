import Link from 'next/link'

import type { Category } from 'types/Category'
import type { Content } from 'types/Content'

import { PageTitle } from 'components/parts'
import styles from 'styles/components/templates/ContentDetail.module.css'
import 'highlight.js/styles/github-dark.css'

export interface ContentDetailProps {
  content: Content
  toc: unknown
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const ContentDetail = ({ content, toc }: ContentDetailProps) => {
  return (
    <>
      <PageTitle bgText='blog'>{content.title}</PageTitle>
      <p>{content.publishedAt}</p>
      {content.category.map((category: Category) => (
        <li key={category.id}>
          <Link href={`/content/category/${category.id}`} passHref>
            <a>#{category.name}</a>
          </Link>
        </li>
      ))}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${content.content}`,
        }}
      />
    </>
  )
}