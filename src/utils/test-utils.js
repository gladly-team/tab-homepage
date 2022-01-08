/* globals global */

/**
 * Return a CSS selector string for a 'data-test-id' attribute
 * @param {string} testId - The test ID value
 * @return {string} The CSS selector to select an element with
 *   data-test-id=`testId`
 */
export const getTestIdSelector = (testId) => {
  return `[data-test-id="${testId}"]`
}

/**
 * Return a mock window.location object.
 * @param {string} host - The host to use
 * @param {object} overrides - Object of values to change in the
 *   default mock.
 * @return {object} The mock window.location
 */
export const mockWindowLocation = (host = null, overrides = {}) => {
  const hostToUse = host ? host : 'example.com'
  const urlParamStr = overrides.search || ''
  return Object.assign(
    {},
    {
      ancestorOrigins: {},
      assign: () => {},
      hash: '',
      href: `https://${hostToUse}/${urlParamStr}`,
      host: hostToUse,
      hostname: hostToUse,
      origin: `https://${hostToUse}`,
      pathname: '/',
      port: '',
      protocol: 'https:',
      reload: () => {},
      replace: () => {},
      search: '',
    },
    overrides
  )
}

/**
 * Set the global `Date` to always return the same date.
 */
export const mockDate = {}
mockDate.defaultDateISO = '2017-05-19T13:59:46.000Z'

/**
 * Set the global `Date` to always return the same date.
 * @param {string} dateStr - The date string to use in the Date constructor.
 * @param {Object} options - Options for mockDate
 * @param {boolean} options.mockCurrentTimeOnly - If true, only return the
 *   mocked date for Date.now(), but not for other Date instances.
 */
mockDate.on = (dateStr = null, options = {}) => {
  if (!mockDate._origDate) {
    mockDate._origDate = Date
  }

  console.log(dateStr)
  const constantDate = dateStr
    ? new Date(dateStr)
    : new Date(mockDate.defaultDateISO)
  console.log(constantDate)
  const mockCurrentTimeOnly = !!options.mockCurrentTimeOnly

  global.Date = Date
  if (mockCurrentTimeOnly) {
    global.Date = (param) =>
      param ? new mockDate._origDate(param) : constantDate
    global.Date.now = () => constantDate.getTime()
  } else {
    global.Date = () => constantDate
    global.Date.now = () => constantDate.getTime()
  }
}

/**
 * Reset the global `Date` to the native Date object.
 */
mockDate.off = () => {
  global.Date = mockDate._origDate || Date
}
