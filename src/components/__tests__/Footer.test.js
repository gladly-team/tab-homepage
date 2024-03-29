/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import toJson from 'enzyme-to-json'

describe('Footer', () => {
  it('renders without error', () => {
    const Footer = require('../Footer').default
    shallow(<Footer />)
  })

  it('matches expected snapshot', () => {
    const Footer = require('../Footer').default
    const wrapper = shallow(<Footer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
