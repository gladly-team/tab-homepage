import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import Typography from '@mui/material/Typography'
import faqPattern from 'src/img/causeshared/faqTitlePattern.png'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Markdown from 'src/components/Markdown'

const useStyles = makeStyles((theme) => ({
  parent: {
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
  row: {
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
  faqSection: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(0),
    },
  },
  titleImage: {
    maxWidth: '35%',
    [theme.breakpoints.down('md')]: {
      maxWidth: 'unset',
    },
  },
  titleAndPattern: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  faqPattern: {
    height: theme.spacing(12),
  },
  copy: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  expandIcon: {
    color: theme.palette.secondary.main,
  },
  MuiAccordionRoot: {
    '&::before': {
      backgroundColor: 'transparent',
      top: '0px',
    },
    '& .Mui-expanded': {
      marginTop: '0px',
    },
    '& .MuiAccordionDetails-root': {
      paddingTop: '0px',
    },
    borderBottom: '2px #F9EBDC solid',
  },
}))

function FAQ({ faqData }) {
  const { img, questions } = faqData
  const cx = useStyles()
  const image = getImage(formatImg(img))
  const questionComponents = questions.map((question, index) => (
    <MuiAccordion
      square
      elevation={0}
      classes={{
        root: cx.MuiAccordionRoot,
        expanded: cx.MuiAccordionExpanded,
      }}
      key={question}
    >
      <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon className={cx.expandIcon} />}
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
    <div className={cx.parent}>
      <div className={cx.row}>
        <GatsbyImage
          alt="faq image"
          imgStyle={{
            objectFit: 'scale-down',
          }}
          className={cx.titleImage}
          image={image}
        />
        <div className={cx.faqSection}>
          <div className={cx.titleAndPattern}>
            <Typography variant="h1">FAQ</Typography>
            <img className={cx.faqPattern} src={faqPattern} />
          </div>
          <Typography className={cx.copy}>
            Check out some of our frequently asked questions. We think you’ll
            find what you’re looking for.
          </Typography>
          {questionComponents}
        </div>
      </div>
    </div>
  )
}

FAQ.propTypes = {
  faqData: PropTypes.shape({
    img: PropTypes.any,
    questions: PropTypes.array,
  }),
}

export default FAQ
