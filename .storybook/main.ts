import { type StorybookConfig } from '@storybook/nextjs'

// Next.js 16.4+ useRouter() reads LayoutRouterContext.parentRenderTree.data.bfcacheId.
// @storybook/nextjs 10.6.1 does not supply it, so Chromatic fails every story with
// RedirectBoundary TypeError. Yarn-patched until storybookjs/storybook#36720 lands.

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
  ],
  docs: {},
  features: {
    experimentalRSC: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
}

export default config
