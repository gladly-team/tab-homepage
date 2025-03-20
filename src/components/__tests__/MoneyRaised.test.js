/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import { isChromaticEnv } from '../../utils/featureFlags'

jest.mock('../../utils/featureFlags')
jest.useFakeTimers()
const setInterval = jest.spyOn(window, 'setInterval')

afterEach(() => {
  jest.clearAllMocks()
})

const MONEY_RAISED_HISTORICAL = 1900000.0

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
    const moneyRaisedComponent = shallow(<MoneyRaised />)
    expect(setInterval).not.toHaveBeenCalled()
    expect(moneyRaisedComponent.state().moneyRaised).toEqual(
      MONEY_RAISED_HISTORICAL
    )
  })

  it('advances in non-chromatic environment', () => {
    isChromaticEnv.mockReturnValue(false)
    const MoneyRaised = require('../MoneyRaised').default
    const moneyRaisedComponent = shallow(<MoneyRaised />)
    expect(setInterval).toHaveBeenCalled()
    expect(moneyRaisedComponent.state().moneyRaised).not.toEqual(
      MONEY_RAISED_HISTORICAL
    )
  })
})
