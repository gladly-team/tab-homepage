/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'
import { getTestIdSelector } from 'utils/test-utils'
import Button from 'material-ui/Button'

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

  it('shows the expected number of adblocker buttons', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...props} />)
    expect(wrapper.find(Button).length).toBe(4)
  })

  it('does not show any adblocker instructions by default', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...props} />)
    const instructionsContainerElem = wrapper.find(
      getTestIdSelector('adblocker-instructions-container')
    )
    expect(instructionsContainerElem.children().length).toBe(0)
  })

  it('shows instructions after clicking an adblocker button', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...props} />)
    const adblockerButton = wrapper.find(Button).first()
    adblockerButton.simulate('click')
    const instructionsContainerElem = wrapper.find(
      getTestIdSelector('adblocker-instructions-container')
    )
    expect(instructionsContainerElem.children().length).toBeGreaterThan(0)
  })
})
