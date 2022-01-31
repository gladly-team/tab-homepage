import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Markdown from 'src/components/Markdown'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import heartSquiggle from 'src/img/causeshared/mission_squiggle.png'
import leftBubble from 'src/img/causeshared/blobLeft.svg'
import rightBubble from 'src/img/causeshared/blobRight.svg'
import V4InstallButton from 'src/components/V4InstallButton'

const DivWrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),

  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}))

const DivColumn = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '85%',
  height: '100%',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}))

const DivTextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  zIndex: 1,
}))

const GatsbyImageMissionImage = styled(GatsbyImage)(({ theme }) => ({
  maxHeight: '90%',
  maxWidth: '50%',
  flex: '1',
  margin: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    maxWidth: 'unset',
  },
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

const Mission = ({ missionData, causeId }) => {
  const { titleText, subtitleText, bodyText, image } = missionData
  const missionImage = getImage(formatImg(image))
  return (
    <DivWrapper>
      <ImgSquiggle src={heartSquiggle} />
      <ImgLeftBubble src={leftBubble} />
      <ImgRightBubble src={rightBubble} />
      <DivColumn>
        <DivTextContainer>
          <Typography variant="h1" color="primary">
            {titleText}
          </Typography>
          <TypographySubtitle variant="h5" color="primary">
            {subtitleText}
          </TypographySubtitle>
          <Markdown>{bodyText}</Markdown>
          <V4InstallButton causeId={causeId} fullWidth />
        </DivTextContainer>
        <GatsbyImageMissionImage
          image={missionImage}
          alt=""
          placeholder="none"
          backgroundColor="transparent"
        />
      </DivColumn>
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
}
export default Mission
