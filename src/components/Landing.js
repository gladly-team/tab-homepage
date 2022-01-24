import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import { homeURL } from 'src/utils/navigation'
import logoWhite from 'src/img/logo-with-text-white.svg'
import { formatImg } from 'src/utils/formatting'
import Link from 'src/components/Link'
import Wave from 'src/components/Wave'
import V4InstallButton from 'src/components/V4InstallButton'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    maxWidth: theme.customLayout.contentMaxWidth,
    alignSelf: 'center',
    width: '100%',
  },
  whiteFont: {
    color: '#fff',
  },
  logoContainer: { flex: 1, display: 'flex', flexDirection: 'row' },
  titleSection: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    position: 'relative', // for absolutely-positioned wave
    minHeight: 'calc(100vh - 64px)',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  content: {
    maxWidth: theme.customLayout.contentMaxWidth,
    margin: '0 auto',
    flex: 1,
    display: 'flex',
    position: 'relative', // for absolutely-positioned wave
    alignItems: 'center',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
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
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down(1100)]: {
      width: '47%',
      paddingLeft: '7%',
    },
    [theme.breakpoints.down('sm')]: {
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
    bottom: -2, // avoids a gap appearing on some resolutions
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  waveMobile: {
    marginBottom: -2, // avoids a gap appearing on some resolutions
    display: 'none',
    position: 'static',
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  installButton: {
    marginTop: theme.spacing(4),
  },
}))

const Landing = ({ landingData, causeId }) => {
  const { title, subtitle, ctaImg } = landingData
  const cx = useStyles()
  const theme = useTheme()
  const ctaImage = getImage(formatImg(ctaImg))
  return (
    <div className="parent">
      <AppBar color="primary" position="sticky">
        <Toolbar className={cx.toolbar}>
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
          <MoneyRaisedDisplay
            whiteClassName={cx.whiteFont}
            textVariant="subtitle2"
            excludeText
          />
        </Toolbar>
      </AppBar>
      <div className={cx.titleSection}>
        <div className={cx.content}>
          <div className={cx.halfScreenLeft} data-test-id="title-wrapper">
            <Typography variant="h1" color="primary">
              {title}
            </Typography>
            <Typography className={cx.subtitle}>{subtitle}</Typography>
            <V4InstallButton
              causeId={causeId}
              buttonClassName={cx.installButton}
              fullWidth
            />
          </div>
          <div className={cx.halfScreenRight}>
            <GatsbyImage image={ctaImage} />
          </div>
        </div>
        <div className={cx.wave}>
          <Wave color={theme.palette.primary.main} />
        </div>
      </div>
      <div className={cx.waveMobile}>
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
