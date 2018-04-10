module.exports = {
  siteMetadata: {
    title: 'Tab for a Cause',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
  ],
}
