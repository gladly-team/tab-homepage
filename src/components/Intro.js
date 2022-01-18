import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Markdown from './Markdown'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import InstallButton from 'src/components/V4InstallButton'

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
    width: '80%',
  },
  titleMarkdown: {
    color: theme.palette.primary.main,
  },
  titleText: {
    flexDirection: 'column',
    color: theme.palette.primary.main,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  steps: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.spacing(6),
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2),
    },
    margin: theme.spacing(2),
  },
  titleImage: {
    maxWidth: '45%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  stepImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  numberCircle: {
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
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  stepText: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
    },
  },
  titleTypography: {
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(0),
    },
  },
}))

const Intro = ({ causeId, introData }) => {
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
  const cx = useStyles()
  const titleImage = getImage(formatImg(titleImg))
  const image1 = getImage(formatImg(img1))
  const image2 = getImage(formatImg(img2))
  const image3 = getImage(formatImg(img3))
  return (
    <div className={cx.wrapper}>
      <div className={cx.title}>
        <div className={cx.titleText}>
          <Typography
            className={cx.titleTypography}
            variant="h1"
            color="primary"
          >
            {title}
          </Typography>
          <Markdown>{subtitle}</Markdown>
        </div>
        <GatsbyImage
          className={cx.titleImage}
          image={titleImage}
          alt={'intro title'}
        />
      </div>
      <div className={cx.steps}>
        <div className={cx.step}>
          <div className={cx.stepText}>
            <Avatar className={cx.numberCircle}>1</Avatar>
            <Markdown>{img1Subtext}</Markdown>
          </div>
          <GatsbyImage
            className={cx.stepImage}
            image={image1}
            alt={'intro step 1'}
          />
        </div>
        <div className={cx.step}>
          <div className={cx.stepText}>
            <Avatar className={cx.numberCircle}>2</Avatar>
            <Markdown>{img2Subtext}</Markdown>
          </div>
          <GatsbyImage
            className={cx.stepImage}
            image={image2}
            alt={'intro step 2'}
          />
        </div>
        <div className={cx.step}>
          <div className={cx.stepText}>
            <Avatar className={cx.numberCircle}>3</Avatar>
            <Markdown>{img3Subtext}</Markdown>
          </div>
          <GatsbyImage
            className={cx.stepImage}
            image={image3}
            alt={'intro step 3'}
          />
        </div>
      </div>
      <InstallButton
        className={cx.buttonStyles}
        color="secondary"
        size="medium"
        causeId={causeId}
      />
    </div>
  )
}
Intro.propTypes = {
  causeId: PropTypes.string,
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
