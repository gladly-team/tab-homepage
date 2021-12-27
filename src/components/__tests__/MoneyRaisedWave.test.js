/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
const getMockProps = () => ({
  color: '#ffffff',
})

describe('MoneyRaisedWave component', () => {
  it('renders without error', () => {
    const MoneyRaisedWave = require('../MoneyRaisedWave').default
    shallow(<MoneyRaisedWave {...getMockProps()} />)
  })

  it('sets the wave color correctly according to props', async () => {
    const mockProps = getMockProps()
    const MoneyRaisedWave = require('../MoneyRaisedWave').default
    const wrapper = shallow(<MoneyRaisedWave {...mockProps} />)

    expect(wrapper.find('path').first().prop('fill')).toEqual(mockProps.color)
  })
})
