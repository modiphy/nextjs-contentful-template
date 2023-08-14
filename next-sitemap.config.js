/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: "https://www.modiphy.com/", // Placeholder URL. Change to url of the site.
  generateRobotsTxt: true,
  changefreq: "daily",
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Check if the path should be excluded
    if (path === "/404") {
      return null; // Return null to exclude the URL from the sitemap
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

module.exports = config;
