import React from 'react'
import Helmet from 'react-helmet'
import TextPageContent from 'components/TextPageContent'
import TextPageHeader from 'components/TextPageHeader'

class JobsPage extends React.Component {
  render() {
    const openGraphTitle = 'Jobs at Tab for a Cause'
    const openGraphDescription =
      'Check out open jobs at a purpose-driven, challenging, and fun startup!'
    return (
      <TextPageContent>
        <Helmet title={'Jobs'}>
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageHeader>Jobs</TextPageHeader>
        <div>TODO: jobs go here!</div>
      </TextPageContent>
    )
  }
}

export default JobsPage
