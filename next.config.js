module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https:',
        host: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https:',
        host: "picsum.photos"
      }
    ]
  }
}

const withFonts = require('next-fonts');

module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
}); 