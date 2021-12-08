/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

describe('teamseas page', () => {
  it('renders without error', () => {
    const SeasPageWithTheme = require('../TeamSeas.Install').default
    shallow(<SeasPageWithTheme />)
  })
})
