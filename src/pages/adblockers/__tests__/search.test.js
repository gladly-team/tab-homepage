/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'
import { getTestIdSelector } from 'src/utils/test-utils'
import Button from '@material-ui/core/Button'
import Layout from 'src/components/Layout'

const getMockProps = () => ({
  location: {
    pathname: '/foo/',
  },
})

describe('Search for a Cause adblockers whitelisting page', () => {
  it('renders without error', () => {
    const AdblockersPage = require('../search').default
    shallow(<AdblockersPage {...getMockProps()} />)
  })

  it('sets the page title using Helmet', () => {
    const AdblockersPage = require('../search').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Whitelisting Your Adblocker')
  })

  it('sets the open graph title', () => {
    const AdblockersPage = require('../search').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Whitelisting Your Adblocker')
  })

  it('sets the open graph description', () => {
    const AdblockersPage = require('../search').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe(
      'Learn how to whitelist your adblocker to raise money for charity with every browser tab you open.'
    )
  })

  it('renders the Layout component with "brand=tab"', () => {
    const AdblockersPage = require('../search').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    expect(wrapper.find(Layout).prop('brand')).toEqual('search')
  })

  it('shows the expected number of adblocker buttons', () => {
    const AdblockersPage = require('../search').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    expect(wrapper.find(Button).length).toBe(4)
  })

  it('does not show any adblocker instructions by default', () => {
    const AdblockersPage = require('../search').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    const instructionsContainerElem = wrapper.find(
      getTestIdSelector('adblocker-instructions-container')
    )
    expect(instructionsContainerElem.children().length).toBe(0)
  })

  it('shows instructions after clicking an adblocker button', () => {
    const AdblockersPage = require('../search').default
    const wrapper = shallow(<AdblockersPage {...getMockProps()} />)
    const adblockerButton = wrapper.find(Button).first()
    adblockerButton.simulate('click')
    const instructionsContainerElem = wrapper.find(
      getTestIdSelector('adblocker-instructions-container')
    )
    expect(instructionsContainerElem.children().length).toBeGreaterThan(0)
  })
})
