/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const siteTitle = 'Some Title'

describe('Header', () => {
  it('renders without error', () => {
    const Header = require('../Header').default
    shallow(<Header siteTitle={siteTitle} />)
  })

  it('matches expected snapshot', function() {
    const Header = require('../Header').default
    const wrapper = shallow(<Header siteTitle={siteTitle} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
