/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import localStorageMgr from 'src/utils/local-storage'
import InstallButton from 'src/components/InstallButton'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import { act } from 'react-dom/test-utils'
import seasHeaderImg from 'src/img/seas/headerImage.png'
import catsHeaderImg from 'src/img/cats/headerImg.svg'
import { STORAGE_CATS_CAUSE_ID } from 'src/utils/constants'
import Typography from '@material-ui/core/Typography'
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

const flushAllPromises = async () => {
  // eslint-disable-next-line no-undef
  await new Promise((resolve) => setImmediate(resolve))
}

describe('teamseas page', () => {
  it('renders without error', () => {
    const Landing = require('../Landing').default
    shallow(<Landing {...getMockProps()} />)
  })

  it('the InstallButton onBeforeInstall sets the "Tab V4 enabled" flag in local storage and the cause id', () => {
    const Landing = require('../Landing').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    const wrapper = mount(<Landing {...getMockProps()} />)
    const callback = wrapper.find(InstallButton).first().prop('onBeforeInstall')
    callback()
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.isTabV4Enabled',
      'true'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.causeId',
      'SGa6zohkY'
    )
  })

  it('the InstallButton onUnsupportedBrowserInstallClick shows unsupported browser model', async () => {
    const Landing = require('../Landing').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)
    const wrapper = mount(<Landing {...getMockProps()} />)
    await act(async () => {
      wrapper
        .find(InstallButton)
        .first()
        .prop('onUnsupportedBrowserInstallClick')()
      await flushAllPromises()
      wrapper.update()
    })
    const dialog = wrapper.find(UnsupportedBrowserDialog)
    expect(dialog.prop('open')).toBe(true)
  })

  it('sets the header image correctly according to the cause data', async () => {
    const Landing = require('../Landing').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    let mockProps = getMockProps()
    const wrapper = mount(<Landing {...mockProps} />)
    const image = wrapper.find('img').first()
    expect(image.prop('src')).toEqual(seasHeaderImg)

    mockProps.landingData.causeId = STORAGE_CATS_CAUSE_ID
    const newWrapper = mount(<Landing {...mockProps} />)
    const newImage = newWrapper.find('img').first()
    expect(newImage.prop('src')).toEqual(catsHeaderImg)
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
