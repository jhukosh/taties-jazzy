module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/styles/_fonts.scss"; @import "@/styles/_colors.scss";`
        }
      }
    }
  };