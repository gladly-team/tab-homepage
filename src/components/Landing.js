import React from 'react'
import PropTypes from 'prop-types'
import { useTheme, styled } from '@mui/material/styles'
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

const DivLogoContainer = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
}))

const DivTitleSection = styled('div')(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',

  // for absolutely-positioned wave
  position: 'relative',

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
}))

const DivHalfScreenLeft = styled('div')(({ theme }) => ({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '10%',

  [theme.breakpoints.down('sm')]: {
    width: '47%',
    paddingLeft: '7%',
  },

  [theme.breakpoints.down('md')]: {
    width: '85%',
    marginTop: theme.spacing(4),
    paddingLeft: 0,
    marginBottom: theme.spacing(8),
  },
}))

const DivHalfScreenRight = styled('div')(({ theme }) => ({
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
}))

const TypographySubtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
}))

const DivWave = styled('div')(({ theme }) => ({
  position: 'absolute',

  // avoids a gap appearing on some resolutions
  bottom: -2,

  width: '100%',
  zIndex: -1,

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

const DivWaveMobile = styled('div')(({ theme }) => ({
  // avoids a gap appearing on some resolutions
  marginBottom: -2,

  display: 'none',
  position: 'static',
  width: '100%',
  zIndex: -1,

  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}))

const Landing = ({ landingData, causeId, moneyRaised }) => {
  const { title, subtitle, ctaImg } = landingData
  const theme = useTheme()
  const ctaImage = getImage(formatImg(ctaImg))
  return (
    <div>
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <DivLogoContainer>
            <div
              data-test-id="logo-container"
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Link to={homeURL} style={{ display: 'flex' }}>
                <img
                  data-test-id="tab-logo-with-text"
                  src={logoWhite}
                  style={{ height: 40 }}
                />
              </Link>
            </div>
          </DivLogoContainer>
          <MoneyRaisedDisplay
            color="#fff"
            textVariant="subtitle2"
            excludeText
            moneyRaised={moneyRaised}
          />
        </Toolbar>
      </AppBar>
      <DivTitleSection>
        <DivHalfScreenLeft data-test-id="title-wrapper">
          <Typography variant="h1" color="primary">
            {title}
          </Typography>
          <TypographySubtitle>{subtitle}</TypographySubtitle>
          <V4InstallButton causeId={causeId} fullWidth />
        </DivHalfScreenLeft>
        <DivHalfScreenRight>
          <GatsbyImage image={ctaImage} alt="" />
        </DivHalfScreenRight>
        <DivWave>
          <Wave color={theme.palette.primary.main} />
        </DivWave>
      </DivTitleSection>
      <DivWaveMobile>
        <Wave color={theme.palette.primary.main} />
      </DivWaveMobile>
    </div>
  )
}

Landing.propTypes = {
  causeId: PropTypes.string.isRequired,
  landingData: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    ctaImg: PropTypes.any,
  }),
  moneyRaised: PropTypes.number,
}

export default Landing
