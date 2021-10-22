/* eslint-env jest */
/* globals process */
import React from 'react'
import { mount } from 'enzyme'
import SeasPageWithTheme from '../../components/TeamSeas.Install'
import SeasPageComingSoonWithTheme from '../../components/TeamSeas.ComingSoon'

const getMockProps = () => ({
  location: {
    pathname: '/',
  },
  pageContext: {},
})

describe('teamseas page', () => {
  it('renders coming soon page by default', () => {
    const SeasPage = require('../teamseas').default
    const wrapper = mount(<SeasPage {...getMockProps()} />)
    expect(wrapper.find(SeasPageComingSoonWithTheme).exists()).toBe(true)
    expect(wrapper.find(SeasPageWithTheme).exists()).toBe(false)
  })
  it('renders coming soon page by default', () => {
    process.env.GATSBY_SHOW_TEAMSEAS_INSTALL = 'true'
    const SeasPage = require('../teamseas').default
    const wrapper = mount(<SeasPage {...getMockProps()} />)
    expect(wrapper.find(SeasPageComingSoonWithTheme).exists()).toBe(false)
    expect(wrapper.find(SeasPageWithTheme).exists()).toBe(true)
  })
})
