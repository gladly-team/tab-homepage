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
  const catsLandingPage = path.resolve(`src/pages/cats.js`)
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
    createPage({
      path: `cats/${node.path}/`,
      component: catsLandingPage,
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
  const v4CauseSpecificHomepages = await graphql(`
    {
      allCauseSpecificJsonDataJson(limit: 1000) {
        edges {
          node {
            data {
              sections {
                Mission {
                  subtitle
                  text
                  title
                }
                TFACIntro {
                  img1
                  img1Subtext
                  img2
                  img2Subtext
                  img3
                  img3Subtext
                  title
                }
                charityIntro {
                  introImg1
                  introImg1Subtext
                  introImg2
                  introImg2Subtext
                  subTitle
                  title
                }
                landing {
                  subtitle
                  title
                  ctaImg {
                    childImageSharp {
                      gatsbyImageData(width: 200, formats: AUTO)
                    }
                  }
                }
                moneyRaised {
                  moneyImg
                }
              }
              styles {
                colors {
                  background
                  primary
                  secondary
                  secondaryShadow
                }
              }
            }
            path
          }
        }
      }
    }
  `)
  console.log(v4CauseSpecificHomepages)
  v4CauseSpecificHomepages.data.allCauseSpecificJsonDataJson.edges.forEach(
    ({ node: { path, data } }) => {
      createPage({
        path: `${path}/`,
        component: catsLandingPage, // this will be new component that takes all data as props,
        context: {
          data,
        },
      })
      response.data.allReferrersYaml.edges.forEach(({ node }) => {
        // Not all referrers will have a vanity URL.
        if (!node.path || !node.referrerId) {
          return
        }
        createPage({
          path: `${path}/`,
          component: catsLandingPage, // this will be new component that takes all data as props,
          context: {
            data,
            referrer: {
              id: node.referrerId,
            },
          },
        })
      })
    }
  )
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
