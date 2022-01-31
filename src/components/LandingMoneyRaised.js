import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import { formatImg } from 'src/utils/formatting'

const DivParent = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}))

const DivSlidingParent = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'transparent',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(20),
  paddingRight: theme.spacing(20),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(0),
    marginTop: theme.spacing(-16),
  },
}))

const GatsbyImageTitleImage = styled(GatsbyImage)(({ theme }) => ({
  minWidth: '40%',
  maxWidth: '40%',
  marginRight: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    minWidth: 'unset',
    maxWidth: 'unset',
    marginRight: 'unset',
    marginBottom: theme.spacing(3),
  },
}))

const LandingMoneyRaised = ({ moneyRaisedData, moneyRaised }) => {
  const { moneyImg } = moneyRaisedData
  const moneyImage = getImage(formatImg(moneyImg))
  return (
    <DivParent>
      <DivSlidingParent>
        <GatsbyImageTitleImage alt="" image={moneyImage} />
        <div>
          <MoneyRaisedDisplay
            color="textSecondary"
            textVariant="h1"
            longCopy
            moneyRaised={moneyRaised}
          />
        </div>
      </DivSlidingParent>
    </DivParent>
  )
}
LandingMoneyRaised.propTypes = {
  moneyRaisedData: PropTypes.shape({
    moneyImg: PropTypes.any,
  }),
  moneyRaised: PropTypes.number,
}
export default LandingMoneyRaised
