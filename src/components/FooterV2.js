import React, { useCallback } from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import redirect from 'src/utils/redirect'
import logo from 'src/img/logo-with-text-white.svg'
import GoogleChrome from 'mdi-material-ui/GoogleChrome'
import MicrosoftEdge from 'mdi-material-ui/MicrosoftEdge'
import AppleSafari from 'mdi-material-ui/AppleSafari'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import FooterBlobLeft from 'src/components/FooterBlobLeft'
import FooterBlobRight from 'src/components/FooterBlobRight'
import {
  chromeExtensionURL,
  edgeExtensionURL,
  safariExtensionURL,
  adblockerWhitelistingURL,
  contactUsURL,
  externalHelpURL,
  facebookPageURL,
  financialsURL,
  instagramPageURL,
  jobsURL,
  privacyPolicyURL,
  teamURL,
  termsURL,
  twitterPageURL,
  tiktokPageURL,
} from 'src/utils/navigation'
import Link from 'src/components/Link'

const PREFIX = 'Footer';

const classes = {
  logoContainer: `${PREFIX}-logoContainer`,
  backgroundContainer: `${PREFIX}-backgroundContainer`,
  tiktok: `${PREFIX}-tiktok`,
  social: `${PREFIX}-social`,
  contentRow: `${PREFIX}-contentRow`,
  columnOne: `${PREFIX}-columnOne`,
  columnTwo: `${PREFIX}-columnTwo`,
  columnThree: `${PREFIX}-columnThree`,
  subColumn: `${PREFIX}-subColumn`,
  subColumnTwo: `${PREFIX}-subColumnTwo`,
  iconRowOne: `${PREFIX}-iconRowOne`,
  iconRowTwo: `${PREFIX}-iconRowTwo`,
  iconStyles: `${PREFIX}-iconStyles`,
  imgClassName: `${PREFIX}-imgClassName`,
  iconButton: `${PREFIX}-iconButton`,
  leftBubble: `${PREFIX}-leftBubble`,
  rightBubble: `${PREFIX}-rightBubble`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.logoContainer}`]: { flex: 1, display: 'flex', flexDirection: 'row' },

  [`& .${classes.backgroundContainer}`]: {
    background: theme.palette.primary.main,
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },

  [`& .${classes.tiktok}`]: {
    marginRight: theme.spacing(1),
  },

  [`& .${classes.social}`]: {
    marginTop: theme.spacing(1),
  },

  [`& .${classes.contentRow}`]: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexFlow: 'row',
    '&::after': {
      content: '',
      flex: '0 1 30%',
    },
    zIndex: '1',
  },

  [`& .${classes.columnOne}`]: {
    marginTop: theme.spacing(6.5),
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    minWidth: theme.spacing(36),
  },

  [`& .${classes.columnTwo}`]: {
    marginTop: theme.spacing(6.5),
    width: theme.spacing(38),
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    color: '#fff',
  },

  [`& .${classes.columnThree}`]: {
    marginTop: theme.spacing(6.5),
    display: 'flex',
    [theme.breakpoints.down(undefined)]: {
      width: '100%',
      justifyContent: 'center',
    },
  },

  [`& .${classes.subColumn}`]: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    width: theme.spacing(30),
  },

  [`& .${classes.subColumnTwo}`]: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
  },

  [`& .${classes.iconRowOne}`]: {
    display: 'flex',
    color: '#fff',
    marginLeft: theme.spacing(-2),
  },

  [`& .${classes.iconRowTwo}`]: {
    display: 'flex',
    color: '#fff',
  },

  [`& .${classes.iconStyles}`]: {
    color: theme.palette.primary.main,
    backgroundColor: '#fff',
    padding: theme.spacing(0.25),
    height: theme.spacing(4),
    width: theme.spacing(4),
    borderRadius: theme.spacing(0.5),
  },

  [`& .${classes.imgClassName}`]: {
    height: 'auto !important',
  },

  [`& .${classes.iconButton}`]: {
    borderRadius: '10%',
  },

  [`& .${classes.leftBubble}`]: {
    position: 'absolute',
    width: theme.spacing(70),
    left: theme.spacing(-10),
    top: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(50),
      left: theme.spacing(-30),
      top: theme.spacing(0),
    },
  },

  [`& .${classes.rightBubble}`]: {
    position: 'absolute',
    width: theme.spacing(40),
    right: theme.spacing(10),
    top: theme.spacing(27),
    [theme.breakpoints.down('md')]: {
      right: theme.spacing(-14),
      top: 'unset',
      bottom: theme.spacing(-40),
    },
  }
}));

function Footer({ onBeforeInstall, footerData: { img, bubbleColor } }) {
  const image = getImage(formatImg(img))

  const browserOnClick = useCallback(
    (extensionUrl) => async () => {
      await onBeforeInstall()
      redirect(extensionUrl)
    },
    [onBeforeInstall]
  )
  return (
    <Root className={cx.backgroundContainer}>
      <FooterBlobLeft color={bubbleColor} innerClassName={cx.leftBubble} />
      <FooterBlobRight color={bubbleColor} innerClassName={cx.rightBubble} />
      <div className={cx.contentRow}>
        <div className={cx.columnOne}>
          <Link to="/">
            <img src={logo} style={{ height: 43 }} />
          </Link>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            className={cx.social}
          >
            Social
          </Typography>
          <div className={cx.iconRowOne}>
            <Link to={tiktokPageURL} className={cx.tiktok} target="_blank">
              <IconButton classes={{ root: cx.iconButton }} size="large">
                <SvgIcon
                  viewBox="0 0 50 50"
                  style={{
                    height: '38px',
                    width: '38px',
                    marginTop: '-3px',
                    fill: '#fff',
                  }}
                >
                  <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
                </SvgIcon>
              </IconButton>
            </Link>
            <Link to={facebookPageURL} target="_blank">
              <IconButton
                edge="start"
                classes={{ root: cx.iconButton }}
                size="large"
              >
                <FacebookIcon classes={{ root: cx.iconStyles }} />
              </IconButton>
            </Link>

            <Link to={instagramPageURL} target="_blank">
              <IconButton classes={{ root: cx.iconButton }} size="large">
                <InstagramIcon classes={{ root: cx.iconStyles }} />
              </IconButton>
            </Link>

            <Link to={twitterPageURL} target="_blank">
              <IconButton classes={{ root: cx.iconButton }} size="large">
                <TwitterIcon classes={{ root: cx.iconStyles }} />
              </IconButton>
            </Link>
          </div>
          <Typography variant="subtitle2" color="textSecondary">
            Browser Compatibility
          </Typography>
          <div className={cx.iconRowTwo}>
            <IconButton
              onClick={browserOnClick(chromeExtensionURL)}
              edge="start"
              classes={{ root: cx.iconButton }}
              size="large"
            >
              <GoogleChrome className={cx.iconStyles} />
            </IconButton>
            <IconButton
              onClick={browserOnClick(edgeExtensionURL)}
              classes={{ root: cx.iconButton }}
              size="large"
            >
              <MicrosoftEdge className={cx.iconStyles} />
            </IconButton>
            <IconButton
              onClick={browserOnClick(safariExtensionURL)}
              classes={{ root: cx.iconButton }}
              size="large"
            >
              <AppleSafari className={cx.iconStyles} />
            </IconButton>
          </div>
        </div>
        <div className={cx.columnTwo}>
          <div className={cx.subColumn}>
            <Link to={externalHelpURL}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textSecondary"
              >
                Help Center
              </Typography>
            </Link>
            <Link to={financialsURL}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textSecondary"
              >
                Financials
              </Typography>
            </Link>
            <Link to={privacyPolicyURL}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textSecondary"
              >
                Privacy
              </Typography>
            </Link>
            <Link to={termsURL}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textSecondary"
              >
                Terms
              </Typography>
            </Link>
            <Link to={adblockerWhitelistingURL}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textSecondary"
              >
                Ad Blockers
              </Typography>
            </Link>
          </div>
          <div className={cx.subColumnTwo}>
            <Link to={teamURL}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textSecondary"
              >
                Team
              </Typography>
            </Link>
            <Link to={contactUsURL}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textSecondary"
              >
                Contact
              </Typography>
            </Link>
            <Link to={jobsURL}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textSecondary"
              >
                Jobs
              </Typography>
            </Link>
          </div>
        </div>
        <div className={cx.columnThree}>
          <GatsbyImage
            image={image}
            alt="footer"
            imgClassName={cx.imgClassName}
          />
        </div>
      </div>
    </Root>
  );
}

Footer.propTypes = {
  onBeforeInstall: PropTypes.func.isRequired,
  footerData: PropTypes.shape({
    img: PropTypes.any,
    bubbleColor: PropTypes.string,
  }),
}

Footer.defaultProps = {}

export default Footer
