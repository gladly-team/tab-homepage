/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

jest.mock('src/components/InstallButton')

const getMockProps = () => ({
  location: {
    pathname: '/foo/',
  },
})

describe('"million" page', () => {
  it('renders without error', () => {
    const MillionPage = require('../million').default
    shallow(<MillionPage {...getMockProps()} />)
  })
})
