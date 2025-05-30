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
  const allReferrerEdges = allReferrersResponse.data.allReferrersYaml.edges
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

  // $1.5M
  const millionHalfPage = path.resolve(`src/pages/million-and-a-half.js`)
  const millionHalfSubpages = [
    'rainforest',
    'water',
    'hunger',
    'trees',
    'cats',
    'read',
    'children',
    'ocean',
  ]
  millionHalfSubpages.forEach((impactStat) => {
    createPage({
      path: `million-and-a-half/${impactStat}/`,
      component: millionHalfPage,
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
              causeId
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
                    # https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#image-options
                    gatsbyImageData(
                      formats: [PNG]
                      width: 1200
                      height: 628
                      backgroundColor: "white"
                      transformOptions: { fit: CONTAIN, cropFocus: CENTER }
                      pngOptions: { quality: 100 }
                    )
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
                      gatsbyImageData(quality: 80)
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
                      gatsbyImageData(quality: 80)
                    }
                  }
                  img2Subtext
                  img3 {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
                    }
                  }
                  img3Subtext
                  title
                  titleImg {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
                    }
                  }
                  subtitle
                }
                charityIntro {
                  steps {
                    img {
                      childImageSharp {
                        gatsbyImageData(quality: 80)
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
                      gatsbyImageData(quality: 80)
                    }
                  }
                }
                moneyRaised {
                  moneyImg {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
                    }
                  }
                }
                Security {
                  titleImg {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
                    }
                  }
                }
                Financials {
                  buttonText
                  text
                  title
                  ctaImg {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
                    }
                  }
                  q1Img {
                    childImageSharp {
                      gatsbyImageData(
                        height: 100
                        width: 103
                        quality: 100
                        backgroundColor: "white"
                        transformOptions: { fit: CONTAIN, cropFocus: SOUTHEAST }
                      )
                    }
                  }
                  q2Img {
                    childImageSharp {
                      gatsbyImageData(
                        height: 100
                        width: 103
                        quality: 100
                        backgroundColor: "white"
                        transformOptions: { fit: CONTAIN, cropFocus: SOUTHEAST }
                      )
                    }
                  }
                  q3Img {
                    childImageSharp {
                      gatsbyImageData(
                        height: 100
                        width: 103
                        quality: 100
                        backgroundColor: "white"
                        transformOptions: { fit: CONTAIN, cropFocus: SOUTHEAST }
                      )
                    }
                  }
                  q4Img {
                    childImageSharp {
                      gatsbyImageData(
                        height: 100
                        width: 103
                        quality: 100
                        backgroundColor: "white"
                        transformOptions: { fit: CONTAIN, cropFocus: SOUTHEAST }
                      )
                    }
                  }
                }
                Footer {
                  img {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
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
                      gatsbyImageData(quality: 80)
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
    ({ node: { path: pagePath, data } }) => {
      if (!data.causeId) {
        throw new Error('A cause ID is missing.')
      }
      const pivotedData = {
        path: pagePath,
        causeId: data.causeId,
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
      generatePagesForCause(createPage, pagePath, pivotedData, allReferrerEdges)
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

exports.onPostBuild = ({ store }) => {
  const { program } = store.getState()
  console.log('/.well-known/apple-app-site-association will be served with Content-Type: application/json')
}
