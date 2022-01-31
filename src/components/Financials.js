import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Link from 'src/components/Link'
import Button from '@mui/material/Button'
import { formatImg } from 'src/utils/formatting'
import FinancialsQuartersButton from 'src/components/FinancialsHomePageButton'
import { financialsURL } from 'src/utils/navigation'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const DivWrapper = styled('div')(({ theme }) => ({
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
}))

const DivReportsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '86%',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}))

const DivReportsSlider = styled('div')(({ theme }) => ({
  display: 'none',
  justifyContent: 'space-between',
  width: '96%',
  maxWidth: '800px',
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },
}))

const DivTitleSectionWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    height: 'auto',
  },
}))

const DivHalfScreenRight = styled('div')(({ theme }) => ({
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
}))

const DivHalfScreenLeft = styled('div')(({ theme }) => ({
  width: '45%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '5%',
  padding: theme.spacing(1),

  [theme.breakpoints.down('md')]: {
    position: 'relative',
    width: '90%',
    maxWidth: '600px',
    left: 'auto',
    margin: '0 auto',
  },
}))

const TypographySubtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
}))

const ButtonButtonStyles = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(6),

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))

const LinkLinkStyles = styled(Link)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '85%',
  },
}))

const Financials = ({ financialsData }) => {
  const { title, text, buttonText, ctaImg, pdfs } = financialsData
  const Image = getImage(formatImg(ctaImg))
  return (
    <DivWrapper>
      <DivTitleSectionWrapper>
        <DivHalfScreenLeft>
          <GatsbyImage
            image={Image}
            alt=""
            placeholder="none"
            backgroundColor="transparent"
          />
        </DivHalfScreenLeft>
        <DivHalfScreenRight>
          <Typography variant="h2" color="primary">
            {title}
          </Typography>
          <TypographySubtitle>{text}</TypographySubtitle>
        </DivHalfScreenRight>
      </DivTitleSectionWrapper>
      <DivReportsContainer>
        {pdfs.map((pdf) => (
          <Box sx={{ m: 1 }} key={pdf.quarter}>
            <FinancialsQuartersButton quarterData={pdf} />
          </Box>
        ))}
      </DivReportsContainer>
      <DivReportsSlider>
        <Slider
          centerMode
          dots
          focusOnSelect
          arrows={false}
          slidesToShow={2}
          style={{ width: '100%' }}
          responsive={[
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {pdfs.map((pdf) => (
            <Box sx={{ m: 1 }} key={pdf.quarter}>
              <FinancialsQuartersButton quarterData={pdf} />
            </Box>
          ))}
        </Slider>
      </DivReportsSlider>
      <LinkLinkStyles to={financialsURL}>
        <ButtonButtonStyles variant="contained" color="secondary" size="large">
          {buttonText}
        </ButtonButtonStyles>
      </LinkLinkStyles>
    </DivWrapper>
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
