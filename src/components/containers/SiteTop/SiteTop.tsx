import BgImage from '@public/img/miyu.png'
import Image from 'next/image'
import styles from 'styles/components/containers/SiteTop.module.css'

interface SiteTopProps {
  className?: string
}

export const SiteTop = ({ className }: SiteTopProps) => (
  <div className={`${className || ''} ${styles.siteTop}`}>
    <div className={styles.title}>
      <h1>Miyulab</h1>
    </div>
    <div className={styles.bgImageWrapper}>
      <Image alt="" className={styles.bgImage} src={BgImage} />
    </div>
  </div>
)
