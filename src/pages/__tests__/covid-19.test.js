/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'
import Layout from 'src/components/Layout'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'

jest.mock('src/components/InstallButton')
jest.mock('src/utils/redirect')

const getMockProps = () => ({
  location: {
    pathname: '/foo/',
  },
})

describe('"COVID-19" page', () => {
  it('renders without error', () => {
    const Covid19Page = require('../covid-19').default
    shallow(<Covid19Page {...getMockProps()} />)
  })

  it('sets the page title using Helmet', () => {
    const Covid19Page = require('../covid-19').default
    const wrapper = shallow(<Covid19Page {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Support COVID-19 Relief for Free')
  })

  it('sets the open graph title', () => {
    const Covid19Page = require('../covid-19').default
    const wrapper = shallow(<Covid19Page {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Support COVID-19 Relief for Free')
  })

  it('sets the open graph description', () => {
    const Covid19Page = require('../covid-19').default
    const wrapper = shallow(<Covid19Page {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe(
      'To support COVID-19 relief, we are raising money for organizations that help those affected.'
    )
  })

  it('renders the Layout component with "brand=tab"', () => {
    const Covid19Page = require('../covid-19').default
    const wrapper = shallow(<Covid19Page {...getMockProps()} />)
    expect(wrapper.find(Layout).prop('brand')).toEqual('tab')
  })

  it('includes two install buttons', () => {
    const Covid19Page = require('../covid-19').default
    const wrapper = shallow(<Covid19Page {...getMockProps()} />)
    expect(wrapper.find(InstallButton).length).toEqual(2)
  })

  it('the InstallButton onUnsupportedBrowserInstallClick sends the user to the homepage', () => {
    const Covid19Page = require('../covid-19').default
    const wrapper = shallow(<Covid19Page {...getMockProps()} />)
    const callback = wrapper
      .find(InstallButton)
      .first()
      .prop('onUnsupportedBrowserInstallClick')
    callback()
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })
})
