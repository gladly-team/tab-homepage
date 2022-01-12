import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
import redirect from 'src/utils/redirect'
import { makeStyles } from '@material-ui/core/styles'
import logo from 'src/img/logo-with-text-white.svg'
import GoogleChrome from 'mdi-material-ui/GoogleChrome'
import MicrosoftEdge from 'mdi-material-ui/MicrosoftEdge'
import AppleSafari from 'mdi-material-ui/AppleSafari'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
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

const useStyles = makeStyles((theme) => ({
  logoContainer: { flex: 1, display: 'flex', flexDirection: 'row' },
  backgroundContainer: {
    background: theme.palette.primary.main,
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  contentRow: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexFlow: 'row',
    '&::after': {
      content: '',
      flex: '0 1 30%',
    },
  },
  columnOne: {
    marginTop: theme.spacing(6.5),
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    minWidth: theme.spacing(36),
  },
  columnTwo: {
    marginTop: theme.spacing(6.5),
    width: theme.spacing(38),
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    color: '#fff',
  },
  columnThree: {
    marginTop: theme.spacing(8),
    display: 'flex',
    [theme.breakpoints.down(1080)]: {
      width: '100%',
      justifyContent: 'center',
    },
  },
  subColumn: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    width: theme.spacing(30),
  },
  subColumnTwo: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
  },
  iconRow: {
    display: 'flex',
    color: '#fff',
  },
  iconStyles: {
    color: theme.palette.primary.main,
    backgroundColor: '#fff',
    padding: theme.spacing(0.25),
    height: theme.spacing(4),
    width: theme.spacing(4),
    borderRadius: theme.spacing(0.5),
  },
  imgClassName: {
    height: 'auto !important',
  },
  iconButton: {
    borderRadius: '10%',
  },
}))
const Footer = ({ onBeforeInstall, footerData: { img } }) => {
  const image = getImage(formatImg(img))
  const cx = useStyles()
  const browserOnClick = useCallback(
    (extensionUrl) => async () => {
      await onBeforeInstall()
      redirect(extensionUrl)
    },
    [onBeforeInstall]
  )
  return (
    <div className={cx.backgroundContainer}>
      <div className={cx.contentRow}>
        <div className={cx.columnOne}>
          <Link to="/">
            <img src={logo} style={{ height: 43 }} />
          </Link>
          <Typography variant="subtitle2" color="textSecondary">
            Social
          </Typography>
          <div className={cx.iconRow}>
            <Link to={tiktokPageURL}>
              <IconButton classes={{ root: cx.iconButton }}>
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
            <Link to={facebookPageURL}>
              <IconButton edge="start" classes={{ root: cx.iconButton }}>
                <FacebookIcon classes={{ root: cx.iconStyles }} />
              </IconButton>
            </Link>

            <Link to={instagramPageURL}>
              <IconButton classes={{ root: cx.iconButton }}>
                <InstagramIcon classes={{ root: cx.iconStyles }} />
              </IconButton>
            </Link>

            <Link to={twitterPageURL}>
              <IconButton classes={{ root: cx.iconButton }}>
                <TwitterIcon classes={{ root: cx.iconStyles }} />
              </IconButton>
            </Link>
          </div>
          <Typography variant="subtitle2" color="textSecondary">
            Browser Compatibility
          </Typography>
          <div className={cx.iconRow}>
            <IconButton
              onClick={browserOnClick(chromeExtensionURL)}
              edge="start"
              classes={{ root: cx.iconButton }}
            >
              <GoogleChrome className={cx.iconStyles} />
            </IconButton>
            <IconButton
              onClick={browserOnClick(edgeExtensionURL)}
              classes={{ root: cx.iconButton }}
            >
              <MicrosoftEdge className={cx.iconStyles} />
            </IconButton>
            <IconButton
              onClick={browserOnClick(safariExtensionURL)}
              classes={{ root: cx.iconButton }}
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
                Terms & Conditions
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
    </div>
  )
}

Footer.propTypes = {
  onBeforeInstall: PropTypes.func.isRequired,
  footerData: PropTypes.shape({ img: PropTypes.any }),
}

Footer.defaultProps = {}

export default Footer
