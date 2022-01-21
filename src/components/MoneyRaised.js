import React from 'react'
import PropTypes from 'prop-types'
import { commaFormatted, currencyFormatted } from 'src/utils/formatting'
import useMoneyRaised  from 'src/hooks/useMoneyRaised'

const MoneyRaised = ({onLoaded, className}) => {
  const moneyRaised = useMoneyRaised()
  console.log(moneyRaised)
  var moneyRaisedFormatted = `$${commaFormatted(
    currencyFormatted(moneyRaised)
  )}`
  console.log(moneyRaisedFormatted)
  return moneyRaised ? (
    <span className={className}>{moneyRaisedFormatted}</span>
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
