/* eslint-env jest */

import React from 'react'
import { mount, shallow } from 'enzyme'
import Popover from '@material-ui/core/Popover'
const getMockProps = () => ({
  open: false,
  onClose: () => {},
})

describe('Info Popover', () => {
  it('renders without error', () => {
    const mockDomNode = mount(<div />)
    const InfoPopover = require('src/components/InfoPopover').default
    const mockProps = getMockProps()
    shallow(<InfoPopover {...mockProps} anchorEl={mockDomNode} />)
  })

  xit('passes the "open" prop to Popover', () => {
    const InfoPopover = require('src/components/InfoPopover').default
    const mockProps = getMockProps()
    const wrapper = mount(<InfoPopover {...mockProps} />)
    wrapper.setProps({ open: true })
    expect(wrapper.find(Popover).prop('open')).toBe(true)
    wrapper.setProps({ open: false })
    expect(wrapper.find(Popover).prop('open')).toBe(false)
  })

  xit('passes the "anchorElement" prop to Popover', () => {
    const InfoPopover = require('src/components/InfoPopover').default
    const mockProps = getMockProps()
    const wrapper = mount(<InfoPopover {...mockProps} />)
    const mockAnchorEl = <div id="blah" />
    wrapper.setProps({ anchorEl: mockAnchorEl })
    expect(wrapper.find(Popover).prop('anchorEl')).toBe(mockAnchorEl)
  })

  xit('passes extra props to Popover', () => {
    const InfoPopover = require('src/components/InfoPopover').default
    const mockProps = getMockProps()
    mockProps.foo = 'blah'
    const wrapper = mount(<InfoPopover {...mockProps} />)
    expect(wrapper.find(Popover).prop('foo')).toEqual('blah')
  })
})
