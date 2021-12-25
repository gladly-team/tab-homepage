import React, { useEffect } from 'react'
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
import Intro from 'src/components/Intro'
import LandingMoneyRaised from 'src/components/LandingMoneyRaised'
import CharityIntro from 'src/components/CharityIntro'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import {
  STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
  STORAGE_REFERRAL_DATA_REFERRING_USER,
  KEY_WORDS,
} from 'src/utils/constants'

const HomepageWrapper = ({
  pageContext: {
    data: {
      causeId,
      styles,
      causeLaunch: { preview, enabled },
      metadata: {
        url,
        title,
        ogTitle,
        ogDescription,
        ogImage,
        causeSpecificKeywords,
      },
      sections: {
        charityIntro,
        landing,
        Financials,
        Endorsements,
        Mission: missionData,
        TFACIntro,
        moneyRaised,
      },
    },
    referrer,
  },
  location,
}) => {
  const isPreviewPage = preview && !enabled
  const hasReferrer = () =>
    referrer || !isNaN(parseInt(getUrlParameterValue('r')))
  // store referrer id
  useEffect(() => {
    // Check for a referrer's vanity URL.
    if (hasReferrer()) {
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

  const canonicalURL = getAbsoluteURL(url)
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
            {referrer || isPreviewPage ? (
              <meta name="robots" content="noindex" />
            ) : null}
          </Helmet>
          <Landing
            landingData={landing}
            causeId={causeId}
            previewMessage={isPreviewPage}
          />
          <LandingMoneyRaised moneyRaisedData={moneyRaised} />
          <CharityIntro charityIntroData={charityIntro} />
          <Intro introData={TFACIntro} />
          <Mission missionData={missionData} />
          <FinancialsComponent financialsData={Financials} />
          <EndorsementsComponent
            endorsementsData={Endorsements}
            causeId={causeId}
          />
          <Snackbar open={isPreviewPage}>
            <Alert severity="info" sx={{ width: '100%' }}>
              <AlertTitle>Shh! This page is secret!</AlertTitle>
              You probably got here because the Tab for a Cause team shared it
              with you, but please don’t share it with others.
            </Alert>
          </Snackbar>
        </div>
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
