/* eslint-env jest */
import React from 'react'
import { mount } from 'src/utils/testHelpers/componentTesting'
import catsData from 'src/data/causes/cats.json'
import Markdown from 'src/components/Markdown'
import Typography from '@mui/material/Typography'

jest.mock('src/utils/redirect')
jest.mock('src/utils/location')
jest.mock('src/utils/navigation')
const getMockProps = () => ({
  missionData: catsData.data.sections.Mission,
  causeId: '123456',
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('mission page', () => {
  it('renders without error', () => {
    const Mission = require('../Mission').default
    mount(<Mission {...getMockProps()} />)
  })

  it('renders correct text, subtitle and body', () => {
    const mockProps = getMockProps()
    const Mission = require('../Mission').default
    const wrapper = mount(<Mission {...mockProps} />)

    const title = wrapper.find(Typography).first()
    expect(title.text()).toEqual(mockProps.missionData.titleText)

    const subtitle = wrapper.find(Typography).at(1)
    expect(subtitle.text()).toEqual(mockProps.missionData.subtitleText)

    const body = wrapper.find(Markdown).first()
    expect(body.props().children).toEqual(mockProps.missionData.bodyText)
  })
})
