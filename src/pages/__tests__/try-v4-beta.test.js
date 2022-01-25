/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import Helmet from 'react-helmet'
import Layout from 'src/components/Layout'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'
import localStorageMgr from 'src/utils/local-storage'

jest.mock('src/components/InstallButton')
jest.mock('src/utils/redirect')
jest.mock('src/utils/local-storage')

const getMockProps = () => ({
  location: {
    pathname: '/foo/',
  },
})

describe('"Try V4 Beta" page', () => {
  it('renders without error', () => {
    const TryV4BetaPage = require('../try-v4-beta').default
    shallow(<TryV4BetaPage {...getMockProps()} />)
  })

  it('sets the page title using Helmet', () => {
    const TryV4BetaPage = require('../try-v4-beta').default
    const wrapper = shallow(<TryV4BetaPage {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Try Tab V4 Beta')
  })

  it('sets the open graph title', () => {
    const TryV4BetaPage = require('../try-v4-beta').default
    const wrapper = shallow(<TryV4BetaPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Try Tab V4 Beta')
  })

  it('sets the open graph description', () => {
    const TryV4BetaPage = require('../try-v4-beta').default
    const wrapper = shallow(<TryV4BetaPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe(
      'Test out the latest, in-progress version of Tab for a Cause.'
    )
  })

  it('renders the Layout component with "brand=tab"', () => {
    const TryV4BetaPage = require('../try-v4-beta').default
    const wrapper = shallow(<TryV4BetaPage {...getMockProps()} />)
    expect(wrapper.find(Layout).prop('brand')).toEqual('tab')
  })

  it('includes an install button', () => {
    const TryV4BetaPage = require('../try-v4-beta').default
    const wrapper = shallow(<TryV4BetaPage {...getMockProps()} />)
    expect(wrapper.find(InstallButton).length).toEqual(1)
  })

  it('the InstallButton onBeforeInstall sets the "Tab V4 enabled" flag in local storage', () => {
    const TryV4BetaPage = require('../try-v4-beta').default
    const wrapper = shallow(<TryV4BetaPage {...getMockProps()} />)
    const callback = wrapper.find(InstallButton).first().prop('onBeforeInstall')
    callback()
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.isTabV4Enabled',
      'true'
    )
  })

  it('the InstallButton onUnsupportedBrowserInstallClick sends the user to the homepage', () => {
    const TryV4BetaPage = require('../try-v4-beta').default
    const wrapper = shallow(<TryV4BetaPage {...getMockProps()} />)
    const callback = wrapper
      .find(InstallButton)
      .first()
      .prop('onUnsupportedBrowserInstallClick')
    callback()
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })
})
