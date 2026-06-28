/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ajnetpro.ca',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,

  // Exclude specific paths if needed
  exclude: ['/admin/*', '/api/*'],

  // Additional paths for better SEO
  additionalPaths: async (config) => [
    {
      loc: '/fr',
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/en',
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
  ],

  // Transform function for custom URLs
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
