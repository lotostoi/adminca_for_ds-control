module.exports = {
    lintOnSave: false,
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/assets/scss/global.scss";`,
        },
      },
    },
    configureWebpack: (config) => {
      return {
        devServer: {
          proxy: {
            '/admin-ds': {
              target: 'http://localhost:3555/',
              secure: false,
              changeOrigin: true,
            },
          },
        },
      }
    },
  }