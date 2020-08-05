module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pdf$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    }
  }

}
