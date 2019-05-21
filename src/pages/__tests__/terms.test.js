/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'

const getMockProps = () => ({
  location: {
    pathname: '/foo/',
  },
})

describe('terms page', () => {
  it('renders without error', () => {
    const TermsPage = require('../terms').default
    shallow(<TermsPage {...getMockProps()} />)
  })

  it('sets the page title using Helmet', () => {
    const TermsPage = require('../terms').default
    const wrapper = shallow(<TermsPage {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Terms')
  })

  it('sets the open graph title', () => {
    const TermsPage = require('../terms').default
    const wrapper = shallow(<TermsPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Terms of Service - Tab for a Cause')
  })

  it('sets the open graph description', () => {
    const TermsPage = require('../terms').default
    const wrapper = shallow(<TermsPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe(
      'Read our Terms of Service. Tab for a Cause raises money for charity with every browser tab you open.'
    )
  })
})
