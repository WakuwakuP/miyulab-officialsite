const path = require('path')
const Dotenv = require('dotenv-webpack');
const withOffline = require('next-offline');

module.exports = withOffline({
  distDir: '../../dist/functions/next',
  workboxOpts: {
    modifyUrlPrefix: {
      'app': '/public',
    },
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  },

  webpack: config => {
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      }),
    );

    return config
  }
})
