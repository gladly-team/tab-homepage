/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import localStorageMgr from 'src/utils/local-storage'

jest.mock('src/utils/local-storage')
jest.mock('src/utils/location')
jest.mock('src/utils/navigation')
jest.mock('src/components/FAQDropDown')
jest.mock('src/components/InfoPopover')
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

describe('cats page', () => {
  it('renders without error', () => {
    const CatsPageWithTheme = require('../cats').default
    shallow(<CatsPageWithTheme {...getMockProps()} />)
  })

  it('stores the referrer ID in local storage when it is a vanity URL', () => {
    const CatsPageWithTheme = require('../cats').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    const mockProps = getMockProps()
    mockProps.pageContext = { referrer: { id: 123 } }
    mount(<CatsPageWithTheme {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      123
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when it is not a vanity URL', () => {
    const CatsPageWithTheme = require('../cats').default
    const mockProps = getMockProps()
    mockProps.pageContext = {}
    mount(<CatsPageWithTheme {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the referrer ID in local storage when it is included as a URL parameter', () => {
    const CatsPageWithTheme = require('../cats').default

    const getUrlParameterValue = require('src/utils/location')
      .getUrlParameterValue
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'r':
          return '234'
        default:
          return null
      }
    })

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      234
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const CatsPageWithTheme = require('../cats').default

    const getUrlParameterValue = require('src/utils/location')
      .getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not store a referrer ID in local storage when the URL param referrer ID value is not an integer', () => {
    const CatsPageWithTheme = require('../cats').default

    const getUrlParameterValue = require('src/utils/location')
      .getUrlParameterValue
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'r':
          return 'hello'
        default:
          return null
      }
    })

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the referring user in local storage when it is included as a URL parameter', () => {
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue = require('src/utils/location')
      .getUrlParameterValue
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'u':
          return 'bobert'
        default:
          return null
      }
    })

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringUser',
      'bobert'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue = require('src/utils/location')
      .getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })
})
