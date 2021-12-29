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
    const { whiteClassName, color, textVariant, subTextVariant, longCopy } =
      this.props
    return (
      <span style={{ visibility: this.state.show ? 'visible' : 'hidden' }}>
        <Typography
          className={whiteClassName ? whiteClassName : undefined}
          color={color}
          variant={textVariant ? textVariant : 'body1'}
        >
          <MoneyRaised onLoaded={this.show.bind(this)} />
        </Typography>
        <Typography
          color={color}
          variant={subTextVariant ? subTextVariant : 'caption'}
          className={whiteClassName ? whiteClassName : undefined}
        >
          raised for charity{longCopy ? ', just by surfing the web' : null}
        </Typography>
      </span>
    )
  }
}
MoneyRaisedDisplay.propTypes = {
  whiteClassName: Proptypes.string,
  color: Proptypes.string,
  textVariant: Proptypes.string,
  longCopy: Proptypes.bool,
}

export default MoneyRaisedDisplay
