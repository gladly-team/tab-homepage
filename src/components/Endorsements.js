import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
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

const DivTitleSectionWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '80%',
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

const Endorsements = ({ endorsementsData, causeId, pageContext }) => {
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
    <Box
      sx={{
        margin: '0 auto',
        width: '100%',
        background: '#FAFAFA',
        pt: {
          lg: 16,
          md: 12,
          sm: 8,
          xs: 8,
        },
        pb: {
          lg: 16,
          md: 12,
          sm: 8,
          xs: 8,
        },
      }}
    >
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
            <Typography sx={{ margin: 1 }}>
              215,000+ people are Tabbing on Chrome
            </Typography>
          </DivRatingContainer>
        </DivTitleSectionWrapper>
        {quote ? (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              mt: {
                md: 6,
                xs: 4,
              },
              mb: {
                md: 0,
                xs: 2,
              },
              ml: {
                md: 4,
                xs: 0,
              },
              mr: {
                md: 4,
                xs: 0,
              },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '240px',
                height: '240px',
                ml: {
                  xl: 6,
                  lg: 6,
                  md: 4,
                  sm: 2,
                  xs: 1,
                },
                mr: {
                  xl: 6,
                  lg: 6,
                  md: 4,
                  sm: 2,
                  xs: 1,
                },
              }}
            >
              <GatsbyImage alt="" image={endorserImage} />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: '70%',
                maxWidth: {
                  md: '85%',
                  sm: '100%',
                },
                pl: {
                  md: 2,
                  sm: 6,
                  xs: 3,
                },
                pr: {
                  md: 2,
                  sm: 6,
                  xs: 3,
                },
                m: 0,
              }}
            >
              <Box>
                <TypographyTextSpacing variant="h3" color="primary">
                  {headerQuote}
                </TypographyTextSpacing>
              </Box>
              <Box
                sx={{
                  pr: { lg: 8, md: 2, xs: 1 },
                }}
              >
                <TypographyTextSpacing variant="subtitle1">
                  {quote}
                </TypographyTextSpacing>
                <Typography variant="caption" color="primary">
                  {endorser}
                </Typography>
                <Typography variant="body2">{endorserTitle}</Typography>
              </Box>
            </Box>
          </Box>
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
                <Box>
                  <Paper
                    elevation={3}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      maxWidth: {
                        lg: '456px',
                        md: '456px',
                        sm: '456px',
                        xs: '340px',
                      },
                      height: {
                        lg: '240px',
                        md: '240px',
                        sm: '260px',
                        xs: '260px',
                      },
                      pt: 2,
                      pb: 2,
                      pl: 2.5,
                      pr: 2.5,
                      transition: 'transform .1s ease-in-out',
                    }}
                  >
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
                  </Paper>
                </Box>
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
        <Box
          sx={{
            // TODO: reusable
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
            pl: {
              md: 0,
              xs: 3, // matches other buttons
            },
            pr: {
              md: 0,
              xs: 3,
            },
            width: {
              md: 'inherit',
              xs: '100%',
            },
          }}
        >
          <V4InstallButton
            causeId={causeId}
            fullWidth
            style={{ minWidth: 240 }}
            pageContext={pageContext}
          />
        </Box>
      </PageContentBox>
    </Box>
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
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}

export default Endorsements
