import { ContentCard, Pagination } from 'components/containers'
import { PageTitle } from 'components/parts'
import styles from 'styles/components/templates/ContentLatest.module.css'
import { type ContentModify } from 'types'

interface ContentLatestProps {
  categoryId?: string
  contents: ContentModify[]
  totalPage: number
  page?: number
}

export const ContentLatest = ({
  categoryId,
  contents,
  totalPage,
  page,
}: ContentLatestProps) => (
  <>
    <PageTitle bgText="blog">{categoryId || 'Latest'}</PageTitle>
    <div>
      <div className={styles.newContents}>
        {contents.map((content: ContentModify) => (
          <ContentCard content={content} key={content.id} />
        ))}
      </div>
    </div>
    <Pagination page={page} totalPage={totalPage} />
  </>
)
