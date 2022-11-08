import type { Category, Content } from 'types'

import { ContentCard } from 'components/containers'
import styles from 'styles/components/templates/Home.module.css'

interface HomeProps {
  contents: Content[]
  categories?: Category[]
}

export const Home = ({ contents }: HomeProps) => {
  return (
    <>
      <div className={styles.newContnetList}>
        {contents.map((content: Content) => (
          <ContentCard content={content} key={content.id} />
        ))}
      </div>
    </>
  )
}
