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

export const Toc = ({ toc }: TocProps) => (
  <div className={styles.tocContent}>
    <h3>目次</h3>
    <div>
      <ul>
        {toc.map((item) => (
          <li className={styles[item.name]} key={item.id}>
            <Scroll duration={200} offset={-100} smooth={true} to={item.id}>
              {item.text}
            </Scroll>
          </li>
        ))}
      </ul>
    </div>
  </div>
)
