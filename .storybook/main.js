const { mergeConfig } = require('vite')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  features: {
    storyStoreV7: true,
  },

  webpackFinal(config) {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')]

    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()]
    return config
  },

  docs: {
    autodocs: true,
  },
}
