import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { commaFormatted, currencyFormatted } from 'utils/formatting'

// These must match the new tab page's numbers.
// Eventually call the API instead of hard-coding.
const MONEY_RAISED = 678810.0
const MONEY_RAISED_UPDATE_TIME = moment('2019-01-11T18:02:00.000Z')
const DOLLARS_PER_DAY_RATE = 450.0

class MoneyRaised extends React.Component {
  constructor(props) {
    super(props)
    this.timer = 0
    this.state = {
      moneyRaised: 0,
    }
  }

  componentDidMount() {
    this.setCounter()
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  calculateMoneyRaised() {
    const secsInDay = 60 * 60 * 24
    const now = moment()
    const diff = now.diff(MONEY_RAISED_UPDATE_TIME, 'seconds')
    const daysDiff = diff / secsInDay
    return MONEY_RAISED + daysDiff * DOLLARS_PER_DAY_RATE
  }

  incrementAmount() {
    var amountRised = this.state.moneyRaised
    var newAmountRaised = amountRised + 0.01
    this.setState({
      moneyRaised: newAmountRaised,
    })
  }

  setCounter() {
    const secondsInDay = 60 * 60 * 24
    // Recalculate based on time that elapsed since the base amount.
    const secondsPerPenny = secondsInDay / DOLLARS_PER_DAY_RATE / 100
    this.setState(
      {
        moneyRaised: this.calculateMoneyRaised(),
      },
      () => {
        this.props.onLoaded()
      }
    )

    // Set an interval to add a penny to the money raised.
    if (!(secondsPerPenny <= 0)) {
      var millisecondsPerPenny = Math.round(Math.abs(secondsPerPenny) * 1000)
      this.timer = window.setInterval(
        this.incrementAmount.bind(this),
        millisecondsPerPenny
      )
    }
  }

  render() {
    if (!this.state.moneyRaised) {
      return null
    }
    const moneyRaised = this.state.moneyRaised
    var moneyRaisedFormatted = `$${commaFormatted(
      currencyFormatted(moneyRaised)
    )}`
    return <span>{moneyRaisedFormatted}</span>
  }
}

MoneyRaised.propTypes = {
  onLoaded: PropTypes.func,
}

MoneyRaised.defaultProps = {
  onLoaded: () => {},
}

export default MoneyRaised
