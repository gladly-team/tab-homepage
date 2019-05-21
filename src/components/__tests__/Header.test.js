/* eslint-env jest */

import React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Link } from 'gatsby'

jest.mock('gatsby')

afterEach(() => {
  jest.clearAllMocks()
})

describe('Header', () => {
  it('renders without error', () => {
    const Header = require('../Header').default
    shallow(<Header />)
  })

  it('defaults to navigates to home on header icon click', () => {
    const Header = require('../Header').default
    const wrapper = mount(<Header />)
    expect(
      wrapper
        .find(Link)
        .first()
        .prop('to')
    ).toEqual('/')
  })

  it('calls onHeaderLogoClick on header icon click', () => {
    const Header = require('../Header').default
    const mockOnHeaderLogoClick = jest.fn()
    const wrapper = shallow(
      <Header onHeaderLogoClick={mockOnHeaderLogoClick} />
    )
    const mockPreventDefault = jest.fn()
    wrapper
      .find(Link)
      .first()
      .simulate('click', { preventDefault: mockPreventDefault })

    // Make sure we prevent the default Link from navigating
    expect(mockPreventDefault).toHaveBeenCalled()

    expect(mockOnHeaderLogoClick).toHaveBeenCalled()
  })

  it('matches expected snapshot', function() {
    const Header = require('../Header').default
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
