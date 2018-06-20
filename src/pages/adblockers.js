import React from 'react'
import Helmet from 'react-helmet'
import TextPageContent from 'components/TextPageContent'
import TextPageHeader from 'components/TextPageHeader'

class AdblockersPage extends React.Component {
  render() {
    const openGraphTitle = 'Whitelisting Your Adblocker'
    const openGraphDescription =
      'Learn how to whitelist your adblocker to raise money for charity with every browser tab you open.'
    return (
      <TextPageContent>
        <Helmet title={'Whitelisting Your Adblocker'}>
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageHeader>Whitelisting Your Adblocker</TextPageHeader>
        <div>TODO: info goes here!</div>
      </TextPageContent>
    )
  }
}

export default AdblockersPage
