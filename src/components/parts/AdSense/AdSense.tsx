import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

import { useMutationObserver } from 'hooks/useMutationObserver'

import type { MutationCallback } from 'hooks/useMutationObserver'

import styles from 'styles/components/parts/AdSense.module.css'

interface AdSenseProps {
  adSlot: string
}

export const AdSense = ({ adSlot }: AdSenseProps) => {
  const { asPath } = useRouter()
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
    <div className={styles.adSenseArea} ref={elemAdSenseArea}>
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN && (
        <ins
          className='adsbygoogle'
          style={{ display: 'block', maxHeight: '100%' }}
          data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN}
          data-ad-slot={adSlot}
          data-ad-format='auto'
          data-full-width-responsive='true'
        />
      )}
    </div>
  )
}
