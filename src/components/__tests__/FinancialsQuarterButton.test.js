/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Paper from 'material-ui/Paper'

describe('FinancialsQuarterButton', () => {
  it('renders without error', () => {
    const FinancialsQuarterButton = require('../FinancialsQuarterButton')
      .default
    const quarterData = {
      quarter: 2,
      year: 2018,
      pdfUrl: '/',
    }
    shallow(<FinancialsQuarterButton quarterData={quarterData} />)
  })

  it('links to the provided PDF URL', () => {
    const FinancialsQuarterButton = require('../FinancialsQuarterButton')
      .default
    const quarterData = {
      quarter: 2,
      year: 2018,
      pdfUrl: 'https://example.com/some-link/q2.pdf',
    }
    const wrapper = shallow(
      <FinancialsQuarterButton quarterData={quarterData} />
    )
    expect(wrapper.find('a').prop('href')).toBe(
      'https://example.com/some-link/q2.pdf'
    )
  })

  it('displays the correct name', () => {
    const FinancialsQuarterButton = require('../FinancialsQuarterButton')
      .default
    const quarterData = {
      quarter: 2,
      year: 2018,
      pdfUrl: '/',
    }
    const wrapper = shallow(
      <FinancialsQuarterButton quarterData={quarterData} />
    )
    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toEqual('Q2 2018')
    wrapper.setProps({
      quarterData: {
        quarter: 3,
        year: 2012,
        pdfUrl: '/',
      },
    })
    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toEqual('Q3 2012')
  })

  it('changes size on hover', () => {
    const FinancialsQuarterButton = require('../FinancialsQuarterButton')
      .default
    const quarterData = {
      quarter: 2,
      year: 2018,
      pdfUrl: '/',
    }
    const wrapper = shallow(
      <FinancialsQuarterButton quarterData={quarterData} />
    )
    expect(wrapper.find(Paper).prop('style').transform).toBeUndefined()
    wrapper.find('a').simulate('mouseenter')
    expect(wrapper.find(Paper).prop('style').transform).toContain('scale(1.')
  })
})
