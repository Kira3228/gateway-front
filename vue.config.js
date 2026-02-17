const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        "@shared": path.resolve(__dirname, "src/shared-ui/src"),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/variables.scss";`,
      },
    },
  },
};
