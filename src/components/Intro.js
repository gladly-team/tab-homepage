import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Markdown from './Markdown'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import InstallButton from 'src/components/InstallButton'
import localStorageMgr from 'src/utils/local-storage'
import {
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_NEW_USER_CAUSE_ID,
} from 'src/utils/constants'

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
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  steps: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: theme.spacing(3),
    },
    padding: theme.spacing(2),
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(5),
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
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    minHeight: '100vh',
  },
  stepText: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    minHeight: theme.spacing(14),
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
    },
  },
  titleTypography: {
    marginBottom: theme.spacing(4),
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
        onBeforeInstall={() => {
          localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
          localStorageMgr.setItem(STORAGE_NEW_USER_CAUSE_ID, causeId)
        }}
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