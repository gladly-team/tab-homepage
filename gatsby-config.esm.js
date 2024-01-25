/* globals process */

const domain = process.env.GATSBY_DOMAIN || 'tab.gladly.io'
const protocol = 'https'
const baseURL = `${protocol}://${domain}`

module.exports = {
  siteMetadata: {
    domain: `${domain}`,
    siteUrl: `https://${domain}`, // Used in gatsby-plugin-sitemap
  },
  plugins: [
    // From:
    // https://github.com/mui-org/material-ui/tree/master/examples/gatsby
    'gatsby-plugin-top-layout',

    'gatsby-plugin-react-helmet',

    // Might eventually be easy to drop this plugin. See:
    // https://github.com/hupe1980/gatsby-plugin-material-ui/issues/70
    // https://github.com/mui-org/material-ui/tree/master/examples/gatsby
    `gatsby-plugin-material-ui`,

    {
      // At this point, this is only really used for favicon functionality.
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tab for a Cause`,
        short_name: `Tab`,
        start_url: `/`,
        background_color: `#fff`,
        // Disabling this to allow individual pages to set their own
        // theme color via meta tags.
        // theme_color: `#9d4ba3`,
        display: `browser`,
        icon: `src/img/logo32x32.png`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `./src/img/`,
      },
    },
    `gatsby-transformer-json`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      // If modifying, validate/update on webmaster tools for
      // Google, Bing, etc.
      // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap
      // Breaking changes in v5:
      // https://github.com/gatsbyjs/gatsby/issues/32324
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude pages that just redirect.
        // Exclude our secret test page
        excludes: ['/help', '/contact', '/teamseas/atlantis'],
        query: `
        {
          site {
            siteMetadata {
               siteUrl
            }
          }
          allSitePage {
            nodes {
              path
              pageContext
            }
          }
        }`,
        filterPages: (page, excludedRoute, { withoutTrailingSlash }) => {
          const isPreviewPage = !!page.pageContext.previewPage
          const isVanityReferralPage = !!page.pageContext.referrer
          const isExcluded = withoutTrailingSlash(page.path) === excludedRoute
          return isPreviewPage || isVanityReferralPage || isExcluded
        },
        serialize: (page) => ({
          url: baseURL + page.path,
          changefreq: `daily`,
          priority: 0.7,
        }),
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: baseURL,
        sitemap: `${baseURL}/sitemap/sitemap-index.xml`,
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
