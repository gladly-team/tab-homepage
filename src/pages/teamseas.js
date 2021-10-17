import React, { useEffect } from 'react'
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
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { tabForTeamSeasTheme } from 'src/themes/theme'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import openGraphImg from 'src/img/opengraph-img.png'
import { getUrlParameterValue } from 'src/utils/location'
import localStorageMgr from 'src/utils/local-storage'
import { getAbsoluteURL, homeURL, seasURL } from 'src/utils/navigation'
import logoWhite from 'src/img/logo-with-text-white.svg'
import seaImg from 'src/img/seas/ocean.jpg'
import {
  STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
  STORAGE_REFERRAL_DATA_REFERRING_USER,
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_SEAS_CAUSE_ID,
  STORAGE_NEW_USER_CAUSE_ID,
} from 'src/utils/constants'
import Link from 'src/components/Link'
import Countdown from 'react-countdown'
// place holder until we get sea image
const ogImgURLAbsolute = getAbsoluteURL(openGraphImg)
const canonicalURL = getAbsoluteURL(seasURL)
const useStyles = makeStyles((theme) => ({
  logoContainer: { flex: 1, display: 'flex', flexDirection: 'row' },
  background: {
    backgroundImage: `url("${seaImg}")`,
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 120px inset',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: '-2',
  },
  tint: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: '-1',
    // Needs to match shading in extension new tab page.
    backgroundColor: `rgba(0, 0, 0, 0.3)`,
  },
  titleSection: {
    margin: '0 auto',
    display: 'flex',
    height: 'calc(100vh - 64px)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  comingSoon: {
    marginBottom: theme.spacing(2),
  },
  countdownPaper: {
    borderRadius: '50%',
    height: '150px',
    width: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${theme.palette.secondary.main}`,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  countdownFont: {
    color: theme.palette.secondary.main,
  },
}))
const Seas = ({ pageContext, location }) => {
  const cx = useStyles()

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
      <div className={cx.background}>
        <div className={cx.tint}></div>
      </div>
      <div className={cx.titleSection}>
        <Typography variant="h2" color="inherit">
          TAB FOR #TEAMSEAS
        </Typography>
        <Typography variant="h3" color="inherit" className={cx.comingSoon}>
          COMING SOON IN:
        </Typography>
        <Countdown
          date={'2021-10-29T13:00:00.000'}
          intervalDelay={0}
          precision={3}
          renderer={({ hours, minutes, seconds, days }) => (
            <div style={{ display: 'flex' }}>
              <Paper className={cx.countdownPaper}>
                <Typography variant="h4" className={cx.countdownFont}>
                  {days}
                </Typography>
                <Typography>days</Typography>
              </Paper>
              <Paper className={cx.countdownPaper}>
                <Typography variant="h4" className={cx.countdownFont}>
                  {hours}
                </Typography>
                <Typography>hours</Typography>
              </Paper>
              <Paper className={cx.countdownPaper}>
                <Typography variant="h4" className={cx.countdownFont}>
                  {minutes}
                </Typography>
                <Typography>minutes</Typography>
              </Paper>
              <Paper className={cx.countdownPaper}>
                <Typography variant="h4" className={cx.countdownFont}>
                  {seconds}
                </Typography>
                <Typography>seconds</Typography>
              </Paper>
            </div>
          )}
        />
      </div>
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
    <Seas {...props} />
  </ThemeProvider>
)
export default SeasPageWithTheme
