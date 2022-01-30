/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'

const getMockProps = () => ({
  color: '#ffffff',
  style: { width: '77%' },
})

describe('FooterBlobLeft component', () => {
  it('renders without error', () => {
    const FooterBlobLeft = require('../FooterBlobLeft').default
    shallow(<FooterBlobLeft {...getMockProps()} />)
  })

  it('sets the wave color correctly according to props', async () => {
    const mockProps = getMockProps()
    const FooterBlobLeft = require('../FooterBlobLeft').default
    const wrapper = shallow(<FooterBlobLeft {...mockProps} />)

    expect(wrapper.find('path').first().prop('fill')).toEqual(mockProps.color)
  })

  it('sets the style correctly according to props', async () => {
    const mockProps = getMockProps()
    const FooterBlobLeft = require('../FooterBlobLeft').default
    const wrapper = shallow(<FooterBlobLeft {...mockProps} />)
    expect(wrapper.find('svg').first().prop('style')).toEqual({ width: '77%' })
  })
})
