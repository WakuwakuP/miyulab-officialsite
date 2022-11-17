import { useRouter } from 'next/router'
import { useEffect } from 'react'

declare global {
  // eslint-disable-next-line no-var
  var adsbygoogle: unknown[]
}

interface AdSenseProps {
  adSlot: string
}

export const AdSense = ({ adSlot }: AdSenseProps) => {
  const { asPath } = useRouter()

  useEffect(() => {
    try {
      // eslint-disable-next-line no-undef
      ;(adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error(error)
    }
  }, [asPath])

  return (
    <div>
      {process.env.GOOGLE_ADSENSE_CLIENT_TOKEN && (
        <ins
          className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client={process.env.GOOGLE_ADSENSE_CLIENT_TOKEN}
          data-ad-slot={adSlot}
          data-ad-format='auto'
          data-full-width-responsive='true'
        />
      )}
    </div>
  )
}
