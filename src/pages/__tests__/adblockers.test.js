/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'

const props = {}

describe('adblockers whitelisting page', () => {
  it('renders without error', () => {
    const AdblockersPage = require('../adblockers').default
    shallow(<AdblockersPage {...props} />)
  })

  it('sets the page title using Helmet', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...props} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Whitelisting Your Adblocker')
  })

  it('sets the open graph title', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...props} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Whitelisting Your Adblocker')
  })

  it('sets the open graph description', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...props} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe(
      'Learn how to whitelist your adblocker to raise money for charity with every browser tab you open.'
    )
  })
})
