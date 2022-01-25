const React = require('react')

const gatsbyPluginImage = jest.requireActual('gatsby-plugin-image')

module.exports = {
  ...gatsbyPluginImage,
  GatsbyImage: jest.fn(() => <img alt="gatsby-img-mock" />),
}
