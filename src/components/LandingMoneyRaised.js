import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MoneyRaisedDisplay from 'src/components/MoneyRaisedDisplay'
import { formatImg } from 'src/utils/formatting'

const useStyles = makeStyles((theme) => ({
  parent: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  slidingParent: {
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
  titleImage: {
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
  moneyRaised: {
    marginBottom: theme.spacing(2),
  },
}))

function LandingMoneyRaised({ moneyRaisedData }) {
  const classes = useStyles()
  const { moneyImg } = moneyRaisedData
  const moneyImage = getImage(formatImg(moneyImg))
  return (
    <div className={classes.parent}>
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
    </div>
  )
}
LandingMoneyRaised.propTypes = {
  moneyRaisedData: PropTypes.shape({
    moneyImg: PropTypes.any,
  }),
}
export default LandingMoneyRaised
