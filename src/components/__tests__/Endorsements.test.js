/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import data from 'src/data/causes/cats.json'
import { Typography } from '@material-ui/core'

jest.mock('src/utils/local-storage')
const getMockProps = () => {
  return {
    endorsementsData: data.data.sections.Endorsements,
    causeId: 'SGa6zohkY',
  }
}

describe('Endorsements Section', () => {
  it('renders without error', () => {
    expect.assertions(1)
    const Endorsements = require('../Endorsements').default
    expect(() => shallow(<Endorsements {...getMockProps()} />)).not.toThrow()
  })

  it('sets the title correctly', () => {
    expect.assertions(1)
    const Endorsements = require('../Endorsements').default
    const wrapper = shallow(<Endorsements {...getMockProps()} />)
    const title = wrapper.find(Typography).first()
    expect(title.prop('children')).toBe(getMockProps().endorsementsData.title)
  })

  it('sets the header quote correctly', () => {
    expect.assertions(1)
    const Endorsements = require('../Endorsements').default
    const wrapper = shallow(<Endorsements {...getMockProps()} />)
    const title = wrapper.find(Typography).at(2)
    expect(title.prop('children')).toBe(
      getMockProps().endorsementsData.headerQuote
    )
  })
})
