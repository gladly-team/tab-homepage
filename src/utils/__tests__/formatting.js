/* eslint-env jest */

describe('formatting utils', () => {
  it('comma-formats correctly', () => {
    const { commaFormatted } = require('../formatting')
    expect(commaFormatted('460932.44')).toBe('460,932.44')
    expect(commaFormatted('460932')).toBe('460,932')
    expect(commaFormatted('123456789')).toBe('123,456,789')
    expect(commaFormatted('21')).toBe('21')
    expect(commaFormatted(460932.44)).toBe('460,932.44')
    expect(commaFormatted(0)).toBe('0')

    // Handles bad values
    expect(commaFormatted(undefined)).toBe('0')
    expect(commaFormatted(null)).toBe('0')
  })

  it('formats currency correctly', () => {
    const { currencyFormatted } = require('../formatting')
    expect(currencyFormatted('460932.44')).toBe('460932.44')
    expect(currencyFormatted('460932')).toBe('460932.00')
    expect(currencyFormatted('460932.1')).toBe('460932.10')
    expect(currencyFormatted('460932.1534454239')).toBe('460932.15')
    expect(currencyFormatted('460932.156')).toBe('460932.16')
    expect(currencyFormatted(460932.44)).toBe('460932.44')
    expect(currencyFormatted(0)).toBe('0.00')

    // Handles bad values
    expect(currencyFormatted(undefined)).toBe('0.00')
    expect(currencyFormatted(null)).toBe('0.00')
  })
})
