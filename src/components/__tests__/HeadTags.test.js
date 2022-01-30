/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import Helmet from 'react-helmet'

jest.mock('src/img/opengraph-img.png', () => '/static/some-image.png')

const getMockProps = () => ({
  favicon: 'http://example.com/some/favicon.png',
  title: 'My Example Site',
  titleTemplate: '% - Some Template',
  ogTitle: 'Check this out!',
  ogDescription: 'A description here!',
  ogImage: 'http://example.com/some/img.png',
  keywords: 'here, are, keywords',
  twitterHandle: '@example',
  pageURL: 'http://example.com/page/',
})

describe('index layout page', () => {
  it('renders without error', () => {
    const HeadTags = require('src/components/HeadTags').default
    shallow(<HeadTags {...getMockProps()} />)
  })

  it('sets the canonical URL', () => {
    const HeadTags = require('src/components/HeadTags').default
    const wrapper = shallow(<HeadTags {...getMockProps()} />)
    const elem = wrapper.find('link[rel="canonical"]')
    expect(elem.prop('href')).toBe('http://example.com/page/')
  })

  it('sets the default page title using Helmet', () => {
    const HeadTags = require('src/components/HeadTags').default
    const wrapper = shallow(<HeadTags {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('titleTemplate')).toBe('% - Some Template')
  })

  it('sets the titleTemplate using Helmet', () => {
    const HeadTags = require('src/components/HeadTags').default
    const wrapper = shallow(<HeadTags {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('defaultTitle')).toBe('My Example Site')
  })

  it('sets the open graph title to the call-to-action text', () => {
    const HeadTags = require('src/components/HeadTags').default
    const wrapper = shallow(<HeadTags {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Check this out!')
  })

  it('sets the open graph description', () => {
    const HeadTags = require('src/components/HeadTags').default
    const wrapper = shallow(<HeadTags {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe('A description here!')
  })

  it('sets the open graph image', () => {
    const HeadTags = require('src/components/HeadTags').default
    const wrapper = shallow(<HeadTags {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:image"]')
    expect(elem.prop('content')).toBe('http://example.com/some/img.png')
  })
})
