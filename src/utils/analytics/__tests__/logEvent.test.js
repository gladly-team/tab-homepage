/* eslint-env jest */

import fbq from '../facebook-analytics'

jest.mock('../facebook-analytics')

afterEach(() => {
  jest.clearAllMocks()
})

describe('logEvent', () => {
  test('downloadButtonClick resolves and fires fbq', async () => {
    expect.assertions(1)
    const { downloadButtonClick } = require('../logEvent')
    downloadButtonClick()
    expect(fbq).toHaveBeenCalled()
  })
})
