import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Link from 'src/components/Link'
import Button from '@mui/material/Button'
import PageContentBox from 'src/components/PageContentBox'
import { formatImg } from 'src/utils/formatting'
import FinancialsQuartersButton from 'src/components/FinancialsHomePageButton'
import { financialsURL } from 'src/utils/navigation'

const DivWrapper = styled('div')(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

const DivReportsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
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
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(2),
    paddingLeft: 0,
    margin: '0 auto',
    alignItems: 'center',
  },
}))

const DivHalfScreenLeft = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2),
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
  marginTop: theme.spacing(0),
  minWidth: 240, // matches other buttons. TODO: reusable

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))

const Financials = ({ financialsData }) => {
  const { title, text, buttonText, ctaImg, pdfs } = financialsData
  const Image = getImage(formatImg(ctaImg))
  return (
    <PageContentBox>
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
            <Box
              sx={{
                paddingLeft: {
                  lg: 12, // matches other sections
                  md: 8, // matches other sections
                  sm: 6, // matches other sections
                  xs: 3, // matches other sections
                },
                paddingRight: {
                  md: 12,
                  lg: 8, // matches other sections
                  sm: 6, // matches other sections
                  xs: 3,
                },
              }}
            >
              <Typography variant="h2" color="primary">
                {title}
              </Typography>
              <Box
                sx={{
                  // TODO: reusable for left-aligned sections
                  // Matches landing page
                  mr: { lg: 14, md: 4, xs: 2 },
                }}
              >
                <TypographySubtitle>{text}</TypographySubtitle>
              </Box>
            </Box>
          </DivHalfScreenRight>
        </DivTitleSectionWrapper>
        <DivReportsContainer>
          {pdfs.map((pdf) => (
            <Box sx={{ m: 1 }} key={pdf.quarter}>
              <FinancialsQuartersButton quarterData={pdf} />
            </Box>
          ))}
        </DivReportsContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 2,
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
          <Link to={financialsURL}>
            <ButtonButtonStyles
              variant="contained"
              color="secondary"
              size="large"
            >
              {buttonText}
            </ButtonButtonStyles>
          </Link>
        </Box>
      </DivWrapper>
    </PageContentBox>
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
