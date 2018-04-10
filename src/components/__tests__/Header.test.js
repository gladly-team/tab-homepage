import React from 'react'
import { shallow } from 'enzyme'

describe('Header', () => {
  it('renders without error', () => {
    const Header = require('../Header').default
    shallow(<Header />)
  })
})
