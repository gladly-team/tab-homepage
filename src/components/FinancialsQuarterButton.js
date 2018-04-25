import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Link from 'components/Link'
import { lighterTextColor } from 'themes/theme'

class FinancialsQuarterButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  render() {
    const { quarterData } = this.props
    return (
      <div
        style={{ margin: 14 }}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <Link to={quarterData.pdfUrl}>
          <Paper
            elevation={this.state.hover ? 2 : 1}
            style={Object.assign(
              {
                width: 140,
                height: 140,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'transform .1s ease-in-out',
              },
              this.state.hover
                ? {
                    transform: 'scale(1.06)',
                  }
                : null
            )}
          >
            <span style={{ color: lighterTextColor }}>{`Q${
              quarterData.quarter
            } ${quarterData.year}`}</span>
          </Paper>
        </Link>
      </div>
    )
  }
}

FinancialsQuarterButton.propTypes = {
  quarterData: PropTypes.shape({
    quarter: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    pdfUrl: PropTypes.string.isRequired,
  }),
}

export default FinancialsQuarterButton
