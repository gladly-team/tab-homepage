import React from 'react'
import Helmet from 'react-helmet'
import TextPageContent from 'components/TextPageContent'
import TextPageHeader from 'components/TextPageHeader'
import Divider from 'material-ui/Divider'
import { lightestTextColor } from 'themes/theme'

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
        <p>
          Tab for a Cause uses ads to raise money for charity. If you have an ad
          blocker, you will likely need to whitelist Tab for a Cause to allow
          ads to show.
        </p>
        <p>
          <span style={{ fontWeight: 'bold ' }}>Having trouble?</span> Please
          email us at contact@gladly.io
        </p>
        <Divider
          style={{ backgroundColor: lightestTextColor, marginBottom: 20 }}
        />
        <div>
          <h2>What ad blocker do you use?</h2>
        </div>
      </TextPageContent>
    )
  }
}

export default AdblockersPage
