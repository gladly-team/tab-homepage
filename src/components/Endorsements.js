import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import { formatImg } from 'src/utils/formatting'
import Slider from 'react-slick'
// Icons
import Star from '@material-ui/icons/Star'
import StarHalf from '@material-ui/icons/StarHalf'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import V4InstallButton from './V4InstallButton'
const useStyles = makeStyles((theme) => ({
  logoContainer: { flex: 1, display: 'flex', flexDirection: 'row' },
  wrapper: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(15.5),
    width: '100%',
    alignItems: 'center',
    background: '#FAFAFA',
    paddingBottom: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  reportsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '86%',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('1150')]: {
      display: 'none',
    },
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    background: '#FBF3E9',
    padding: theme.spacing(1.5),
    width: 'fitContent',
    marginTop: theme.spacing(4),
  },
  starsContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(0.5),
  },
  ratingsText: {
    margin: theme.spacing(0.5),
  },
  reportsSlider: {
    display: 'none',
    justifyContent: 'space-between',
    width: '96%',
    maxWidth: '800px',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('1150')]: {
      display: 'flex',
    },
  },
  titleSectionWrapper: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '80%',
  },
  endorserContainer: {
    display: 'flex',
    width: '90%',
    flexWrap: 'wrap',
    marginTop: theme.spacing(9),
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(7),
    },
  },
  endorserTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  endorserImage: {
    width: '240px',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  endorsementsSlider: {
    width: '96%',
    maxWidth: '1400px',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
    },
  },
  textSpacing: {
    marginBottom: theme.spacing(2),
  },
  endorsementPaper: {
    // react slick applies inline styling to children, this makes it look better
    display: 'flex !important',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
  endorsementPaperTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 'fit-content',
  },
  Paper: {
    width: 456,
    height: 240,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
    padddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    transition: 'transform .1s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 340,
    },
  },
  paperText: {
    marginTop: theme.spacing(3),
  },
  installButton: {
    marginTop: theme.spacing(4),
  },
  arrowButton: {
    position: 'absolute',
    right: '1%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))
const Arrow = () => (
  <svg
    width="57"
    height="58"
    viewBox="0 0 57 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="28.4765" cy="29.0829" r="28.121" fill="#FBF3E9" />
    <path
      d="M23.8652 17.8593L34.3817 28.3758C34.7723 28.7664 34.7723 29.3995 34.3817 29.79L23.8652 40.3066"
      stroke="#29BEBA"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
)
const Endorsements = ({ endorsementsData, causeId }) => {
  const {
    title,
    endorser,
    endorserImg,
    endorserTitle,
    headerQuote,
    quote,
    smallEndorsements,
  } = endorsementsData
  const cx = useStyles()
  const endorserImage = getImage(formatImg(endorserImg))
  const sliderRef = useRef()
  return (
    <div className={cx.wrapper}>
      <div className={cx.titleSectionWrapper}>
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
        <div className={cx.ratingContainer}>
          <div className={cx.starsContainer}>
            <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
            <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
            <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
            <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
            <StarHalf style={{ color: '#ffc533', width: 18, height: 18 }} />
          </div>
          <Typography className={cx.ratingsText}>
            215,000+ people are Tabbing on Chrome
          </Typography>
        </div>
      </div>
      {quote ? (
        <div className={cx.endorserContainer}>
          <GatsbyImage
            alt="endorser image"
            image={endorserImage}
            className={cx.endorserImage}
          />
          <div className={cx.endorserTextContainer}>
            <Typography variant="h3" color="primary" className={cx.textSpacing}>
              {headerQuote}
            </Typography>
            <Typography variant="subtitle1" className={cx.textSpacing}>
              {quote}
            </Typography>
            <Typography variant="caption" color="primary">
              {endorser}
            </Typography>
            <Typography>{endorserTitle}</Typography>
          </div>
        </div>
      ) : null}
      <div className={cx.endorsementsSlider}>
        <Slider
          dots={true}
          ref={sliderRef}
          focusOnSelect={true}
          arrows={false}
          style={{ width: '100%' }}
          slidesToShow={3}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {smallEndorsements.map((endorsement) => (
            <div className={cx.endorsementPaper} key={endorsement.endorser}>
              <Paper className={cx.Paper} elevation={3}>
                <div className={cx.endorsementPaperTitleContainer}>
                  <GatsbyImage
                    alt="endorsement image"
                    image={getImage(formatImg(endorsement.img))}
                    style={{
                      height: '43px',
                      width: '43px',
                      marginRight: '16px',
                      borderRadius: '50%',
                    }}
                  />
                  <Typography variant="caption" color="primary">
                    {endorsement.endorser}
                  </Typography>
                </div>
                <Typography variant="body2" className={cx.paperText}>
                  {endorsement.endorsement}
                </Typography>
              </Paper>
            </div>
          ))}
        </Slider>
        <div className={cx.arrowButton}>
          <IconButton onClick={() => sliderRef.current.slickNext()}>
            <Arrow />
          </IconButton>
        </div>
      </div>
      <V4InstallButton causeId={causeId} buttonClassName={cx.installButton} />
    </div>
  )
}
Endorsements.propTypes = {
  causeId: PropTypes.string,
  endorsementsData: PropTypes.shape({
    title: PropTypes.string,
    endorser: PropTypes.string,
    endorserImg: PropTypes.any,
    endorserTitle: PropTypes.string,
    headerQuote: PropTypes.string,
    quote: PropTypes.string,
    smallEndorsements: PropTypes.any,
  }),
}
export default Endorsements
