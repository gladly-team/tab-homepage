module.exports = {
  siteMetadata: {
    title: 'Tab for a Cause',
    domain: 'tab.gladly.io',
    keywords:
      'tab for a cause, charity, tab, cause, giving, extension, browser, advertising',
    descriptionLong:
      "Raise money for charity with every browser tab you open. It doesn't cost you a thing.",
    descriptionShort:
      'Raise money for charity with every browser tab you open.',
    metaTagCallToAction: 'Join me on Tab for a Cause!',
    // TODO: need image
    metaTagImage: 'https://tab.gladly.io/share/image/',
    twitterHandle: '@TabForACause',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Server-side rendering for material-ui, which prevents
    // style flickering:
    // https://github.com/gatsbyjs/gatsby/issues/2116#issuecomment-329996699
    `gatsby-plugin-jss`,
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
  ],
}
