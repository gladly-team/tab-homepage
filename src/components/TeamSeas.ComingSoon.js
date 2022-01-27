import React from 'react'
import {
  styled,
  ThemeProvider,
  StyledEngineProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import HeadTags from 'src/components/HeadTags'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { tabForTeamSeasTheme } from 'src/themes/theme'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import openGraphImg from 'src/img/seasOG.png'
import { getAbsoluteURL, homeURL, seasURL } from 'src/utils/navigation'
import logoWhite from 'src/img/logo-with-text-white.svg'
import seaImg from 'src/img/seas/ocean.jpg'
import Link from 'src/components/Link'
import Countdown from 'react-countdown'

const PREFIX = 'SeasPageWithTheme'

const classes = {
  logoContainer: `${PREFIX}-logoContainer`,
  background: `${PREFIX}-background`,
  tint: `${PREFIX}-tint`,
  titleSection: `${PREFIX}-titleSection`,
  comingSoon: `${PREFIX}-comingSoon`,
  countdownPaper: `${PREFIX}-countdownPaper`,
  countdownFont: `${PREFIX}-countdownFont`,
}

const StyledStyledEngineProvider = styled(StyledEngineProvider)(
  ({ theme }) => ({
    [`& .${classes.logoContainer}`]: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
    },

    [`& .${classes.background}`]: {
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

    [`& .${classes.tint}`]: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: '-1',

      // Needs to match shading in extension new tab page.
      backgroundColor: `rgba(0, 0, 0, 0.3)`,
    },

    [`& .${classes.titleSection}`]: {
      margin: '0 auto',
      display: 'flex',
      height: 'calc(100vh - 64px)',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },

    [`& .${classes.comingSoon}`]: {
      marginBottom: theme.spacing(2),
    },

    [`& .${classes.countdownPaper}`]: {
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

    [`& .${classes.countdownFont}`]: {
      color: theme.palette.secondary.main,
    },
  })
)

const ogImgURLAbsolute = getAbsoluteURL(openGraphImg)
const canonicalURL = getAbsoluteURL(seasURL)
function Seas({ location }) {
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
          <div className={classes.logoContainer}>
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
      <div className={classes.background}>
        <div className={classes.tint} />
      </div>
      <div className={classes.titleSection}>
        <Typography variant="h2" color="inherit">
          TAB FOR #TEAMSEAS
        </Typography>
        <Typography variant="h3" color="inherit" className={classes.comingSoon}>
          COMING SOON IN:
        </Typography>
        <Countdown
          date="2021-10-29T13:00:00.000"
          intervalDelay={0}
          precision={3}
          renderer={({ hours, minutes, seconds, days }) => (
            <div style={{ display: 'flex' }}>
              <Paper className={classes.countdownPaper}>
                <Typography variant="h4" className={classes.countdownFont}>
                  {days}
                </Typography>
                <Typography>days</Typography>
              </Paper>
              <Paper className={classes.countdownPaper}>
                <Typography variant="h4" className={classes.countdownFont}>
                  {hours}
                </Typography>
                <Typography>hours</Typography>
              </Paper>
              <Paper className={classes.countdownPaper}>
                <Typography variant="h4" className={classes.countdownFont}>
                  {minutes}
                </Typography>
                <Typography>minutes</Typography>
              </Paper>
              <Paper className={classes.countdownPaper}>
                <Typography variant="h4" className={classes.countdownFont}>
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

function SeasPageWithTheme(props) {
  return (
    <StyledStyledEngineProvider injectFirst>
      <ThemeProvider
        theme={responsiveFontSizes(tabForTeamSeasTheme, { factor: 3.4 })}
      >
        <Seas {...props} />
      </ThemeProvider>
    </StyledStyledEngineProvider>
  )
}

export default SeasPageWithTheme
