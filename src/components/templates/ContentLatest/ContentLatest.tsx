import { ContentCard, Pagination } from 'components/containers'
import { PageTitle } from 'components/parts'

import type { ContentModify } from 'types'

import styles from 'styles/components/templates/ContentLatest.module.css'

interface ContentLatestProps {
  categoryId?: string
  contents: ContentModify[]
  totalPage: number
  page?: number
}

export const ContentLatest = ({ categoryId, contents, totalPage, page }: ContentLatestProps) => {
  return (
    <>
      <PageTitle bgText='blog'>{categoryId || 'Latest'}</PageTitle>
      <div>
        <div className={styles.newContnetList}>
          {contents.map((content: ContentModify) => (
            <ContentCard content={content} key={content.id} />
          ))}
        </div>
      </div>
      <Pagination totalPage={totalPage} page={page} />
    </>
  )
}
