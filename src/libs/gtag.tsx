'use client'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== ''

// PVを測定する
export const pageView = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

// GAイベントを発火させる
export const event = ({ action, category, label, value = '' }: Event) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label ? JSON.stringify(label) : '',
    value,
  })
}

// _app.tsx で読み込む
export const usePageView = () => {
  const router = useRouter()
  useEffect(() => {
    if (!existsGaId) {
      // eslint-disable-next-line no-console
      console.log('GA_ID is not exists.')
      return
    }

    if (!('gtag' in window)) {
      // eslint-disable-next-line no-console
      console.log('gtag is not defined')
      return
    }

    const handleRouteChange = (path: string) => {
      pageView(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}

// _app.tsx で読み込む
export const GoogleAnalytics = () => (
  <>
    {existsGaId && (
      <>
        <script
          defer={true}
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Official Google Analytics script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
          defer={true}
        />
      </>
    )}
  </>
)

// イベントを型で管理
interface ContactEvent {
  action: 'submit_form'
  category: 'contact'
}

interface ClickEvent {
  action: 'click'
  category: 'other'
}

export type Event = (ContactEvent | ClickEvent) & {
  label?: Record<string, string | number | boolean>
  value?: string
}
