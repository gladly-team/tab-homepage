/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import localStorageMgr from 'src/utils/local-storage'
import { getTestIdSelector } from 'src/utils/test-utils'
import InstallButton from 'src/components/InstallButton'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import { act } from 'react-dom/test-utils'
import { seasLandingProps } from 'src/utils/landingConstants'
import HeadTags from 'src/components/HeadTags'
import seasHeaderImg from 'src/img/seas/headerImage.png'
import catsHeaderImg from 'src/img/cats/headerImg.svg'
import { STORAGE_CATS_CAUSE_ID } from 'src/utils/constants'
import Typography from '@material-ui/core/Typography'
jest.mock('src/utils/local-storage')
jest.mock('src/utils/redirect')
jest.mock('src/utils/location')
jest.mock('src/utils/navigation')
const getMockProps = () => ({
  location: {
    pathname: '/',
  },
  pageContext: {},
  ...seasLandingProps,
})

afterEach(() => {
  jest.clearAllMocks()
  localStorageMgr.clear()
})

const flushAllPromises = async () => {
  // eslint-disable-next-line no-undef
  await new Promise((resolve) => setImmediate(resolve))
}

describe('teamseas page', () => {
  it('renders without error', () => {
    const Landing = require('../Landing').default
    shallow(<Landing {...getMockProps()} />)
  })

  it('stores the referrer ID in local storage when it is a vanity URL', () => {
    const Landing = require('../Landing').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    const mockProps = getMockProps()
    mockProps.pageContext = { referrer: { id: 123 } }
    mount(<Landing {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      123
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when it is not a vanity URL', () => {
    const Landing = require('../Landing').default
    const mockProps = getMockProps()
    mockProps.pageContext = {}
    mount(<Landing {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not show referral copy when it is not a vanity URL', () => {
    const Landing = require('../Landing').default
    const mockProps = getMockProps()
    mockProps.pageContext = {}
    const wrapper = mount(<Landing {...mockProps} />)
    expect(wrapper.find(getTestIdSelector('referral-text')).exists()).toBe(
      false
    )
  })

  it('stores the referrer ID in local storage when it is included as a URL parameter', () => {
    const Landing = require('../Landing').default

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

    mount(<Landing {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      234
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const Landing = require('../Landing').default

    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<Landing {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not store a referrer ID in local storage when the URL param referrer ID value is not an integer', () => {
    const Landing = require('../Landing').default

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

    mount(<Landing {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the referring user in local storage when it is included as a URL parameter', () => {
    const Landing = require('../Landing').default
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

    mount(<Landing {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringUser',
      'bobert'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const Landing = require('../Landing').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<Landing {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('the InstallButton onBeforeInstall sets the "Tab V4 enabled" flag in local storage and the cause id', () => {
    const Landing = require('../Landing').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    const wrapper = mount(<Landing {...getMockProps()} />)
    const callback = wrapper.find(InstallButton).first().prop('onBeforeInstall')
    callback()
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.isTabV4Enabled',
      'true'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.causeId',
      'SGa6zohkY'
    )
  })

  it('the InstallButton onUnsupportedBrowserInstallClick shows unsupported browser model', async () => {
    const Landing = require('../Landing').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)
    const wrapper = mount(<Landing {...getMockProps()} />)
    await act(async () => {
      wrapper
        .find(InstallButton)
        .first()
        .prop('onUnsupportedBrowserInstallClick')()
      await flushAllPromises()
      wrapper.update()
    })
    const dialog = wrapper.find(UnsupportedBrowserDialog)
    expect(dialog.prop('open')).toBe(true)
  })

  it('sets the head correctly according to the cause', async () => {
    const Landing = require('../Landing').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    const mockProps = getMockProps()
    const wrapper = mount(<Landing {...mockProps} />)
    const headTags = wrapper.find(HeadTags).first()
    const { causeData } = mockProps
    const {
      headTitle,
      headTitleTemplate,
      headOgTitle,
      headOgDescription,
      headOgImgURLAbsolute,
      headKeywords,
    } = causeData
    expect(headTags.props()).toMatchObject({
      title: headTitle,
      titleTemplate: headTitleTemplate,
      ogTitle: headOgTitle,
      ogDescription: headOgDescription,
      ogImage: headOgImgURLAbsolute,
      keywords: headKeywords,
    })
  })

  it('sets the header image correctly according to the cause data', async () => {
    const Landing = require('../Landing').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    let mockProps = getMockProps()
    const wrapper = mount(<Landing {...mockProps} />)
    const image = wrapper.find('img').first()
    expect(image.prop('src')).toEqual(seasHeaderImg)

    mockProps.causeData.causeId = STORAGE_CATS_CAUSE_ID
    const newWrapper = mount(<Landing {...mockProps} />)
    const newImage = newWrapper.find('img').first()
    expect(newImage.prop('src')).toEqual(catsHeaderImg)
  })

  it('sets the title correctly according to the cause data', async () => {
    const mockProps = getMockProps()
    const Landing = require('../Landing').default
    const wrapper = mount(<Landing {...mockProps} />)
    const typography = wrapper
      .find('[data-test-id="title-wrapper"]')
      .find(Typography)
      .first()
    expect(typography.text()).toEqual(mockProps.causeData.title)
  })

  it('sets the subtitle correctly according to the cause data', async () => {
    const mockProps = getMockProps()
    const Landing = require('../Landing').default
    const wrapper = mount(<Landing {...mockProps} />)
    const typography = wrapper
      .find('[data-test-id="title-wrapper"]')
      .find(Typography)
      .at(1)
    expect(typography.text()).toEqual(mockProps.causeData.subtitle)
  })
})
