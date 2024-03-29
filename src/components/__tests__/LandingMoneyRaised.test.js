/* eslint-env jest */

import React from 'react'
import { mount } from 'src/utils/testHelpers/componentTesting'
import seasData from 'src/data/causes/seas.json'
import MoneyRaisedDisplay from '../MoneyRaisedDisplay'

const getMockProps = () => ({
  moneyRaisedData: seasData.data.sections.moneyRaised,
})

describe('landing money raised component', () => {
  it('renders without error', () => {
    const LandingMoneyRaised = require('../LandingMoneyRaised').default
    mount(<LandingMoneyRaised {...getMockProps()} />)
  })
})
