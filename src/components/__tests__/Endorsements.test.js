/* eslint-env jest */

import React from 'react'
import { mount } from 'src/utils/testHelpers/componentTesting'
import data from 'src/data/causes/cats.json'
import { Typography } from '@mui/material'
import { getTestIdSelector } from 'src/utils/test-utils'

jest.mock('src/utils/local-storage')
const getMockProps = () => ({
  endorsementsData: data.data.sections.Endorsements,
  causeId: 'SGa6zohkY',
})

// We suppress a console error of "Function components cannot be
// given refs". We need react-slick to forward the ref:
// https://github.com/akiran/react-slick/issues/1690
// https://github.com/akiran/react-slick/issues/1821

describe('Endorsements Section', () => {
  it('renders without error', () => {
    expect.assertions(1)

    // Suppress expected error
    jest.spyOn(console, 'error').mockImplementationOnce(() => {})

    const Endorsements = require('../Endorsements').default
    expect(() => mount(<Endorsements {...getMockProps()} />)).not.toThrow()
  })

  it('sets the title correctly', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error').mockImplementationOnce(() => {})
    const Endorsements = require('../Endorsements').default
    const wrapper = mount(<Endorsements {...getMockProps()} />)
    const title = wrapper.find(Typography).first()
    expect(title.prop('children')).toBe(getMockProps().endorsementsData.title)
  })

  it('sets the header quote correctly', () => {
    expect.assertions(1)

    // Suppress expected error
    jest.spyOn(console, 'error').mockImplementationOnce(() => {})

    const Endorsements = require('../Endorsements').default
    const wrapper = mount(<Endorsements {...getMockProps()} />)
    const title = wrapper.find(Typography).at(2)
    expect(title.prop('children')).toBe(
      getMockProps().endorsementsData.headerQuote
    )
  })

  it('does not show large quote or endorser if no endorsement data provided', () => {
    expect.assertions(2)

    // Suppress expected error
    jest.spyOn(console, 'error').mockImplementationOnce(() => {})

    const Endorsements = require('../Endorsements').default
    const mockProps = getMockProps()
    delete mockProps.endorsementsData.quote
    const wrapper = mount(<Endorsements {...mockProps} />)
    expect(wrapper.find(getTestIdSelector('endorser-picture')).exists()).toBe(
      false
    )
    expect(wrapper.find(getTestIdSelector('endorser-quote')).exists()).toBe(
      false
    )
  })
})
