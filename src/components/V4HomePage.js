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
      metadata: {
        url,
        title,
        ogTitle,
        ogDescription,
        ogImage,
        causeSpecificKeywords,
      },
      sections: {
        landing,
        Financials,
        Endorsements,
        Mission: missionData,
        TFACIntro,
      },
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
          </Helmet>
          <Landing landingData={landing} causeId={causeId} />
          <Intro introData={TFACIntro} />
          <Mission missionData={missionData} />
          <FinancialsComponent financialsData={Financials} />
          <EndorsementsComponent
            endorsementsData={Endorsements}
            causeId={causeId}
          />
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
