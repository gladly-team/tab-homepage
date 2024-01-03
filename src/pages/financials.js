import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { AlertTitle, Alert } from '@mui/material'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import { orderBy } from 'lodash/collection'
import FinancialsQuarterButton from 'src/components/FinancialsQuarterButton'
import Layout from 'src/components/Layout'
import Link from 'src/components/Link'

const FinancialsPage = ({ data, location }) => {
  const financialsEdges = data.allFinancialsYaml.edges
  const sortedFinancialsEdges = orderBy(
    financialsEdges,
    ['node.year', 'node.quarter'],
    ['desc', 'desc']
  )
  const openGraphTitle = 'Financials - Tab for a Cause'
  const openGraphDescription =
    'See our expenses and how much money Tabbers have raised for each charity.'
  return (
    <Layout brand="all" location={location}>
      <div>
        <Helmet title="Financials">
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageContent>
          <TextPageHeader>Financials</TextPageHeader>
          <p>
            We know we have to earn your trust. That's why we've published
            detailed financial reports for years.
          </p>
          <p>
            A common question about our financials is why we don't we give 100%
            of the money we earn to nonprofits. We encourage you to check out{' '}
            <Link
              to="https://medium.com/for-a-cause/why-tab-for-a-cause-doesnt-give-100-of-its-money-to-nonprofits-4ebd540b219c"
              target="_blank"
            >
              our deep-dive article on the topic
            </Link>
            —but the quick answer is: investing in the future of Tab for a Cause
            better fulfills our mission and increases the total amount of money
            our community can raise for nonprofits!
          </p>

          {/* <div style={{ marginBottom: 16 }}>
            <Alert
              severity="info"

              // classes={{ icon: classes.alertIcon, root: classes.alertRoot }}
            >
              <AlertTitle>Can't find something?</AlertTitle>
              <div>
                Our nonprofit partners for Global Health, Trees, and Ending
                Hunger are recent additions. They'll show up in future
                financials. Financials are available about 3 months after the
                end of a quarter, because our ad partners pay us on a delayed
                schedule.
              </div>
            </Alert>
          </div> */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {sortedFinancialsEdges.map((quarter) => (
              <FinancialsQuarterButton
                key={`Q${quarter.node.quarter}${quarter.node.year}`}
                quarterData={quarter.node}
              />
            ))}
          </div>
        </TextPageContent>
      </div>
    </Layout>
  )
}

FinancialsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allFinancialsYaml: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            quarter: PropTypes.number.isRequired,
            year: PropTypes.number.isRequired,
            pdfUrl: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }),
}

export const query = graphql`
  query QuarterlyFinancialsQuery {
    allFinancialsYaml {
      edges {
        node {
          quarter
          year
          pdfUrl
        }
      }
    }
  }
`

export default FinancialsPage
