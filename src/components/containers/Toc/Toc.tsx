import { useRef } from 'react'

import { Link as Scroll } from 'react-scroll'

import { AdSense } from 'components/parts'
import { useMutationObserver } from 'hooks/useMutationObserver'

import type { MutationCallback } from 'hooks/useMutationObserver'

import styles from 'styles/components/containers/Toc.module.css'

interface TocProps {
  toc: {
    id: string
    text: string
    name: string
  }[]
}

export const Toc = ({ toc }: TocProps) => {
  const elemTocWrapper = useRef<HTMLDivElement>(null)
  const elemTocArea = useRef<HTMLDivElement>(null)

  const handleUnsetStyling: MutationCallback = (mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target instanceof HTMLElement) {
        mutation.target.setAttribute('style', '')
      }
    })
  }

  useMutationObserver([elemTocWrapper, elemTocArea], handleUnsetStyling, {
    attributes: true,
    attributeFilter: ['style'],
  })

  return (
    <div className={styles.tocWrapper} ref={elemTocWrapper}>
      <div className={styles.tocArea} ref={elemTocArea}>
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
        {process.env.NODE_ENV !== 'development' && <AdSense adSlot='3817713745' />}
      </div>
    </div>
  )
}
