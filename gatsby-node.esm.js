/* globals exports */

import path from 'path'
import { generateCausePages } from './src/utils/featureFlags'
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
  const seasLandingPage = path.resolve('src/pages/teamseas.js')
  const HomePageWrapper = path.resolve('src/components/V4HomePage.js')
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
    createPage({
      path: `teamseas/${node.path}/`,
      component: seasLandingPage,
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
  if (generateCausePages()) {
    const dynamicDataQuery = await graphql(`
      {
        allCausesJson(limit: 1000) {
          edges {
            node {
              data {
                metadata {
                  title
                  ogTitle
                  url
                  ogDescription
                  ogImage {
                    childImageSharp {
                      gatsbyImageData(quality: 8)
                    }
                  }
                  causeSpecificKeywords
                }
                sections {
                  Mission {
                    subtitle
                    text
                    title
                  }
                  TFACIntro {
                    img1 {
                      childImageSharp {
                        gatsbyImageData(quality: 8)
                      }
                    }
                    img1Subtext
                    img2 {
                      childImageSharp {
                        gatsbyImageData(quality: 8)
                      }
                    }
                    img2Subtext
                    img3 {
                      childImageSharp {
                        gatsbyImageData(quality: 8)
                      }
                    }
                    img3Subtext
                    title
                  }
                  charityIntro {
                    introImg1 {
                      childImageSharp {
                        gatsbyImageData(quality: 8)
                      }
                    }
                    introImg1Subtext
                    introImg2 {
                      childImageSharp {
                        gatsbyImageData(quality: 8)
                      }
                    }
                    introImg2Subtext
                    subTitle
                    title
                  }
                  landing {
                    subtitle
                    title
                    ctaImg {
                      childImageSharp {
                        gatsbyImageData(quality: 8)
                      }
                    }
                    waveColor
                  }
                  moneyRaised {
                    moneyImg {
                      childImageSharp {
                        gatsbyImageData(quality: 8)
                      }
                    }
                  }
                  Financials {
                    buttonText
                    text
                    title
                  }
                }
                styles {
                  colors {
                    primary
                    secondary
                    primaryContrast
                  }
                }
              }
              path
            }
          }
        }
        allFinancialsYaml(
          filter: { year: { gte: 2020 } }
          sort: { order: [DESC, DESC], fields: [year, quarter] }
          limit: 4
        ) {
          edges {
            node {
              id
              pdfUrl
              quarter
              year
            }
          }
        }
      }
    `)
    dynamicDataQuery.data.allCausesJson.edges.forEach(
      ({ node: { path, data } }) => {
        createPage({
          path: `${path}/`,
          component: HomePageWrapper, // this will be new component that takes all data as props,
          context: {
            data: {
              ...data,
              financials: dynamicDataQuery.data.allFinancialsYaml.edges.reduce(
                (acum, financial) => {
                  acum.push(financial.node)
                  return acum
                },
                []
              ),
            },
          },
        })
        response.data.allReferrersYaml.edges.forEach(({ node }) => {
          // Not all referrers will have a vanity URL.
          if (!node.path || !node.referrerId) {
            return
          }
          createPage({
            path: `${path}/${node.path}/`,
            component: HomePageWrapper, // this will be new component that takes all data as props,
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
