/* eslint-env jest */

import React from 'react'
import { mount } from 'src/utils/testHelpers/componentTesting'

describe('FinancialsHomePageButton', () => {
  it('renders without error', () => {
    const FinancialsHomePageButton =
      require('../FinancialsHomePageButton').default
    const quarterData = {
      quarter: 2,
      year: 2018,
      pdfUrl: '/',
    }
    mount(<FinancialsHomePageButton quarterData={quarterData} />)
  })

  it('links to the provided PDF URL', () => {
    const FinancialsHomePageButton =
      require('../FinancialsHomePageButton').default
    const quarterData = {
      quarter: 2,
      year: 2018,
      pdfUrl: 'https://example.com/some-link/q2.pdf',
    }
    const wrapper = mount(
      <FinancialsHomePageButton quarterData={quarterData} />
    )
    expect(wrapper.find('a').first().prop('href')).toBe(
      'https://example.com/some-link/q2.pdf'
    )
  })

  it('displays the correct name', () => {
    const FinancialsHomePageButton =
      require('../FinancialsHomePageButton').default
    const quarterData = {
      quarter: 2,
      year: 2018,
      pdfUrl: '/',
    }
    const wrapper = mount(
      <FinancialsHomePageButton quarterData={quarterData} />
    )
    expect(wrapper.find('span').first().text()).toEqual('Q2 2018')
  })
})
