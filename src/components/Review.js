import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Star from '@material-ui/icons/Star'
import { range } from 'lodash/util'
import { lightestTextColor } from 'themes/theme'
import styles from './Review.module.css'

class Review extends React.Component {
  render() {
    const { name, imgUrl, starCount, style } = this.props
    const stars = range(0, starCount).map(i => (
      <Star key={`star-${i}`} style={{ width: 16, height: 16 }} />
    ))
    return (
      <div
        className={styles['review-container']} // responsive styling
        style={{
          padding: 10,
          display: 'flex',
          fontSize: 16,
        }}
      >
        <Paper
          className={styles['review-paper']} // responsive styling
          style={Object.assign(
            {},
            {
              width: 'auto',
              paddingTop: 40,
              paddingBottom: 40,
              paddingLeft: 20,
              paddingRight: 20,
            },
            style
          )}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              height: '100%',
            }}
          >
            <Avatar src={imgUrl} alt={name} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
                justifyContent: 'flex-start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ marginRight: 20 }}>{name}</div>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                  }}
                >
                  {stars}
                </div>
              </div>
              <p style={{ marginTop: 8 }}>{this.props.children}</p>
              <p
                style={{
                  margin: 0,
                  marginTop: 'auto', // justify at flex-end
                  color: lightestTextColor,
                }}
              >
                From the Chrome Store
              </p>
            </div>
          </div>
        </Paper>
      </div>
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
