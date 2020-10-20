/* eslint-env jest */
import getBrowserInfo from 'src/utils/browserDetection'

// beforeEach(() => {
//
// })

const setUserAgent = (userAgent) => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: userAgent,
    configurable: true,
  })
}

const exampleUserAgents = {
  chromeDesktop:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.30 Safari/537.36',
  edgeDesktop:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.37',
  firefoxDesktop:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0) Gecko/20100101 Firefox/77.0',
  chromeMobile:
    '"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.30 Mobile Safari/537.36"',
}

describe('browserDetection', () => {
  test('browserInfo.isChrome() returns true when the user agent is Chrome', () => {
    setUserAgent(exampleUserAgents.chromeDesktop)
    expect(getBrowserInfo().isChrome()).toBe(true)
  })

  test('browserInfo.isChrome() returns false when the user agent is something other than Chrome', () => {
    setUserAgent(exampleUserAgents.firefoxDesktop)
    expect(getBrowserInfo().isChrome()).toBe(false)
  })

  test('browserInfo.isFirefox() returns true when the user agent is Firefox', () => {
    setUserAgent(exampleUserAgents.firefoxDesktop)
    expect(getBrowserInfo().isFirefox()).toBe(true)
  })

  test('browserInfo.isFirefox() returns false when the user agent is something other than Firefox', () => {
    setUserAgent(exampleUserAgents.chromeDesktop)
    expect(getBrowserInfo().isFirefox()).toBe(false)
  })

  test('browserInfo.isEdge() returns true when the user agent is Edge', () => {
    setUserAgent(exampleUserAgents.edgeDesktop)
    expect(getBrowserInfo().isEdge()).toBe(true)
  })

  test('browserInfo.isEdge() returns false when the user agent is something other than Edge', () => {
    setUserAgent(exampleUserAgents.firefoxDesktop)
    expect(getBrowserInfo().isEdge()).toBe(false)
  })

  test('browserInfo.isMobile() returns true when the user agent is mobile Chrome', () => {
    setUserAgent(exampleUserAgents.chromeMobile)
    expect(getBrowserInfo().isMobile()).toBe(true)
  })

  test('browserInfo.isMobile() returns false when the user agent is desktop Chrome', () => {
    setUserAgent(exampleUserAgents.chromeDesktop)
    expect(getBrowserInfo().isMobile()).toBe(false)
  })

  test('getting browserInfo throws if the user agent is not defined', () => {
    setUserAgent(undefined)
    expect(() => {
      getBrowserInfo()
    }).toThrow('The user agent must be defined to determine the browser info.')
  })
})
