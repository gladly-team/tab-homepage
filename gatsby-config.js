module.exports = {
  siteMetadata: {
    title: 'Tab for a Cause',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/themes/typography`,
      },
    },
  ],
}
