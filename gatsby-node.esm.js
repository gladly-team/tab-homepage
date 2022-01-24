/* globals exports */

import path from 'path'
import generatePagesForCause from './generatePagesForCause'

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
  const allReferrersResponse = await graphql(`
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
  var allReferrerEdges = allReferrersResponse.data.allReferrersYaml.edges
  allReferrerEdges.forEach(({ node }) => {
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
  const dynamicDataQuery = await graphql(`
    {
      allCausesJson(limit: 1000) {
        edges {
          node {
            data {
              causeLaunch {
                comingSoonTitle
                launchDate
                preview
                enabled
              }
              metadata {
                title
                ogTitle
                ogDescription
                ogImage {
                  childImageSharp {
                    gatsbyImageData(quality: 20)
                  }
                }
                causeSpecificKeywords
              }
              sections {
                Mission {
                  missionURL
                  subtitleText
                  titleText
                  bodyText
                  image {
                    childImageSharp {
                      gatsbyImageData(quality: 20)
                    }
                  }
                }
                TFACIntro {
                  img1 {
                    childImageSharp {
                      gatsbyImageData(backgroundColor: "transparent")
                    }
                  }
                  img1Subtext
                  img2 {
                    childImageSharp {
                      gatsbyImageData(quality: 20)
                    }
                  }
                  img2Subtext
                  img3 {
                    childImageSharp {
                      gatsbyImageData(quality: 20)
                    }
                  }
                  img3Subtext
                  title
                  titleImg {
                    childImageSharp {
                      gatsbyImageData(quality: 20)
                    }
                  }
                  subtitle
                }
                charityIntro {
                  steps {
                    img {
                      childImageSharp {
                        gatsbyImageData(quality: 20)
                      }
                    }
                    text
                  }
                  subTitle
                  title
                }
                landing {
                  subtitle
                  title
                  ctaImg {
                    childImageSharp {
                      gatsbyImageData(quality: 20)
                    }
                  }
                }
                moneyRaised {
                  moneyImg {
                    childImageSharp {
                      gatsbyImageData(quality: 20)
                    }
                  }
                }
                Security {
                  titleImg {
                    childImageSharp {
                      gatsbyImageData(quality: 20)
                    }
                  }
                }
                Financials {
                  buttonText
                  text
                  title
                  ctaImg {
                    childImageSharp {
                      gatsbyImageData(quality: 20)
                    }
                  }
                  q1Img {
                    childImageSharp {
                      gatsbyImageData(width: 103, height: 100, quality: 20)
                    }
                  }
                  q2Img {
                    childImageSharp {
                      gatsbyImageData(width: 103, height: 100, quality: 20)
                    }
                  }
                  q3Img {
                    childImageSharp {
                      gatsbyImageData(width: 103, height: 100, quality: 20)
                    }
                  }
                  q4Img {
                    childImageSharp {
                      gatsbyImageData(width: 103, height: 100, quality: 20)
                    }
                  }
                }
                Footer {
                  img {
                    childImageSharp {
                      gatsbyImageData(quality: 20)
                    }
                  }
                  bubbleColor
                }
                Endorsements {
                  endorser
                  endorserImg {
                    childImageSharp {
                      gatsbyImageData(height: 240, width: 231)
                    }
                  }
                  endorserTitle
                  headerQuote
                  quote
                  title
                  smallEndorsements {
                    endorsement
                    endorser
                    img {
                      childImageSharp {
                        gatsbyImageData(width: 43, height: 43)
                      }
                    }
                  }
                }
                faq {
                  img {
                    childImageSharp {
                      gatsbyImageData(quality: 20)
                    }
                  }
                  questions {
                    question
                    answer
                  }
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
      const pivotedData = {
        path,
        causeLaunch: data.causeLaunch,
        metadata: data.metadata,
        sections: {
          ...data.sections,
          Financials: {
            ...data.sections.Financials,
            pdfs: dynamicDataQuery.data.allFinancialsYaml.edges.reduce(
              (acum, financial) => {
                const { q1Img, q2Img, q3Img, q4Img } = data.sections.Financials
                // mapping financial quarter to the seasonal image associated with
                // that quarter
                const financialsImageMap = {
                  1: q1Img,
                  2: q2Img,
                  3: q3Img,
                  4: q4Img,
                }
                acum.push({
                  ...financial.node,
                  img: financialsImageMap[financial.node.quarter],
                })
                return acum
              },
              []
            ),
          },
        },
        styles: data.styles,
      }
      generatePagesForCause(createPage, path, pivotedData, allReferrerEdges)
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
