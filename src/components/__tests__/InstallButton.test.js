/* eslint-env jest */

import React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

jest.mock('browser-detect')

const createMockBrowserInfo = (browser = 'chrome', mobile = false) => {
  return {
    name: browser,
    version: '58.0.3029',
    versionNumber: 58.03029,
    mobile: mobile,
    os: 'Windows NT 10.0',
  }
}

afterEach(() => {
  jest.resetModules()
})

describe('InstallButton', () => {
  it('renders without error', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo())

    const InstallButton = require('../InstallButton').default
    shallow(<InstallButton />)
  })

  it('matches expected snapshot', function() {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo())

    const InstallButton = require('../InstallButton').default
    const wrapper = shallow(<InstallButton />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('has correct text for desktop Chrome', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    const InstallButton = require('../InstallButton').default
    const wrapper = mount(<InstallButton />)
    expect(
      wrapper
        .find('button')
        .first()
        .text()
    ).toEqual('Add to Chrome')
  })

  it('has correct text for desktop Firefox', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', false))

    const InstallButton = require('../InstallButton').default
    const wrapper = mount(<InstallButton />)
    expect(
      wrapper
        .find('button')
        .first()
        .text()
    ).toEqual('Add to Firefox')
  })

  it('has correct text for desktop unsupported browser', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('other', false))

    const InstallButton = require('../InstallButton').default
    const wrapper = mount(<InstallButton />)
    expect(
      wrapper
        .find('button')
        .first()
        .text()
    ).toEqual('Get it Now')
  })

  it('has correct text for mobile browser', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', true))

    const InstallButton = require('../InstallButton').default
    const wrapper = mount(<InstallButton />)
    expect(
      wrapper
        .find('button')
        .first()
        .text()
    ).toEqual('Get it Now')
  })
})
