'use client'

import Link from 'next/link'
import { type RefObject, useEffect, useRef } from 'react'

import { Toc } from 'components/containers'
import { AdSense, PageTitle } from 'components/parts'
import { type MutationCallback, useMutationObserver } from 'hooks/useMutationObserver'

import type { Category, ContentModify } from 'types'

import styles from 'styles/components/templates/ContentDetail.module.css'

import 'highlight.js/styles/github-dark.css'

export interface ContentDetailProps {
  content: ContentModify
  toc: {
    id: string
    text: string
    name: string
  }[]
  nextContent?: ContentModify | null
  previousContent?: ContentModify | null
}

export const ContentDetail = ({ content, toc, nextContent, previousContent }: ContentDetailProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const elemMainarea = useRef<HTMLDivElement>(null)
  const elemToc = useRef<HTMLDivElement>(null)
  const elemTocWrapper = useRef<HTMLDivElement>(null)
  const elemTocArea = useRef<HTMLDivElement>(null)

  const handleUnsetStyling: MutationCallback = (mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target instanceof HTMLElement) {
        mutation.target.setAttribute('style', '')
      }
    })
  }

  useMutationObserver(
    [elemMainarea, elemToc, elemTocWrapper, elemTocArea].map((ref) => ref as RefObject<Element>),
    handleUnsetStyling,
    {
      attributes: true,
      attributeFilter: ['style'],
    },
  )

  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load(ref.current)
    }
  })

  return (
    <>
      <PageTitle bgText='blog'>{content.title}</PageTitle>
      {content.publishedAt && <p>{content.publishedAt}</p>}
      <ul>
        {content.category.map((category: Category) => (
          <li key={category.id}>
            <Link href={`/content/category/${category.id}`}>#{category.name}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.mainarea} ref={elemMainarea}>
        <div className={styles.content}>
          <div
            dangerouslySetInnerHTML={{
              __html: `${content.content}`,
            }}
            ref={ref}
          />
          <div className={styles.contentsLink}>
            {previousContent ? (
              <Link href={`/content/detail/${previousContent.id}`} style={{ width: '50%' }}>
                <div>Previous</div>
                <div>{previousContent.title}</div>
              </Link>
            ) : (
              <div style={{ width: '50%' }} />
            )}
            {nextContent ? (
              <Link href={`/content/detail/${nextContent.id}`} style={{ width: '50%' }}>
                <div>Next</div>
                <div>{nextContent.title}</div>
              </Link>
            ) : (
              <div style={{ width: '50%' }} />
            )}
          </div>
        </div>

        <div className={styles.toc} ref={elemToc}>
          <div className={styles.tocWrapper} ref={elemTocWrapper}>
            <div className={styles.tocArea} ref={elemTocArea}>
              {toc && toc.length > 0 && <Toc toc={toc} />}
              {process.env.NODE_ENV !== 'development' && <AdSense adSlot='3817713745' />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
