import React, { useEffect, useState } from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import Helmet from 'react-helmet'
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { getUrlParameterValue } from 'src/utils/location'
import { createCauseTheme } from 'src/themes/theme'
import HeadTags from 'src/components/HeadTags'
import localStorageMgr from 'src/utils/local-storage'
import { getAbsoluteURL } from 'src/utils/navigation'
import Landing from 'src/components/Landing'
import FinancialsComponent from 'src/components/Financials'
import EndorsementsComponent from 'src/components/Endorsements'
import Mission from 'src/components/Mission'
import InstallButton from 'src/components/InstallButton'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import {
  STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
  STORAGE_REFERRAL_DATA_REFERRING_USER,
  KEY_WORDS,
} from 'src/utils/constants'
import { makeStyles } from '@material-ui/core/styles'
import {
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_NEW_USER_CAUSE_ID,
} from 'src/utils/constants'

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    maxWidth: theme.spacing(30),
    marginTop: theme.spacing(1.5),
  },
}))

const HomepageWrapper = ({
  pageContext: {
    data: {
      causeId,
      styles,
      metadata: {
        url,
        title,
        ogTitle,
        ogDescription,
        ogImage,
        causeSpecificKeywords,
      },
      sections: { landing, Financials, Endorsements, Mission: missionData },
    },
    referrer,
  },
  location,
}) => {
  // store referrer id
  useEffect(() => {
    // Check for a referrer's vanity URL.
    if (referrer || !isNaN(parseInt(getUrlParameterValue('r')))) {
      localStorageMgr.setItem(
        STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
        get(referrer, 'id') || parseInt(getUrlParameterValue('r'))
      )
    }
  }, [])
  // store user referral
  useEffect(() => {
    const userReferrerId = getUrlParameterValue('u')
    if (userReferrerId !== null && userReferrerId !== undefined) {
      localStorageMgr.setItem(
        STORAGE_REFERRAL_DATA_REFERRING_USER,
        userReferrerId
      )
    }
  }, [])
  const absolutePageURL = getAbsoluteURL(location.pathname || '')
  const ogImgURLAbsolute = getAbsoluteURL(
    get(ogImage, 'childImageSharp.gatsbyImageData.images.sources[0].srcSet', '')
  )
  const cx = useStyles()
  const canonicalURL = getAbsoluteURL(url)
  const [showUnsupportedBrowserMessage, setShowUnsupportedBrowserMessage] =
    useState(false)
  const installButton = (
    <InstallButton
      className={cx.buttonStyles}
      color="secondary"
      size="medium"
      onBeforeInstall={() => {
        localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
        localStorageMgr.setItem(STORAGE_NEW_USER_CAUSE_ID, causeId)
      }}
      onUnsupportedBrowserInstallClick={() => {
        setShowUnsupportedBrowserMessage(true)
      }}
    />
  )
  return (
    <ThemeProvider theme={responsiveFontSizes(createCauseTheme(styles.colors))}>
      <CssBaseline>
        <div>
          <HeadTags
            title={title}
            titleTemplate="Tab for A Cause"
            ogTitle={ogTitle}
            ogDescription={ogDescription}
            ogImage={ogImgURLAbsolute}
            keywords={KEY_WORDS.concat(causeSpecificKeywords)}
            pageURL={absolutePageURL}
          />
          <Helmet>
            <link rel="canonical" href={canonicalURL} />
          </Helmet>
          <Landing
            installButton={installButton}
            landingData={landing}
            causeId={causeId}
          />
          <Mission missionData={missionData} />
          <FinancialsComponent financialsData={Financials} />
          <EndorsementsComponent
            installButton={installButton}
            endorsementsData={Endorsements}
          />
        </div>
        <UnsupportedBrowserDialog
          open={showUnsupportedBrowserMessage}
          onClose={() => {
            setShowUnsupportedBrowserMessage(false)
          }}
        />
      </CssBaseline>
    </ThemeProvider>
  )
}
HomepageWrapper.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
    data: PropTypes.any,
  }),
}
export default HomepageWrapper
