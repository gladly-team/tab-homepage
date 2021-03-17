import React from 'react'
import Proptypes from 'prop-types'
import MoneyRaised from 'src/components/MoneyRaised'
import { lightestTextColor } from 'src/themes/theme'

class MoneyRaisedDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  show() {
    this.setState({
      show: true,
    })
  }

  render() {
    const { whiteClassName } = this.props
    return (
      <span style={{ visibility: this.state.show ? 'visible' : 'hidden' }}>
        <p style={{ margin: 0 }}>
          <MoneyRaised
            className={whiteClassName ? whiteClassName : undefined}
            onLoaded={this.show.bind(this)}
          />
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            color: whiteClassName ? '#fff' : lightestTextColor,
          }}
        >
          raised for charity
        </p>
      </span>
    )
  }
}
MoneyRaisedDisplay.propTypes = {
  whiteClassName: Proptypes.string,
}

export default MoneyRaisedDisplay
