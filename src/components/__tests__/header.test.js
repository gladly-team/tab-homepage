import React from 'react'
import { shallow } from 'enzyme'

describe('SparkleComponent', () => {
  it('renders without error', () => {
    const Header = require('../header').default
    shallow(<header />)
  })
})
