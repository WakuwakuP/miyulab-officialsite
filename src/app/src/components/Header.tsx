import Image from 'next/image'
import Link from 'next/link'
import { Content } from "types/Content"
import styles from "styles/components/Header.module.css"

type Props = {
  content: Content
}

export default function Header() {
  return (
    <header className="container">
      <nav className={styles.header}>
        <div>
          <h1 className={styles.title}><Link href={'/'}>MiyuLab</Link></h1>
        </div>
        <ul className={styles.menu}>
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/content/latest'}>Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}
