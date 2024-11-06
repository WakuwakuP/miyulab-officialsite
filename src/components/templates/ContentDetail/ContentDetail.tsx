'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

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
  nextArticle?: ContentModify | null
  previousArticle?: ContentModify | null
}

export const ContentDetail = ({ content, toc, nextArticle, previousArticle }: ContentDetailProps) => {
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

  useMutationObserver([elemMainarea, elemToc, elemTocWrapper, elemTocArea], handleUnsetStyling, {
    attributes: true,
    attributeFilter: ['style'],
  })

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
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: `${content.content}`,
          }}
          ref={ref}
        />
        <div className={styles.toc} ref={elemToc}>
          <div className={styles.tocWrapper} ref={elemTocWrapper}>
            <div className={styles.tocArea} ref={elemTocArea}>
              {toc && toc.length > 0 && <Toc toc={toc} />}
              {process.env.NODE_ENV !== 'development' && <AdSense adSlot='3817713745' />}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navigationLinks}>
        {previousArticle && (
          <Link href={`/content/detail/${previousArticle.id}`}>
            <a className={styles.previousArticleLink}>Previous: {previousArticle.title}</a>
          </Link>
        )}
        {nextArticle && (
          <Link href={`/content/detail/${nextArticle.id}`}>
            <a className={styles.nextArticleLink}>Next: {nextArticle.title}</a>
          </Link>
        )}
      </div>
    </>
  )
}
