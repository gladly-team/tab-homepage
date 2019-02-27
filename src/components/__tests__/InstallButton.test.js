/* eslint-env jest */
/* globals setImmediate */

import React from 'react'
import { mount, shallow } from 'enzyme'

jest.mock('browser-detect')
jest.mock('utils/location')
jest.mock('utils/redirect')
jest.mock('utils/analytics/logEvent')

const createMockBrowserInfo = (browser = 'chrome', mobile = false) => {
  return {
    name: browser,
    version: '58.0.3029',
    versionNumber: 58.03029,
    mobile: mobile,
    os: 'Windows NT 10.0',
  }
}

// Helper to simulate a click on the button, given the Enzyme wrapper
const clickButton = async wrapper => {
  wrapper
    .find('button')
    .first()
    .simulate('click')

  // Flush all promises
  await new Promise(resolve => setImmediate(resolve))
}

afterEach(() => {
  jest.resetModules()
  jest.clearAllMocks()
})

describe('InstallButton', () => {
  it('renders without error', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo())

    const InstallButton = require('../InstallButton').default
    shallow(<InstallButton />)
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

  it('navigates to the Firefox Addons page on click (on Firefox desktop browser)', async () => {
    expect.assertions(2)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', false))
    const redirect = require('utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = mount(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButton(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://addons.mozilla.org/en-US/firefox/addon/tab-for-a-cause/'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('navigates to the Chrome Web Store page on click (on Chrome desktop browser)', async () => {
    expect.assertions(2)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))
    const redirect = require('utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = mount(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButton(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://chrome.google.com/webstore/detail/tab-for-a-cause/gibkoahgjfhphbmeiphbcnhehbfdlcgo'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with an unsupported desktop browser', async () => {
    expect.assertions(1)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('safari', false))

    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})

    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = mount(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButton(wrapper)

    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('navigates to the Firefox Addons page on click (on Firefox mobile browser)', async () => {
    expect.assertions(2)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', true))
    const redirect = require('utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = mount(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButton(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://addons.mozilla.org/en-US/firefox/addon/tab-for-a-cause/'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('navigates to the Chrome Web Store page on click (on Chrome mobile browser)', async () => {
    expect.assertions(2)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', true))
    const redirect = require('utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = mount(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButton(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://chrome.google.com/webstore/detail/tab-for-a-cause/gibkoahgjfhphbmeiphbcnhehbfdlcgo'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('navigates to the Chrome Web Store page on click (on Chrome iOS browser)', async () => {
    expect.assertions(2)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('crios', true))
    const redirect = require('utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const wrapper = mount(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButton(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://chrome.google.com/webstore/detail/tab-for-a-cause/gibkoahgjfhphbmeiphbcnhehbfdlcgo'
    )
    expect(mockOnUnsupportedBrowserInstallClick).not.toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user is on an unsupported browser (on mobile)', async () => {
    expect.assertions(1)

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('safari', true))

    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})

    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = mount(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    await clickButton(wrapper)

    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('calls downloadButtonClick analytics event on click', async () => {
    expect.assertions(1)

    const downloadButtonClick = require('utils/analytics/logEvent')
      .downloadButtonClick
    const InstallButton = require('../InstallButton').default
    const wrapper = mount(<InstallButton />)
    await clickButton(wrapper)
    expect(downloadButtonClick).toHaveBeenCalled()
  })
})
