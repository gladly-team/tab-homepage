import React from 'react'
import PropTypes from 'prop-types'
import { useTheme, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CharityIntroWave from 'src/components/CharityIntroWave'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PageContentBox from 'src/components/PageContentBox'
import { formatImg } from 'src/utils/formatting'
import Markdown from './Markdown'

const GatsbyImageStepImage = styled(GatsbyImage)(({ theme }) => ({
  flex: 4,
  aspectRatio: 1.333,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxWidth: '400px',
  maxHeight: '240px',
  [theme.breakpoints.down('md')]: {
    maxHeight: 'unset',
    maxWidth: '400px',
  },
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          ml: {
            md: 2,
            sm: 4,
            xs: 4,
          },
          mr: {
            md: 2,
            sm: 4,
            xs: 4,
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
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Typography
            variant="caption"
            align="center"
            sx={{
              display: 'block',
              mt: { lg: 3, md: 3, sm: 2, xs: 2 },
            }}
          >
            {step.text}
          </Typography>
        </Box>
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
              lg: 14,
              md: 10,
              sm: 8,
              xs: 6,
            },
            pb: {
              lg: 14,
              md: 10,
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
              textAlign: 'center',
            }}
          >
            <Markdown>{subTitle}</Markdown>
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
