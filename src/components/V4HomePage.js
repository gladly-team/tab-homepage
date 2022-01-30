import React, { useEffect } from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {
  ThemeProvider,
  responsiveFontSizes,
  styled,
} from '@mui/material/styles'
import { getUrlParameterValue } from 'src/utils/location'
import { createCauseTheme } from 'src/themes/theme'
import HeadTags from 'src/components/HeadTags'
import localStorageMgr from 'src/utils/local-storage'
import { getAbsoluteURL } from 'src/utils/navigation'
import Landing from 'src/components/Landing'
import FinancialsComponent from 'src/components/Financials'
import EndorsementsComponent from 'src/components/Endorsements'
import Mission from 'src/components/Mission'
import Footer from 'src/components/FooterV2'
import Intro from 'src/components/Intro'
import LandingMoneyRaised from 'src/components/LandingMoneyRaised'
import CharityIntro from 'src/components/CharityIntro'
import FAQ from 'src/components/FAQ'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { navigate } from 'gatsby'
import {
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_NEW_USER_CAUSE_ID,
  STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
  STORAGE_REFERRAL_DATA_REFERRING_USER,
  KEY_WORDS,
} from 'src/utils/constants'
import useMoneyRaised from '../hooks/useMoneyRaised'
import SecuritySection from './SecuritySection'

const Root = styled('div')(() => ({
  position: 'relative',
}))

const Background = styled('div')(() => ({
  // This is only because our root theme has a background of white.
  // If we unify theming and set background to beiges, we can remove this.
  background: '#FBF3E9', // beige background
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: -10, // below wave SVGs
}))

function V4HomePage({
  pageContext: {
    data: {
      path,
      causeId,
      styles,
      causeLaunch: { enabled },
      metadata: {
        title,
        ogTitle,
        ogDescription,
        ogImage,
        causeSpecificKeywords,
      },
      sections: {
        charityIntro,
        faq,
        landing,
        Financials,
        Security,
        Endorsements,
        Mission: missionData,
        TFACIntro,
        moneyRaised,
        Footer: footerData,
      },
    },
    referrer,
    previewPage,
  },
  location,
}) {
  // Don't run if a cause ID is missing.
  if (!causeId) {
    throw new Error('A cause ID is missing.')
  }
  const isPreviewPage = !!(!enabled && previewPage)
  const hasReferrer = !!(
    referrer || !isNaN(parseInt(getUrlParameterValue('r')))
  )

  // store referrer id
  useEffect(() => {
    // Check for a referrer's vanity URL.
    if (hasReferrer) {
      localStorageMgr.setItem(
        STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
        get(referrer, 'id') || parseInt(getUrlParameterValue('r'))
      )
    }
  }, [hasReferrer, referrer])

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
  useEffect(() => {
    if (enabled && previewPage) {
      navigate(previewPage.path)
    }
  }, [enabled, previewPage])
  const absolutePageURL = getAbsoluteURL(location.pathname || '')
  const ogImgPath = get(
    ogImage,
    'childImageSharp.gatsbyImageData.images.fallback.src',
    ''
  )
  const ogImgURLAbsolute = getAbsoluteURL(ogImgPath)
  const moneyRaisedAmount = useMoneyRaised()
  return (
    <Root>
      <HeadTags
        title={title}
        titleTemplate="Tab for a Cause"
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImgURLAbsolute}
        keywords={KEY_WORDS.concat(causeSpecificKeywords)}
        pageURL={absolutePageURL}
      />
      <Helmet>
        <link rel="canonical" href={getAbsoluteURL(path)} />
        {referrer || isPreviewPage ? (
          <meta name="robots" content="noindex" />
        ) : null}
      </Helmet>
      <Background />
      <Landing
        moneyRaised={moneyRaisedAmount}
        landingData={landing}
        causeId={causeId}
      />
      <LandingMoneyRaised
        moneyRaised={moneyRaisedAmount}
        moneyRaisedData={moneyRaised}
      />
      <CharityIntro charityIntroData={charityIntro} />
      <Intro introData={TFACIntro} causeId={causeId} />
      <Mission missionData={missionData} causeId={causeId} />
      <SecuritySection securityData={Security} />
      <FinancialsComponent financialsData={Financials} />
      <EndorsementsComponent
        endorsementsData={Endorsements}
        causeId={causeId}
      />
      <FAQ faqData={faq} />
      <Footer
        footerData={footerData}
        onBeforeInstall={() => {
          localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
          localStorageMgr.setItem(STORAGE_NEW_USER_CAUSE_ID, causeId)
        }}
      />
      <Snackbar open={isPreviewPage}>
        <Alert severity="info" sx={{ width: '100%' }}>
          <AlertTitle>Shh! This page is secret!</AlertTitle>
          You probably got here because the Tab for a Cause team shared it with
          you, but please don’t share it with others.
        </Alert>
      </Snackbar>
    </Root>
  )
}

V4HomePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
    data: PropTypes.any,
    previewPage: PropTypes.shape({
      path: PropTypes.string,
    }),
  }),
}

function V4HomePageWithTheme(props) {
  return (
    <ThemeProvider
      theme={responsiveFontSizes(
        createCauseTheme(props.pageContext.data.styles.colors)
      )}
    >
      <V4HomePage {...props} />
    </ThemeProvider>
  )
}

V4HomePageWithTheme.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.any,
  }),
}
export default V4HomePageWithTheme
