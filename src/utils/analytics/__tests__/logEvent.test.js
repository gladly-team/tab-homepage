/* eslint-env jest */
/* globals setImmediate */

// import fbq from '../facebook-analytics'
import ga from '../google-analytics'

jest.mock('../facebook-analytics')
jest.mock('../google-analytics')

afterEach(() => {
  jest.clearAllMocks()
})

describe('logEvent', () => {
  test('downloadButtonClick resolves when GA calls the hitCallback', async () => {
    expect.assertions(2)

    var hitCallback
    ga.mockImplementation((action, options) => {
      hitCallback = options.hitCallback
    })

    const downloadButtonClick = require('../logEvent').downloadButtonClick
    const promise = downloadButtonClick()
    promise.done = false
    promise.then(() => {
      promise.done = true
    })

    // Flush all promises
    await new Promise(resolve => setImmediate(resolve))

    expect(promise.done).toBe(false)

    // Mock firing the GA hitCallback
    hitCallback()

    // Flush all promises
    await new Promise(resolve => setImmediate(resolve))

    expect(promise.done).toBe(true)
  })

  test('downloadButtonClick resolves after some time if GA does not call the hitCallback', async () => {
    expect.assertions(2)

    jest.useFakeTimers()

    const downloadButtonClick = require('../logEvent').downloadButtonClick
    const promise = downloadButtonClick()
    promise.done = false
    promise.then(() => {
      promise.done = true
    })

    // Advance timers, but not past the timeout value.
    jest.advanceTimersByTime(50)

    // Flush all promises
    await new Promise(resolve => setImmediate(resolve))

    expect(promise.done).toBe(false)

    // Advance timers past the timeout value.
    jest.advanceTimersByTime(2000)

    // Flush all promises
    await new Promise(resolve => setImmediate(resolve))

    expect(promise.done).toBe(true)
  })
})
