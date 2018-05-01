import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './ReviewCarousel.module.css'

class ReviewCarousel extends React.Component {
  render() {
    // Widen the carousel and shift it to show larger previews
    // on a wide screen without showing more than one full
    // review.
    return (
      <div
        className={styles['carousel-container']} // responsive styling
        style={{
          display: 'block',
          paddingBottom: 20,
          outline: 0,
          userSelect: 'none',
        }}
      >
        <Slider
          centerMode={true}
          dots={true}
          focusOnSelect={true}
          slidesToShow={3}
          responsive={[
            {
              breakpoint: 1040,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {this.props.children}
        </Slider>
      </div>
    )
  }
}

ReviewCarousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

ReviewCarousel.defaultProps = {}

export default ReviewCarousel
