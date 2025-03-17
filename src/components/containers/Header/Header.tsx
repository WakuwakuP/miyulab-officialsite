import Link from 'next/link'
import { type ReactNode } from 'react'

import styles from 'styles/components/containers/Header.module.css'

interface HeaderProps {
  categoriesDropdown: ReactNode
}

export const Header = ({ categoriesDropdown }: HeaderProps) => {
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
          <li className={styles.menuItem}>
            <Link href={'/content/latest'}>Blog</Link>
            <div className={styles.dropdownContainer}>{categoriesDropdown}</div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
