/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

describe('MoneyRaised', () => {
  it('renders without error', () => {
    const MoneyRaised = require('../MoneyRaised').default
    shallow(<MoneyRaised to={'/'} />)
  })
})
