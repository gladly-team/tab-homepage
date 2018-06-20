/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'
jest.mock('img/opengraph-img.png', () => '/static/some-image.png')

const props = {
  children: () => {},
  data: {
    site: {
      siteMetadata: {
        domain: 'example.com',
        descriptionLong: 'This is a very long example description',
        descriptionShort: 'A shorter description',
        keywords: 'here, are, keywords',
        metaTagCallToAction: 'Check this out!',
        title: 'My Example Site',
        twitterHandle: '@example',
      },
    },
  },
  location: {
    pathname: '/',
  },
}

describe('index layout page', () => {
  it('renders without error', () => {
    const IndexLayout = require('../index').default
    shallow(<IndexLayout {...props} />)
  })

  it('sets the canonical URL', () => {
    const IndexLayout = require('../index').default
    const wrapper = shallow(<IndexLayout {...props} />)
    const elem = wrapper.find('link[rel="canonical"]')
    expect(elem.prop('href')).toBe('https://tab.gladly.io/')
  })

  it('sets the default page title using Helmet', () => {
    const IndexLayout = require('../index').default
    const wrapper = shallow(<IndexLayout {...props} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('defaultTitle')).toBe('My Example Site')
  })

  it('sets the open graph title to the call-to-action text', () => {
    const IndexLayout = require('../index').default
    const wrapper = shallow(<IndexLayout {...props} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Check this out!')
  })

  it('sets the open graph description', () => {
    const IndexLayout = require('../index').default
    const wrapper = shallow(<IndexLayout {...props} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe('A shorter description')
  })

  it('sets the open graph image', () => {
    const IndexLayout = require('../index').default
    const wrapper = shallow(<IndexLayout {...props} />)
    const elem = wrapper.find('meta[property="og:image"]')
    expect(elem.prop('content')).toBe(
      'https://tab.gladly.io/static/some-image.png'
    )
  })
})
