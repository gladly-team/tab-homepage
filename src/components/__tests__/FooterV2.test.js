/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('FooterV2', () => {
  it('renders without error', () => {
    const FooterV2 = require('../FooterV2').default
    shallow(<FooterV2 />)
  })

  it('matches expected snapshot', function () {
    const FooterV2 = require('../FooterV2').default
    const wrapper = shallow(<FooterV2 />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
