import { useState, useEffect } from 'react'
import moment from 'moment'
import { isChromaticEnv } from '../utils/featureFlags'

// These must match the new tab page's numbers.
// Eventually call the API instead of hard-coding.
const MONEY_RAISED = 1057100.0
const MONEY_RAISED_UPDATE_TIME = moment('2021-01-07T16:30:00.000Z')
const DOLLARS_PER_DAY_RATE = 700.0

const useMoneyRaised = () => {
  const calculateMoneyRaised = () => {
    const secsInDay = 60 * 60 * 24
    const now = moment()
    const diff = now.diff(MONEY_RAISED_UPDATE_TIME, 'seconds')
    const daysDiff = diff / secsInDay
    if (isChromaticEnv()) {
      return MONEY_RAISED
    }
    return MONEY_RAISED + daysDiff * DOLLARS_PER_DAY_RATE
  }

  const initialMoneyRaised = calculateMoneyRaised()
  const [moneyRaised, setMoneyRaised] = useState(initialMoneyRaised)
  const [timer, setTimer] = useState(null)

  const setCounter = () => {
    const secondsInDay = 60 * 60 * 24
    // Recalculate based on time that elapsed since the base amount.
    const secondsPerPenny = secondsInDay / DOLLARS_PER_DAY_RATE / 100

    // Set an interval to add a penny to the money raised.
    if (!(secondsPerPenny <= 0)) {
      var millisecondsPerPenny = Math.round(Math.abs(secondsPerPenny) * 1000)
      if (!isChromaticEnv()) {
        setTimer(
          window.setInterval(
            () => setMoneyRaised((old) => old + 0.01),
            millisecondsPerPenny
          )
        )
      }
    }
  }

  useEffect(() => {
    setCounter()
    return function cleanup() {
      window.clearInterval(timer)
    }
  }, [])

  return moneyRaised
}

export default useMoneyRaised
