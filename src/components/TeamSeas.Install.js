import React from 'react'
import Landing from 'src/components/Landing'
import { seasLandingProps } from 'src/utils/landingConstants'

const SeasLanding = (props) => {
  return <Landing {...props} {...seasLandingProps} />
}

export default SeasLanding
