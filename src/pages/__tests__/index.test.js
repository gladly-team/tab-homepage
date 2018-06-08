/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import localStorageMgr from 'utils/local-storage'

jest.mock('utils/local-storage')

afterEach(() => {
  jest.clearAllMocks()
  localStorageMgr.clear()
})

describe('index page', () => {
  it('renders without error', () => {
    const IndexPage = require('../index').default
    shallow(<IndexPage />)
  })

  it('stores the referrer in local storage when it is a vanity URL', () => {
    const IndexPage = require('../index').default

    // Gatsby will pass a referrer in the pathContext prop if it's
    // a page created for a vanity referrer URL.
    shallow(<IndexPage pathContext={{ referrer: { id: 123 } }} />)
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.referralData.referringChannel',
      123
    )
  })

  it('does not call local storage when it is not a vanity URL', () => {
    const IndexPage = require('../index').default
    shallow(<IndexPage pathContext={{}} />)
    expect(localStorageMgr.setItem).not.toHaveBeenCalled()
  })
})
