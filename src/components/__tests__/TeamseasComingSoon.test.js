/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'
const getMockProps = () => ({
  location: {
    pathname: '/',
  },
  pageContext: {},
})

describe('teamseas page', () => {
  it('renders without error', () => {
    const SeasPageComingSoonWithTheme =
      require('../TeamSeas.ComingSoon').default
    mount(<SeasPageComingSoonWithTheme {...getMockProps()} />)
  })
})