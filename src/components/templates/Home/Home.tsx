import { ContentCard, SiteTop } from 'components/containers'
import { Particle, TextButton } from 'components/parts'

import type { Category, Content } from 'types'

import styles from 'styles/components/templates/Home.module.css'

interface HomeProps {
  contents: Content[]
  categories?: Category[]
}

export const Home = ({ contents }: HomeProps) => {
  return (
    <>
      <div className={styles.homeContaner}>
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
          <div className={styles.newContnetList}>
            {contents.map((content: Content) => (
              <ContentCard content={content} key={content.id} />
            ))}
          </div>
          <div className={styles.newContentListMore}>
            <TextButton href='/content/latest'>More</TextButton>
          </div>
        </section>
      </div>
    </>
  )
}
