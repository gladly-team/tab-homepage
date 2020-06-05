/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import redirect from 'src/utils/redirect'
import {
  chromeExtensionURL,
  homeURL,
  edgeExtensionURL,
  firefoxExtensionURL,
} from 'src/utils/navigation'
import localStorageMgr from 'src/utils/local-storage'
import { STORAGE_REFERRAL_DATA_REFERRING_CHANNEL } from 'src/utils/constants'
import getBrowserInfo from 'src/utils/browserDetection'

jest.mock('src/utils/browserDetection')
jest.mock('src/utils/redirect')
jest.mock('src/utils/local-storage')

const createMockBrowserInfo = (browser = 'chrome', mobile = false) => {
  return {
    isChrome: () => browser === 'chrome',
    isEdge: () => browser === 'edge',
    isFirefox: () => browser === 'firefox',
    isMobile: () => mobile,
  }
}

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

describe('GetExtensionRedirectPage', () => {
  it('renders without error', () => {
    getBrowserInfo.mockReturnValue(createMockBrowserInfo())
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on desktop', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(chromeExtensionURL)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on mobile', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', true))
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(chromeExtensionURL)
  })

  it('redirects to the Firefox Add-ons page when the browser is Firefox on desktop', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('firefox', false))
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(firefoxExtensionURL)
  })

  it('redirects to the Firefox Add-ons page when the browser is Firefox on mobile', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('firefox', true))
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(firefoxExtensionURL)
  })

  it('redirects to the Edge Add-ons page when the browser is Edge on desktop', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('edge', false))
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(edgeExtensionURL)
  })

  it('redirects to the Edge Add-ons page when the browser is Edge on mobile', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('edge', true))
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(edgeExtensionURL)
  })

  it('redirects to the homepage when it is an unsupported browser', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', false))
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })

  it('redirects to the homepage when the browser value is null', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo(null, false))
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })

  it('redirects to the homepage if browser detection throws an error', () => {
    expect.assertions(1)
    getBrowserInfo.mockImplementation(() => {
      throw new Error('I could not browse browser :(')
    })
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })

  it('stores the referrer ID in local storage if it exists', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
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
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    mockProps.location.search = '?foo=bar'
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not call local storage if the referrer ID is not a number', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    mockProps.location.search = '?r=hello'
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })
})
