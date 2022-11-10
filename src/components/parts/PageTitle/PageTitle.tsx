import type { ReactNode } from 'react'

import styles from 'styles/components/parts/PageTitle.module.css'

interface PageTitleProps {
  bgText: 'blog' | undefined
  children: ReactNode
}

export const PageTitle = ({ bgText, children }: PageTitleProps) => {
  return (
    <>
      <div className={`${styles.title} ${bgText ? styles[bgText] : ''}`}>
        <div>{children}</div>
      </div>
    </>
  )
}
