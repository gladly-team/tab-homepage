/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'
import Layout from 'src/components/Layout'

const getMockProps = () => ({
  location: {
    pathname: '/foo/',
  },
})

describe('jobs page', () => {
  it('renders without error', () => {
    const ContactPage = require('../contact').default
    shallow(<ContactPage {...getMockProps()} />)
  })

  it('sets the page title using Helmet', () => {
    const ContactPage = require('../contact').default
    const wrapper = shallow(<ContactPage {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Contact Us')
  })

  it('sets the open graph title', () => {
    const ContactPage = require('../contact').default
    const wrapper = shallow(<ContactPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Contact Us - Tab for a Cause')
  })

  it('sets the open graph description', () => {
    const ContactPage = require('../contact').default
    const wrapper = shallow(<ContactPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe('Get in touch with Tab for a Cause.')
  })

  it("contains Gladly's address", () => {
    const ContactPage = require('../contact').default
    const wrapper = shallow(<ContactPage {...getMockProps()} />)
    const elem = wrapper
      .find('p')
      .filterWhere(n => n.text().indexOf('400 Concar') > -1)
    expect(elem.length).toBe(1)
  })

  it('renders the Layout component with "brand=all"', () => {
    const ContactPage = require('../contact').default
    const wrapper = shallow(<ContactPage {...getMockProps()} />)
    expect(wrapper.find(Layout).prop('brand')).toEqual('all')
  })
})
