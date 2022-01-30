import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import V4InstallButton from 'src/components/V4InstallButton'
import Markdown from './Markdown'

const DivTitle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },

  width: '80%',
}))

const DivTitleText = styled('div')(({ theme }) => ({
  flexDirection: 'column',
  color: theme.palette.primary.main,
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const DivSteps = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  paddingTop: theme.spacing(6),
  padding: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}))

const DivStep = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  '& img': {
    maxWidth: '100%',
    height: 'auto',
  },

  margin: theme.spacing(3),
}))

const GatsbyImageTitleImage = styled(GatsbyImage)(({ theme }) => ({
  maxWidth: '45%',
  height: 'auto',

  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}))

const GatsbyImageStepImage = styled(GatsbyImage)(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
}))

const AvatarNumberCircle = styled(Avatar)(({ theme }) => ({
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  padding: '8px',
  background: theme.palette.primary.main,
  border: '2px solid',
  borderColor: theme.palette.primary.main,
  color: '#fff',
  textAlign: 'center',
  marginRight: theme.spacing(2),
  fontFamily: 'Poppins',
  alignSelf: 'start',
}))

const DivWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),

  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}))

const DivStepText = styled('div')(({ theme }) => ({
  display: 'flex',
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),

  [theme.breakpoints.down('md')]: {
    minHeight: 'unset',
    justifyContent: 'flex-start',
  },
}))

const TypographyTitleTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  marginRight: theme.spacing(3),

  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(0),
  },
}))

function Intro({ causeId, introData }) {
  const {
    title,
    titleImg,
    subtitle,
    img1Subtext,
    img1,
    img2Subtext,
    img2,
    img3Subtext,
    img3,
  } = introData
  const titleImage = getImage(formatImg(titleImg))
  const image1 = getImage(formatImg(img1))
  const image2 = getImage(formatImg(img2))
  const image3 = getImage(formatImg(img3))
  return (
    <DivWrapper>
      <DivTitle>
        <DivTitleText>
          <TypographyTitleTypography variant="h1" color="primary">
            {title}
          </TypographyTitleTypography>
          <Markdown>{subtitle}</Markdown>
        </DivTitleText>
        <GatsbyImageTitleImage image={titleImage} alt="intro title" />
      </DivTitle>
      <DivSteps>
        <DivStep>
          <DivStepText>
            <AvatarNumberCircle>1</AvatarNumberCircle>
            <Markdown>{img1Subtext}</Markdown>
          </DivStepText>
          <GatsbyImageStepImage image={image1} alt="intro step 1" />
        </DivStep>
        <DivStep>
          <DivStepText>
            <AvatarNumberCircle>2</AvatarNumberCircle>
            <Markdown>{img2Subtext}</Markdown>
          </DivStepText>
          <GatsbyImageStepImage image={image2} alt="intro step 2" />
        </DivStep>
        <DivStep>
          <DivStepText>
            <AvatarNumberCircle>3</AvatarNumberCircle>
            <Markdown>{img3Subtext}</Markdown>
          </DivStepText>
          <GatsbyImageStepImage image={image3} alt="intro step 3" />
        </DivStep>
      </DivSteps>
      <V4InstallButton color="secondary" size="medium" causeId={causeId} />
    </DivWrapper>
  )
}
Intro.propTypes = {
  causeId: PropTypes.string.isRequired,
  introData: PropTypes.shape({
    title: PropTypes.string,
    titleImg: PropTypes.any,
    subtitle: PropTypes.string,
    img1Subtext: PropTypes.string,
    img1: PropTypes.any,
    img2Subtext: PropTypes.string,
    img2: PropTypes.any,
    img3Subtext: PropTypes.string,
    img3: PropTypes.any,
  }),
}
export default Intro
