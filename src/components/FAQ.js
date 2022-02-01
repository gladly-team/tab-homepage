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
import Box from '@mui/material/Box'
import Markdown from 'src/components/Markdown'
import PageContentBox from 'src/components/PageContentBox'

const ExpandMoreIconExpandIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))

const ImgFaqPattern = styled('img')(({ theme }) => ({
  height: theme.spacing(12),
}))

const FAQ = ({ faqData }) => {
  const { img, questions } = faqData
  const image = getImage(formatImg(img))
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'white',
      }}
    >
      <PageContentBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: {
            md: 2,
            xs: 0,
          },
          pb: {
            md: 2,
            xs: 0,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: {
              md: 'row',
              xs: 'column',
            },
            alignItems: 'flex-start',
            mt: 8,
            mb: 8,
          }}
        >
          <Box
            sx={{
              alignSelf: 'center',
              maxWidth: 550,
              margin: '0 auto',
              ml: 2,
              mr: 2,
            }}
          >
            <GatsbyImage
              alt=""
              imgStyle={{
                objectFit: 'scale-down',
              }}
              image={image}
            />
          </Box>
          <Box
            sx={{
              maxWidth: '100%',
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: {
                md: 3,
                xs: 0,
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                overflow: 'hidden',
                maxWidth: '100%',
                ml: {
                  sm: 3,
                  xs: 2,
                },
                mr: {
                  sm: 3,
                  xs: 0,
                },
              }}
            >
              <Typography variant="h1">FAQ</Typography>
              <ImgFaqPattern src={faqPattern} />
            </Box>
            <Box
              sx={{
                ml: {
                  sm: 3,
                  xs: 2,
                },
                mr: {
                  sm: 3,
                  xs: 2,
                },
                mb: 2,
                mt: 2,
              }}
            >
              <Typography>
                Check out some of our frequently asked questions. We think
                you’ll find what you’re looking for.
              </Typography>
            </Box>
            <Box
              sx={{
                mr: {
                  md: 6,
                  sm: 3,
                  xs: 0,
                },
                ml: {
                  md: 0,
                  sm: 3,
                  xs: 0,
                },
              }}
            >
              {questions.map((question, index) => (
                <MuiAccordion
                  key={question.question}
                  square
                  elevation={0}
                  sx={{
                    maxWidth: '100%',
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
                  <MuiAccordionSummary
                    expandIcon={<ExpandMoreIconExpandIcon />}
                  >
                    <Typography variant="caption" color="primary">
                      {question.question}
                    </Typography>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails>
                    <Markdown>{question.answer}</Markdown>
                  </MuiAccordionDetails>
                </MuiAccordion>
              ))}
            </Box>
          </Box>
        </Box>
      </PageContentBox>
    </Box>
  )
}

FAQ.propTypes = {
  faqData: PropTypes.shape({
    img: PropTypes.any,
    questions: PropTypes.array,
  }),
}

export default FAQ
