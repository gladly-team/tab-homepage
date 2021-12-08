import React from 'react'
import Proptypes from 'prop-types'
import MoneyRaised from 'src/components/MoneyRaised'
import { lightestTextColor } from 'src/themes/theme'
import Typography from '@material-ui/core/Typography'
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
    const { whiteClassName, color } = this.props
    return (
      <span style={{ visibility: this.state.show ? 'visible' : 'hidden' }}>
        {color ? (
          <Typography
            className={whiteClassName ? whiteClassName : undefined}
            color={color}
            variant="body1"
          >
            <MoneyRaised onLoaded={this.show.bind(this)} />
          </Typography>
        ) : (
          <p style={{ margin: 0 }}>
            <MoneyRaised
              className={whiteClassName ? whiteClassName : undefined}
              onLoaded={this.show.bind(this)}
            />
          </p>
        )}
        {color ? (
          <Typography color={color} variant="caption">
            raised for charity
          </Typography>
        ) : (
          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: whiteClassName ? '#fff' : lightestTextColor,
            }}
          >
            raised for charity
          </p>
        )}
      </span>
    )
  }
}
MoneyRaisedDisplay.propTypes = {
  whiteClassName: Proptypes.string,
  color: Proptypes.string,
}

export default MoneyRaisedDisplay
