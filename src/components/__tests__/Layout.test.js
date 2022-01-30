/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import HeadTags from 'src/components/HeadTags'

jest.mock('src/components/HeadTags')
jest.mock('src/utils/navigation')

const getMockProps = () => ({
  brand: 'tab',
  children: null,
  location: {
    pathname: '/',
  },
})

describe('index layout page', () => {
  it('renders without error', () => {
    const Layout = require('src/components/Layout').default
    shallow(<Layout {...getMockProps()} />)
  })

  it('passes the absolute page URL to HeadTags', () => {
    const Layout = require('src/components/Layout').default
    const wrapper = shallow(<Layout {...getMockProps()} />)
    const elem = wrapper.find(HeadTags)
    expect(elem.prop('pageURL')).toBe('https://example.com/')
  })
  it('renders the Header component', () => {
    const Layout = require('src/components/Layout').default
    const wrapper = shallow(<Layout {...getMockProps()} />)
    expect(wrapper.find(Header).exists()).toBe(true)
  })

  it('passes the "brand" value to the Header component', () => {
    const Layout = require('src/components/Layout').default
    const mockProps = getMockProps()
    mockProps.brand = 'tab'
    const wrapper = shallow(<Layout {...mockProps} />)
    expect(wrapper.find(Header).prop('brand')).toEqual('tab')
    wrapper.setProps({ brand: 'search' })
    expect(wrapper.find(Header).prop('brand')).toEqual('search')
  })

  it('renders the Footer component', () => {
    const Layout = require('src/components/Layout').default
    const wrapper = shallow(<Layout {...getMockProps()} />)
    expect(wrapper.find(Footer).exists()).toBe(true)
  })
})
