/* eslint-env jest */
import React from 'react'
import { mount } from 'enzyme'
import SeasPageWithTheme from '../../components/TeamSeas.Install'
import SeasPageComingSoonWithTheme from '../../components/TeamSeas.ComingSoon'
import { showDownloadPage } from '../../utils/featureFlags'

jest.mock('../../utils/featureFlags')
const getMockProps = () => ({
  location: {
    pathname: '/',
  },
  pageContext: {},
})

describe('teamseas page', () => {
  it('renders coming soon page by default', () => {
    showDownloadPage.mockReturnValueOnce(false)
    const SeasPage = require('../teamseas').default
    const wrapper = mount(<SeasPage {...getMockProps()} />)
    expect(wrapper.find(SeasPageComingSoonWithTheme).exists()).toBe(true)
    expect(wrapper.find(SeasPageWithTheme).exists()).toBe(false)
  })

  it('renders coming soon page by default', () => {
    showDownloadPage.mockReturnValueOnce(true)
    const SeasPage = require('../teamseas').default
    const wrapper = mount(<SeasPage {...getMockProps()} />)
    expect(wrapper.find(SeasPageComingSoonWithTheme).exists()).toBe(false)
    expect(wrapper.find(SeasPageWithTheme).exists()).toBe(true)
  })
})
