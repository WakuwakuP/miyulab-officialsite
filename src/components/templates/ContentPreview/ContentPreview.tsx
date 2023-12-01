import Link from 'next/link'

import { Toc } from 'components/containers'
import { PageTitle } from 'components/parts'

import type { Category, ContentModify } from 'types'

import styles from 'styles/components/templates/ContentPreview.module.css'
import 'highlight.js/styles/github-dark.css'

export interface ContentPreviewProps {
  content: ContentModify
  toc: {
    id: string
    text: string
    name: string
  }[]
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const ContentPreview = ({ content, toc }: ContentPreviewProps) => {
  return (
    <>
      <PageTitle bgText='blog'>Preview - {content.title}</PageTitle>
      {content.publishedAt && <p>{content.publishedAt}</p>}
      <ul>
        {content.category.map((category: Category) => (
          <li key={category.id}>
            <Link href={`/content/category/${category.id}`}>#{category.name}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.mainarea}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: `${content.content}`,
          }}
        />
        <div className={styles.toc}>{toc && toc.length > 0 && <Toc toc={toc} />}</div>
      </div>
    </>
  )
}
