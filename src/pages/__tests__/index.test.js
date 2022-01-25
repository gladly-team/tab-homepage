/* eslint-env jest */

import React from 'react'
import { mount, shallow } from 'enzyme'
import localStorageMgr from 'src/utils/local-storage'
import { getAbsoluteURL } from 'src/utils/navigation'
import Helmet from 'react-helmet'

jest.mock('src/utils/local-storage')
jest.mock('src/utils/location')
jest.mock('src/utils/navigation')
Helmet.canUseDOM = false

const getMockProps = () => ({
  location: {
    pathname: '/',
  },
  pageContext: {},
})

afterEach(() => {
  jest.clearAllMocks()
  localStorageMgr.clear()
  Helmet.rewind()
})

describe('index page', () => {
  it('renders without error', () => {
    const IndexPage = require('../index').default
    shallow(<IndexPage {...getMockProps()} />)
  })

  it('noindexes the page if it is a vanity URL', () => {
    const Index = require('../index').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    const mockProps = getMockProps()
    mockProps.pageContext = { referrer: { id: 123 } }
    mount(<Index {...mockProps} />)

    const symbols = Helmet.peek().meta.toComponent()
    expect(
      symbols.filter(
        (tag) => tag.props.name === 'robots' && tag.props.content === 'noindex'
      )
    ).toHaveLength(1)
  })

  it('indexes the page if it is not a vanity URL', () => {
    const Index = require('../index').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    mount(<Index {...getMockProps()} />)

    const symbols = Helmet.peek().meta.toComponent()
    expect(
      symbols.filter(
        (tag) => tag.props.name === 'robots' && tag.props.content === 'noindex'
      )
    ).toHaveLength(0)
  })

  it('stores the referrer ID in local storage when it is a vanity URL', () => {
    const IndexPage = require('../index').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    const mockProps = getMockProps()
    mockProps.pageContext = { referrer: { id: 123 } }
    shallow(<IndexPage {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      123
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when it is not a vanity URL', () => {
    const IndexPage = require('../index').default
    const mockProps = getMockProps()
    mockProps.pageContext = {}
    shallow(<IndexPage {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the referrer ID in local storage when it is included as a URL parameter', () => {
    const IndexPage = require('../index').default

    const { getUrlParameterValue } = require('src/utils/location')
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'r':
          return '234'
        default:
          return null
      }
    })

    shallow(<IndexPage {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      234
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const IndexPage = require('../index').default

    const { getUrlParameterValue } = require('src/utils/location')
    getUrlParameterValue.mockReturnValue(null)

    shallow(<IndexPage {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not store a referrer ID in local storage when the URL param referrer ID value is not an integer', () => {
    const IndexPage = require('../index').default

    const { getUrlParameterValue } = require('src/utils/location')
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'r':
          return 'hello'
        default:
          return null
      }
    })

    shallow(<IndexPage {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('sets the canonical URL', () => {
    const IndexPage = require('../index').default
    getAbsoluteURL.mockReturnValue('https://somewebsite.com/')
    const wrapper = shallow(<IndexPage {...getMockProps()} />)
    const elem = wrapper.find('link[rel="canonical"]')
    expect(elem.exists()).toBe(true)
    expect(elem.prop('href')).toBe('https://somewebsite.com/')
  })

  it('stores the referring user in local storage when it is included as a URL parameter', () => {
    const IndexPage = require('../index').default
    const { getUrlParameterValue } = require('src/utils/location')
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'u':
          return 'bobert'
        default:
          return null
      }
    })

    shallow(<IndexPage {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringUser',
      'bobert'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })
})
