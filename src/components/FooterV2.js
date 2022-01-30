import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import redirect from 'src/utils/redirect'
import { styled, useTheme } from '@mui/material/styles'
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

const DivBackgroundContainer = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  paddingBottom: 20,
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
}))

const LinkTiktok = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(1),
}))

const TypographySocial = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}))

const DivContentRow = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '80%',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  zIndex: '1',
}))

const DivColumnOne = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(6.5),
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  minWidth: theme.spacing(36),
  flex: 1,
}))

const DivColumnTwo = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(6.5),
  width: theme.spacing(38),
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  color: '#fff',
  flex: 2,
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
  },
}))

const DivColumnThree = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(6),
  minWidth: 120,
  display: 'flex',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    paddingBottom: theme.spacing(6),
    minWidth: 180,
  },
}))

const DivSubColumn = styled('div')(({ theme }) => ({
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  color: '#fff',
  width: 200,
}))

const DivSubColumnTwo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  width: 300,
}))

const DivIconRowOne = styled('div')(({ theme }) => ({
  display: 'flex',
  color: '#fff',
  marginLeft: theme.spacing(-2),
}))

const DivIconRowTwo = styled('div')(({ theme }) => ({
  display: 'flex',
  color: '#fff',
}))

function Footer({ onBeforeInstall, footerData: { img, bubbleColor } }) {
  const image = img ? getImage(formatImg(img)) : null
  const browserOnClick = useCallback(
    (extensionUrl) => async () => {
      await onBeforeInstall()
      redirect(extensionUrl)
    },
    [onBeforeInstall]
  )
  const theme = useTheme()
  const iconButtonStyles = {
    borderRadius: '10%',
  }
  const iconStyles = {
    color: theme.palette.primary.main,
    backgroundColor: '#fff',
    padding: theme.spacing(0.25),
    height: theme.spacing(4),
    width: theme.spacing(4),
    borderRadius: theme.spacing(0.5),
  }
  return (
    <DivBackgroundContainer>
      <Box
        sx={{
          position: 'absolute',
          width: 660,
          height: 560,
          left: {
            xs: -440,
            md: -100,
          },
          top: {
            xs: 0,
            md: 80,
          },
        }}
      >
        <FooterBlobLeft color={bubbleColor} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: 320,
          height: 570,
          right: {
            xs: 0,
            md: 200,
          },
          bottom: {
            xs: -440,
            md: -480,
          },
        }}
      >
        <FooterBlobRight color={bubbleColor} />
      </Box>
      <DivContentRow>
        <DivColumnOne>
          <Box sx={{ mb: 1 }}>
            <Link to="/">
              <img src={logo} style={{ height: 43 }} />
            </Link>
          </Box>
          <TypographySocial variant="subtitle2" color="textSecondary">
            Social
          </TypographySocial>
          <DivIconRowOne>
            <LinkTiktok to={tiktokPageURL} target="_blank">
              <IconButton style={iconButtonStyles} size="large">
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
            </LinkTiktok>
            <Link to={facebookPageURL} target="_blank">
              <IconButton edge="start" style={iconButtonStyles} size="large">
                <FacebookIcon style={iconStyles} />
              </IconButton>
            </Link>

            <Link to={instagramPageURL} target="_blank">
              <IconButton style={iconButtonStyles} size="large">
                <InstagramIcon style={iconStyles} />
              </IconButton>
            </Link>

            <Link to={twitterPageURL} target="_blank">
              <IconButton style={iconButtonStyles} size="large">
                <TwitterIcon style={iconStyles} />
              </IconButton>
            </Link>
          </DivIconRowOne>
          <Typography variant="subtitle2" color="textSecondary">
            Browser Compatibility
          </Typography>
          <DivIconRowTwo>
            <IconButton
              onClick={browserOnClick(chromeExtensionURL)}
              edge="start"
              style={iconButtonStyles}
              size="large"
            >
              <GoogleChrome style={iconStyles} />
            </IconButton>
            <IconButton
              onClick={browserOnClick(edgeExtensionURL)}
              style={iconButtonStyles}
              size="large"
            >
              <MicrosoftEdge style={iconStyles} />
            </IconButton>
            <IconButton
              onClick={browserOnClick(safariExtensionURL)}
              style={iconButtonStyles}
              size="large"
            >
              <AppleSafari style={iconStyles} />
            </IconButton>
          </DivIconRowTwo>
        </DivColumnOne>
        <DivColumnTwo>
          <DivSubColumn>
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
          </DivSubColumn>
          <DivSubColumnTwo>
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
          </DivSubColumnTwo>
        </DivColumnTwo>
        <DivColumnThree>
          {image ? (
            <Box>
              <GatsbyImage image={image} alt="footer" />
            </Box>
          ) : null}
        </DivColumnThree>
      </DivContentRow>
    </DivBackgroundContainer>
  )
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
