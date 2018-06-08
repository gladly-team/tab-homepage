/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

describe('index page', () => {
  it('renders without error', () => {
    const IndexPage = require('../index').default
    shallow(<IndexPage to={'/'} />)
  })
})
