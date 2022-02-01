import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import { formatImg } from 'src/utils/formatting'
import Slider from 'react-slick'
import PageContentBox from 'src/components/PageContentBox'

// Icons
import Star from '@mui/icons-material/Star'
import StarHalf from '@mui/icons-material/StarHalf'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import V4InstallButton from './V4InstallButton'

const DivWrapper = styled('div')(({ theme }) => ({
  margin: '0 auto',
  paddingTop: theme.spacing(15.5),
  width: '100%',
  background: '#FAFAFA',
  paddingBottom: theme.spacing(9),

  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}))

const DivRatingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  background: '#FBF3E9',
  padding: theme.spacing(1.5),
  width: 'fitContent',
  marginTop: theme.spacing(4),
}))

const DivStarsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(0.5),
}))

const TypographyRatingsText = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0.5),
}))

const DivTitleSectionWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '80%',
}))

const DivEndorserContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '90%',
  flexWrap: 'wrap',
  marginTop: theme.spacing(9),
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(7),
  },
}))

const DivEndorserTextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '70%',

  [theme.breakpoints.down('md')]: {
    width: '90%',
  },
}))

const GatsbyImageEndorserImage = styled(GatsbyImage)(({ theme }) => ({
  width: '240px',
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}))

const DivEndorsementsSlider = styled('div')(({ theme }) => ({
  width: '96%',
  maxWidth: '1400px',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(4),
  },
}))

const TypographyTextSpacing = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))

const DivEndorsementPaper = styled('div')(({ theme }) => ({
  // react slick applies inline styling to children, this makes it look better
  display: 'flex !important',

  justifyContent: 'center',
  padding: theme.spacing(1),
}))

const DivEndorsementPaperTitleContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 'fit-content',
}))

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: 456,
  height: 240,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(2),
  padddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  transition: 'transform .1s ease-in-out',

  [theme.breakpoints.down('md')]: {
    maxWidth: 340,
  },
}))

const TypographyPaperText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
}))

const DivArrowButton = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: '1%',

  [theme.breakpoints.down('md')]: {
    display: 'none',
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
  const endorserImage = getImage(formatImg(endorserImg))

  // Need react-slick to forward the ref:
  // https://github.com/akiran/react-slick/issues/1690
  // https://github.com/akiran/react-slick/issues/1821
  const sliderRef = useRef()

  return (
    <DivWrapper>
      <PageContentBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DivTitleSectionWrapper>
          <Typography variant="h2" color="primary">
            {title}
          </Typography>
          <DivRatingContainer>
            <DivStarsContainer>
              <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
              <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
              <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
              <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
              <StarHalf style={{ color: '#ffc533', width: 18, height: 18 }} />
            </DivStarsContainer>
            <TypographyRatingsText>
              215,000+ people are Tabbing on Chrome
            </TypographyRatingsText>
          </DivRatingContainer>
        </DivTitleSectionWrapper>
        {quote ? (
          <DivEndorserContainer>
            <GatsbyImageEndorserImage alt="" image={endorserImage} />
            <DivEndorserTextContainer>
              <TypographyTextSpacing variant="h3" color="primary">
                {headerQuote}
              </TypographyTextSpacing>
              <TypographyTextSpacing variant="subtitle1">
                {quote}
              </TypographyTextSpacing>
              <Typography variant="caption" color="primary">
                {endorser}
              </Typography>
              <Typography>{endorserTitle}</Typography>
            </DivEndorserTextContainer>
          </DivEndorserContainer>
        ) : null}
        <DivEndorsementsSlider>
          <Slider
            dots
            ref={sliderRef}
            focusOnSelect
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
              <DivEndorsementPaper key={endorsement.endorser}>
                <StyledPaper elevation={3}>
                  <DivEndorsementPaperTitleContainer>
                    <GatsbyImage
                      alt=""
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
                  </DivEndorsementPaperTitleContainer>
                  <TypographyPaperText>
                    {endorsement.endorsement}
                  </TypographyPaperText>
                </StyledPaper>
              </DivEndorsementPaper>
            ))}
          </Slider>
          <DivArrowButton>
            <IconButton
              onClick={() => sliderRef.current.slickNext()}
              size="large"
            >
              <Arrow />
            </IconButton>
          </DivArrowButton>
        </DivEndorsementsSlider>
        <V4InstallButton causeId={causeId} />
      </PageContentBox>
    </DivWrapper>
  )
}

Endorsements.propTypes = {
  causeId: PropTypes.string.isRequired,
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
