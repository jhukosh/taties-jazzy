module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "@/styles/_fonts.scss"; 
            @import "@/styles/_colors.scss";
            @import "@/styles/_curvyBackground.scss";
            @import "@/styles/_icons.scss";`
        }
      }
    }
  };