import type { Content } from 'types'

import { ContentCard, Pagination } from 'components/containers'
import styles from 'styles/components/templates/ContentLatest.module.css'

interface ContentLatestProps {
  contents: Content[]
  totalPage: number
  page?: number
}

export const ContentLatest = ({ contents, totalPage, page }: ContentLatestProps) => {
  return (
    <>
      <div className={styles.newContnetList}>
        {contents.map((content: Content) => (
          <ContentCard content={content} key={content.id} />
        ))}
      </div>
      <Pagination totalPage={totalPage} page={page} />
    </>
  )
}
