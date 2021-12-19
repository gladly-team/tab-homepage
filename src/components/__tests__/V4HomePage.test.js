/* eslint-env jest */
import React from 'react'
import { shallow, mount } from 'enzyme'
import localStorageMgr from 'src/utils/local-storage'
import data from 'src/data/causes/cats.json'
data.data.sections.Financials.pdfs = [
  {
    quarter: 1,
    year: 2021,
    pdfUrl: '/financials/2021-Q1.pdf',
    img: data.data.sections.Financials.q1Img,
  },
  {
    quarter: 2,
    year: 2021,
    pdfUrl: '/financials/2021-Q2.pdf',
    img: data.data.sections.Financials.q2Img,
  },
  {
    quarter: 4,
    year: 2020,
    pdfUrl: '/financials/2020-Q4.pdf',
    img: data.data.sections.Financials.q4Img,
  },
  {
    quarter: 3,
    year: 2020,
    pdfUrl: '/financials/2020-Q3.pdf',
    img: data.data.sections.Financials.q3Img,
  },
]
jest.mock('src/utils/local-storage')
jest.mock('src/utils/redirect')
jest.mock('src/utils/location')
jest.mock('src/utils/navigation')
const getMockProps = () => ({
  location: {
    pathname: '/',
  },
  pageContext: {
    data: data.data,
  },
})

afterEach(() => {
  jest.clearAllMocks()
  localStorageMgr.clear()
})

describe('teamseas page', () => {
  it('renders without error', () => {
    const HomePageWrapper = require('../V4HomePage').default
    shallow(<HomePageWrapper {...getMockProps()} />)
  })

  it('stores the referrer ID in local storage when it is a vanity URL', () => {
    const HomePageWrapper = require('../V4HomePage').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    const mockProps = getMockProps()
    mockProps.pageContext = { ...mockProps.pageContext, referrer: { id: 123 } }
    mount(<HomePageWrapper {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      123
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when it is not a vanity URL', () => {
    const HomePageWrapper = require('../V4HomePage').default
    const mockProps = getMockProps()
    mount(<HomePageWrapper {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the referrer ID in local storage when it is included as a URL parameter', () => {
    const HomePageWrapper = require('../V4HomePage').default

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

    mount(<HomePageWrapper {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      234
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const HomePageWrapper = require('../V4HomePage').default

    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<HomePageWrapper {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not store a referrer ID in local storage when the URL param referrer ID value is not an integer', () => {
    const HomePageWrapper = require('../V4HomePage').default

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

    mount(<HomePageWrapper {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the referring user in local storage when it is included as a URL parameter', () => {
    const HomePageWrapper = require('../V4HomePage').default
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

    mount(<HomePageWrapper {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringUser',
      'bobert'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const HomePageWrapper = require('../V4HomePage').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<HomePageWrapper {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })
})
