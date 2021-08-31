module.exports = {
  reactStrictMode: true,
}

const withFonts = require('next-fonts');

module.exports = withFonts({
   enableSvg: true,
   webpack(config, options) {
     return config;
   }
}); 