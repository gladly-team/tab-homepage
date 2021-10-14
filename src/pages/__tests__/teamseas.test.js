/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import localStorageMgr from 'src/utils/local-storage'
import { getTestIdSelector } from 'src/utils/test-utils'
jest.mock('src/utils/local-storage')
jest.mock('src/utils/redirect')
jest.mock('src/utils/location')
jest.mock('src/utils/navigation')
const getMockProps = () => ({
  location: {
    pathname: '/',
  },
  pageContext: {},
})

afterEach(() => {
  jest.clearAllMocks()
  localStorageMgr.clear()
})

describe('teamseas page', () => {
  it('renders without error', () => {
    const SeasPageWithTheme = require('../teamseas').default
    shallow(<SeasPageWithTheme {...getMockProps()} />)
  })

  it('stores the referrer ID in local storage when it is a vanity URL', () => {
    const SeasPageWithTheme = require('../teamseas').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    const mockProps = getMockProps()
    mockProps.pageContext = { referrer: { id: 123 } }
    mount(<SeasPageWithTheme {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      123
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when it is not a vanity URL', () => {
    const SeasPageWithTheme = require('../teamseas').default
    const mockProps = getMockProps()
    mockProps.pageContext = {}
    mount(<SeasPageWithTheme {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not show referral copy when it is not a vanity URL', () => {
    const SeasPageWithTheme = require('../teamseas').default
    const mockProps = getMockProps()
    mockProps.pageContext = {}
    const wrapper = mount(<SeasPageWithTheme {...mockProps} />)
    expect(wrapper.find(getTestIdSelector('referral-text')).exists()).toBe(
      false
    )
  })

  it('stores the referrer ID in local storage when it is included as a URL parameter', () => {
    const SeasPageWithTheme = require('../teamseas').default

    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'r':
          return '234'
        default:
          return null
      }
    })

    mount(<SeasPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      234
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const SeasPageWithTheme = require('../teamseas').default

    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<SeasPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not store a referrer ID in local storage when the URL param referrer ID value is not an integer', () => {
    const SeasPageWithTheme = require('../teamseas').default

    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'r':
          return 'hello'
        default:
          return null
      }
    })

    mount(<SeasPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the referring user in local storage when it is included as a URL parameter', () => {
    const SeasPageWithTheme = require('../teamseas').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'u':
          return 'bobert'
        default:
          return null
      }
    })

    mount(<SeasPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringUser',
      'bobert'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const SeasPageWithTheme = require('../teamseas').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<SeasPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })
})
