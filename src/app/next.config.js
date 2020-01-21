const path = require('path')
const Dotenv = require('dotenv-webpack');
module.exports = {
  distDir: '../../dist/functions/next',
  webpack: config => {
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  }
}
