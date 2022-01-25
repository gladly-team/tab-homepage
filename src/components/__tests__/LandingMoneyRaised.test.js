/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import seasData from 'src/data/causes/seas.json'
import MoneyRaisedDisplay from '../MoneyRaisedDisplay'

const getMockProps = () => ({
  moneyRaisedData: seasData.data.sections.moneyRaised,
})

describe('landing money raised component', () => {
  it('renders without error', () => {
    const LandingMoneyRaised = require('../LandingMoneyRaised').default
    shallow(<LandingMoneyRaised {...getMockProps()} />)
  })

  it('renders a MoneyRaisedDisplay', () => {
    const LandingMoneyRaised = require('../LandingMoneyRaised').default
    const wrapper = shallow(<LandingMoneyRaised {...getMockProps()} />)
    expect(wrapper.find(MoneyRaisedDisplay)).toHaveLength(1)
  })
})
