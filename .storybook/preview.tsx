import { Preview } from '@storybook/react'
import { allModes } from './modes'

import '../src/styles/globals.css'

const MY_VIEWPORTS = {
  mobile: {
    name: 'mobile',
    styles: {
      width: '480px',
      height: '640px',
    },
    type: 'mobile',
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1280px',
      height: '720px',
    },
    type: 'desktop',
  },
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    nextjs: {
      appDirectory: true,
    },
    viewport: {
      viewports: MY_VIEWPORTS,
    },
    chromatic: {
      modes: {
        mobile: allModes['mobile'],
        tablet: allModes['tablet'],
        desktop: allModes['default'],
      },
    },
  },
}

export default preview
