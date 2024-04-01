'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { useMutationObserver } from 'hooks/useMutationObserver'

import type { MutationCallback } from 'hooks/useMutationObserver'

interface AdSenseProps {
  adSlot: string
}

export const AdSense = ({ adSlot }: AdSenseProps) => {
  const asPath = usePathname()
  const elemAdSenseArea = useRef<HTMLDivElement>(null)

  const handleUnsetStyling: MutationCallback = (mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target instanceof HTMLElement) {
        mutation.target.setAttribute('style', '')
      }
    })
  }

  useMutationObserver([elemAdSenseArea], handleUnsetStyling, {
    attributes: true,
    attributeFilter: ['style'],
  })

  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error(error)
    }
  }, [asPath])

  return (
    <div ref={elemAdSenseArea}>
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN && (
        <ins
          className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN}
          data-ad-slot={adSlot}
          data-ad-format='auto'
          data-full-width-responsive='true'
        />
      )}
    </div>
  )
}
