import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import { formatImg } from 'src/utils/formatting'

const PREFIX = 'LandingMoneyRaised'

const classes = {
  parent: `${PREFIX}-parent`,
  slidingParent: `${PREFIX}-slidingParent`,
  titleImage: `${PREFIX}-titleImage`,
  moneyRaised: `${PREFIX}-moneyRaised`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.parent}`]: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  [`& .${classes.slidingParent}`]: {
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
  },

  [`& .${classes.titleImage}`]: {
    minWidth: '40%',
    maxWidth: '40%',
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      minWidth: 'unset',
      maxWidth: 'unset',
      marginRight: 'unset',
      marginBottom: theme.spacing(3),
    },
  },

  [`& .${classes.moneyRaised}`]: {
    marginBottom: theme.spacing(2),
  },
}))

function LandingMoneyRaised({ moneyRaisedData }) {
  const { moneyImg } = moneyRaisedData
  const moneyImage = getImage(formatImg(moneyImg))
  return (
    <Root className={classes.parent}>
      <div className={classes.slidingParent}>
        <GatsbyImage
          alt="money raised"
          className={classes.titleImage}
          image={moneyImage}
        />
        <div>
          <MoneyRaisedDisplay
            color="textSecondary"
            whiteClassName={classes.moneyRaised}
            textVariant="h1"
            longCopy
          />
        </div>
      </div>
    </Root>
  )
}
LandingMoneyRaised.propTypes = {
  moneyRaisedData: PropTypes.shape({
    moneyImg: PropTypes.any,
  }),
}
export default LandingMoneyRaised
