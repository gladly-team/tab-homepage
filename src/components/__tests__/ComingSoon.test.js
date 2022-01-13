/* eslint-env jest */

import React from 'react'
import { mount, shallow } from 'enzyme'
import Typography from '@material-ui/core/Typography'
import data from 'src/data/causes/cats.json'
import Countdown from 'react-countdown'
import { mockDate } from 'src/utils/test-utils'
import { isChromaticEnv } from '../../utils/featureFlags'
import { getTestIdSelector } from 'src/utils/test-utils'

jest.mock('../../utils/featureFlags')

afterEach(() => {
  mockDate.off()
})

const getMockProps = () => ({
  location: {
    pathname: '/',
  },
  pageContext: {
    data: {
      path: data.path,
      ...data.data,
    },
  },
})

describe('ComingSoon page component', () => {
  it('renders without error', () => {
    const ComingSoon = require('../ComingSoon').default
    shallow(<ComingSoon {...getMockProps()} />)
  })

  it('sets the title correctly according to the cause data', async () => {
    const mockProps = getMockProps()
    const ComingSoon = require('../ComingSoon').default
    const wrapper = mount(<ComingSoon {...mockProps} />)
    const typography = wrapper
      .find(getTestIdSelector('coming-soon-body'))
      .at(0)
      .find(Typography)
      .at(0)
    expect(typography.text()).toEqual(
      mockProps.pageContext.data.causeLaunch.comingSoonTitle
    )
  })

  it('sets the date in Countdown Component correctly according to the cause data', async () => {
    const mockProps = getMockProps()
    mockProps.pageContext.data.causeLaunch.launchDate =
      '2022-10-29T13:00:00.000'
    const ComingSoon = require('../ComingSoon').default
    const wrapper = mount(<ComingSoon {...mockProps} />)
    const countdown = wrapper.find(Countdown).first()
    expect(countdown.props().date).toEqual(
      new Date(mockProps.pageContext.data.causeLaunch.launchDate)
    )
  })

  it('does not render a countdown if theres no date', async () => {
    const mockProps = getMockProps()
    const ComingSoon = require('../ComingSoon').default
    const wrapper = shallow(<ComingSoon {...mockProps} />)
    expect(wrapper.find(Countdown).exists()).toBe(false)
  })

  it('does not render a countdown if the start date is in the past', async () => {
    mockDate.on()
    const mockProps = getMockProps()
    mockProps.pageContext.data.causeLaunch.launchDate =
      '2022-10-29T13:00:00.000'
    const ComingSoon = require('../ComingSoon').default
    const wrapper = shallow(<ComingSoon {...mockProps} />)
    expect(wrapper.find(Countdown).exists()).toBe(false)
  })

  it('sets the sets a fixed date in chromatic environment', async () => {
    mockDate.on('2017-06-22T01:13:28.000Z', {
      mockCurrentTimeOnly: true,
    })
    isChromaticEnv.mockReturnValue(true)
    const mockProps = getMockProps()
    mockProps.pageContext.data.causeLaunch.launchDate =
      '2022-10-29T13:00:00.000'
    const ComingSoon = require('../ComingSoon').default
    const wrapper = mount(<ComingSoon {...mockProps} />)
    const countdown = wrapper.find(Countdown).first()
    expect(countdown.props().date).toEqual(
      new Date(new Date().getTime() + 86400000)
    )
  })
})
