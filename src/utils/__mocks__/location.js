/* eslint-env jest */
import { mockWindowLocation } from 'utils/test-utils'

export const getLocation = jest.fn(() => mockWindowLocation())
