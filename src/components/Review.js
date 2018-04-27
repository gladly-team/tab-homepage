import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, Paper } from 'material-ui'
import Star from '@material-ui/icons/Star'
import { range } from 'lodash/util'
import { lightestTextColor } from 'themes/theme'

class Review extends React.Component {
  render() {
    const { name, imgUrl, starCount, style } = this.props
    const stars = range(0, starCount).map(i => (
      <Star key={`star-${i}`} style={{ width: 16, height: 16 }} />
    ))
    return (
      <Paper
        style={Object.assign(
          {},
          {
            flexBasis: '50vw',
            flexShrink: 0,
            minHeight: 240,
            minWidth: 380,
            maxWidth: 560,
            margin: '10px 5px',
            paddingTop: 40,
            paddingBottom: 40,
            paddingLeft: 20,
            paddingRight: 20,
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            flexWrap: 'nowrap',
          },
          style
        )}
      >
        <Avatar src={imgUrl} alt={name} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '10px',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div style={{ marginRight: 20 }}>{name}</div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'none',
                }}
              >
                {stars}
              </div>
            </div>
            <p style={{ marginTop: 8 }}>{this.props.children}</p>
          </div>
          <p style={{ margin: 0, color: lightestTextColor }}>
            From the Chrome Store
          </p>
        </div>
      </Paper>
    )
  }
}

Review.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  starCount: PropTypes.number.isRequired,
  style: PropTypes.object,
}

Review.defaultProps = {
  style: {},
}

export default Review
