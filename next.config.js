module.exports = {
  reactStrictMode: true,
  images: {
    domains: 
    [
      'rafee-blog.azurewebsites.net',
      'secure.gravatar.com',
      'localhost',
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'firebasestorage.googleapis.com',
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
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