import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from 'src/components/Link'
import Markdown from 'src/components/Markdown'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import heartSquiggle from 'src/img/causeshared/mission_squiggle.png'
import leftBubble from 'src/img/causeshared/blobLeft.svg'
import rightBubble from 'src/img/causeshared/blobRight.svg'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  column: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    margin: theme.spacing(2),
    color: theme.palette.primary.main,
    zIndex: 1,
  },
  missionImage: {
    maxHeight: '90%',
    maxWidth: '50%',
    flex: '1',
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
    },
  },
  titleText: {},
  missionLink: {
    marginTop: theme.spacing(4),
  },
  subtitle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontWeight: 900,
    fontFamily: 'Poppins',
  },
  squiggle: {
    position: 'absolute',
    zIndex: '1',
    left: theme.spacing(-2),
    top: theme.spacing(4),
    width: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      left: 'unset',
      right: theme.spacing(2),
      top: theme.spacing(46),
      width: theme.spacing(12),
    },
  },
  leftBubble: {
    position: 'absolute',
    width: theme.spacing(50),
    left: theme.spacing(10),
    top: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    color: '#FAFAFA',
  },
  rightBubble: {
    position: 'absolute',
    width: theme.spacing(40),
    right: theme.spacing(10),
    bottom: theme.spacing(-5),
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      right: theme.spacing(-5),
      bottom: theme.spacing(-10),
    },
  },
}))

const Mission = ({ missionData }) => {
  const { missionURL, titleText, subtitleText, bodyText, image } = missionData
  const cx = useStyles()
  const missionImage = getImage(image)
  return (
    <div className={cx.wrapper}>
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
          <Link to={missionURL}>
            <Button
              className={cx.missionLink}
              variant={'contained'}
              color={'secondary'}
            >
              Read our Story
            </Button>
          </Link>
        </div>
        <GatsbyImage
          image={missionImage}
          className={cx.missionImage}
          alt=""
          placeholder="none"
          backgroundColor="transparent"
        />
      </div>
    </div>
  )
}
Mission.propTypes = {
  missionData: PropTypes.shape({
    missionURL: PropTypes.string,
    titleText: PropTypes.string,
    subtitleText: PropTypes.string,
    bodyText: PropTypes.string,
    image: PropTypes.any,
  }),
}
export default Mission