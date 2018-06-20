/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'

const props = {}

describe('jobs page', () => {
  it('renders without error', () => {
    const TeamPage = require('../team').default
    shallow(<TeamPage {...props} />)
  })

  it('sets the page title using Helmet', () => {
    const TeamPage = require('../team').default
    const wrapper = shallow(<TeamPage {...props} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Team')
  })

  it('sets the open graph title', () => {
    const TeamPage = require('../team').default
    const wrapper = shallow(<TeamPage {...props} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Our Team - Tab for a Cause')
  })

  it('sets the open graph description', () => {
    const TeamPage = require('../team').default
    const wrapper = shallow(<TeamPage {...props} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe('Meet the team behind Tab for a Cause.')
  })
})
