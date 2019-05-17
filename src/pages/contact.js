import React from 'react'
import Helmet from 'react-helmet'
import Divider from '@material-ui/core/Divider'
import { lightestTextColor } from 'themes/theme'
import TextPageContent from 'components/TextPageContent'
import TextPageHeader from 'components/TextPageHeader'
import Link from 'components/Link'
import {
  adblockerWhitelistingURL,
  externalContactUsURL,
  financialsURL,
  facebookPageURL,
  twitterPageURL,
} from 'utils/navigation'

const ContactPage = () => {
  const pageTitle = 'Contact Us'
  const openGraphTitle = 'Contact Us - Tab for a Cause'
  const openGraphDescription = 'Get in touch with Tab for a Cause.'
  const addressStyle = {
    margin: 0,
    fontStyle: 'italic',
    fontSize: 12,
  }
  return (
    <div>
      <Helmet title={pageTitle}>
        <meta property="og:title" content={openGraphTitle} />
        <meta property="og:description" content={openGraphDescription} />
        <meta name="twitter:title" content={openGraphTitle} />
        <meta name="twitter:description" content={openGraphDescription} />
      </Helmet>
      <TextPageContent>
        <TextPageHeader>Contact Us</TextPageHeader>
        <h2>Need help?</h2>
        <p>
          Hello! If you have questions or need help, check out our{' '}
          <Link to={externalContactUsURL}>help center</Link>, where we tackle
          common questions and troubleshooting.
        </p>
        <p>
          You might be curious about our charitable impact—you can find our{' '}
          <Link to={financialsURL}>financials here</Link>. Or, you might be
          curious how to unblock your adblocker on the new tab page—check out{' '}
          <Link to={adblockerWhitelistingURL}>how to do that here</Link>.
        </p>
        <h2>Let's Socialize</h2>
        <p>
          Want to say hi on social media? We're on{' '}
          <Link to={facebookPageURL}>Facebook</Link> and{' '}
          <Link to={twitterPageURL}>Twitter</Link> from time to time.
        </p>
        <p>
          If you have questions, feedback, or tasty cookie recipe suggestions,
          feel free to email us at contact@tabforacause.org.
        </p>
        <Divider
          style={{ backgroundColor: lightestTextColor, marginBottom: 20 }}
        />
        <div>
          <div>
            <p style={Object.assign({}, addressStyle, { marginBottom: 10 })}>
              Tab for a Cause is built with love at:
            </p>
            <p style={addressStyle}>Gladly</p>
            <p style={addressStyle}>3165 Loma Verde Place</p>
            <p style={addressStyle}>Palo Alto, CA 94303</p>
          </div>
        </div>
        <p />
      </TextPageContent>
    </div>
  )
}

export default ContactPage
