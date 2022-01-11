import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
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
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import { getAbsoluteURL, homeURL } from 'src/utils/navigation'
import logoWhite from 'src/img/logo-with-text-white.svg'
import Link from 'src/components/Link'
import Countdown from 'react-countdown'
import { createCauseTheme } from 'src/themes/theme'
import { KEY_WORDS } from 'src/utils/constants'
import CssBaseline from '@material-ui/core/CssBaseline'
import { isChromaticEnv } from 'src/utils/featureFlags'

const useStyles = makeStyles((theme) => ({
  whiteFont: {
    color: '#fff',
  },
  logoContainer: { flex: 1, display: 'flex', flexDirection: 'row' },
  titleSection: {
    backgroundColor: theme.palette.primary.main,
    filter: 'brightness(85%)',
    margin: '0 auto',
    display: 'flex',
    minHeight: 'calc(100vh - 64px)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
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
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  countdownFont: {
    color: theme.palette.secondary.main,
  },
  countdownContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  titleText: {
    textTransform: 'uppercase',
  },
}))
const ComingSoon = ({
  pageContext: {
    data: {
      metadata: {
        url,
        title,
        ogTitle,
        ogDescription,
        ogImage,
        causeSpecificKeywords,
      },
      causeLaunch: { comingSoonTitle, launchDate },
    },
  },
  location,
}) => {
  const cx = useStyles()
  const absolutePageURL = getAbsoluteURL(location.pathname || '')
  const ogImgURLAbsolute = getAbsoluteURL(
    get(ogImage, 'childImageSharp.gatsbyImageData.images.sources[0].srcSet', '')
  )
  const canonicalURL = getAbsoluteURL(url)
  var countdownDate = null
  var displayCountdown = null
  // Making the date a fixed time in the future in the Chromatic Env to make this page static
  if (launchDate) {
    countdownDate = isChromaticEnv()
      ? new Date(new Date().getTime() + 86400000)
      : new Date(launchDate)
    displayCountdown = countdownDate && new Date() < countdownDate
  } else {
    displayCountdown = false
  }
  return (
    <div>
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

          <MoneyRaisedDisplay whiteClassName={cx.whiteFont} />
        </Toolbar>
      </AppBar>
      <div className={cx.titleSection} data-test-id="coming-soon-body">
        <Typography
          className={cx.titleText}
          variant="h2"
          color="inherit"
          align="center"
        >
          {comingSoonTitle}
        </Typography>
        <Typography
          variant="h3"
          color="inherit"
          align="center"
          className={cx.comingSoon}
        >
          COMING SOON
        </Typography>
        {displayCountdown ? (
          <Countdown
            date={countdownDate}
            intervalDelay={0}
            precision={3}
            renderer={({ hours, minutes, seconds, days }) => {
              return (
                <div className={cx.countdownContainer}>
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
              )
            }}
          />
        ) : null}
      </div>
    </div>
  )
}
ComingSoon.propTypes = {
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
const ComingSoonWithTheme = (props) => (
  <ThemeProvider
    theme={responsiveFontSizes(
      createCauseTheme(props.pageContext.data.styles.colors)
    )}
  >
    <CssBaseline>
      <ComingSoon {...props} />
    </CssBaseline>
  </ThemeProvider>
)
ComingSoonWithTheme.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.any,
  }),
}
export default ComingSoonWithTheme
