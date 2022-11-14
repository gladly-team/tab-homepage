import React from 'react'
import Divider from '@mui/material/Divider'
import PropTypes from 'prop-types'
import Facebook from 'mdi-material-ui/Facebook'
import Instagram from 'mdi-material-ui/Instagram'
import Twitter from 'mdi-material-ui/Twitter'
import Youtube from 'mdi-material-ui/Youtube'
import SvgIcon from '@mui/material/SvgIcon'
import logoGrey from 'src/img/logo-grey.svg'
import {
  lightestShadingColor,
  lighterTextColor,
  lightestTextColor,
} from 'src/themes/theme'
import {
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
  tiktokPageURL,
  twitterPageURL,
  youtubePageURL,
} from 'src/utils/navigation'
import Link from 'src/components/Link'
import IconWrapper from 'src/components/IconWrapper'

class Footer extends React.Component {
  render() {
    const { id, style } = this.props
    const footerLinkStyle = {
      color: lightestTextColor,
      fontSize: 12,
      margin: 20,
    }
    const hoverLinkStyle = {
      color: lighterTextColor,
    }
    const socialIconStyle = {
      color: lightestTextColor,
      width: 20,
      height: 20,
    }
    const socialIconHoverStyle = {
      color: lighterTextColor,
    }
    return (
      <div
        id={id}
        style={{
          background: lightestShadingColor,
          paddingTop: 1,
          paddingBottom: 20,
          paddingLeft: 40,
          paddingRight: 40,
          ...style,
        }}
      >
        <Divider style={{ width: '100%', marginBottom: 20 }} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'no-wrap',
          }}
        >
          <Link to="/" style={{ minWidth: 24 }}>
            <img src={logoGrey} style={{ height: 43 }} />
          </Link>
          <div
            style={{
              flex: 1,
              marginLeft: 30,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
              }}
            >
              <Link
                to={externalHelpURL}
                style={footerLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Help
              </Link>
              <Link
                to={adblockerWhitelistingURL}
                style={footerLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Adblockers
              </Link>
              <Link
                to={financialsURL}
                style={footerLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Financials
              </Link>
              <Link
                to={termsURL}
                style={footerLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Terms
              </Link>
              <Link
                to={privacyPolicyURL}
                style={footerLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Privacy
              </Link>
              <Link
                to={teamURL}
                style={footerLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Team
              </Link>
              <Link
                to={contactUsURL}
                style={footerLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Contact
              </Link>
              <Link
                to={jobsURL}
                style={footerLinkStyle}
                hoverStyle={hoverLinkStyle}
              >
                Jobs
              </Link>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: 4,
              }}
            >
              <Link to={tiktokPageURL} style={{ margin: 12 }}>
                <IconWrapper
                  style={socialIconStyle}
                  hoverStyle={socialIconHoverStyle}
                >
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
                </IconWrapper>
              </Link>

              <Link to={youtubePageURL} style={{ margin: 12 }}>
                <IconWrapper
                  style={socialIconStyle}
                  hoverStyle={socialIconHoverStyle}
                >
                  <Youtube />
                </IconWrapper>
              </Link>

              <Link to={instagramPageURL} style={{ margin: 12 }}>
                <IconWrapper
                  style={socialIconStyle}
                  hoverStyle={socialIconHoverStyle}
                >
                  <Instagram />
                </IconWrapper>
              </Link>

              <Link to={facebookPageURL} style={{ margin: 12 }}>
                <IconWrapper
                  style={socialIconStyle}
                  hoverStyle={socialIconHoverStyle}
                >
                  <Facebook />
                </IconWrapper>
              </Link>

              <Link to={twitterPageURL} style={{ margin: 12 }}>
                <IconWrapper
                  style={socialIconStyle}
                  hoverStyle={socialIconHoverStyle}
                >
                  <Twitter />
                </IconWrapper>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
}

Footer.defaultProps = {
  id: undefined,
  style: {},
}

export default Footer
