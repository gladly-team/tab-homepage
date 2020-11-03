// To use es6:
// https://github.com/gatsbyjs/gatsby/issues/7810#issuecomment-449741977
require = require('esm')(module)
module.exports = require('./gatsby-node.esm.js')
