import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import { formatImg } from 'src/utils/formatting'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PREFIX = 'FinancialQuartersButton'

const classes = {
  logoContainer: `${PREFIX}-logoContainer`,
  Paper: `${PREFIX}-Paper`,
  image: `${PREFIX}-image`,
}

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),

  [`& .${classes.logoContainer}`]: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },

  [`& .${classes.Paper}`]: {
    // width: 240,
    minWidth: 170,
    maxWidth: 240,
    height: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: theme.spacing(2),
    transition: 'transform .1s ease-in-out',
  },

  [`& .${classes.image}`]: {
    height: '90px',
    width: '92px',
  },
}))

const FinancialQuartersButton = ({ quarterData }) => {
  const Image = getImage(formatImg(quarterData.img))
  return (
    <Root>
      {/* PDF is outside of Gatsby, so don't use a Link component */}
      <a href={quarterData.pdfUrl} style={{ textDecoration: 'none' }}>
        <Paper elevation={1} className={classes.Paper}>
          <GatsbyImage
            image={Image}
            alt=""
            className={classes.image}
            placeholder="none"
            backgroundColor="transparent"
          />
          <span>{`Q${quarterData.quarter} ${quarterData.year}`}</span>
        </Paper>
      </a>
    </Root>
  )
}
FinancialQuartersButton.propTypes = {
  quarterData: PropTypes.shape({
    pdfUrl: PropTypes.string,
    quarter: PropTypes.number,
    year: PropTypes.number,
    img: PropTypes.any,
    pdfs: PropTypes.any,
  }),
}
export default FinancialQuartersButton
