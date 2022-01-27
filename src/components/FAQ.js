import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import Typography from '@mui/material/Typography'
import faqPattern from 'src/img/causeshared/faqTitlePattern.png'
import MuiAccordion, { accordionClasses } from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Markdown from 'src/components/Markdown'

const PREFIX = 'FAQ'

const classes = {
  parent: `${PREFIX}-parent`,
  row: `${PREFIX}-row`,
  faqSection: `${PREFIX}-faqSection`,
  titleImage: `${PREFIX}-titleImage`,
  titleAndPattern: `${PREFIX}-titleAndPattern`,
  faqPattern: `${PREFIX}-faqPattern`,
  copy: `${PREFIX}-copy`,
  expandIcon: `${PREFIX}-expandIcon`,
  MuiAccordionRoot: `${PREFIX}-MuiAccordionRoot`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.parent}`]: {
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
  },

  [`& .${classes.row}`]: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },

  [`& .${classes.faqSection}`]: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(0),
    },
  },

  [`& .${classes.titleImage}`]: {
    maxWidth: '35%',
    [theme.breakpoints.down('md')]: {
      maxWidth: 'unset',
    },
  },

  [`& .${classes.titleAndPattern}`]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  [`& .${classes.faqPattern}`]: {
    height: theme.spacing(12),
  },

  [`& .${classes.copy}`]: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },

  [`& .${classes.expandIcon}`]: {
    color: theme.palette.secondary.main,
  },

  [`& .${classes.MuiAccordionRoot}`]: {
    '&::before': {
      backgroundColor: 'transparent',
      top: '0px',
    },
    [`& .${accordionClasses.root}`]: {
      paddingTop: '0px',
    },
    borderBottom: '2px #F9EBDC solid',
  },
}))

function FAQ({ faqData }) {
  const { img, questions } = faqData

  const image = getImage(formatImg(img))
  const questionComponents = questions.map((question, index) => (
    <MuiAccordion
      square
      elevation={0}
      classes={{
        root: classes.MuiAccordionRoot,
        expanded: classes.MuiAccordionExpanded,
      }}
      key={question.question}
    >
      <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
      >
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
    <Root className={classes.parent}>
      <div className={classes.row}>
        <GatsbyImage
          alt="faq image"
          imgStyle={{
            objectFit: 'scale-down',
          }}
          className={classes.titleImage}
          image={image}
        />
        <div className={classes.faqSection}>
          <div className={classes.titleAndPattern}>
            <Typography variant="h1">FAQ</Typography>
            <img className={classes.faqPattern} src={faqPattern} />
          </div>
          <Typography className={classes.copy}>
            Check out some of our frequently asked questions. We think you’ll
            find what you’re looking for.
          </Typography>
          {questionComponents}
        </div>
      </div>
    </Root>
  )
}

FAQ.propTypes = {
  faqData: PropTypes.shape({
    img: PropTypes.any,
    questions: PropTypes.array,
  }),
}

export default FAQ
