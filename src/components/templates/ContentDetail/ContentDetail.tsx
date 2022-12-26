import Link from 'next/link'

import { Toc } from 'components/containers'
import { AdSense, PageTitle } from 'components/parts'

import type { Category, ContentModify } from 'types'

import styles from 'styles/components/templates/ContentDetail.module.css'
import 'highlight.js/styles/github-dark.css'

export interface ContentDetailProps {
  content: ContentModify
  toc: {
    id: string
    text: string
    name: string
  }[]
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const ContentDetail = ({ content, toc }: ContentDetailProps) => {
  return (
    <>
      <PageTitle bgText='blog'>{content.title}</PageTitle>
      {content.publishedAt && <p>{content.publishedAt}</p>}
      <ul>
        {content.category.map((category: Category) => (
          <li key={category.id}>
            <Link href={`/content/category/${category.id}`} passHref>
              <a>#{category.name}</a>
            </Link>
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
        <div className={styles.toc}>
          <Toc toc={toc} />
          <AdSense adSlot='3817713745' />
        </div>
      </div>
    </>
  )
}
