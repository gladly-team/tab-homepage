/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import MoneyRaised from 'src/components/MoneyRaised'

jest.mock('src/components/MoneyRaised')

describe('MoneyRaisedDisplay', () => {
  it('renders without error', () => {
    const MoneyRaisedDisplay = require('../MoneyRaisedDisplay').default
    shallow(<MoneyRaisedDisplay />)
  })

  it('only shows after the money raised has appeared', () => {
    const MoneyRaisedDisplay = require('../MoneyRaisedDisplay').default
    const wrapper = shallow(<MoneyRaisedDisplay />)
    expect(wrapper.first().prop('style').visibility).toBe('hidden')
    const MoneyRaisedInstance = wrapper.find(MoneyRaised).first()
    MoneyRaisedInstance.props().onLoaded()
    wrapper.update()
    expect(wrapper.first().prop('style').visibility).toBe('visible')
  })

  it('does not render anything if passed in a null moneyRaised value', () => {
    const MoneyRaisedDisplay = require('../MoneyRaisedDisplay').default
    const wrapper = shallow(<MoneyRaisedDisplay moneyRaised={null} />)
    expect(wrapper.isEmptyRender()).toBe(true)
  })
})
