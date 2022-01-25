/* eslint-env jest */
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
  const hostToUse = host || 'example.com'
  const urlParamStr = overrides.search || ''
  return {
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
    ...overrides,
  }
}

/**
 * Flush the Promise resolution queue. See:
 * https://github.com/facebook/jest/issues/2157
 * @return {Promise<undefined>}
 */
// See latest:
// https://github.com/facebook/jest/issues/2157#issuecomment-897935688
export const flushAllPromises = async () =>
  new Promise(jest.requireActual('timers').setImmediate)
