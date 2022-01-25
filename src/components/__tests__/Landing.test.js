/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import localStorageMgr from 'src/utils/local-storage'
import Typography from '@mui/material/Typography'
import seasData from 'src/data/causes/seas.json'

jest.mock('src/utils/local-storage')
jest.mock('src/utils/redirect')
jest.mock('src/utils/location')
jest.mock('src/utils/navigation')
const getMockProps = () => ({
  landingData: seasData.data.sections.landing,
  causeId: seasData.data.causeId,
})

afterEach(() => {
  jest.clearAllMocks()
  localStorageMgr.clear()
})

describe('landing component', () => {
  it('renders without error', () => {
    const Landing = require('../Landing').default
    shallow(<Landing {...getMockProps()} />)
  })

  it('sets the title correctly according to the cause data', async () => {
    const mockProps = getMockProps()
    const Landing = require('../Landing').default
    const wrapper = mount(<Landing {...mockProps} />)
    const typography = wrapper
      .find('[data-test-id="title-wrapper"]')
      .find(Typography)
      .first()
    expect(typography.text()).toEqual(mockProps.landingData.title)
  })

  it('sets the subtitle correctly according to the cause data', async () => {
    const mockProps = getMockProps()
    const Landing = require('../Landing').default
    const wrapper = mount(<Landing {...mockProps} />)
    const typography = wrapper
      .find('[data-test-id="title-wrapper"]')
      .find(Typography)
      .at(1)
    expect(typography.text()).toEqual(mockProps.landingData.subtitle)
  })

  it('sets the wave color correctly according cause data', async () => {
    const mockProps = getMockProps()
    const Landing = require('../Landing').default
    const wrapper = mount(<Landing {...mockProps} />)
    const typography = wrapper
      .find('[data-test-id="title-wrapper"]')
      .find(Typography)
      .at(1)
    expect(typography.text()).toEqual(mockProps.landingData.subtitle)
  })
})
