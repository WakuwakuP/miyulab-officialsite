import Image from 'next/image'
import Link from 'next/link'

import { SiGithub, SiPleroma, SiTwitter } from 'react-icons/si'

import styles from 'styles/components/containers/Footer.module.css'
import { Content } from 'types/Content'

type Props = {
  content: Content
}

export const Footer = () => {
  return (
    <footer className={styles.footer + ' container'}>
      <div className={styles.contact}>
        <h3>Contact</h3>
        <ul>
          <li>
            <a className='btn' href='https://twitter.com/waku_P'>
              <SiTwitter size={'2rem'} className={styles.icon} />
            </a>
          </li>
          <li>
            <a className='btn' href='https://pleroma.wakuwakup.net/wakuwakup'>
              <SiPleroma size={'2rem'} className={styles.icon} />
            </a>
          </li>
          <li>
            <a className='btn' href='https://github.com/WakuwakuP'>
              <SiGithub size={'2rem'} className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        © 2022 <Link href={'/'}>Miyulab (WakuwakuP)</Link>
      </div>
    </footer>
  )
}
