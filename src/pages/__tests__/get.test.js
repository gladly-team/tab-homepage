/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import redirect from 'src/utils/redirect'
import {
  chromeExtensionURL,
  homeURL,
  firefoxExtensionURL,
} from 'src/utils/navigation'
import localStorageMgr from 'src/utils/local-storage'
import { STORAGE_REFERRAL_DATA_REFERRING_CHANNEL } from 'src/utils/constants'

jest.mock('browser-detect')
jest.mock('src/utils/redirect')
jest.mock('src/utils/local-storage')

const createMockBrowserInfo = (browser = 'chrome', mobile = false) => {
  return {
    name: browser,
    version: '58.0.3029',
    versionNumber: 58.03029,
    mobile: mobile,
    os: 'Windows NT 10.0',
  }
}

const getMockProps = () => ({
  location: {
    search: '',
  },
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('GetExtensionRedirectPage', () => {
  it('renders without error', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo())

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on desktop', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(chromeExtensionURL)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on mobile', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', true))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(chromeExtensionURL)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on iOS', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('crios', true))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(chromeExtensionURL)
  })

  it('redirects to the Chrome Web Store when the browser is a Chromium browser', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chromium', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(chromeExtensionURL)
  })

  it('redirects to the Firefox Add-ons page when the browser is Firefox on desktop', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(firefoxExtensionURL)
  })

  it('redirects to the Firefox Add-ons page when the browser is Firefox on mobile', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', true))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(firefoxExtensionURL)
  })

  it('redirects to the homepage when it is an unsupported browser', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('safari', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })

  it('redirects to the homepage when the browser value is null', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo(null, false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })

  it('redirects to the homepage if browser detection throws an error', () => {
    expect.assertions(1)

    // Suppress expected console error.
    jest.spyOn(console, 'error').mockImplementationOnce(() => {})

    const detectBrowser = require('browser-detect').default
    detectBrowser.mockImplementationOnce(() => {
      throw new Error('I am a bad detective :(')
    })

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })

  it('stores the referrer ID in local storage if it exists', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    mockProps.location.search = '?src=hi&r=1357&foo'
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
      1357
    )
  })

  it('does not call local storage if there is no referrer ID', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    mockProps.location.search = '?foo=bar'
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not call local storage if the referrer ID is not a number', () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    mockProps.location.search = '?r=hello'
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })
})
