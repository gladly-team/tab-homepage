/* eslint-env jest */
import React from 'react'
import { mount } from 'src/utils/testHelpers/componentTesting'
import redirect, { directToAppExtension } from 'src/utils/redirect'
import localStorageMgr from 'src/utils/local-storage'
import { STORAGE_REFERRAL_DATA_REFERRING_CHANNEL } from 'src/utils/constants'
import { act } from 'react-dom/test-utils'

jest.mock('src/utils/redirect')
jest.mock('src/utils/local-storage')

const getMockProps = () => ({
  location: {
    search: '',
  },
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('GetExtensionRedirectPage', () => {
  it('renders without error', () => {
    const GetExtensionRedirectPage = require('../cats/get/intro').default
    const mockProps = getMockProps()
    mount(<GetExtensionRedirectPage {...mockProps} />)
  })

  it('redirects to the proper browser extension', () => {
    const GetExtensionRedirectPage = require('../cats/get/intro').default
    const mockProps = getMockProps()
    jest.useFakeTimers()
    mount(<GetExtensionRedirectPage {...mockProps} />)
    directToAppExtension.mockReturnValue('nba.com')
    act(() => {
      jest.advanceTimersByTime(5000)
    })
    expect(redirect).toHaveBeenCalledWith('nba.com')
  })

  it('stores the referrer ID in local storage if it exists', () => {
    expect.assertions(1)
    const GetExtensionRedirectPage = require('../cats/get/intro').default
    const mockProps = getMockProps()
    mockProps.location.search = '?src=hi&r=1357&foo'
    mount(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
      1357
    )
  })

  it('sets v4 beta enabled to true', () => {
    expect.assertions(1)
    const GetExtensionRedirectPage = require('../cats/get/intro').default
    const mockProps = getMockProps()
    mockProps.location.search = '?foo=bar'
    mount(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.isTabV4Enabled',
      'true'
    )
  })

  it('does not call local storage for referrer if there is no referrer ID', () => {
    expect.assertions(1)
    const GetExtensionRedirectPage = require('../cats/get/intro').default
    const mockProps = getMockProps()
    mockProps.location.search = '?foo=bar'
    mount(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })

  it('does not call local storage for referrer if the referrer ID is not a number', () => {
    expect.assertions(1)
    const GetExtensionRedirectPage = require('../cats/get/intro').default
    const mockProps = getMockProps()
    mockProps.location.search = '?r=hello'
    mount(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledTimes(1)
  })
})
