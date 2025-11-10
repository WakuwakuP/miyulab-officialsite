import { ContentCard, SiteTop } from 'components/containers'
import { Particle, TextButton } from 'components/parts'
import styles from 'styles/components/templates/Home.module.css'
import { type Category, type ContentModify } from 'types'

interface HomeProps {
  contents: ContentModify[]
  categories?: Category[]
}

export const revalidate = 600

export const Home = ({ contents }: HomeProps) => (
  <>
    <div className={styles.homeContainer}>
      <div className={`${styles.topAreaWrapper} ${styles.duoNone}`}>
        <div className={styles.topArea}>
          <div className={styles.topAreaBackground}>
            {/* biome-ignore lint/correctness/useUniqueElementIds: This component is used only once in the app */}
            <Particle id="HomeParticle" />
          </div>
          <div className={styles.topAreaContent}>
            <SiteTop className="container" />
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
          <TextButton href="/content/latest">More</TextButton>
        </div>
      </section>
    </div>
  </>
)
