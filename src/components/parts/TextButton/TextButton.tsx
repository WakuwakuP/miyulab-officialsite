import Link from 'next/link'
import type { ReactNode } from 'react'

import styles from 'styles/components/parts/TextButton.module.css'

interface TextButtonProps {
  href: string
  children: ReactNode
}

export const TextButton = ({ href, children }: TextButtonProps) => {
  return (
    <>
      <Link href={href}>
        <a className={styles.outlinebtn}>{children}</a>
      </Link>
    </>
  )
}
