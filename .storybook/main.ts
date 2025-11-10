import { type StorybookConfig } from '@storybook/nextjs'

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
