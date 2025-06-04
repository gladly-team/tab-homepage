import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Markdown from 'src/components/Markdown'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import PageContentBox from 'src/components/PageContentBox'
import heartSquiggle from 'src/img/causeshared/mission_squiggle.png'
import leftBubble from 'src/img/causeshared/blobLeft.svg'
import rightBubble from 'src/img/causeshared/blobRight.svg'
import V4InstallButton from 'src/components/V4InstallButton'

const DivWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',
  paddingTop: theme.spacing(12), // smaller b/c of img
  paddingBottom: theme.spacing(14),
  [theme.breakpoints.down('lg')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(12),
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(10),
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
}))

// const DivColumn = styled('div')(({ theme }) => ({
//   position: 'relative',
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100%',
//   paddingLeft: theme.spacing(3), // matches other sections
//   paddingRight: theme.spacing(3),
//
//   [theme.breakpoints.down('md')]: {
//     flexDirection: 'column-reverse',
//     paddingLeft: theme.spacing(6), // matches other sections
//     paddingRight: theme.spacing(6),
//   },
//   [theme.breakpoints.down('sm')]: {
//     flexDirection: 'column-reverse',
//     paddingLeft: theme.spacing(3), // matches other sections
//     paddingRight: theme.spacing(3),
//   },
// }))

const DivTextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  marginRight: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(0),
  },
  color: theme.palette.primary.main,
  zIndex: 1,
}))

const TypographySubtitle = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  fontWeight: 900,
  fontFamily: 'Poppins',
}))

const ImgSquiggle = styled('img')(({ theme }) => ({
  position: 'absolute',
  zIndex: '1',
  left: theme.spacing(-2),
  top: theme.spacing(4),
  width: theme.spacing(8),

  [theme.breakpoints.down('md')]: {
    left: 'unset',
    right: theme.spacing(2),
    top: theme.spacing(46),
    width: theme.spacing(12),
  },
}))

const ImgLeftBubble = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: theme.spacing(50),
  left: theme.spacing(10),
  top: theme.spacing(10),

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },

  color: '#FAFAFA',
}))

const ImgRightBubble = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: theme.spacing(40),
  right: theme.spacing(10),
  bottom: theme.spacing(-5),
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    right: theme.spacing(-5),
    bottom: theme.spacing(-10),
  },
}))

const Mission = ({ missionData, causeId, pageContext }) => {
  const { titleText, subtitleText, bodyText, image } = missionData
  const missionImage = getImage(formatImg(image))
  return (
    <DivWrapper>
      <ImgSquiggle src={heartSquiggle} />
      <ImgLeftBubble src={leftBubble} />
      <ImgRightBubble src={rightBubble} />
      <PageContentBox
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          flexDirection: {
            md: 'row',
            xs: 'column-reverse',
          },
          paddingLeft: {
            lg: 12, // matches other sections
            md: 8, // matches other sections
            sm: 6, // matches other sections
            xs: 3, // matches other sections
          },
          paddingRight: {
            lg: 12,
            md: 8, // matches other sections
            sm: 6, // matches other sections
            xs: 3,
          },
          paddingTop: {
            lg: 10,
            md: 6,
            xs: 0,
          },
          paddingBottom: {
            lg: 10,
            md: 6,
            xs: 0,
          },
        }}
      >
        <DivTextContainer>
          <Typography variant="h1" color="primary">
            {titleText}
          </Typography>

          <TypographySubtitle variant="h5" color="primary">
            {subtitleText}
          </TypographySubtitle>
          <Box
            sx={{
              // TODO: reusable for left-aligned sections
              // Matches landing page
              mr: { lg: 14, md: 4, xs: 2 },
            }}
          >
            <Markdown>{bodyText}</Markdown>
          </Box>
          <Box
            sx={{
              // TODO: reusable
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              mt: 4,
            }}
          >
            <V4InstallButton
              causeId={causeId}
              fullWidth
              style={{ minWidth: 240 }}
              pageContext={pageContext}
            />
          </Box>
        </DivTextContainer>
        <Box
          sx={{
            maxWidth: {
              lg: '500px',
              xs: '350px', // TODO: make reusable
            },
            flex: '1',
            m: 2,
          }}
        >
          <GatsbyImage
            image={missionImage}
            alt=""
            placeholder="none"
            backgroundColor="transparent"
          />
        </Box>
      </PageContentBox>
    </DivWrapper>
  )
}
Mission.propTypes = {
  missionData: PropTypes.shape({
    titleText: PropTypes.string,
    subtitleText: PropTypes.string,
    bodyText: PropTypes.string,
    image: PropTypes.any,
  }),
  causeId: PropTypes.string,
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}
export default Mission
