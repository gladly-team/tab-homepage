/* eslint-env jest */
import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import redirect from 'src/utils/redirect'
import {
  homeURL,
  searchChromeExtensionPage,
  searchEdgeExtensionPage,
  searchFirefoxExtensionPage,
} from 'src/utils/navigation'
import localStorageMgr from 'src/utils/local-storage'
import getBrowserInfo from 'src/utils/browserDetection'

jest.mock('src/utils/browserDetection')
jest.mock('src/utils/redirect')
jest.mock('src/utils/local-storage')

const createMockBrowserInfo = (browser = 'chrome', mobile = false) => ({
  isChrome: () => browser === 'chrome',
  isEdge: () => browser === 'edge',
  isFirefox: () => browser === 'firefox',
  isMobile: () => mobile,
})
const getMockProps = () => ({
  location: {
    search: '',
  },
})

beforeEach(() => {
  getBrowserInfo.mockReturnValue(createMockBrowserInfo())
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('GetSearchExtensionRedirectPage', () => {
  it('renders without error', () => {
    getBrowserInfo.mockReturnValue(createMockBrowserInfo())
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on desktop', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(searchChromeExtensionPage)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on mobile', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', true))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(searchChromeExtensionPage)
  })

  it('redirects to the Firefox Add-ons page when the browser is Firefox on desktop', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('firefox', false))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(searchFirefoxExtensionPage)
  })

  it('redirects to the Firefox Add-ons page when the browser is Firefox on mobile', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('firefox', true))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(searchFirefoxExtensionPage)
  })

  it('redirects to the Edge Add-ons page when the browser is Edge on desktop', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('edge', false))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(searchEdgeExtensionPage)
  })

  it('redirects to the Edge Add-ons page when the browser is Edge on mobile', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('edge', true))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(searchEdgeExtensionPage)
  })

  it('redirects to the homepage when it is an unsupported browser', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', false))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })

  it('redirects to the homepage when the browser value is null', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo(null, false))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })

  it('redirects to the homepage if browser detection throws an error', () => {
    expect.assertions(1)

    // Suppress expected console error.
    jest.spyOn(console, 'error').mockImplementationOnce(() => {})
    getBrowserInfo.mockImplementation(() => {
      throw new Error('Could not detect.')
    })

    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })

  it('stores the referrer ID in local storage if it exists', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    mockProps.location.search = '?src=hi&r=1357&foo'
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'search.referralData.referringChannel',
      1357
    )
  })

  it('does not call local storage if there is no referrer ID', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    mockProps.location.search = '?foo=bar'
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not call local storage if the referrer ID is not a number', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
    const GetSearchExtensionRedirectPage = require('../get-search').default
    const mockProps = getMockProps()
    mockProps.location.search = '?r=hello'
    shallow(<GetSearchExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })
})
