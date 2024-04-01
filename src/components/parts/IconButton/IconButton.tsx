import type { ReactNode } from 'react'

import styles from 'styles/components/parts/IconButton.module.css'

interface IconButtonProps {
  href: string
  rel: string
  children: ReactNode
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <li className={styles.circle}>
      <a className={styles.btn} href={props.href} rel={props.rel}>
        <span className={styles.icon}>{props.children}</span>
      </a>
    </li>
  )
}
