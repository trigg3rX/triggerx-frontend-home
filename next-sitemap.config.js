/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.triggerx.network/', // Replace with your actual domain
    generateRobotsTxt: true, // Generates a robots.txt file
    sitemapSize: 5000, // Optional: Adjust if needed
  };
  