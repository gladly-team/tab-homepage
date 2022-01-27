import React from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Link from 'src/components/Link'
import Button from '@mui/material/Button'
import { formatImg } from 'src/utils/formatting'
import FinancialsQuartersButton from 'src/components/FinancialsHomePageButton'
import { financialsURL } from 'src/utils/navigation'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PREFIX = 'Financials';

const classes = {
  logoContainer: `${PREFIX}-logoContainer`,
  wrapper: `${PREFIX}-wrapper`,
  reportsContainer: `${PREFIX}-reportsContainer`,
  reportsSlider: `${PREFIX}-reportsSlider`,
  titleSectionWrapper: `${PREFIX}-titleSectionWrapper`,
  title: `${PREFIX}-title`,
  halfScreenRight: `${PREFIX}-halfScreenRight`,
  halfScreenLeft: `${PREFIX}-halfScreenLeft`,
  subtitle: `${PREFIX}-subtitle`,
  buttonStyles: `${PREFIX}-buttonStyles`,
  linkStyles: `${PREFIX}-linkStyles`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.logoContainer}`]: { flex: 1, display: 'flex', flexDirection: 'row' },

  [`& .${classes.wrapper}`]: {
    margin: '0 auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },

  [`& .${classes.reportsContainer}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '86%',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down(undefined)]: {
      display: 'none',
    },
  },

  [`& .${classes.reportsSlider}`]: {
    display: 'none',
    justifyContent: 'space-between',
    width: '96%',
    maxWidth: '800px',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down(undefined)]: {
      display: 'flex',
    },
  },

  [`& .${classes.titleSectionWrapper}`]: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: 'auto',
    },
  },

  [`& .${classes.title}`]: {
    color: theme.palette.primary.main,
  },

  [`& .${classes.halfScreenRight}`]: {
    width: '40%',
    display: 'flex',
    marginLeft: '5%',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      marginTop: theme.spacing(4),
      paddingLeft: 0,
      margin: '0 auto',
      alignItems: 'center',
    },
  },

  [`& .${classes.halfScreenLeft}`]: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '5%',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      width: '90%',
      maxWidth: '600px',
      left: 'auto',
      margin: '0 auto',
    },
  },

  [`& .${classes.subtitle}`]: {
    marginTop: theme.spacing(2),
  },

  [`& .${classes.buttonStyles}`]: {
    width: theme.spacing(30),
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },

  [`& .${classes.linkStyles}`]: {
    [theme.breakpoints.down('md')]: {
      width: '85%',
    },
  }
}));

function Financials({ financialsData }) {
  const { title, text, buttonText, ctaImg, pdfs } = financialsData

  const Image = getImage(formatImg(ctaImg))
  return (
    <Root className={cx.wrapper}>
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
          centerMode
          dots
          focusOnSelect
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
      <Link className={cx.linkStyles} to={financialsURL}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={cx.buttonStyles}
        >
          {buttonText}
        </Button>
      </Link>
    </Root>
  );
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
