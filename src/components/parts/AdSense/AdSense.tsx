'use client'

import {
  type MutationCallback,
  useMutationObserver,
} from 'hooks/useMutationObserver'
import { usePathname } from 'next/navigation'
import { type RefObject, useEffect, useRef } from 'react'

interface AdSenseProps {
  adSlot: string
}

export const AdSense = ({ adSlot }: AdSenseProps) => {
  const _asPath = usePathname()
  const elemAdSenseArea = useRef<HTMLDivElement>(null)

  const handleUnsetStyling: MutationCallback = (mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target instanceof HTMLElement) {
        mutation.target.setAttribute('style', '')
      }
    })
  }

  useMutationObserver(
    [elemAdSenseArea as RefObject<Element>],
    handleUnsetStyling,
    {
      attributeFilter: ['style'],
      attributes: true,
    },
  )

  useEffect(() => {
    try {
      // biome-ignore lint/suspicious/noAssignInExpressions: Google AdSense requires this pattern
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div ref={elemAdSenseArea}>
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN && (
        <ins
          className="adsbygoogle"
          data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN}
          data-ad-format="auto"
          data-ad-slot={adSlot}
          data-full-width-responsive="true"
          style={{ display: 'block' }}
        />
      )}
    </div>
  )
}
