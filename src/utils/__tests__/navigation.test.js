/* eslint-env jest */

describe('navigation utils', () => {
  test('getAbsoluteURL works for a passed path', () => {
    const getAbsoluteURL = require('../navigation').getAbsoluteURL
    expect(getAbsoluteURL('/')).toBe('https://tab.gladly.io/')
    expect(getAbsoluteURL('/blah/')).toBe('https://tab.gladly.io/blah/')
  })

  test('getAbsoluteURL does not modify a URL that is already absolute', () => {
    const getAbsoluteURL = require('../navigation').getAbsoluteURL
    expect(getAbsoluteURL('https://tab.gladly.io/blah/')).toBe(
      'https://tab.gladly.io/blah/'
    )
  })
})
