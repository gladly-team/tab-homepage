import React from 'react'
import {
  styled,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import Helmet from 'react-helmet'
import HeadTags from 'src/components/HeadTags'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import { getAbsoluteURL, homeURL } from 'src/utils/navigation'
import logoWhite from 'src/img/logo-with-text-white.svg'
import Link from 'src/components/Link'
import Countdown from 'react-countdown'
import { createCauseTheme } from 'src/themes/theme'
import { KEY_WORDS } from 'src/utils/constants'
import { isChromaticEnv } from 'src/utils/featureFlags'

const PREFIX = 'ComingSoon'

const classes = {
  whiteFont: `${PREFIX}-whiteFont`,
  logoContainer: `${PREFIX}-logoContainer`,
  titleSection: `${PREFIX}-titleSection`,
  comingSoon: `${PREFIX}-comingSoon`,
  countdownPaper: `${PREFIX}-countdownPaper`,
  countdownFont: `${PREFIX}-countdownFont`,
  countdownContainer: `${PREFIX}-countdownContainer`,
  titleText: `${PREFIX}-titleText`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.whiteFont}`]: {
    color: '#fff',
  },

  [`& .${classes.logoContainer}`]: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },

  [`& .${classes.titleSection}`]: {
    backgroundColor: theme.palette.primary.main,
    filter: 'brightness(85%)',
    margin: '0 auto',
    display: 'flex',
    minHeight: 'calc(100vh - 64px)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
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
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },

  [`& .${classes.countdownFont}`]: {
    color: theme.palette.secondary.main,
  },

  [`& .${classes.countdownContainer}`]: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },

  [`& .${classes.titleText}`]: {
    textTransform: 'uppercase',
  },
}))

function ComingSoon({
  pageContext: {
    data: {
      path,
      metadata: {
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
}) {
  const absolutePageURL = getAbsoluteURL(location.pathname || '')
  const ogImgURLAbsolute = getAbsoluteURL(
    get(ogImage, 'childImageSharp.gatsbyImageData.images.sources[0].srcSet', '')
  )
  let countdownDate = null
  let displayCountdown = null

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

          <MoneyRaisedDisplay whiteClassName={classes.whiteFont} />
        </Toolbar>
      </AppBar>
      <div className={classes.titleSection} data-test-id="coming-soon-body">
        <Typography
          className={classes.titleText}
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
          className={classes.comingSoon}
        >
          COMING SOON
        </Typography>
        {displayCountdown ? (
          <Countdown
            date={countdownDate}
            intervalDelay={0}
            precision={3}
            renderer={({ hours, minutes, seconds, days }) => (
              <div className={classes.countdownContainer}>
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
        ) : null}
      </div>
    </Root>
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

function ComingSoonWithTheme(props) {
  return (
    <ThemeProvider
      theme={responsiveFontSizes(
        createCauseTheme(props.pageContext.data.styles.colors)
      )}
    >
      <ComingSoon {...props} />
    </ThemeProvider>
  )
}

ComingSoonWithTheme.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.any,
  }),
}

export default ComingSoonWithTheme
