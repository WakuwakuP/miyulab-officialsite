import path from 'path'
import { fileURLToPath } from 'url'
import { type StorybookConfig } from '@storybook/nextjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: StorybookConfig = {
  addons: [
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
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@public': path.join(__dirname, '..', 'public'),
      }
    }
    return config
  },
}

export default config
