/* eslint-env jest */

import { getLocation } from 'utils/location'
import { mockWindowLocation } from 'utils/test-utils'

jest.mock('utils/location')

describe('navigation utils', () => {
  test('getAbsoluteURL works for a passed path', () => {
    // Mock the location.
    getLocation.mockImplementation(() => mockWindowLocation('tab.gladly.io'))
    const getAbsoluteURL = require('../navigation').getAbsoluteURL
    expect(getAbsoluteURL('/')).toBe('https://tab.gladly.io/')
    expect(getAbsoluteURL('/blah/')).toBe('https://tab.gladly.io/blah/')

    // Mock another location.
    getLocation.mockImplementation(() =>
      mockWindowLocation('dev-tab-website.gladly.io')
    )
    expect(getAbsoluteURL('/')).toBe('https://dev-tab-website.gladly.io/')
    expect(getAbsoluteURL('/blah/')).toBe(
      'https://dev-tab-website.gladly.io/blah/'
    )
  })

  test('getAbsoluteURL does not modify a URL that is already absolute', () => {
    const getAbsoluteURL = require('../navigation').getAbsoluteURL
    expect(getAbsoluteURL('https://tab.gladly.io/blah/')).toBe(
      'https://tab.gladly.io/blah/'
    )
  })

  test('getAbsoluteURL falls back to the hardcoded production domain if getting the current location fails', () => {
    getLocation.mockImplementation(() => {
      throw new Error('yikes!')
    })
    const getAbsoluteURL = require('../navigation').getAbsoluteURL
    expect(getAbsoluteURL('/blah/')).toBe('https://tab.gladly.io/blah/')
  })

  test('getAbsoluteURL falls back to the hardcoded production domain if the current location is not a valid URL', () => {
    getLocation.mockReturnValue({
      href: 'about:blank',
    })
    const getAbsoluteURL = require('../navigation').getAbsoluteURL
    expect(getAbsoluteURL('/blah/')).toBe('https://tab.gladly.io/blah/')
  })
})
