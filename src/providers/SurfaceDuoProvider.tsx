'use client'

import { type ReactNode, type RefObject, useRef } from 'react'

import { SiteTop } from 'components/containers'
import { type MutationCallback, useMutationObserver } from 'hooks/useMutationObserver'

export default function SurfaceDuoProvider({
  children,
  header,
  footer,
}: {
  children: ReactNode
  header: ReactNode
  footer: ReactNode
}) {
  const elemSurfaceDuoLeft = useRef<HTMLDivElement>(null)
  const elemContainer = useRef<HTMLDivElement>(null)

  const handleUnsetStyling: MutationCallback = (mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target instanceof HTMLElement) {
        mutation.target.setAttribute('style', '')
      }
    })
  }

  useMutationObserver([elemSurfaceDuoLeft, elemContainer].map(ref => ref as RefObject<Element>), handleUnsetStyling, {
    attributes: true,
    attributeFilter: ['style'],
  })

  return (
    <>
      <div className='surface-duo-left' ref={elemSurfaceDuoLeft}>
        <div>
          {header}
          <main className='container'>{children}</main>
          {footer}
        </div>
      </div>
      <div className='surface-duo-right'>
        <SiteTop />
      </div>
    </>
  )
}
