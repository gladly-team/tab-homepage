import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import { homeURL } from 'src/utils/navigation'
import logoWhite from 'src/img/logo-with-text-white.svg'
import { formatImg } from 'src/utils/formatting'
import Link from 'src/components/Link'
import Wave from 'src/components/Wave'
import V4InstallButton from 'src/components/V4InstallButton'

const useStyles = makeStyles((theme) => ({
  whiteFont: {
    color: '#fff',
  },
  logoContainer: { flex: 1, display: 'flex', flexDirection: 'row' },
  titleSection: {
    margin: '0 auto',
    display: 'flex',
    position: 'relative', // for absolutely-positioned wave
    minHeight: 'calc(100vh - 64px)',
    alignItems: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      height: 'auto',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
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
    [theme.breakpoints.down(undefined)]: {
      width: '47%',
      paddingLeft: '7%',
    },
    [theme.breakpoints.down('md')]: {
      width: '85%',
      marginTop: theme.spacing(4),
      paddingLeft: 0,
      marginBottom: theme.spacing(8),
    },
  },
  halfScreenRight: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    [theme.breakpoints.down('md')]: {
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
    bottom: -2, // avoids a gap appearing on some resolutions
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  waveMobile: {
    marginBottom: -2, // avoids a gap appearing on some resolutions
    display: 'none',
    position: 'static',
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  installButton: {
    marginTop: theme.spacing(4),
  },
}))

function Landing({ landingData, causeId }) {
  const { title, subtitle, ctaImg } = landingData
  const classes = useStyles()
  const theme = useTheme()
  const ctaImage = getImage(formatImg(ctaImg))
  return (
    <div className="parent">
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
          <MoneyRaisedDisplay
            whiteClassName={classes.whiteFont}
            textVariant="subtitle2"
            excludeText
          />
        </Toolbar>
      </AppBar>
      <div className={classes.titleSection}>
        <div className={classes.halfScreenLeft} data-test-id="title-wrapper">
          <Typography variant="h1" color="primary">
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
          <V4InstallButton
            causeId={causeId}
            buttonClassName={classes.installButton}
            fullWidth
          />
        </div>
        <div className={classes.halfScreenRight}>
          <GatsbyImage image={ctaImage} alt="call to action" />
        </div>
        <div className={classes.wave}>
          <Wave color={theme.palette.primary.main} />
        </div>
      </div>
      <div className={classes.waveMobile}>
        <Wave color={theme.palette.primary.main} />
      </div>
    </div>
  )
}
Landing.propTypes = {
  causeId: PropTypes.string,
  landingData: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    ctaImg: PropTypes.any,
  }),
}
export default Landing
