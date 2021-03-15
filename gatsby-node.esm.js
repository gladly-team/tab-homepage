/* globals exports */

import path from 'path'

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Create landing page variants for referrers.
  const homepage = path.resolve(`src/pages/index.js`)
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

  // Create sharable impact subpages for $1M raised.
  const millionPage = path.resolve(`src/pages/million.js`)
  const millionSubpages = [
    'rainforest',
    'water',
    'hunger',
    'give',
    'read',
    'children',
    'educate',
    'match', // millionaire matching
  ]
  millionSubpages.forEach((impactStat) => {
    createPage({
      path: `million/${impactStat}/`,
      component: millionPage,
      context: {
        impactStat,
      },
    })
  })
}
exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
  // Only conditionally build the "million raised" page.
  if (page.path.match(/^\/cats/)) {
    // eslint-disable-next-line no-undef
    if (!(process.env.SHOW_CATS_PAGE === 'true')) {
      deletePage(page)
    }
  }
}