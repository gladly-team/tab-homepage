import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import CharityIntroWave from 'src/components/CharityIntroWave'
import Typography from '@material-ui/core/Typography'
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
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  steps: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  step: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  stepText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
}))

const CharityIntro = ({ charityIntroData }) => {
  const cx = useStyles()
  const getStep = (step, index) => {
    const image = getImage(formatImg(step.img))
    return (
      <div className={cx.step} key={`step${index}`}>
        <GatsbyImage alt="charity intro step" image={image} />
        <Typography className={cx.stepText} variant="body1">
          {step.text}
        </Typography>
      </div>
    )
  }
  const { title, subTitle, steps, waveColor } = charityIntroData
  const stepComponents = steps.map((step, index) => getStep(step, index))
  return (
    <div className={cx.parent}>
      <CharityIntroWave color={waveColor} />
      <div className={cx.column}>
        <Typography className={cx.title} color="primary" variant="h1">
          {title}
        </Typography>
        <Typography className={cx.subtitle} variant="body2">
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
