module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
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