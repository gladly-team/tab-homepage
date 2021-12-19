/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

describe('FinancialsHomePageButton', () => {
  it('renders without error', () => {
    const FinancialsHomePageButton =
      require('../FinancialsHomePageButton').default
    const quarterData = {
      quarter: 2,
      year: 2018,
      pdfUrl: '/',
    }
    shallow(<FinancialsHomePageButton quarterData={quarterData} />)
  })

  it('links to the provided PDF URL', () => {
    const FinancialsHomePageButton =
      require('../FinancialsHomePageButton').default
    const quarterData = {
      quarter: 2,
      year: 2018,
      pdfUrl: 'https://example.com/some-link/q2.pdf',
    }
    const wrapper = shallow(
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
    const wrapper = shallow(
      <FinancialsHomePageButton quarterData={quarterData} />
    )
    expect(wrapper.find('span').first().text()).toEqual('Q2 2018')
    wrapper.setProps({
      quarterData: {
        quarter: 3,
        year: 2012,
        pdfUrl: '/',
      },
    })
    expect(wrapper.find('span').first().text()).toEqual('Q3 2012')
  })
})
