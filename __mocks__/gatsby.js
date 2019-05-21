/* eslint-env jest */

const React = require('react')
const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName, // eslint-disable-line no-unused-vars
      activeStyle, // eslint-disable-line no-unused-vars
      getProps, // eslint-disable-line no-unused-vars
      innerRef, // eslint-disable-line no-unused-vars
      ref, // eslint-disable-line no-unused-vars
      replace, // eslint-disable-line no-unused-vars
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}
