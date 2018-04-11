/**
 * Return a CSS selector string for a 'data-test-id' attribute
 * @param {string} testId - The test ID value
 * @return {string} The CSS selector to select an element with
 *   data-test-id=`testId`
 */
export const getTestIdSelector = testId => {
  return `[data-test-id="${testId}"]`
}
