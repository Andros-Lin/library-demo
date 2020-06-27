"use strict";

module.exports = {
  devServer: {
    port: process.env.PORT,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.MOCK_API]: {
        target: `${process.env.BASE_URL}:${process.env.PORT}`
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles/global.scss";`
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: "zh-CN",
      fallbackLocale: "en",
      localeDir: "lang",
      enableInSFC: true
    }
  }
};
