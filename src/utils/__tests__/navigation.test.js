/* eslint-env jest */
/* globals process */

afterEach(() => {
  delete process.env.GATSBY_DOMAIN
  jest.resetModules()
})

describe('navigation utils', () => {
  test('getAbsoluteURL prepends a slash if necessary', () => {
    // Set the domain env var
    process.env.GATSBY_DOMAIN = 'some.example.com'

    const { getAbsoluteURL } = require('../navigation')
    expect(getAbsoluteURL('blah/')).toBe('https://some.example.com/blah/')
  })

  test('getAbsoluteURL postpends a slash if necessary by default', () => {
    // Set the domain env var
    process.env.GATSBY_DOMAIN = 'some.example.com'

    const { getAbsoluteURL } = require('../navigation')
    expect(getAbsoluteURL('/blah')).toBe('https://some.example.com/blah/')
  })

  test('getAbsoluteURL does not postpend a slash if the path contains a period (assume static file)', () => {
    // Set the domain env var
    process.env.GATSBY_DOMAIN = 'some.example.com'

    const { getAbsoluteURL } = require('../navigation')
    expect(getAbsoluteURL('/blah.png')).toBe(
      'https://some.example.com/blah.png'
    )
  })

  test('getAbsoluteURL works for a passed path', () => {
    // Set the domain env var
    process.env.GATSBY_DOMAIN = 'some.example.com'

    const { getAbsoluteURL } = require('../navigation')
    expect(getAbsoluteURL('/')).toBe('https://some.example.com/')
    expect(getAbsoluteURL('/blah/')).toBe('https://some.example.com/blah/')
  })

  test('getAbsoluteURL does not modify a URL that is already absolute', () => {
    // Set the domain env var
    process.env.GATSBY_DOMAIN = 'some.example.com'

    const { getAbsoluteURL } = require('../navigation')
    expect(getAbsoluteURL('https://foo.com/blah/')).toBe(
      'https://foo.com/blah/'
    )
  })

  test('getAbsoluteURL works for a passed path, falling back on hardcoded production domain', () => {
    const { getAbsoluteURL } = require('../navigation')
    expect(getAbsoluteURL('/')).toBe('https://tab.gladly.io/')
    expect(getAbsoluteURL('/blah/')).toBe('https://tab.gladly.io/blah/')
  })

  test('getAbsoluteURL does not modify a URL that is already absolute,falling back on hardcoded production domain', () => {
    const { getAbsoluteURL } = require('../navigation')
    expect(getAbsoluteURL('https://tab.gladly.io/blah/')).toBe(
      'https://tab.gladly.io/blah/'
    )
  })

  test('buildMobileAppRedirectURL builds correct URL with all parameters', () => {
    const { buildMobileAppRedirectURL } = require('../navigation')
    expect(
      buildMobileAppRedirectURL('abc123', 'user456', 'campaign789', 'CA6A5C2uj')
    ).toBe(
      'https://azy26.app.link?campaign=r%3Aabc123%3Au%3Auser456%3Am%3Acampaign789%3Ac%3ACA6A5C2uj'
    )
  })

  test('buildMobileAppRedirectURL builds correct URL with empty parameters', () => {
    const { buildMobileAppRedirectURL } = require('../navigation')
    expect(buildMobileAppRedirectURL('', '', '', '')).toBe(
      'https://azy26.app.link?campaign=r%3A%3Au%3A%3Am%3A%3Ac%3A'
    )
  })

  test('buildMobileAppRedirectURL builds correct URL with no parameters', () => {
    const { buildMobileAppRedirectURL } = require('../navigation')
    expect(buildMobileAppRedirectURL()).toBe(
      'https://azy26.app.link?campaign=r%3A%3Au%3A%3Am%3A%3Ac%3A'
    )
  })

  test('buildMobileAppRedirectURL builds correct URL with partial parameters', () => {
    const { buildMobileAppRedirectURL } = require('../navigation')
    expect(buildMobileAppRedirectURL('ref123', '', 'camp456', '')).toBe(
      'https://azy26.app.link?campaign=r%3Aref123%3Au%3A%3Am%3Acamp456%3Ac%3A'
    )
  })

  test('buildMobileAppRedirectURL builds correct URL with only causeId', () => {
    const { buildMobileAppRedirectURL } = require('../navigation')
    expect(buildMobileAppRedirectURL('', '', '', 'CA6A5C2uj')).toBe(
      'https://azy26.app.link?campaign=r%3A%3Au%3A%3Am%3A%3Ac%3ACA6A5C2uj'
    )
  })

  test('buildMobileAppRedirectURL builds correct URL with causeId and referrer only', () => {
    const { buildMobileAppRedirectURL } = require('../navigation')
    expect(buildMobileAppRedirectURL('ref123', '', '', 'SGa6zohkY')).toBe(
      'https://azy26.app.link?campaign=r%3Aref123%3Au%3A%3Am%3A%3Ac%3ASGa6zohkY'
    )
  })

  test('buildMobileAppRedirectURL maintains backward compatibility with 3 params', () => {
    const { buildMobileAppRedirectURL } = require('../navigation')
    // When called with only 3 params, causeId should be empty
    expect(buildMobileAppRedirectURL('abc123', 'user456', 'campaign789')).toBe(
      'https://azy26.app.link?campaign=r%3Aabc123%3Au%3Auser456%3Am%3Acampaign789%3Ac%3A'
    )
  })
})
