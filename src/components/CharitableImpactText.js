import React from 'react'
import PropTypes from 'prop-types'
import { primaryMainColor } from 'themes/theme'
import impactTexts from 'utils/impactTexts'

class CharitableImpactText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textIndex: 0,
    }
  }

  componentDidMount() {
    // Set an interval to cycle through displayed text
    const { cycleSpeedMs } = this.props
    this.intervalId = window.setInterval(
      this.cycleText.bind(this),
      cycleSpeedMs
    )
  }

  componentWillUnmount() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId)
    }
  }

  cycleText() {
    this.setState({
      textIndex: (this.state.textIndex + 1) % impactTexts.length,
    })
  }

  capitalize(text) {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
  }

  render() {
    const { capitalize, style } = this.props
    const text = impactTexts[this.state.textIndex]
    const impactText = capitalize ? this.capitalize(text) : text
    return (
      <span
        style={Object.assign(
          {},
          {
            display: 'inline-block',
            minWidth: 180,
            color: primaryMainColor,
            borderBottomColor: primaryMainColor,
            paddingBottom: 1,
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            marginLeft: 2,
            marginRight: 2,
          },
          style
        )}
      >
        {impactText}
      </span>
    )
  }
}

CharitableImpactText.propTypes = {
  capitalize: PropTypes.bool,
  cycleSpeedMs: PropTypes.number,
  style: PropTypes.object,
}

CharitableImpactText.defaultProps = {
  capitalize: false,
  cycleSpeedMs: 3000,
  style: {},
}

export default CharitableImpactText
