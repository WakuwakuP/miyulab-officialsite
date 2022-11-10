import type { Content } from 'types'

import { ContentCard, Pagination } from 'components/containers'
import { PageTitle } from 'components/parts'
import styles from 'styles/components/templates/ContentLatest.module.css'

interface ContentLatestProps {
  categoryId?: string
  contents: Content[]
  totalPage: number
  page?: number
}

export const ContentLatest = ({ categoryId, contents, totalPage, page }: ContentLatestProps) => {
  return (
    <>
      <PageTitle bgText='blog'>{categoryId || 'Latest'}</PageTitle>
      <div>
        <div className={styles.newContnetList}>
          {contents.map((content: Content) => (
            <ContentCard content={content} key={content.id} />
          ))}
        </div>
      </div>
      <Pagination totalPage={totalPage} page={page} />
    </>
  )
}
