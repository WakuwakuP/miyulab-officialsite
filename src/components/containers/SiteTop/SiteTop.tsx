import Image from 'next/future/image'

import styles from 'styles/components/containers/SiteTop.module.css'

import BgImage from '@public/img/miyu.png'

interface SiteTopProps {
  className?: string
}

export const SiteTop = ({ className }: SiteTopProps) => {
  return (
    <div className={`${className || ''} ${styles.siteTop}`}>
      <div className={styles.title}>
        <h1>Miyulab</h1>
      </div>
      <div className={styles.bgImageWrapper}>
        <Image src={BgImage} alt='' className={styles.bgImage} />
      </div>
    </div>
  )
}
