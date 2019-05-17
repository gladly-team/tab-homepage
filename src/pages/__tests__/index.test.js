/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import localStorageMgr from 'utils/local-storage'
import { getAbsoluteURL } from 'utils/navigation'

jest.mock('utils/local-storage')
jest.mock('utils/location')
jest.mock('utils/navigation')

afterEach(() => {
  jest.clearAllMocks()
  localStorageMgr.clear()
})

describe('index page', () => {
  it('renders without error', () => {
    const IndexPage = require('../index').default
    shallow(<IndexPage />)
  })

  it('stores the referrer ID in local storage when it is a vanity URL', () => {
    const IndexPage = require('../index').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    shallow(<IndexPage pageContext={{ referrer: { id: 123 } }} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      123
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when it is not a vanity URL', () => {
    const IndexPage = require('../index').default
    shallow(<IndexPage pageContext={{}} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the referrer ID in local storage when it is included as a URL parameter', () => {
    const IndexPage = require('../index').default

    const getUrlParameterValue = require('utils/location').getUrlParameterValue
    getUrlParameterValue.mockImplementation(param => {
      switch (param) {
        case 'r':
          return '234'
        default:
          return null
      }
    })

    shallow(<IndexPage />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      234
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const IndexPage = require('../index').default

    const getUrlParameterValue = require('utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    shallow(<IndexPage />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not store a referrer ID in local storage when the URL param referrer ID value is not an integer', () => {
    const IndexPage = require('../index').default

    const getUrlParameterValue = require('utils/location').getUrlParameterValue
    getUrlParameterValue.mockImplementation(param => {
      switch (param) {
        case 'r':
          return 'hello'
        default:
          return null
      }
    })

    shallow(<IndexPage />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('sets the canonical URL', () => {
    const IndexPage = require('../index').default
    getAbsoluteURL.mockReturnValue('https://somewebsite.com/')
    const wrapper = shallow(<IndexPage />)
    const elem = wrapper.find('link[rel="canonical"]')
    expect(elem.exists()).toBe(true)
    expect(elem.prop('href')).toBe('https://somewebsite.com/')
  })

  it('stores the referring user in local storage when it is included as a URL parameter', () => {
    const IndexPage = require('../index').default
    const getUrlParameterValue = require('utils/location').getUrlParameterValue
    getUrlParameterValue.mockImplementation(param => {
      switch (param) {
        case 'u':
          return 'bobert'
        default:
          return null
      }
    })

    shallow(<IndexPage />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringUser',
      'bobert'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const IndexPage = require('../index').default
    const getUrlParameterValue = require('utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    shallow(<IndexPage />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })
})
