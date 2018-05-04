/* eslint-env jest */

import React from 'react'
import { mount, shallow } from 'enzyme'
import { mockWindowLocation } from 'utils/test-utils'

jest.mock('browser-detect')
jest.mock('utils/location')
jest.mock('utils/redirect')

// Mock chrome.webstore API
window.chrome = {
  webstore: {
    install: jest.fn(),
  },
}

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
const clickButton = wrapper => {
  wrapper
    .find('button')
    .first()
    .simulate('click')
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

  it('navigates to the Firefox Addons page on click (on Firefox desktop browser)', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', false))
    const redirect = require('utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const wrapper = mount(<InstallButton />)
    clickButton(wrapper)
    expect(redirect).toHaveBeenCalledWith(
      'https://addons.mozilla.org/en-US/firefox/addon/tab-for-a-cause/'
    )
  })

  it('calls the onChromeInstallBegin prop on click (on Chrome desktop browser)', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    // Mock that we're on a tab.gladly.io page
    const getLocation = require('utils/location').getLocation
    getLocation.mockImplementationOnce(() =>
      mockWindowLocation('tab.gladly.io')
    )

    const InstallButton = require('../InstallButton').default
    const mockOnChromeInstallBegin = jest.fn()
    const wrapper = mount(
      <InstallButton onChromeInstallBegin={mockOnChromeInstallBegin} />
    )
    clickButton(wrapper)
    expect(mockOnChromeInstallBegin).toHaveBeenCalled()
  })

  it('calls the Chrome Web Store inline install API on click when on the tab.gladly.io domain (on Chrome desktop browser)', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    // Mock that we're on a tab.gladly.io page
    const getLocation = require('utils/location').getLocation
    getLocation.mockImplementationOnce(() =>
      mockWindowLocation('tab.gladly.io')
    )

    const InstallButton = require('../InstallButton').default
    const wrapper = mount(<InstallButton />)
    clickButton(wrapper)
    expect(window.chrome.webstore.install).toHaveBeenCalled()
    expect(window.chrome.webstore.install.mock.calls[0][0]).toBe(
      'https://chrome.google.com/webstore/detail/gibkoahgjfhphbmeiphbcnhehbfdlcgo'
    )
  })

  it('calls the onChromeInstallSuccess prop when the Chrome install succeeds', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    // Mock that we're on a tab.gladly.io page
    const getLocation = require('utils/location').getLocation
    getLocation.mockImplementationOnce(() =>
      mockWindowLocation('tab.gladly.io')
    )

    // Mock the chrome.webstore so we can access the callback functions
    var chromeWebStoreSuccessCallback
    window.chrome.webstore.install.mockImplementationOnce(
      (_, successCallback) => {
        chromeWebStoreSuccessCallback = successCallback
      }
    )

    const mockOnChromeInstallSuccess = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = mount(
      <InstallButton onChromeInstallSuccess={mockOnChromeInstallSuccess} />
    )
    clickButton(wrapper)

    // Mock a chrome.webstore failure
    chromeWebStoreSuccessCallback()
    expect(mockOnChromeInstallSuccess).toHaveBeenCalled()
  })

  it('redirects to the Chrome Web Store when not on a verified domain for inline install (on Chrome desktop browser)', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    // Mock that we're on some non-verified page
    const getLocation = require('utils/location').getLocation
    getLocation.mockImplementationOnce(() => mockWindowLocation('example.com'))

    const redirect = require('utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const wrapper = mount(<InstallButton />)
    clickButton(wrapper)
    expect(window.chrome.webstore.install).not.toHaveBeenCalled()
    expect(redirect).toHaveBeenCalledWith(
      'https://chrome.google.com/webstore/detail/tab-for-a-cause/gibkoahgjfhphbmeiphbcnhehbfdlcgo'
    )
  })

  it('redirects to the Chrome Web Store when inline install fails (on Chrome desktop browser)', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    // Mock that we're on a tab.gladly.io page
    const getLocation = require('utils/location').getLocation
    getLocation.mockImplementationOnce(() =>
      mockWindowLocation('tab.gladly.io')
    )

    // Mock the chrome.webstore so we can access the callback functions
    var chromeWebStoreFailureCallback
    window.chrome.webstore.install.mockImplementationOnce(
      (_, __, failureCallback) => {
        chromeWebStoreFailureCallback = failureCallback
      }
    )

    // Silence expected console error
    jest.spyOn(console, 'error').mockImplementationOnce(() => {})

    const redirect = require('utils/redirect').default

    const InstallButton = require('../InstallButton').default
    const wrapper = mount(<InstallButton />)
    clickButton(wrapper)

    // Mock a chrome.webstore failure
    chromeWebStoreFailureCallback(
      'Something bad happened with the inline install'
    )

    expect(redirect).toHaveBeenCalledWith(
      'https://chrome.google.com/webstore/detail/tab-for-a-cause/gibkoahgjfhphbmeiphbcnhehbfdlcgo'
    )
  })

  it('calls the onChromeInstallCanceled prop when the user cancels install (on Chrome desktop browser)', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    // Mock that we're on a tab.gladly.io page
    const getLocation = require('utils/location').getLocation
    getLocation.mockImplementationOnce(() =>
      mockWindowLocation('tab.gladly.io')
    )

    // Mock the chrome.webstore so we can access the callback functions
    var chromeWebStoreFailureCallback
    window.chrome.webstore.install.mockImplementationOnce(
      (_, __, failureCallback) => {
        chromeWebStoreFailureCallback = failureCallback
      }
    )

    // Silence expected console error
    jest.spyOn(console, 'error').mockImplementationOnce(() => {})

    const redirect = require('utils/redirect').default

    const mockOnChromeInstallCanceled = jest.fn()
    const mockOnChromeInstallSuccess = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = mount(
      <InstallButton
        onChromeInstallCanceled={mockOnChromeInstallCanceled}
        onChromeInstallSuccess={mockOnChromeInstallSuccess}
      />
    )
    clickButton(wrapper)

    // Mock a chrome.webstore failure
    chromeWebStoreFailureCallback('User cancelled install')

    // Should not redirect to the Chrome Web Store
    expect(redirect).not.toHaveBeenCalled()

    expect(mockOnChromeInstallCanceled).toHaveBeenCalled()
    expect(mockOnChromeInstallSuccess).not.toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install with an unsupported desktop browser', () => {
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
    clickButton(wrapper)

    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })

  it('calls the onUnsupportedBrowserInstallClick prop when the user tries to install on mobile', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', true))

    // Silence expected console.info log
    jest.spyOn(console, 'info').mockImplementationOnce(() => {})

    const mockOnUnsupportedBrowserInstallClick = jest.fn()
    const InstallButton = require('../InstallButton').default
    const wrapper = mount(
      <InstallButton
        onUnsupportedBrowserInstallClick={mockOnUnsupportedBrowserInstallClick}
      />
    )
    clickButton(wrapper)

    expect(mockOnUnsupportedBrowserInstallClick).toHaveBeenCalled()
  })
})
