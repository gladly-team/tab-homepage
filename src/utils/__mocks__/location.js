/* eslint-env jest */
import { mockWindowLocation } from 'utils/test-utils'

const mockLocationUtils = jest.genMockFromModule('../location')

mockLocationUtils.getLocation = jest.fn(() => mockWindowLocation())

module.exports = mockLocationUtils
