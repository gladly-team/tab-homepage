import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import TextPageContent from 'components/TextPageContent'
import { orderBy } from 'lodash/collection'

const FinancialsPage = ({ data }) => {
  const financialsEdges = data.allFinancialsYaml.edges
  const sortedFinancialsEdges = orderBy(
    financialsEdges,
    ['node.year', 'node.quarter'],
    ['desc', 'desc']
  )
  return (
    <div>
      <TextPageContent>
        <h1>Financials</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {sortedFinancialsEdges.map(quarter => {
            return (
              <a
                href={quarter.node.pdfUrl}
                key={`Q${quarter.node.quarter}${quarter.node.year}`}
                style={{ margin: 14 }}
              >
                <Paper
                  style={{
                    width: 140,
                    height: 140,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {`Q${quarter.node.quarter} ${quarter.node.year}`}
                </Paper>
              </a>
            )
          })}
        </div>
      </TextPageContent>
    </div>
  )
}

FinancialsPage.propTypes = {
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
