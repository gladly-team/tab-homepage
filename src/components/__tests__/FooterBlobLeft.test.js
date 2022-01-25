/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

const getMockProps = () => ({
  color: '#ffffff',
  innerClassName: 'test-class',
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

  it('sets the class name correctly according to props', async () => {
    const mockProps = getMockProps()
    const FooterBlobLeft = require('../FooterBlobLeft').default
    const wrapper = shallow(<FooterBlobLeft {...mockProps} />)

    expect(wrapper.find('svg').first().prop('className')).toEqual(
      mockProps.innerClassName
    )
  })
})
