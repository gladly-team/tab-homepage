import React from 'react'
import PropTypes from 'prop-types'
import { useTheme, styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PageContentBox from 'src/components/PageContentBox'
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

const DivWave = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  zIndex: -1,

  // avoids a gap appearing on some resolutions
  bottom: -2,
}))

const Landing = ({ landingData, causeId, moneyRaised, pageContext }) => {
  const { title, subtitle, ctaImg } = landingData
  const theme = useTheme()
  const ctaImage = getImage(formatImg(ctaImg))
  return (
    <div>
      <AppBar color="primary" position="sticky">
        <PageContentBox
          sx={{
            alignSelf: 'center',
          }}
        >
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
        </PageContentBox>
      </AppBar>
      <Box
        sx={{
          // for absolutely-positioned wave
          position: 'relative',
        }}
      >
        <PageContentBox
          sx={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            paddingTop: {
              md: 4,
              xs: 6,
            },
            paddingBottom: {
              md: 18,
              sm: 18,
              xs: 12,
            },

            flexDirection: {
              md: 'row',
              xs: 'column-reverse',
            },
          }}
        >
          {/* TODO: potentially create reusable for other sections */}
          <Box
            data-test-id="title-wrapper"
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: {
                md: 'center',
                xs: 'flex-start',
              },
              pl: {
                lg: 12,
                md: 8,
                sm: 6,
                xs: 3,
              },
              pr: {
                lg: 4,
                md: 1,
                xs: 3,
              },
              marginTop: {
                xs: 0,
              },
              marginBottom: {
                md: 0,
                xs: 8,
              },
              maxWidth: {
                md: 'unset',
                xs: 600,
              },
            }}
          >
            <Typography variant="h1" color="primary">
              {title}
            </Typography>
            <Box sx={{ mt: 2, mr: { lg: 14, md: 4, xs: 2 }, mb: 0, ml: 0 }}>
              <Typography>{subtitle}</Typography>
            </Box>
            <V4InstallButton causeId={causeId} pageContext={pageContext} />
          </Box>
          <Box
            sx={{
              marginLeft: 'auto',
              marginRight: 'flex-end',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pl: 0,
              pr: 0,
              mt: 0,
              mb: 2,
              maxWidth: {
                lg: 660,
                sm: 580,
                xs: 520,
              },
            }}
          >
            <GatsbyImage image={ctaImage} alt="" />
          </Box>
        </PageContentBox>
        <DivWave>
          <Wave color={theme.palette.primary.main} />
        </DivWave>
      </Box>
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
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}

export default Landing
