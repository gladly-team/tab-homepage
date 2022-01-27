import React from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Markdown from 'src/components/Markdown'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import heartSquiggle from 'src/img/causeshared/mission_squiggle.png'
import leftBubble from 'src/img/causeshared/blobLeft.svg'
import rightBubble from 'src/img/causeshared/blobRight.svg'
import V4InstallButton from 'src/components/V4InstallButton'

const PREFIX = 'Mission';

const classes = {
  wrapper: `${PREFIX}-wrapper`,
  column: `${PREFIX}-column`,
  textContainer: `${PREFIX}-textContainer`,
  installButton: `${PREFIX}-installButton`,
  missionImage: `${PREFIX}-missionImage`,
  titleText: `${PREFIX}-titleText`,
  missionLink: `${PREFIX}-missionLink`,
  subtitle: `${PREFIX}-subtitle`,
  squiggle: `${PREFIX}-squiggle`,
  leftBubble: `${PREFIX}-leftBubble`,
  rightBubble: `${PREFIX}-rightBubble`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.wrapper}`]: {
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
  },

  [`& .${classes.column}`]: {
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
  },

  [`& .${classes.textContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    zIndex: 1,
  },

  [`& .${classes.installButton}`]: {
    marginTop: theme.spacing(4),
  },

  [`& .${classes.missionImage}`]: {
    maxHeight: '90%',
    maxWidth: '50%',
    flex: '1',
    margin: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      maxWidth: 'unset',
    },
  },

  [`& .${classes.titleText}`]: {},

  [`& .${classes.missionLink}`]: {
    marginTop: theme.spacing(4),
  },

  [`& .${classes.subtitle}`]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontWeight: 900,
    fontFamily: 'Poppins',
  },

  [`& .${classes.squiggle}`]: {
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
  },

  [`& .${classes.leftBubble}`]: {
    position: 'absolute',
    width: theme.spacing(50),
    left: theme.spacing(10),
    top: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    color: '#FAFAFA',
  },

  [`& .${classes.rightBubble}`]: {
    position: 'absolute',
    width: theme.spacing(40),
    right: theme.spacing(10),
    bottom: theme.spacing(-5),
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      right: theme.spacing(-5),
      bottom: theme.spacing(-10),
    },
  }
}));

function Mission({ missionData, causeId }) {
  const { titleText, subtitleText, bodyText, image } = missionData

  const missionImage = getImage(formatImg(image))
  return (
    <Root className={cx.wrapper}>
      <img className={cx.squiggle} src={heartSquiggle} />
      <img className={cx.leftBubble} src={leftBubble} />
      <img className={cx.rightBubble} src={rightBubble} />
      <div className={cx.column}>
        <div className={cx.textContainer}>
          <Typography variant="h1" color="primary">
            {titleText}
          </Typography>
          <Typography className={cx.subtitle} variant="h5" color="primary">
            {subtitleText}
          </Typography>
          <Markdown>{bodyText}</Markdown>
          <V4InstallButton
            causeId={causeId}
            buttonClassName={cx.installButton}
            fullWidth
          />
        </div>
        <GatsbyImage
          image={missionImage}
          className={cx.missionImage}
          alt=""
          placeholder="none"
          backgroundColor="transparent"
        />
      </div>
    </Root>
  );
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
