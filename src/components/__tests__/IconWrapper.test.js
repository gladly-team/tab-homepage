/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

describe('IconWrapper', () => {
  it('renders without error', () => {
    const IconWrapper = require('../IconWrapper').default
    const hoverStyle = {}
    const style = {}
    shallow(
      <IconWrapper hoverStyle={hoverStyle} style={style}>
        <span>some icon elem</span>
      </IconWrapper>
    )
  })

  it('uses hoverStyle on hover', () => {
    const IconWrapper = require('../IconWrapper').default
    const hoverStyle = {
      color: 'red',
    }
    const style = {
      color: 'blue',
      background: '#000',
    }
    const wrapper = shallow(
      <IconWrapper hoverStyle={hoverStyle} style={style}>
        <span>some icon elem</span>
      </IconWrapper>
    )
    expect(
      wrapper
        .find('span')
        .first()
        .prop('style')
    ).toEqual({
      color: 'blue',
      background: '#000',
    })
    wrapper.first().simulate('mouseenter')
    expect(
      wrapper
        .find('span')
        .first()
        .prop('style')
    ).toEqual({
      color: 'red',
      background: '#000',
    })
  })
})
