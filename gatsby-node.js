/* globals exports */

const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  // Create landing page variants for referrers.
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/pages/index.js`)
    resolve(
      graphql(
        `
          {
            allReferrersYaml(limit: 5000) {
              edges {
                node {
                  path
                  referrerId
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allReferrersYaml.edges.forEach(({ node }) => {
          // Not all referrers will have a vanity URL.
          if (!node.path || !node.referrerId) {
            return
          }
          createPage({
            path: `${node.path}/`,
            component: blogPostTemplate,
            context: {
              referrer: {
                id: node.referrerId,
              },
            },
          })
        })
      })
    )
  })
}
