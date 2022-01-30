/* eslint-env jest */
import { directToAppExtension } from 'src/utils/redirect'
import {
  chromeExtensionURL,
  homeURL,
  edgeExtensionURL,
  safariExtensionURL,

  // firefoxExtensionURL,
} from 'src/utils/navigation'
import getBrowserInfo from 'src/utils/browserDetection'
import { safariEnabled } from 'src/utils/featureFlags'

jest.mock('src/utils/browserDetection')
jest.mock('src/utils/local-storage')
jest.mock('src/utils/featureFlags')

const createMockBrowserInfo = (browser = 'chrome', mobile = false) => ({
  isChrome: () => browser === 'chrome',
  isEdge: () => browser === 'edge',
  isFirefox: () => browser === 'firefox',
  isSafari: () => browser === 'safari',
  isMobile: () => mobile,
})

beforeEach(() => {
  getBrowserInfo.mockReturnValue(createMockBrowserInfo())
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('directToAppExtension', () => {
  it('redirects to the Chrome Web Store when the browser is Chrome on desktop', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', false))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual(chromeExtensionURL)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on mobile', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('chrome', true))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual(chromeExtensionURL)
  })

  it('redirects to the home page when the browser is Firefox on desktop', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('firefox', false))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual('/')
  })

  it('redirects to the home page when the browser is Firefox on mobile', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('firefox', true))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual('/')
  })

  it('redirects to the Edge Add-ons page when the browser is Edge on desktop', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('edge', false))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual(edgeExtensionURL)
  })

  it('redirects to the Edge Add-ons page when the browser is Edge on mobile', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('edge', true))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual(edgeExtensionURL)
  })

  it('redirects to the homepage when it is an unsupported browser', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('unsupported', false))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual(homeURL)
  })

  it('redirects to the homepage when the browser value is null', () => {
    expect.assertions(1)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo(null, false))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual(homeURL)
  })

  it('redirects to the homepage if browser detection throws an error', () => {
    expect.assertions(1)
    getBrowserInfo.mockImplementation(() => {
      throw new Error('I could not browse browser :(')
    })
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual(homeURL)
  })

  it('redirects to the safari extension page when the browser is Safari on desktop and safariEnabled true', () => {
    expect.assertions(1)
    safariEnabled.mockReturnValue(true)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', true))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual(safariExtensionURL)
  })

  it('redirects to the homepage when the browser is Safari on desktop and safariEnabled false', () => {
    expect.assertions(1)
    safariEnabled.mockReturnValue(false)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', true))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual('/')
  })

  it('redirects to the homepage when the browser is Safari on mobile and safariEnabled true', () => {
    expect.assertions(1)
    safariEnabled.mockReturnValue(true)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', false))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual('/')
  })

  it('redirects to the homepage when the browser is Safari on mobile and safariEnabled false', () => {
    expect.assertions(1)
    safariEnabled.mockReturnValue(false)
    getBrowserInfo.mockReturnValue(createMockBrowserInfo('safari', true))
    const myRedirect = directToAppExtension()
    expect(myRedirect).toEqual('/')
  })
})
