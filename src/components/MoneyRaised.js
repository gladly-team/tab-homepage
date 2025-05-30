import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { commaFormatted, currencyFormatted } from 'src/utils/formatting'
import { isChromaticEnv } from '../utils/featureFlags'

// These must match the new tab page's numbers.
// Eventually call the API instead of hard-coding.
const MONEY_RAISED = 1900000.0 // Also update in useMoneyRaised.js
const MONEY_RAISED_UPDATE_TIME = moment('2025-03-11T21:00:00.000Z')
const DOLLARS_PER_DAY_RATE = 380.0

// todo: Turn this into a functional component so we can just reuse the hook here
class MoneyRaised extends React.Component {
  constructor(props) {
    super(props)
    this.timer = 0
    this.state = {
      moneyRaised: 0,
    }
  }

  componentDidMount() {
    if (this.props.moneyRaised !== undefined) {
      this.props.onLoaded()
    } else {
      this.setCounter()
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  calculateMoneyRaised() {
    const secsInDay = 60 * 60 * 24
    const now = moment()
    const diff = now.diff(MONEY_RAISED_UPDATE_TIME, 'seconds')
    const daysDiff = diff / secsInDay
    if (isChromaticEnv()) {
      return MONEY_RAISED
    }
    return MONEY_RAISED + daysDiff * DOLLARS_PER_DAY_RATE
  }

  incrementAmount() {
    const amountRaised = this.state.moneyRaised
    const newAmountRaised = amountRaised + 0.01
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
      const millisecondsPerPenny = Math.round(Math.abs(secondsPerPenny) * 1000)
      if (!isChromaticEnv()) {
        this.timer = window.setInterval(
          this.incrementAmount.bind(this),
          millisecondsPerPenny
        )
      }
    }
  }

  render() {
    const { moneyRaised } = this.props
    let moneyRaisedValue
    if (moneyRaised !== undefined) {
      moneyRaisedValue = moneyRaised
    } else {
      if (!this.state.moneyRaised) {
        return null
      }
      moneyRaisedValue = this.state.moneyRaised
    }
    const moneyRaisedFormatted = `$${commaFormatted(
      currencyFormatted(moneyRaisedValue)
    )}`
    return <span className={this.props.className}>{moneyRaisedFormatted}</span>
  }
}

MoneyRaised.propTypes = {
  onLoaded: PropTypes.func,
  className: PropTypes.string,
  moneyRaised: PropTypes.number,
}

MoneyRaised.defaultProps = {
  onLoaded: () => {},
}

export default MoneyRaised
