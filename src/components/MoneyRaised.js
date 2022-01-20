import React from 'react'
import PropTypes from 'prop-types'
import { commaFormatted, currencyFormatted } from 'src/utils/formatting'
import useMoneyRaised  from 'src/hooks/useMoneyRaised'

const MoneyRaised = () => {
  const moneyRaised = useMoneyRaised()
  var moneyRaisedFormatted = `$${commaFormatted(
    currencyFormatted(moneyRaised)
  )}`
  return moneyRaised ? (
    <span className={this.props.className}>{moneyRaisedFormatted}</span>
  ) : null
}

MoneyRaised.propTypes = {
  onLoaded: PropTypes.func,
  className: PropTypes.string,
}

MoneyRaised.defaultProps = {
  onLoaded: () => {},
}

export default MoneyRaised
