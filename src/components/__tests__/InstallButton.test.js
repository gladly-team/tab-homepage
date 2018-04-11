/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('InstallButton', () => {
  it('renders without error', () => {
    const InstallButton = require('../InstallButton').default
    shallow(<InstallButton />)
  })

  it('matches expected snapshot', function() {
    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
