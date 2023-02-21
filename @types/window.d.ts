interface Window {
  adsbygoogle?: { [key: string]: unknown }[]
  twttr?: {
    widgets: {
      load: (...any) => void
    }
  }
}

declare global {
  const window: Window
}
