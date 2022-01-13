import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatImg } from 'src/utils/formatting'
import Typography from '@material-ui/core/Typography'
import faqPattern from 'src/img/causeshared/faqTitlePattern.png'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Markdown from 'src/components/Markdown'

const useStyles = makeStyles((theme) => ({
  parent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    background: 'white',
    alignItems: 'center',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  row: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  faqSection: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(0),
    },
  },
  titleImage: {
    maxWidth: '35%',
    [theme.breakpoints.down('sm')]: {
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

const FAQ = ({ faqData }) => {
  const { img, questions } = faqData
  const cx = useStyles()
  const image = getImage(formatImg(img))
  const questionComponents = questions.map((question, index) => (
    <MuiAccordion
      square={true}
      elevation={0}
      classes={{
        root: cx.MuiAccordionRoot,
        expanded: cx.MuiAccordionExpanded,
      }}
      disableGutters
      key={index}
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
          <Typography className={cx.copy} variant="body2">
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
