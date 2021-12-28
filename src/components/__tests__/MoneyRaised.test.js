/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import { isChromaticEnv } from '../../utils/featureFlags'

jest.mock('../../utils/featureFlags')
jest.useFakeTimers()
const setInterval = jest.spyOn(window, 'setInterval')

afterEach(() => {
  jest.clearAllMocks()
})

describe('MoneyRaised', () => {
  it('renders without error', () => {
    const MoneyRaised = require('../MoneyRaised').default
    shallow(<MoneyRaised />)
  })

  it('calls onLoaded prop when the component mounts', () => {
    const MoneyRaised = require('../MoneyRaised').default
    const onLoadedCallback = jest.fn()
    shallow(<MoneyRaised onLoaded={onLoadedCallback} />)
    expect(onLoadedCallback).toHaveBeenCalledTimes(1)
  })

  it('does not advance in chromatic environment', () => {
    isChromaticEnv.mockReturnValue(true)
    const MoneyRaised = require('../MoneyRaised').default
    var moneyRaisedComponent = shallow(<MoneyRaised />)
    expect(setInterval).not.toHaveBeenCalled()
    expect(moneyRaisedComponent.state().moneyRaised).toEqual(1057100.0)
  })

  it('advances in non-chromatic environment', () => {
    isChromaticEnv.mockReturnValue(false)
    const MoneyRaised = require('../MoneyRaised').default
    var moneyRaisedComponent = shallow(<MoneyRaised />)
    expect(setInterval).toHaveBeenCalled()
    expect(moneyRaisedComponent.state().moneyRaised).not.toEqual(1057100.0)
  })
})
