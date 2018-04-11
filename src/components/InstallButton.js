import React from 'react'
import Button from 'material-ui/Button'

class InstallButton extends React.Component {
  onClick() {
    console.log('Button clicked')
  }

  getButtonText() {
    // TODO: customize to browser and device
    return 'Add to Chrome'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <Button
        variant="raised"
        color="primary"
        onClick={this.onClick.bind(this)}
      >
        {buttonText}
      </Button>
    )
  }
}

export default InstallButton
