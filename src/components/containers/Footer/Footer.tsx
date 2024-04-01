import Link from 'next/link'

import { SiGithub, SiPleroma, SiTwitter } from 'react-icons/si'

import IconButton from 'components/parts/IconButton'

import styles from 'styles/components/containers/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer + ' container'}>
      <div className={styles.contact}>
        <h3>Contact</h3>
        <ul>
          <IconButton href='https://twitter.com/waku_P' rel='me'>
            <SiTwitter size={'2rem'} />
          </IconButton>
          <IconButton href='https://pl.waku.dev/users/miyu' rel='me'>
            <SiPleroma size={'2rem'} />
          </IconButton>
          <IconButton href='https://github.com/WakuwakuP' rel='me'>
            <SiGithub size={'2rem'} />
          </IconButton>
        </ul>
      </div>
      <div className={styles.copyright}>
        © 2022 <Link href={'/'}>Miyulab (WakuwakuP)</Link>
      </div>
    </footer>
  )
}
