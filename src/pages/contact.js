import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Divider from '@mui/material/Divider'
import { lightestTextColor } from 'src/themes/theme'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Link from 'src/components/Link'
import {
  adblockerWhitelistingURL,
  externalHelpAllAppsURL,
  financialsURL,
  tiktokPageURL,
  facebookPageURL,
  twitterPageURL,
  instagramPageURL,
  suggestForm,
  suggestFeatureForm,
} from 'src/utils/navigation'
import Layout from 'src/components/Layout'

const ContactPage = ({ location }) => {
  const pageTitle = 'Contact Us'
  const openGraphTitle = 'Contact Us - Tab for a Cause'
  const openGraphDescription = 'Get in touch with Tab for a Cause.'
  const addressStyle = {
    margin: 0,
    fontStyle: 'italic',
    fontSize: 12,
  }
  return (
    <Layout brand="all" location={location}>
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
            <Link to={externalHelpAllAppsURL}>help center</Link>, where we
            tackle common questions and troubleshooting.
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
            <Link to={instagramPageURL}>Instagram</Link>,{' '}
            <Link to={facebookPageURL}>Facebook</Link>,{' '}
            <Link to={tiktokPageURL}>TikTok</Link>, and{' '}
            <Link to={twitterPageURL}>Twitter</Link>.
          </p>
          <p>
            If you’d like to request a specific non-profit organization, you can
            do that <Link to={suggestForm}>here</Link>.
          </p>
          <p>
            To suggest a specific feature on Tab for a Cause, please fill out{' '}
            <Link to={suggestFeatureForm}>this form</Link>.
          </p>
          <p>
            For any other questions, feedback, or tasty cookie recipe
            suggestions, feel free to email us at contact@gladly.io.
          </p>
          <Divider style={{ marginBottom: 20 }} />
          <div>
            <div>
              <p style={{ ...addressStyle, marginBottom: 10 }}>
                Tab for a Cause is built with love at:
              </p>
              <p style={addressStyle}>Gladly, Inc.</p>
              <p style={addressStyle}>204 E 2nd Ave</p>
              <p style={addressStyle}>San Mateo, CA 94401</p>
            </div>
          </div>
          <p />
        </TextPageContent>
      </div>
    </Layout>
  )
}

ContactPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

ContactPage.displayName = 'ContactPage'

export default ContactPage
