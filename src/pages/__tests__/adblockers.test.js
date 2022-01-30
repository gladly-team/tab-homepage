/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import Helmet from 'react-helmet'
import { getTestIdSelector } from 'src/utils/test-utils'
import Button from '@mui/material/Button'
import Layout from 'src/components/Layout'

const getMockProps = () => ({
  location: {
    pathname: '/foo/',
  },
})

describe('adblockers whitelisting page', () => {
  it('renders without error', () => {
    const AdblockersPage = require('../adblockers').default
    shallow(<AdblockersPage {...getMockProps()} />)
  })

  it('sets the page title using Helmet', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Whitelisting Your Adblocker')
  })

  it('sets the open graph title', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Whitelisting Your Adblocker')
  })

  it('sets the open graph description', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe(
      'Learn how to whitelist your adblocker to raise money for charity with every browser tab you open.'
    )
  })

  it('renders the Layout component with "brand=tab"', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    expect(wrapper.find(Layout).prop('brand')).toEqual('tab')
  })

  it('shows the expected number of adblocker buttons', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    expect(wrapper.find(Button).length).toBe(4)
  })

  it('does not show any adblocker instructions by default', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    const instructionsContainerElem = wrapper.find(
      getTestIdSelector('adblocker-instructions-container')
    )
    expect(instructionsContainerElem.children().length).toBe(0)
  })

  it('shows instructions after clicking an adblocker button', () => {
    const AdblockersPage = require('../adblockers').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    const adblockerButton = wrapper.find(Button).first()
    adblockerButton.simulate('click')
    const instructionsContainerElem = wrapper.find(
      getTestIdSelector('adblocker-instructions-container')
    )
    expect(instructionsContainerElem.children().length).toBeGreaterThan(0)
  })
})
