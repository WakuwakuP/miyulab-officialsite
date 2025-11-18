import { type Preview } from 'storybook'
import { allModes } from './modes'

import '../src/styles/globals.css'

const MY_VIEWPORTS = {
  desktop: {
    name: 'desktop',
    styles: {
      height: '720px',
      width: '1280px',
    },
    type: 'desktop',
  },
  mobile: {
    name: 'mobile',
    styles: {
      height: '640px',
      width: '480px',
    },
    type: 'mobile',
  },
}

const preview: Preview = {
  parameters: {
    chromatic: {
      modes: {
        desktop: allModes.default,
        mobile: allModes.mobile,
        tablet: allModes.tablet,
      },
    },
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
  },
}

export default preview
