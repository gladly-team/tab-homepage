/* eslint-env jest */
import React from 'react'
import { shallow, mount } from 'enzyme'
import localStorageMgr from 'src/utils/local-storage'
import data from 'src/data/causes/cats.json'
import InstallButton from 'src/components/InstallButton'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import { act } from 'react-dom/test-utils'
import Helmet from 'react-helmet'
import Snackbar from '@mui/material/Snackbar'
import Footer from 'src/components/FooterV2'
import GoogleChrome from 'mdi-material-ui/GoogleChrome'
import { flushAllPromises } from 'src/utils/test-utils'

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
jest.mock('gatsby')

Helmet.canUseDOM = false

const getMockProps = () => ({
  location: {
    pathname: '/',
  },
  pageContext: {
    data: {
      path: data.path,
      ...data.data,
    },
  },
})

afterEach(() => {
  jest.clearAllMocks()
  localStorageMgr.clear()
  Helmet.rewind()
})

describe('home page', () => {
  it('renders without error', () => {
    const HomePageWrapper = require('../V4HomePage').default
    shallow(<HomePageWrapper {...getMockProps()} />)
  })

  it('the InstallButton onBeforeInstall sets the "Tab V4 enabled" flag in local storage and the cause id', () => {
    const HomePageWrapper = require('../V4HomePage').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    const wrapper = mount(<HomePageWrapper {...getMockProps()} />)
    const callback = wrapper.find(InstallButton).first().prop('onBeforeInstall')
    callback()
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.isTabV4Enabled',
      'true'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.causeId',
      'CA6A5C2uj'
    )
  })

  it('the InstallButton onUnsupportedBrowserInstallClick shows unsupported browser model', async () => {
    const HomePageWrapper = require('../V4HomePage').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)
    const wrapper = mount(<HomePageWrapper {...getMockProps()} />)
    await act(async () => {
      wrapper
        .find(InstallButton)
        .first()
        .prop('onUnsupportedBrowserInstallClick')()
      await flushAllPromises()
      wrapper.update()
    })
    const dialog = wrapper.find(UnsupportedBrowserDialog).first()
    expect(dialog.prop('open')).toBe(true)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const HomePageWrapper = require('../V4HomePage').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<HomePageWrapper {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('indexes the page if it is not a vanity URL or a preview page', () => {
    const HomePageWrapper = require('../V4HomePage').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    mount(<HomePageWrapper {...getMockProps()} />)

    const symbols = Helmet.peek().meta.toComponent()
    expect(
      symbols.filter(
        (tag) => tag.props.name === 'robots' && tag.props.content === 'noindex'
      )
    ).toHaveLength(0)
  })

  it('redirects if cause is enabled and is preview page', () => {
    const HomePageWrapper = require('../V4HomePage').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    const mockProps = getMockProps()
    mockProps.pageContext.data.causeLaunch = {
      enabled: true,
      preview: true,
    }
    mockProps.pageContext.previewPage = {
      path: '/test/',
    }
    mount(<HomePageWrapper {...mockProps} />)

    const { navigate } = require('gatsby')
    expect(navigate).toHaveBeenCalledWith('/test/')
  })

  it('noindexes the page if it is a preview page', () => {
    const HomePageWrapper = require('../V4HomePage').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    const mockProps = getMockProps()
    mockProps.pageContext.data.causeLaunch = {
      enabled: false,
      preview: true,
    }
    mockProps.pageContext.previewPage = {
      path: '/test/',
    }
    mount(<HomePageWrapper {...mockProps} />)

    const symbols = Helmet.peek().meta.toComponent()
    expect(
      symbols.filter(
        (tag) => tag.props.name === 'robots' && tag.props.content === 'noindex'
      )
    ).toHaveLength(1)
  })

  it('noindexes the page if it is a vanity URL', () => {
    const HomePageWrapper = require('../V4HomePage').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    const mockProps = getMockProps()
    mockProps.pageContext = { ...mockProps.pageContext, referrer: { id: 123 } }
    mount(<HomePageWrapper {...mockProps} />)

    const symbols = Helmet.peek().meta.toComponent()
    expect(
      symbols.filter(
        (tag) => tag.props.name === 'robots' && tag.props.content === 'noindex'
      )
    ).toHaveLength(1)
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

  it('does not show snackbar if page enabled, or if no page preview', () => {
    const HomePageWrapper = require('../V4HomePage').default
    const mockProps = getMockProps()
    mockProps.pageContext.data.causeLaunch = {
      enabled: false,
      preview: false,
    }

    const wrapper = shallow(<HomePageWrapper {...mockProps} />)
    expect(wrapper.find(Snackbar).first().prop('open')).toEqual(false)
  })

  it('shows snackbar if preview enabled and cause not launched', () => {
    const HomePageWrapper = require('../V4HomePage').default
    const mockProps = getMockProps()
    mockProps.pageContext.data.causeLaunch = {
      enabled: false,
      preview: true,
    }
    mockProps.pageContext.previewPage = {
      path: '/test/',
    }

    const wrapper = shallow(<HomePageWrapper {...mockProps} />)
    expect(wrapper.find(Snackbar).first().prop('open')).toEqual(true)
  })

  it('calls the onBeforeInstall prop on click and works if it is async', async () => {
    expect.assertions(2)
    const HomePageWrapper = require('../V4HomePage').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    const wrapper = mount(<HomePageWrapper {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
    wrapper.find(Footer).find(GoogleChrome).simulate('click')
    wrapper.update()
    expect(localStorageMgr.setItem).toHaveBeenCalled()
  })
})
