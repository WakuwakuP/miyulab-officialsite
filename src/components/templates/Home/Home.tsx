import { ContentCard, SiteTop } from 'components/containers'
import { Particle, TextButton } from 'components/parts'

import type { Category, ContentModify } from 'types'

import styles from 'styles/components/templates/Home.module.css'

interface HomeProps {
  contents: ContentModify[]
  categories?: Category[]
}

export const revalidate = 600

export const Home = ({ contents }: HomeProps) => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={`${styles.topAreaWrapper} ${styles.duoNone}`}>
          <div className={styles.topArea}>
            <div className={styles.topAreaBackground}>
              <Particle id='HomeParticle' />
            </div>
            <div className={styles.topAreaContent}>
              <SiteTop className='container' />
            </div>
          </div>
        </div>
        <section>
          <div>
            <h3>New</h3>
          </div>
          <div className={styles.newContents}>
            {contents.map((content: ContentModify) => (
              <ContentCard content={content} key={content.id} />
            ))}
          </div>
          <div className={styles.newContentsMore}>
            <TextButton href='/content/latest'>More</TextButton>
          </div>
        </section>
      </div>
    </>
  )
}
