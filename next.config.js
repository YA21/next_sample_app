const { resolve } = require('path')

module.exports = {
  webpack: (config) => {
    // src ディレクトリをエイリアスのルートに設定
    config.resolve.alias['~'] = resolve(__dirname, 'src')
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}