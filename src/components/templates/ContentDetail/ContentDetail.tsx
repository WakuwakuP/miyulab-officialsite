import type { Category } from 'types/Category'
import type { Content } from 'types/Content'

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
      <h1>{content.title} </h1>
      <p> {content.publishedAt} </p>
      {content.category.map((category: Category) => (
        <li key={category.id}>#{category.name}</li>
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
