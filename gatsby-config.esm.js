/* globals process */
import theme from './src/themes/theme'

var domain = process.env.GATSBY_DOMAIN || 'tab.gladly.io'
var protocol = 'https'
var baseURL = `${protocol}://${domain}`

module.exports = {
  siteMetadata: {
    title: 'Tab for a Cause',
    domain: `${domain}`,
    siteUrl: `https://${domain}`,
    keywords:
      'tab for a cause, charity, tab, cause, giving, extension, browser, advertising',
    descriptionLong:
      "Raise money for charity with every browser tab you open. It doesn't cost you a thing.",
    descriptionShort:
      'Raise money for charity with every browser tab you open.',
    metaTagCallToAction: 'Join me on Tab for a Cause!',
    twitterHandle: '@TabForACause',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // FIXME: the theme is still imperfect. May want to use MUI v4 and "next"
    //   version of this plugin.
    // Handle server-side rendering MaterialUI styles:
    // https://github.com/hupe1980/gatsby-plugin-material-ui/tree/master
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: theme,
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
        exclude: ['/help', '/contact'],
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-24159386-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1813501258922708',
      },
    },
    // TODO: reenable before deploying to prod
    // {
    //   resolve: 'gatsby-plugin-sentry',
    //   options: {
    //     dsn: 'https://8cb64ec80165437b98905b07296ddc3f@sentry.io/1232334',
    //   },
    // },
  ],
}
