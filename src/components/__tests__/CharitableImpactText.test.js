/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import impactTexts from 'src/utils/impactTexts'

jest.mock('src/utils/impactTexts', () => {
  return [
    'preserve oceans',
    'feed children',
    'build libraries',
    'send emergency aid',
    'train entrepreneurs',
    'plant trees',
    'prevent disease',
    'give clean water',
    'protect human rights',
  ]
})

describe('CharitableImpactText', () => {
  it('renders without error', () => {
    const CharitableImpactText = require('../CharitableImpactText').default
    shallow(<CharitableImpactText />)
  })

  it('changes text every ~3 seconds', () => {
    const CharitableImpactText = require('../CharitableImpactText').default
    jest.useFakeTimers()
    const wrapper = shallow(<CharitableImpactText />)
    expect(wrapper.find('span').last().text()).toBe(impactTexts[0])
    jest.advanceTimersByTime(5000)
    wrapper.update()
    expect(wrapper.find('span').last().text()).toBe(impactTexts[1])
  })

  it('changes cycle speed with prop', () => {
    const CharitableImpactText = require('../CharitableImpactText').default
    jest.useFakeTimers()
    const wrapper = shallow(<CharitableImpactText cycleSpeedMs={40} />)
    expect(wrapper.find('span').last().text()).toBe(impactTexts[0])
    jest.advanceTimersByTime(60)
    wrapper.update()
    expect(wrapper.find('span').last().text()).toBe(impactTexts[1])
  })

  it('capitalizes text if "capitalize" prop is true', () => {
    const CharitableImpactText = require('../CharitableImpactText').default
    jest.useFakeTimers()
    const wrapper = shallow(<CharitableImpactText capitalize />)
    expect(wrapper.find('span').last().text()).toBe('Preserve oceans')
  })
})
