import React from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import InstallButton from 'src/components/V4InstallButton'
import Markdown from './Markdown'

const PREFIX = 'Intro';

const classes = {
  title: `${PREFIX}-title`,
  titleMarkdown: `${PREFIX}-titleMarkdown`,
  titleText: `${PREFIX}-titleText`,
  steps: `${PREFIX}-steps`,
  step: `${PREFIX}-step`,
  titleImage: `${PREFIX}-titleImage`,
  stepImage: `${PREFIX}-stepImage`,
  numberCircle: `${PREFIX}-numberCircle`,
  wrapper: `${PREFIX}-wrapper`,
  stepText: `${PREFIX}-stepText`,
  titleTypography: `${PREFIX}-titleTypography`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.title}`]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
    width: '80%',
  },

  [`& .${classes.titleMarkdown}`]: {
    color: theme.palette.primary.main,
  },

  [`& .${classes.titleText}`]: {
    flexDirection: 'column',
    color: theme.palette.primary.main,
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },

  [`& .${classes.steps}`]: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.spacing(6),
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
  },

  [`& .${classes.step}`]: {
    display: 'flex',
    flexDirection: 'column',
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
    margin: theme.spacing(3),
  },

  [`& .${classes.titleImage}`]: {
    maxWidth: '45%',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },

  [`& .${classes.stepImage}`]: {
    maxWidth: '100%',
    height: 'auto',
  },

  [`& .${classes.numberCircle}`]: {
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
  },

  [`& .${classes.wrapper}`]: {
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
  },

  [`& .${classes.stepText}`]: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      minHeight: 'unset',
      justifyContent: 'flex-start',
    },
  },

  [`& .${classes.titleTypography}`]: {
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(0),
    },
  }
}));

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
    <Root className={cx.wrapper}>
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
          alt="intro title"
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
            alt="intro step 1"
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
            alt="intro step 2"
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
            alt="intro step 3"
          />
        </div>
      </div>
      <InstallButton color="secondary" size="medium" causeId={causeId} />
    </Root>
  );
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
