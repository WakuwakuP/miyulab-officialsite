'use client'

import { Link as Scroll } from 'react-scroll'

import styles from 'styles/components/containers/Toc.module.css'

interface TocProps {
  toc: {
    id: string
    text: string
    name: string
  }[]
}

export const Toc = ({ toc }: TocProps) => {
  return (
    <div className={styles.tocContent}>
      <h3>目次</h3>
      <div>
        <ul>
          {toc.map((item) => (
            <li key={item.id} className={styles[item.name]}>
              <Scroll to={item.id} smooth={true} duration={200} offset={-100}>
                {item.text}
              </Scroll>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
