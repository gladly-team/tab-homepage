/* globals exports */

const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  // Create landing page variants for referrers.
  const homepage = path.resolve(`src/pages/index.js`)
  try {
    const response = await graphql(`
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
    `)
    response.data.allReferrersYaml.edges.forEach(({ node }) => {
      // Not all referrers will have a vanity URL.
      if (!node.path || !node.referrerId) {
        return
      }
      createPage({
        path: `${node.path}/`,
        component: homepage,
        context: {
          referrer: {
            id: node.referrerId,
          },
        },
      })
    })
  } catch (e) {
    throw e
  }

  // Create landing page variants for charities.
  try {
    const response = await graphql(`
      {
        allCharitiesYaml(limit: 100) {
          edges {
            node {
              name
              path
            }
          }
        }
      }
    `)
    response.data.allCharitiesYaml.edges.forEach(({ node }) => {
      if (!node.path) {
        return
      }
      createPage({
        path: `${node.path}/`,
        component: homepage,
        context: {
          charity: {
            name: node.name,
          },
        },
      })
    })
  } catch (e) {
    throw e
  }
}
