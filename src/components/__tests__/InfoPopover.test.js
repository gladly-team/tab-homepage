/* eslint-env jest */

import React from 'react'
import { mount, shallow } from 'enzyme'
import Popover from '@mui/material/Popover'
const getMockProps = () => ({
  open: false,
  onClose: () => {},
  anchorEl: mount(<div />),
})

describe('Info Popover', () => {
  it('renders without error', () => {
    const InfoPopover = require('src/components/InfoPopover').default
    const mockProps = getMockProps()
    shallow(<InfoPopover {...mockProps} />)
  })

  it('passes the "open" prop to Popover', () => {
    const InfoPopover = require('src/components/InfoPopover').default
    const mockProps = getMockProps()
    const wrapper = shallow(<InfoPopover {...mockProps} />)
    wrapper.setProps({ open: true })
    expect(wrapper.find(Popover).prop('open')).toBe(true)
    wrapper.setProps({ open: false })
    expect(wrapper.find(Popover).prop('open')).toBe(false)
  })

  it('passes the "anchorElement" prop to Popover', () => {
    const InfoPopover = require('src/components/InfoPopover').default
    const mockProps = getMockProps()
    const wrapper = shallow(<InfoPopover {...mockProps} />)
    const mockAnchorEl = mount(<div id="blah" />)
    wrapper.setProps({ anchorEl: mockAnchorEl })
    expect(wrapper.find(Popover).prop('anchorEl')).toBe(mockAnchorEl)
  })

  it('passes extra props to Popover', () => {
    const InfoPopover = require('src/components/InfoPopover').default
    const mockProps = getMockProps()
    mockProps.foo = 'blah'
    const wrapper = shallow(<InfoPopover {...mockProps} />)
    expect(wrapper.find(Popover).prop('foo')).toEqual('blah')
  })
})
