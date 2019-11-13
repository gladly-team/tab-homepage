import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Layout from 'src/components/Layout'

const PlantTreesPage = props => {
  const { location } = props
  const openGraphTitle = 'Plant Trees with Tab for a Cause'
  const openGraphDescription =
    'We are planting a tree for every person who joins Tab for a Cause from now until January 10, 2020.'
  return (
    <Layout brand={'tab'} location={location}>
      <TextPageContent>
        <Helmet title={openGraphTitle}>
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageHeader>Plant Trees This Holiday Season!</TextPageHeader>
        <div style={{ marginBottom: 50 }}>
          <p>Lorem ipsum</p>
        </div>
      </TextPageContent>
    </Layout>
  )
}

PlantTreesPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

PlantTreesPage.displayName = 'PlantTreesPage'

export default PlantTreesPage
