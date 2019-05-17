/* eslint-env jest */

import React from 'react'
// import { shallow } from 'enzyme'
import { createShallow } from '@material-ui/core/test-utils'
import Helmet from 'react-helmet'

const props = {
  theme: {
    palette: {
      foo: 'bar',
    },
  },
}

// To handle testing when using withTheme
// https://material-ui.com/guides/testing/
let shallow
beforeEach(() => {
  shallow = createShallow({ dive: true })
})

describe('financials page', () => {
  it('renders without error', () => {
    const NotFoundPage = require('../404').default
    shallow(<NotFoundPage {...props} />)
  })

  it('sets the page title using Helmet', () => {
    const NotFoundPage = require('../404').default
    const wrapper = shallow(<NotFoundPage {...props} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Missing page')
  })

  it('sets the open graph title', () => {
    const NotFoundPage = require('../404').default
    const wrapper = shallow(<NotFoundPage {...props} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Oops! No page here.')
  })

  it('sets the open graph description', () => {
    const NotFoundPage = require('../404').default
    const wrapper = shallow(<NotFoundPage {...props} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe('This page seems to be missing.')
  })
})
