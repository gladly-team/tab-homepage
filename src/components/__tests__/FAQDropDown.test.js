/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-env jest */
import React from 'react'
import { shallow, mount } from 'enzyme'
import InfoPopover from 'src/components/InfoPopover'

const getMockProps = () => ({
  text: <div>hi</div>,
  dropdown: ({ open, onClose, anchorElement }) => (
    <InfoPopover
      open={open}
      anchorEl={anchorElement}
      onClose={onClose}
      style={{
        marginTop: 6,
      }}
    >
      <div>
        <p>good old test</p>
      </div>
    </InfoPopover>
  ),
})

describe('FAQDropdownComponent', () => {
  it('renders without error', () => {
    const FAQDropDown = require('src/components/FAQDropDown').default
    const mockProps = getMockProps()
    shallow(<FAQDropDown {...mockProps} />).dive()
  })

  it('opens on click', () => {
    const FAQDropDown = require('src/components/FAQDropDown').default
    const mockProps = getMockProps()
    const wrapper = mount(<FAQDropDown {...mockProps} />)
    expect(wrapper.find(InfoPopover).props().open).toBe(false)
    wrapper.find('button').childAt(0).simulate('click')
    expect(wrapper.find(InfoPopover).props().open).toBe(true)
  })
})
