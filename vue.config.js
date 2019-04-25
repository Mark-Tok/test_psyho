module.exports = {

  baseUrl: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Site Title',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  

  chainWebpack: config => config.plugins.delete('named-chunks')

}
