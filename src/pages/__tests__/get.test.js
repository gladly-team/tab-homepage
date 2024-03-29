/* eslint-env jest */
import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import redirect, { directToAppExtension } from 'src/utils/redirect'
import localStorageMgr from 'src/utils/local-storage'
import { STORAGE_REFERRAL_DATA_REFERRING_CHANNEL } from 'src/utils/constants'

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
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
  })

  it('redirects to the proper browser extension', () => {
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    directToAppExtension.mockReturnValue('nba.com')
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith('nba.com')
  })

  it('stores the referrer ID in local storage if it exists', () => {
    expect.assertions(1)
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    mockProps.location.search = '?src=hi&r=1357&foo'
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
      1357
    )
  })

  it('does not call local storage if there is no referrer ID', () => {
    expect.assertions(1)
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    mockProps.location.search = '?foo=bar'
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })

  it('does not call local storage if the referrer ID is not a number', () => {
    expect.assertions(1)
    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    mockProps.location.search = '?r=hello'
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })
})
