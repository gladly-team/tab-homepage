import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Link from 'src/components/Link'
import Button from '@material-ui/core/Button'
import { formatImg } from 'src/utils/formatting'
import FinancialsQuartersButton from 'src/components/FinancialsHomePageButton'
import { financialsURL } from 'src/utils/navigation'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const useStyles = makeStyles((theme) => ({
  logoContainer: { flex: 1, display: 'flex', flexDirection: 'row' },
  wrapper: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
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
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 'auto',
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
  halfScreenRight: {
    width: '40%',
    display: 'flex',
    marginLeft: '5%',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginTop: theme.spacing(4),
      paddingLeft: 0,
      margin: '0 auto',
      alignItems: 'center',
    },
  },
  halfScreenLeft: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '5%',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      width: '90%',
      maxWidth: '600px',
      left: 'auto',
      margin: '0 auto',
    },
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  buttonStyles: {
    width: theme.spacing(30),
    marginTop: theme.spacing(6),
  },
}))

const Financials = ({ financialsData }) => {
  const { title, text, buttonText, ctaImg, pdfs } = financialsData
  const cx = useStyles()
  const Image = getImage(formatImg(ctaImg))
  return (
    <div className={cx.wrapper}>
      <div className={cx.titleSectionWrapper}>
        <div className={cx.halfScreenLeft}>
          <GatsbyImage
            image={Image}
            alt=""
            placeholder="none"
            backgroundColor="transparent"
          />
        </div>
        <div className={cx.halfScreenRight}>
          <Typography variant="h2" color="primary">
            {title}
          </Typography>
          <Typography className={cx.subtitle}>{text}</Typography>
        </div>
      </div>
      <div className={cx.reportsContainer}>
        {pdfs.map((pdf) => (
          <FinancialsQuartersButton key={pdf.quarter} quarterData={pdf} />
        ))}
      </div>
      <div className={cx.reportsSlider}>
        <Slider
          centerMode={true}
          dots={true}
          focusOnSelect={true}
          arrows={false}
          slidesToShow={2}
          style={{ width: '100%' }}
          responsive={[
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {pdfs.map((pdf) => (
            <FinancialsQuartersButton key={pdf.quarter} quarterData={pdf} />
          ))}
        </Slider>
      </div>
      <Link to={financialsURL}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={cx.buttonStyles}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  )
}
Financials.propTypes = {
  financialsData: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    ctaImg: PropTypes.any,
    pdfs: PropTypes.any,
  }),
}
export default Financials
