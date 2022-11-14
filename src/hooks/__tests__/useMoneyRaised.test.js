/* eslint-env jest */

import { renderHook } from '@testing-library/react-hooks'
import { isChromaticEnv } from '../../utils/featureFlags'

jest.mock('../../utils/featureFlags')
jest.useFakeTimers()
const setInterval = jest.spyOn(window, 'setInterval')

afterEach(() => {
  jest.clearAllMocks()
})

describe('useMoneyRaised', () => {
  it('works without without error', () => {
    const useMoneyRaised = require('../useMoneyRaised').default
    renderHook(() => useMoneyRaised())
  })

  it('does not advance in chromatic environment', () => {
    isChromaticEnv.mockReturnValue(true)
    const useMoneyRaised = require('../useMoneyRaised').default
    let moneyRaised
    renderHook(() => (moneyRaised = useMoneyRaised()))
    expect(setInterval).not.toHaveBeenCalled()
    expect(moneyRaised).toEqual(1487105.0)
  })

  it('advances in non-chromatic environment', () => {
    isChromaticEnv.mockReturnValue(false)
    const useMoneyRaised = require('../useMoneyRaised').default
    let moneyRaised
    renderHook(() => (moneyRaised = useMoneyRaised()))
    expect(setInterval).toHaveBeenCalled()
    expect(moneyRaised).not.toEqual(1487105.0)
  })
})
