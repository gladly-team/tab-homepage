import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import InstallButton from 'src/components/InstallButton'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import localStorageMgr from 'src/utils/local-storage'
import { homeURL } from 'src/utils/navigation'
import logoWhite from 'src/img/logo-with-text-white.svg'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import {
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_NEW_USER_CAUSE_ID,
} from 'src/utils/constants'
import Link from 'src/components/Link'
import Wave from 'src/components/Wave'

const useStyles = makeStyles((theme) => ({
  whiteFont: {
    color: '#fff',
  },
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
    bottom: 0,
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  waveMobile: {
    display: 'none',
    position: 'static',
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}))

const Financials = ({ landingData, causeId }) => {
  const { title, subtitle, waveColor, ctaImg } = landingData
  const cx = useStyles()
  const [showUnsupportedBrowserMessage, setShowUnsupportedBrowserMessage] =
    useState(false)
  const ctaImage = getImage(ctaImg)
  return (
    <div className="parent">
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
          <GatsbyImage
            image={ctaImage}
            alt=""
            placeholder="none"
            backgroundColor="transparent"
          />
        </div>
        <div className={cx.wave}>
          <Wave color={waveColor} />
        </div>
      </div>
      <div className={cx.waveMobile}>
        <Wave color={waveColor} />
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
Financials.propTypes = {
  causeId: PropTypes.string,
  landingData: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    waveColor: PropTypes.string,
    ctaImg: PropTypes.any,
  }),
}
export default Financials