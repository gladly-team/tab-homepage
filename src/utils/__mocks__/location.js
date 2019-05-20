/* eslint-env jest */
import { mockWindowLocation } from 'src/utils/test-utils'

const mockLocationUtils = jest.genMockFromModule('../location')

mockLocationUtils.getLocation = jest.fn(() => mockWindowLocation())

module.exports = mockLocationUtils
