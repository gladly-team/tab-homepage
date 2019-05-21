/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'

const getMockProps = () => ({
  location: {
    pathname: '/foo/',
  },
  theme: {
    palette: {
      foo: 'bar',
    },
  },
})

describe('financials page', () => {
  it('renders without error', () => {
    const NotFoundPage = require('../404').default
    shallow(<NotFoundPage {...getMockProps()} />).dive()
  })

  it('sets the page title using Helmet', () => {
    const NotFoundPage = require('../404').default
    const wrapper = shallow(<NotFoundPage {...getMockProps()} />).dive()
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Missing page')
  })

  it('sets the open graph title', () => {
    const NotFoundPage = require('../404').default
    const wrapper = shallow(<NotFoundPage {...getMockProps()} />).dive()
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Oops! No page here.')
  })

  it('sets the open graph description', () => {
    const NotFoundPage = require('../404').default
    const wrapper = shallow(<NotFoundPage {...getMockProps()} />).dive()
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe('This page seems to be missing.')
  })
})
