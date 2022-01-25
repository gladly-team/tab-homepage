import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import { formatImg } from 'src/utils/formatting'
import makeStyles from '@mui/styles/makeStyles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const useStyles = makeStyles((theme) => ({
  logoContainer: { flex: 1, display: 'flex', flexDirection: 'row' },
  Paper: {
    width: 240,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: theme.spacing(3),
    transition: 'transform .1s ease-in-out',
  },
  image: { alignSelf: 'end', height: '100px', width: '103px' },
}))
const FinancialQuartersButton = ({ quarterData }) => {
  const cx = useStyles()
  const Image = getImage(formatImg(quarterData.img))
  return (
    <div>
      {/* PDF is outside of Gatsby, so don't use a Link component */}
      <a href={quarterData.pdfUrl} style={{ textDecoration: 'none' }}>
        <Paper elevation={1} className={cx.Paper}>
          <GatsbyImage
            image={Image}
            alt=""
            className={cx.image}
            placeholder="none"
            backgroundColor="transparent"
          />
          <span>{`Q${quarterData.quarter} ${quarterData.year}`}</span>
        </Paper>
      </a>
    </div>
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
