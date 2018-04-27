import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { primaryMainColor } from 'themes/theme'
import impactTexts from 'utils/impactTexts'

// Using with CSSTransition:
// https://github.com/css-modules/css-modules/issues/84#issuecomment-226731145
// https://reactcommunity.org/react-transition-group/
import styles from 'components/CharitableImpactText.module.css'

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
    const key = `key-${this.state.textIndex}`
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
        <TransitionGroup component={'span'}>
          <CSSTransition
            key={key}
            timeout={400}
            classNames={{
              appear: styles['impact-text-appear'],
              appearActive: styles['impact-text-appear-active'],
              enter: styles['impact-text-enter'],
              enterActive: styles['impact-text-enter-active'],
              exit: styles['impact-text-exit'],
              exitActive: styles['impact-text-exit-active'],
            }}
            // unmountOnExit={true}
          >
            <span>{impactText}</span>
          </CSSTransition>
        </TransitionGroup>
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
