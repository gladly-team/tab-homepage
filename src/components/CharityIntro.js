import React from 'react'
import PropTypes from 'prop-types'
import { useTheme, styled } from '@mui/material/styles'
import CharityIntroWave from 'src/components/CharityIntroWave'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'

const DivParent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  backgroundColor: 'white',
}))

const DivColumn = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),

  [theme.breakpoints.down('md')]: {
    width: '90%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

const TypographyTitle = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  textAlign: 'center',
}))

const TypographySubtitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),

  [theme.breakpoints.up('sm')]: {
    maxWidth: '60%',
  },
}))

const DivSteps = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}))

const DivStep = styled('div')(({ theme }) => ({
  flex: '1',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(2),
  },
}))

const TypographyStepText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
}))

const GatsbyImageStepImage = styled(GatsbyImage)(({ theme }) => ({
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
      <DivStep key={`step${index}`}>
        <GatsbyImageStepImage
          imgStyle={{
            objectFit: 'scale-down',
          }}
          alt="charity intro step"
          image={image}
        />
        <TypographyStepText variant="body1">{step.text}</TypographyStepText>
      </DivStep>
    )
  }
  const { title, subTitle, steps } = charityIntroData
  const stepComponents = steps.map((step, index) => getStep(step, index))
  return (
    <DivParent>
      <CharityIntroWave color={theme.palette.primary.main} />
      <DivColumn>
        <TypographyTitle color="primary" variant="h1">
          {title}
        </TypographyTitle>
        <TypographySubtitle variant="body1">{subTitle}</TypographySubtitle>
        <DivSteps>{stepComponents}</DivSteps>
      </DivColumn>
    </DivParent>
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
