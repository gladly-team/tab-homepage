import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, Paper } from 'material-ui'
import Star from '@material-ui/icons/Star'
import { range } from 'lodash/util'

class Review extends React.Component {
  render() {
    const { name, imgUrl, starCount, style } = this.props
    const stars = range(0, starCount).map(i => <Star key={`star-${i}`} />)
    return (
      <Paper
        style={Object.assign(
          {},
          {
            flexBasis: '50vw',
            flexShrink: 0,
            height: '220px',
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
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 2 }}>{name}</div>
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
          <p>{this.props.children}</p>
          <p>From the Chrome Store</p>
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
