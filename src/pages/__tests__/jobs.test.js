/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'

const getMockProps = () => ({
  location: {
    pathname: '/foo/',
  },
})

describe('jobs page', () => {
  it('renders without error', () => {
    const JobsPage = require('../jobs').default
    shallow(<JobsPage {...getMockProps()} />)
  })

  it('sets the page title using Helmet', () => {
    const JobsPage = require('../jobs').default
    const wrapper = shallow(<JobsPage {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Jobs')
  })

  it('sets the open graph title', () => {
    const JobsPage = require('../jobs').default
    const wrapper = shallow(<JobsPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Jobs at Tab for a Cause')
  })

  it('sets the open graph description', () => {
    const JobsPage = require('../jobs').default
    const wrapper = shallow(<JobsPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe(
      'Check out open jobs at a purpose-driven, challenging, and fun startup!'
    )
  })
})
