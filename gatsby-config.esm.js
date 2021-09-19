/* globals process */

var domain = process.env.GATSBY_DOMAIN || 'tab.gladly.io'
var protocol = 'https'
var baseURL = `${protocol}://${domain}`

module.exports = {
  siteMetadata: {
    domain: `${domain}`,
    siteUrl: `https://${domain}`, // Used in gatsby-plugin-sitemap
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Handle server-side rendering MaterialUI styles:
    // https://github.com/hupe1980/gatsby-plugin-material-ui/tree/master
    {
      resolve: `gatsby-plugin-material-ui`,
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          exportLocalsConvention: false,
          namedExport: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/themes/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude pages that just redirect.
        excludes: ['/help', '/contact'],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: baseURL,
        sitemap: `${baseURL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1813501258922708',
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://8cb64ec80165437b98905b07296ddc3f@sentry.io/1232334',
      },
    },
    // Only include the S3 plugin in a CI environment, because
    // it requires the GATSBY_S3_BUCKET_NAME env var, and we
    // don't want to set a default value.
    ...(process.env.CI === 'true'
      ? [
          {
            resolve: `gatsby-plugin-s3`,
            options: {
              // https://github.com/jariz/gatsby-plugin-s3#configuration
              bucketName: process.env.GATSBY_S3_BUCKET_NAME,
              removeNonexistentObjects: false,
              acl: null,
            },
          },
        ]
      : []),
  ],
}
