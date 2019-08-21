/* eslint-env jest */

import React from 'react'
import { mount, shallow } from 'enzyme'
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
})
