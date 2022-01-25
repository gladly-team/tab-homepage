/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import { Link as GatsbyLink } from 'gatsby'

describe('Link', () => {
  it('renders without error', () => {
    const Link = require('../Link').default
    shallow(<Link to="/" />)
  })

  it('uses GatsbyLink when navigating to a relative URL', () => {
    const Link = require('../Link').default
    const testUrls = ['/', '/some-url/here/', '/123/', '/thing']
    testUrls.forEach((testUrl) => {
      const wrapper = shallow(<Link to={testUrl} />)
      expect(wrapper.find(GatsbyLink).length).toBe(1)
    })
  })

  it('uses anchor elem when navigating to an absolute URL', () => {
    const Link = require('../Link').default
    const testUrls = [
      'https://tab.gladly.io/',
      'localhost:3000/some-url/here/',
      'https://gladly.io',
    ]
    testUrls.forEach((testUrl) => {
      const wrapper = shallow(<Link to={testUrl} />)
      expect(wrapper.find('a').length).toBe(1)
    })
  })

  it('passes style prop to GatsbyLink component', () => {
    const Link = require('../Link').default
    const someStyle = { fontSize: 12, color: '#cdcdcd', textDecoration: 'none' }
    const wrapper = shallow(
      <Link to="/" style={someStyle} hoverStyle={{ color: 'red' }} />
    )
    expect(wrapper.find(GatsbyLink).props().style).toEqual(someStyle)
  })

  it('passes style prop to anchor elem', () => {
    const Link = require('../Link').default
    const someStyle = { fontSize: 12, color: '#cdcdcd', textDecoration: 'none' }
    const wrapper = shallow(
      <Link
        to="https://tab.gladly.io/"
        style={someStyle}
        hoverStyle={{ color: 'red' }}
      />
    )
    expect(wrapper.find('a').props().style).toEqual(someStyle)
  })

  it('uses hoverStyle when hovering (with GatsbyLink)', () => {
    const Link = require('../Link').default
    const someStyle = { fontSize: 12, color: '#cdcdcd' }
    const wrapper = shallow(
      <Link to="/" style={someStyle} hoverStyle={{ color: 'red' }} />
    )
    wrapper.find(GatsbyLink).simulate('mouseenter')
    expect(wrapper.find(GatsbyLink).props().style).toEqual({
      fontSize: 12,
      color: 'red',
      textDecoration: 'none',
    })
  })

  it('uses hoverStyle when hovering (with anchor elem)', () => {
    const Link = require('../Link').default
    const someStyle = { fontSize: 12, color: '#cdcdcd' }
    const wrapper = shallow(
      <Link
        to="https://tab.gladly.io/"
        style={someStyle}
        hoverStyle={{ color: 'red' }}
      />
    )
    wrapper.find('a').simulate('mouseenter')
    expect(wrapper.find('a').props().style).toEqual({
      fontSize: 12,
      color: 'red',
      textDecoration: 'none',
    })
  })
})
