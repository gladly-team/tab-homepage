import React from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
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

const PREFIX = 'Landing';

const classes = {
  whiteFont: `${PREFIX}-whiteFont`,
  logoContainer: `${PREFIX}-logoContainer`,
  titleSection: `${PREFIX}-titleSection`,
  title: `${PREFIX}-title`,
  halfScreenLeft: `${PREFIX}-halfScreenLeft`,
  halfScreenRight: `${PREFIX}-halfScreenRight`,
  subtitle: `${PREFIX}-subtitle`,
  buttonStyles: `${PREFIX}-buttonStyles`,
  wave: `${PREFIX}-wave`,
  waveMobile: `${PREFIX}-waveMobile`,
  installButton: `${PREFIX}-installButton`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.whiteFont}`]: {
    color: '#fff',
  },

  [`& .${classes.logoContainer}`]: { flex: 1, display: 'flex', flexDirection: 'row' },

  [`& .${classes.titleSection}`]: {
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

  [`& .${classes.title}`]: {
    color: theme.palette.primary.main,
  },

  [`& .${classes.halfScreenLeft}`]: {
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

  [`& .${classes.halfScreenRight}`]: {
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

  [`& .${classes.subtitle}`]: {
    marginTop: theme.spacing(2),
  },

  [`& .${classes.buttonStyles}`]: {
    maxWidth: theme.spacing(30),
    marginTop: theme.spacing(1.5),
  },

  [`& .${classes.wave}`]: {
    position: 'absolute',
    bottom: -2, // avoids a gap appearing on some resolutions
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  [`& .${classes.waveMobile}`]: {
    marginBottom: -2, // avoids a gap appearing on some resolutions
    display: 'none',
    position: 'static',
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },

  [`& .${classes.installButton}`]: {
    marginTop: theme.spacing(4),
  }
}));

function Landing({ landingData, causeId }) {
  const { title, subtitle, ctaImg } = landingData

  const theme = useTheme()
  const ctaImage = getImage(formatImg(ctaImg))
  return (
    <Root className="parent">
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
          <MoneyRaisedDisplay
            whiteClassName={cx.whiteFont}
            textVariant="subtitle2"
            excludeText
          />
        </Toolbar>
      </AppBar>
      <div className={cx.titleSection}>
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
          <GatsbyImage image={ctaImage} alt="call to action" />
        </div>
        <div className={cx.wave}>
          <Wave color={theme.palette.primary.main} />
        </div>
      </div>
      <div className={cx.waveMobile}>
        <Wave color={theme.palette.primary.main} />
      </div>
    </Root>
  );
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
