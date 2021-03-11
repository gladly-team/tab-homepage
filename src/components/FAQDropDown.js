import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'

const styles = {
  buttonBase: {
    borderRadius: 2,
  },
  FAQDropDownText: {
    fontWeight: 'normal',
    transition: 'color 300ms ease-in',
    cursor: 'pointer',
  },
  dropdownText: {},
}

class FAQDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.timer = 0
    this.state = {
      isPopoverOpen: false,
    }
    this.anchorEl = null
  }

  render() {
    const { classes, dropdown, text } = this.props
    const { isPopoverOpen } = this.state
    return (
      <>
        <ButtonBase className={classes.buttonBase}>
          <div
            ref={(anchorEl) => (this.anchorEl = anchorEl)}
            onClick={() => {
              this.setState({
                isPopoverOpen: !this.state.open,
              })
            }}
            style={{
              cursor: 'pointer',
            }}
          >
            {text}
          </div>
        </ButtonBase>
        {dropdown({
          open: isPopoverOpen,
          onClose: () => {
            this.setState({
              isPopoverOpen: false,
            })
          },
          anchorElement: this.anchorEl,
        })}
      </>
    )
  }
}

FAQDropDown.propTypes = {
  dropdown: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  text: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

FAQDropDown.defaultProps = {}

export default withStyles(styles, { withTheme: true })(FAQDropDown)
