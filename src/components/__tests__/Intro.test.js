/* eslint-env jest */
import React from 'react'
import { mount, shallow } from 'enzyme'
import localStorageMgr from 'src/utils/local-storage'
import catsData from 'src/data/causes/cats.json'
import Markdown from 'src/components/Markdown'
import Typography from '@mui/material/Typography'
import InstallButton from 'src/components/InstallButton'

jest.mock('src/utils/local-storage')
jest.mock('src/utils/redirect')
jest.mock('src/utils/location')
jest.mock('src/utils/navigation')
const getMockProps = () => ({
  introData: catsData.data.sections.TFACIntro,
  causeId: catsData.data.causeId,
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('intro component', () => {
  it('renders without error', () => {
    const Intro = require('../Intro').default
    shallow(<Intro {...getMockProps()} />)
  })

  it('the InstallButton onBeforeInstall sets the "Tab V4 enabled" flag in local storage and the cause id', () => {
    const Intro = require('../Intro').default
    const getUrlParameterValue =
      require('src/utils/location').getUrlParameterValue
    getUrlParameterValue.mockReturnValue(null)

    const wrapper = mount(<Intro {...getMockProps()} />)
    const callback = wrapper.find(InstallButton).first().prop('onBeforeInstall')
    callback()
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.isTabV4Enabled',
      'true'
    )
    expect(localStorageMgr.setItem).toHaveBeenCalledWith(
      'tab.newUser.causeId',
      'CA6A5C2uj'
    )
  })

  it('renders correct step text', () => {
    const Intro = require('../Intro').default
    var mockProps = getMockProps()
    var introComponent = shallow(<Intro {...mockProps} />)

    var step1 = introComponent.find(Markdown).at(1)
    expect(step1.props().children).toEqual(mockProps.introData.img1Subtext)
    var step2 = introComponent.find(Markdown).at(2)
    expect(step2.props().children).toEqual(mockProps.introData.img2Subtext)
    var step3 = introComponent.find(Markdown).at(3)
    expect(step3.props().children).toEqual(mockProps.introData.img3Subtext)
  })

  //TODO: Add test for step images

  it('renders correct title and subtitle', () => {
    const Intro = require('../Intro').default
    var mockProps = getMockProps()
    var introComponent = shallow(<Intro {...mockProps} />)

    var titleMarkdown = introComponent.find(Typography).first()
    expect(titleMarkdown.text()).toEqual(mockProps.introData.title)
    var subtitleMarkdown = introComponent.find(Markdown).first()
    expect(subtitleMarkdown.props().children).toEqual(
      mockProps.introData.subtitle
    )
  })
})
