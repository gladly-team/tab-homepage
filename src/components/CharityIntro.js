import React from 'react'
import PropTypes from 'prop-types'
import { useTheme, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CharityIntroWave from 'src/components/CharityIntroWave'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PageContentBox from 'src/components/PageContentBox'
import { formatImg } from 'src/utils/formatting'

const TypographyStepText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
}))

const GatsbyImageStepImage = styled(GatsbyImage)(({ theme }) => ({
  maxWidth: 400,
  aspectRatio: 1.333,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

const CharityIntro = ({ charityIntroData }) => {
  const theme = useTheme()
  const getStep = (step, index) => {
    const image = getImage(formatImg(step.img))
    return (
      <Box
        key={`step${index}`}
        sx={{
          flex: '1',
          ml: {
            md: 2,
            sm: 4,
            xs: 0,
          },
          mr: {
            md: 2,
            sm: 4,
            xs: 0,
          },
          mt: {
            md: 2,
            sm: 4,
            xs: 3,
          },
          mb: {
            md: 2,
            sm: 4,
            xs: 3,
          },
        }}
      >
        <GatsbyImageStepImage
          imgStyle={{
            objectFit: 'scale-down',
          }}
          alt=""
          image={image}
        />
        <TypographyStepText variant="body1">{step.text}</TypographyStepText>
      </Box>
    )
  }
  const { title, subTitle, steps } = charityIntroData
  const stepComponents = steps.map((step, index) => getStep(step, index))

  // TODO: add background blobs
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      <CharityIntroWave color={theme.palette.primary.main} />
      <PageContentBox>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: {
              lg: 10,
              sm: 8,
              xs: 6,
            },
            pb: {
              lg: 10,
              sm: 8,
              xs: 6,
            },
            pl: {
              md: 3, // matches other sections
              sm: 6, // matches other sections
              xs: 3, // matches other sections
            },
            pr: {
              md: 3,
              sm: 6,
              xs: 3,
            },
          }}
        >
          {/* TODO: create reusable */}
          <Box
            sx={{
              pl: {
                md: 2,
                xs: 0,
              },
              pr: {
                md: 2,
                xs: 0,
              },
              pt: 1,
              pb: 1,
              maxWidth: {
                md: '90%',
                sm: '100%',
              },
            }}
          >
            <Typography color="primary" variant="h1" align="center">
              {title}
            </Typography>
          </Box>
          <Box
            // TODO: reusable for Security section
            sx={{
              pt: {
                md: 4,
                xs: 1,
              },
              pb: {
                md: 4,
                xs: 1,
              },
              pr: { lg: 8, md: 2, xs: 1 },
              pl: { lg: 8, md: 2, xs: 1 },
              maxWidth: {
                md: '70%',
                sm: '100%',
              },
            }}
          >
            <Typography variant="body1" align="center">
              {subTitle}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                md: 'row',
                xs: 'column',
              },
              pl: {
                md: 10,
                xs: 0,
              },
              pr: {
                md: 10,
                xs: 0,
              },
              pt: 2,
              pb: 2,
            }}
          >
            {stepComponents}
          </Box>
        </Box>
      </PageContentBox>
    </Box>
  )
}
CharityIntro.propTypes = {
  charityIntroData: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    steps: PropTypes.any,
    link: PropTypes.string,
    waveColor: PropTypes.string,
  }),
}
export default CharityIntro
