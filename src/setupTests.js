/* eslint-env jest */
/* globals global */

// Used in package.json Jest configuration
// and run before tests

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

// Initialize Enzyme
configure({ adapter: new Adapter() })

// https://github.com/gatsbyjs/gatsby/issues/5622#issuecomment-393751580
global.graphql = jest.fn()
