const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Jameson Brown - Software Engineer', // Navigation and Site Title
  siteTitleAlt: 'Jameson', // Alternative Site title for SEO
  siteUrl: 'https://jameson-portfolio.netlify.com/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '../public/favicon.ico', // Used for SEO and manifest
  siteDescription: `I'm creating beautiful web applications and solutions while continually learning in a tech focused world.`,

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@jameson_brown', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
