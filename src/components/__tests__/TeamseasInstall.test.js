/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'src/utils/testHelpers/componentTesting'
import localStorageMgr from 'src/utils/local-storage'
import { getTestIdSelector, flushAllPromises } from 'src/utils/test-utils'
import InstallButton from 'src/components/InstallButton'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import { act } from 'react-dom/test-utils'
import Helmet from 'react-helmet'

jest.mock('src/utils/local-storage')
jest.mock('src/utils/redirect')
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

describe('teamseas page', () => {
  it('renders without error', () => {
    const SeasPageWithTheme = require('../TeamSeas.Install').default
    shallow(<SeasPageWithTheme {...getMockProps()} />)
  })

  it('noindexes the page if it is a vanity URL', () => {
    const SeasPageWithTheme = require('../TeamSeas.Install').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    const mockProps = getMockProps()
    mockProps.pageContext = { referrer: { id: 123 } }
    mount(<SeasPageWithTheme {...mockProps} />)

    const symbols = Helmet.peek().meta.toComponent()
    expect(
      symbols.filter(
        (tag) => tag.props.name === 'robots' && tag.props.content === 'noindex'
      )
    ).toHaveLength(1)
  })

  it('indexes the page if it is not a vanity URL', () => {
    const SeasPageWithTheme = require('../TeamSeas.Install').default

    // Gatsby will pass a referrer in the pageContext prop if it's
    // a page created for a vanity referrer URL.
    mount(<SeasPageWithTheme {...getMockProps()} />)

    const symbols = Helmet.peek().meta.toComponent()
    expect(
      symbols.filter(
        (tag) => tag.props.name === 'robots' && tag.props.content === 'noindex'
      )
    ).toHaveLength(0)
  })

  it('stores the referrer ID in local storage when it is a vanity URL', () => {
    const SeasPageWithTheme = require('../TeamSeas.Install').default

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
    const SeasPageWithTheme = require('../TeamSeas.Install').default
    const mockProps = getMockProps()
    mockProps.pageContext = {}
    mount(<SeasPageWithTheme {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not show referral copy when it is not a vanity URL', () => {
    const SeasPageWithTheme = require('../TeamSeas.Install').default
    const mockProps = getMockProps()
    mockProps.pageContext = {}
    const wrapper = mount(<SeasPageWithTheme {...mockProps} />)
    expect(wrapper.find(getTestIdSelector('referral-text')).exists()).toBe(
      false
    )
  })

  it('stores the referrer ID in local storage when it is included as a URL parameter', () => {
    const SeasPageWithTheme = require('../TeamSeas.Install').default

    const { getUrlParameterValue } = require('src/utils/location')
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
    const SeasPageWithTheme = require('../TeamSeas.Install').default

    const { getUrlParameterValue } = require('src/utils/location')
    getUrlParameterValue.mockReturnValue(null)

    mount(<SeasPageWithTheme {...getMockProps()} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not store a referrer ID in local storage when the URL param referrer ID value is not an integer', () => {
    const SeasPageWithTheme = require('../TeamSeas.Install').default

    const { getUrlParameterValue } = require('src/utils/location')
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
    const SeasPageWithTheme = require('../TeamSeas.Install').default
    const { getUrlParameterValue } = require('src/utils/location')
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

  it('the InstallButton onBeforeInstall sets the "Tab V4 enabled" flag in local storage and the cause id', () => {
    const TeamSeasPageWithTheme = require('../TeamSeas.Install').default
    const { getUrlParameterValue } = require('src/utils/location')
    getUrlParameterValue.mockReturnValue(null)

    const wrapper = mount(<TeamSeasPageWithTheme {...getMockProps()} />)
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
    const TeamSeasPageWithTheme = require('../TeamSeas.Install').default
    const { getUrlParameterValue } = require('src/utils/location')
    getUrlParameterValue.mockReturnValue(null)
    const wrapper = mount(<TeamSeasPageWithTheme {...getMockProps()} />)
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
})
