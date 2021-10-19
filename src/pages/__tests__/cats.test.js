/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import localStorageMgr from 'src/utils/local-storage'
import InstallButton from 'src/components/InstallButton'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import { getTestIdSelector } from 'src/utils/test-utils'
import { STORAGE_REFERRAL_DATA_MISSION_ID } from 'src/utils/constants'
import { act } from 'react-dom/test-utils'
jest.mock('src/components/InstallButton')
jest.mock('src/utils/local-storage')
jest.mock('src/utils/redirect')
jest.mock('src/utils/location')
jest.mock('src/utils/navigation')
jest.mock('src/components/FAQDropDown')
jest.mock('src/components/InfoPopover')
jest.mock('src/components/UnsupportedBrowserDialog')
const getMockProps = () => ({
  location: {
    pathname: '/',
  },
  pageContext: {},
})

const flushAllPromises = async () => {
  // eslint-disable-next-line no-undef
  await new Promise((resolve) => setImmediate(resolve))
}

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

  it('does not show referral copy when it is not a vanity URL', () => {
    const CatsPageWithTheme = require('../cats').default
    const mockProps = getMockProps()
    mockProps.pageContext = {}
    const wrapper = mount(<CatsPageWithTheme {...mockProps} />)
    expect(wrapper.find(getTestIdSelector('referral-text')).exists()).toBe(
      false
    )
  })

  it('stores the referrer ID in local storage when it is included as a URL parameter', () => {
    const CatsPageWithTheme = require('../cats').default

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

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      234
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const CatsPageWithTheme = require('../cats').default

    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not shows referral copy when referrer id is not included as a URL parameter', () => {
    const CatsPageWithTheme = require('../cats').default

    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    const wrapper = mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(wrapper.find(getTestIdSelector('referral-text')).exists()).toBe(
      false
    )
  })

  it('does not store a referrer ID in local storage when the URL param referrer ID value is not an integer', () => {
    const CatsPageWithTheme = require('../cats').default

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

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the referring user in local storage when it is included as a URL parameter', () => {
    const CatsPageWithTheme = require('../cats').default
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

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringUser',
      'bobert'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('shows referral copy when user is included as a URL parameter', () => {
    const CatsPageWithTheme = require('../cats').default
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

    const wrapper = mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(wrapper.find(getTestIdSelector('referral-text')).exists()).toBe(true)
  })

  it('does not store a referrer ID in local storage when the referrer ID is not in the URL params', () => {
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('stores the mission id in local storage when it is included as a URL parameter', () => {
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'm':
          return '123456789'
        default:
          return null
      }
    })

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      STORAGE_REFERRAL_DATA_MISSION_ID,
      '123456789'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not store a mission ID in local storage when the mission ID is not in the URL params', () => {
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not show mission copy when it is not a vanity URL', () => {
    const CatsPageWithTheme = require('../cats').default
    const mockProps = getMockProps()
    mockProps.pageContext = {}
    const wrapper = mount(<CatsPageWithTheme {...mockProps} />)
    expect(wrapper.find(getTestIdSelector('mission-text')).exists()).toBe(false)
  })

  it('shows mission copy when user is included as a URL parameter', () => {
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'm':
          return '123456789'
        case 'u':
          return 'bobert'
        default:
          return null
      }
    })

    const wrapper = mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(wrapper.find(getTestIdSelector('mission-text')).exists()).toBe(true)
    expect(wrapper.find(getTestIdSelector('referral-text')).exists()).toBe(
      false
    )
  })

  it('shows mission copy when user is included as a URL parameter and referral id included', () => {
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockImplementation((param) => {
      switch (param) {
        case 'm':
          return '123456789'
        default:
          return null
      }
    })

    const wrapper = mount(<CatsPageWithTheme {...getMockProps()} />)
    expect(wrapper.find(getTestIdSelector('mission-text')).exists()).toBe(true)
  })

  it('the InstallButton onBeforeInstall sets the "Tab V4 enabled" flag in local storage and the cause id', () => {
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    const wrapper = mount(<CatsPageWithTheme {...getMockProps()} />)
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
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)
    const wrapper = mount(<CatsPageWithTheme {...getMockProps()} />)
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

  it('the second InstallButton onUnsupportedBrowserInstallClick shows unsupported browser model', async () => {
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)
    const wrapper = mount(<CatsPageWithTheme {...getMockProps()} />)
    await act(async () => {
      wrapper
        .find(InstallButton)
        .at(1)
        .prop('onUnsupportedBrowserInstallClick')()
      await flushAllPromises()
      wrapper.update()
    })
    const dialog = wrapper.find(UnsupportedBrowserDialog)
    expect(dialog.prop('open')).toBe(true)
  })

  it('the unsupported browser dialog closes on close', async () => {
    const CatsPageWithTheme = require('../cats').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)
    const wrapper = mount(<CatsPageWithTheme {...getMockProps()} />)
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
    await act(async () => {
      dialog.prop('onClose')()
      wrapper.update()
      await flushAllPromises()
      wrapper.update()
    })
    expect(wrapper.find(UnsupportedBrowserDialog).prop('open')).toBe(false)
  })
})
