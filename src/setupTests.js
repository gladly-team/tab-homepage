/* eslint-env jest */
/* globals global */

// Used in package.json Jest configuration
// and run before tests

import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

// Initialize Enzyme
configure({ adapter: new Adapter() })

// https://github.com/gatsbyjs/gatsby/issues/5622#issuecomment-393751580
global.graphql = jest.fn()

// TODO: catch problematic warnings.
//
// // Force warnings to fail Jest tests.
// // https://github.com/facebook/jest/issues/6121#issuecomment-444269677
// const { error } = console
//
// // eslint-disable-next-line func-names
// console.error = function (message, ...args) {
//   error.apply(console, args) // keep default behaviour
//   throw message instanceof Error ? message : new Error(message)
// }
