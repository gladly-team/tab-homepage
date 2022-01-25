import React from 'react'
import Proptypes from 'prop-types'
import MoneyRaised from 'src/components/MoneyRaised'
import Typography from '@mui/material/Typography'

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
    const {
      whiteClassName,
      color,
      textVariant,
      longCopy,
      excludeText = false,
    } = this.props
    return (
      <span style={{ visibility: this.state.show ? 'visible' : 'hidden' }}>
        <Typography
          className={whiteClassName || undefined}
          color={color}
          variant={textVariant || 'body1'}
        >
          <MoneyRaised onLoaded={this.show.bind(this)} />
        </Typography>
        {!excludeText && (
          <Typography
            color={color}
            variant="caption"
            className={whiteClassName || undefined}
          >
            raised for charity{longCopy ? ', just by surfing the web' : null}
          </Typography>
        )}
      </span>
    )
  }
}
MoneyRaisedDisplay.propTypes = {
  whiteClassName: Proptypes.string,
  color: Proptypes.string,
  textVariant: Proptypes.string,
  longCopy: Proptypes.bool,
  excludeText: Proptypes.bool,
}

export default MoneyRaisedDisplay
