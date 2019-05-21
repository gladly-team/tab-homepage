import React from 'react'
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
    return (
      <span style={{ visibility: this.state.show ? 'visible' : 'hidden' }}>
        <p style={{ margin: 0 }}>
          <MoneyRaised onLoaded={this.show.bind(this)} />
        </p>
        <p style={{ margin: 0, fontSize: 12, color: lightestTextColor }}>
          raised for charity
        </p>
      </span>
    )
  }
}

export default MoneyRaisedDisplay
