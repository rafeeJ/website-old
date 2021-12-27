module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com'
      ]
  }
}

const withFonts = require('next-fonts');

module.exports = withFonts({
  enableSvg: true,
  webpack(config, options) {
    return config;
  }
}); 