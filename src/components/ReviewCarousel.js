import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class ReviewCarousel extends React.Component {
  render() {
    // Widen the carousel and shift it to show larger previews
    // on a wide screen without showing more than one full
    // review.
    return (
      <MediaQuery maxWidth={1040}>
        {isSmallerScreen => {
          return (
            <div
              style={Object.assign(
                {
                  paddingBottom: 20,
                },
                isSmallerScreen
                  ? null
                  : {
                      marginLeft: '-20%',
                      width: '140%',
                    }
              )}
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
        }}
      </MediaQuery>
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
