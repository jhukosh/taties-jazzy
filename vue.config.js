module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "@/styles/_fonts.scss"; 
            @import "@/styles/_colors.scss";
            @import "@/styles/_icons.scss";
            @import "@/styles/_buttons.scss";
            @import "@/styles/_curvyBackground.scss";
            @import "@/styles/_select.scss";
            @import "@/styles/_separator-line.scss";`
        }
      }
    }
  };