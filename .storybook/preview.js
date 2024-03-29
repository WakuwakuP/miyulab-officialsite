import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import FutureImage from 'next/image'
import Image from 'next/image'

import { IconContext } from 'react-icons'
import '../src/styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  chromatic: {
    viewports: [320, 1200],
  },
}

const withIcon = (StoryFn) => {
  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <StoryFn />
    </IconContext.Provider>
  )
}

const OriginalNextImage = Image.default

Object.defineProperty(FutureImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} layout='fill' unoptimized />,
})

export const decorators = [withIcon]
