/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import localStorageMgr from 'utils/local-storage'

jest.mock('utils/local-storage')
jest.mock('utils/location')

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

    // Gatsby will pass a referrer in the pathContext prop if it's
    // a page created for a vanity referrer URL.
    shallow(<IndexPage pathContext={{ referrer: { id: 123 } }} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      123
    )
  })

  it('does not store a referrer ID in local storage when it is not a vanity URL', () => {
    const IndexPage = require('../index').default
    shallow(<IndexPage pathContext={{}} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the referrer ID in local storage when it is included as a URL parameter', () => {
    const IndexPage = require('../index').default

    const getUrlParameterValue = require('utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue('234')

    shallow(<IndexPage />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      234
    )
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
    getUrlParameterValue.mockReturnValue('hello')

    shallow(<IndexPage />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })
})
