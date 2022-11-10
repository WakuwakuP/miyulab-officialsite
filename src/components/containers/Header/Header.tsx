import Link from 'next/link'

import styles from 'styles/components/containers/Header.module.css'
export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={`container ${styles.header}`}>
        <div>
          <h1 className={styles.title}>
            <Link href={'/'}>MiyuLab</Link>
          </h1>
        </div>
        <ul className={styles.menu}>
          {/* <li>
            <Link href={'/about'}>About</Link>
          </li> */}
          <li>
            <Link href={'/content/latest'}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
