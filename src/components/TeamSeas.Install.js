import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import HeadTags from 'src/components/HeadTags'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import InstallButton from 'src/components/InstallButton'
import Typography from '@material-ui/core/Typography'
import { tabForTeamSeasTheme } from 'src/themes/theme'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import openGraphImg from 'src/img/seasOG.png'
import { getUrlParameterValue } from 'src/utils/location'
import localStorageMgr from 'src/utils/local-storage'
import { getAbsoluteURL, homeURL, seasURL } from 'src/utils/navigation'
import logoWhite from 'src/img/logo-with-text-white.svg'
import headerImg from 'src/img/seas/headerImage.png'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import {
  STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
  STORAGE_REFERRAL_DATA_REFERRING_USER,
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_SEAS_CAUSE_ID,
  STORAGE_NEW_USER_CAUSE_ID,
} from 'src/utils/constants'
import Link from 'src/components/Link'
import Wave from 'src/components/Wave'

const ogImgURLAbsolute = getAbsoluteURL(openGraphImg)
const canonicalURL = getAbsoluteURL(seasURL)
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

const Seas = ({ pageContext, location }) => {
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
    localStorageMgr.setItem(STORAGE_NEW_USER_CAUSE_ID, STORAGE_SEAS_CAUSE_ID)
  }
  const absolutePageURL = getAbsoluteURL(location.pathname)
  return (
    <div>
      <HeadTags
        title="Tab for TeamSeas - Home"
        titleTemplate="%s | Tab for TeamSeas"
        ogTitle="Remove trash from the seas for free | Tab for #TeamSeas "
        ogDescription="Open browser tabs to clean our seas, for free. It's that easy. Join #teamseas today!"
        ogImage={ogImgURLAbsolute}
        keywords="charity, seas, TeamSeas, teamseas, #teamseas, ocean, oceans, sharks, whales, dolphins, fish, environment, global warming, river, rivers, lake, lakes, pollution, extension, new tab, chrome, help, donation, raise money, money, easy, ways to donate, free, best, home, youtube, safe, volunteer, internet, tab for a cause, impact, legitimate, food, facebook, twitter, reddit, instagram, tumblr"
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
        <div className={cx.halfScreenLeft}>
          <Typography variant="h1" color="primary">
            The easiest way to save our seas
          </Typography>
          <Typography className={cx.subtitle}>
            Every tab opened raises money for #TeamSeas, an internet-led
            movement raising $30 million to clean up 30 million pounds of trash
            from our oceans, rivers, and lakes.
          </Typography>
          <InstallButton
            className={cx.buttonStyles}
            color="secondary"
            size="medium"
            onBeforeInstall={() => {
              localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
              localStorageMgr.setItem(
                STORAGE_NEW_USER_CAUSE_ID,
                STORAGE_SEAS_CAUSE_ID
              )
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
          <Wave />
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
Seas.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}
const SeasPageWithTheme = (props) => (
  <ThemeProvider
    theme={responsiveFontSizes(tabForTeamSeasTheme, { factor: 3.4 })}
  >
    <CssBaseline>
      <Seas {...props} />
    </CssBaseline>
  </ThemeProvider>
)
export default SeasPageWithTheme