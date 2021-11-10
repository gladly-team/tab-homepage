import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import HeadTags from 'src/components/HeadTags'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import InstallButton from 'src/components/InstallButton'
import Typography from '@material-ui/core/Typography'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import { getUrlParameterValue } from 'src/utils/location'
import localStorageMgr from 'src/utils/local-storage'
import { getAbsoluteURL, homeURL } from 'src/utils/navigation'
import logoWhite from 'src/img/logo-with-text-white.svg'
import seasHeaderImg from 'src/img/seas/headerImage.png'
import catsHeaderImg from 'src/img/cats/headerImg.png'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import {
  STORAGE_CATS_CAUSE_ID,
  STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
  STORAGE_REFERRAL_DATA_REFERRING_USER,
  STORAGE_SEAS_CAUSE_ID,
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_NEW_USER_CAUSE_ID,
} from 'src/utils/constants'
import Link from 'src/components/Link'
import Wave from 'src/components/Wave'

const useStyles = makeStyles((theme) => ({
  logoContainer: { flex: 1, display: 'flex', flexDirection: 'row' },
  titleSection: {
    margin: '0 auto',
    display: 'flex',
    height: 'calc(100vh - 64px)',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      height: 'auto',
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
  halfScreenLeft: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '10%',
    [theme.breakpoints.down(1100)]: {
      width: '47%',
      paddingLeft: '7%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginTop: theme.spacing(4),
      paddingLeft: 0,
      marginBottom: theme.spacing(8),
    },
  },
  halfScreenRight: {
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      width: '100%',
    },
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  buttonStyles: {
    maxWidth: theme.spacing(30),
    marginTop: theme.spacing(1.5),
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  waveMobile: {
    display: 'none',
    position: 'absolute',
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}))

const Landing = ({ pageContext, location, causeData }) => {
  const {
    canonicalURL,
    headTitle,
    headTitleTemplate,
    headOgTitle,
    headOgDescription,
    headKeywords,
    headOgImgURLAbsolute,
    title,
    subtitle,
    causeId,
    waveColor,
  } = causeData
  const cx = useStyles()
  const [showUnsupportedBrowserMessage, setShowUnsupportedBrowserMessage] =
    useState(false)
  // store referrer id
  useEffect(() => {
    let referrerId = null
    // Check for a referrer's vanity URL.
    if (pageContext && pageContext.referrer) {
      referrerId = pageContext.referrer.id
    } else {
      const paramRefId = parseInt(getUrlParameterValue('r'))
      if (!isNaN(paramRefId)) {
        referrerId = paramRefId
      }
    }
    referrerId &&
      localStorageMgr.setItem(
        STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
        referrerId
      )
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

  // function to be used in install button
  // eslint-disable-next-line no-unused-vars
  const onBeforeInstall = () => {
    localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
    localStorageMgr.setItem(STORAGE_NEW_USER_CAUSE_ID, causeId)
  }
  const absolutePageURL = getAbsoluteURL(location.pathname)
  let headerImg
  switch (causeId) {
    case STORAGE_SEAS_CAUSE_ID:
      headerImg = seasHeaderImg
      break
    case STORAGE_CATS_CAUSE_ID:
      headerImg = catsHeaderImg
      break
  }
  return (
    <div>
      <HeadTags
        title={headTitle}
        titleTemplate={headTitleTemplate}
        ogTitle={headOgTitle}
        ogDescription={headOgDescription}
        ogImage={headOgImgURLAbsolute}
        keywords={headKeywords}
        pageURL={absolutePageURL}
      />
      <Helmet>
        <link rel="canonical" href={canonicalURL} />
      </Helmet>
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <div className={cx.logoContainer}>
            <div
              data-test-id="logo-container"
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Link to={homeURL}>
                <img
                  data-test-id="tab-logo-with-text"
                  src={logoWhite}
                  style={{ height: 40 }}
                />
              </Link>
            </div>
          </div>

          <MoneyRaisedDisplay color="inherit" />
        </Toolbar>
      </AppBar>
      <div className={cx.titleSection}>
        <div className={cx.halfScreenLeft} data-test-id="title-wrapper">
          <Typography variant="h1" color="primary">
            {title}
          </Typography>
          <Typography className={cx.subtitle}>{subtitle}</Typography>
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
        </div>
        <div className={cx.halfScreenRight}>
          <img src={headerImg}></img>
        </div>
        <div className={cx.wave}>
          <Wave color={waveColor} />
        </div>
      </div>
      <div className={cx.waveMobile}>
        <Wave />
      </div>
      <UnsupportedBrowserDialog
        open={showUnsupportedBrowserMessage}
        onClose={() => {
          setShowUnsupportedBrowserMessage(false)
        }}
      />
    </div>
  )
}
Landing.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
  causeData: PropTypes.shape({
    causeId: PropTypes.string,
    canonicalURL: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    headTitle: PropTypes.string,
    headTitleTemplate: PropTypes.string,
    headOgTitle: PropTypes.string,
    headOgDescription: PropTypes.string,
    headKeywords: PropTypes.string,
    headOgImgURLAbsolute: PropTypes.string,
    waveColor: PropTypes.string,
  }),
}
const LandingWithTheme = (props) => (
  <ThemeProvider theme={props.theme}>
    <CssBaseline>
      <Landing {...props} />
    </CssBaseline>
  </ThemeProvider>
)
LandingWithTheme.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.object,
  }).isRequired,
}
export default LandingWithTheme
