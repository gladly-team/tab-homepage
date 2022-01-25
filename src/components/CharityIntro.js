import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import CharityIntroWave from 'src/components/CharityIntroWave'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'

const useStyles = makeStyles((theme) => ({
  parent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  column: {
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
  },
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '60%',
    },
  },
  steps: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  step: {
    flex: '1',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
  },
  stepText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  stepImage: {
    aspectRatio: 1.333,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const CharityIntro = ({ charityIntroData }) => {
  const cx = useStyles()
  const theme = useTheme()
  const getStep = (step, index) => {
    const image = getImage(formatImg(step.img))
    return (
      <div className={cx.step} key={`step${index}`}>
        <GatsbyImage
          className={cx.stepImage}
          imgStyle={{
            objectFit: 'scale-down',
          }}
          alt="charity intro step"
          image={image}
        />
        <Typography className={cx.stepText} variant="body1">
          {step.text}
        </Typography>
      </div>
    )
  }
  const { title, subTitle, steps } = charityIntroData
  const stepComponents = steps.map((step, index) => getStep(step, index))
  return (
    <div className={cx.parent}>
      <CharityIntroWave color={theme.palette.primary.main} />
      <div className={cx.column}>
        <Typography className={cx.title} color="primary" variant="h1">
          {title}
        </Typography>
        <Typography className={cx.subtitle} variant="body1">
          {subTitle}
        </Typography>
        <div className={cx.steps}>{stepComponents}</div>
      </div>
    </div>
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
