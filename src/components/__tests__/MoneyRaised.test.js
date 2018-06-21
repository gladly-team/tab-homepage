/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

describe('MoneyRaised', () => {
  it('renders without error', () => {
    const MoneyRaised = require('../MoneyRaised').default
    shallow(<MoneyRaised />)
  })

  it('calls onLoaded prop when the component mounts', () => {
    const MoneyRaised = require('../MoneyRaised').default
    const onLoadedCallback = jest.fn()
    shallow(<MoneyRaised onLoaded={onLoadedCallback} />)
    expect(onLoadedCallback).toHaveBeenCalledTimes(1)
  })
})
