import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import Typography from '@mui/material/Typography'
import faqPattern from 'src/img/causeshared/faqTitlePattern.png'
import MuiAccordion, { accordionClasses } from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Markdown from 'src/components/Markdown'

const ExpandMoreIconExpandIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))

const DivParent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
  background: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
}))

const DivRow = styled('div')(({ theme }) => ({
  width: '90%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}))

const DivFaqSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: theme.spacing(3),

  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(0),
  },
}))

const GatsbyImageTitleImage = styled(GatsbyImage)(({ theme }) => ({
  maxWidth: '35%',

  [theme.breakpoints.down('md')]: {
    maxWidth: 'unset',
  },
}))

const DivTitleAndPattern = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}))

const ImgFaqPattern = styled('img')(({ theme }) => ({
  height: theme.spacing(12),
}))

const TypographyCopy = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}))

function FAQ({ faqData }) {
  const { img, questions } = faqData
  const image = getImage(formatImg(img))
  const questionComponents = questions.map((question, index) => (
    <MuiAccordion
      square
      elevation={0}
      key={question.question}
      sx={{
        '&::before': {
          backgroundColor: 'transparent',
          top: '0px',
        },
        [`& .${accordionClasses.root}`]: {
          paddingTop: '0px',
        },
        borderBottom: '2px #F9EBDC solid',
      }}
    >
      <MuiAccordionSummary expandIcon={<ExpandMoreIconExpandIcon />}>
        <Typography variant="caption" color="primary">
          {question.question}
        </Typography>
      </MuiAccordionSummary>
      <MuiAccordionDetails>
        <Markdown>{question.answer}</Markdown>
      </MuiAccordionDetails>
    </MuiAccordion>
  ))
  return (
    <DivParent>
      <DivRow>
        <GatsbyImageTitleImage
          alt="faq image"
          imgStyle={{
            objectFit: 'scale-down',
          }}
          image={image}
        />
        <DivFaqSection>
          <DivTitleAndPattern>
            <Typography variant="h1">FAQ</Typography>
            <ImgFaqPattern src={faqPattern} />
          </DivTitleAndPattern>
          <TypographyCopy>
            Check out some of our frequently asked questions. We think you’ll
            find what you’re looking for.
          </TypographyCopy>
          {questionComponents}
        </DivFaqSection>
      </DivRow>
    </DivParent>
  )
}

FAQ.propTypes = {
  faqData: PropTypes.shape({
    img: PropTypes.any,
    questions: PropTypes.array,
  }),
}

export default FAQ
