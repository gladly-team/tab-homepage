/* eslint-env jest */

import React from 'react'
import { mount } from 'src/utils/testHelpers/componentTesting'
import seasData from 'src/data/causes/seas.json'

const getMockProps = () => ({
  securityData: seasData.data.sections.Security,
})

describe('landing money raised component', () => {
  it('renders without error', () => {
    const SecuritySection = require('../SecuritySection').default
    mount(<SecuritySection {...getMockProps()} />)
  })
})
