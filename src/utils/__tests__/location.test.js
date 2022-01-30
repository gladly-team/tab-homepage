/* eslint-env jest */
import { mockWindowLocation } from 'src/utils/test-utils'

// Override the getLocation function for testing
const location = require('../location')

location.getLocation = jest.fn(() => mockWindowLocation())

describe('location utils', () => {
  test('getLocation returns the window.location value', () => {
    location.getLocation.mockReturnValueOnce(
      mockWindowLocation('somewebsite.com')
    )
    expect(location.getLocation()).toMatchObject({
      hash: '',
      href: 'https://somewebsite.com/',
      host: 'somewebsite.com',
      hostname: 'somewebsite.com',
      origin: 'https://somewebsite.com',
      pathname: '/',
      port: '',
      protocol: 'https:',
    })
  })

  test('getUrlParameterValue returns the URL param value if it exists', () => {
    location.getLocation.mockReturnValue(
      mockWindowLocation('example.com', {
        search: '?someparam=abc&another=xyz',
      })
    )
    expect(location.getUrlParameterValue('someparam')).toEqual('abc')
    expect(location.getUrlParameterValue('another')).toEqual('xyz')
  })

  test('getUrlParameterValue returns null if the URL param value does not exist', () => {
    location.getLocation.mockReturnValue(
      mockWindowLocation('example.com', {
        search: '?someparam=abc&another=xyz',
      })
    )
    expect(location.getUrlParameterValue('blah')).toBeNull()
  })

  test('getUrlParameterValue returns null if the URL throws an error', () => {
    jest.spyOn(window, 'URL').mockImplementationOnce(() => {
      throw new Error('Problem with URL!')
    })
    expect(location.getUrlParameterValue('blah')).toBeNull()
  })
})
