/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'src/utils/testHelpers/componentTesting'
import catsData from 'src/data/causes/cats.json'
import Typography from '@mui/material/Typography'

const charityIntroData = catsData.data.sections.charityIntro
const getMockProps = () => ({
  charityIntroData,
})

describe('CharityIntro component', () => {
  it('renders without error', () => {
    const CharityIntro = require('../CharityIntro').default
    shallow(<CharityIntro {...getMockProps()} />)
  })

  it('renders title and subtitle text', () => {
    const CharityIntro = require('../CharityIntro').default
    const wrapper = mount(<CharityIntro {...getMockProps()} />)

    const typography = wrapper.find(Typography)

    expect(typography.at(0).text()).toEqual(charityIntroData.title)
    expect(typography.at(1).text()).toEqual(charityIntroData.subTitle)
  })

  it('renders step text correctly text', () => {
    const CharityIntro = require('../CharityIntro').default
    const wrapper = mount(<CharityIntro {...getMockProps()} />)

    const typography = wrapper.find(Typography)

    for (let i = 0; i < charityIntroData.steps.length; i++) {
      expect(typography.at(i + 2).text()).toEqual(
        charityIntroData.steps[i].text
      )
    }
  })
})
