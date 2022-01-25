/* eslint-env jest */

import React from 'react'
import { mount } from 'src/utils/testHelpers/componentTesting'
import { financialsURL } from 'src/utils/navigation'
import data from 'src/data/causes/cats.json'
import Link from 'src/components/Link'
import { Typography } from '@mui/material'

const getMockProps = () => {
  data.data.sections.Financials.pdfs = [
    {
      quarter: 1,
      year: 2021,
      pdfUrl: '/financials/2021-Q1.pdf',
      img: data.data.sections.Financials.q1Img,
    },
    {
      quarter: 2,
      year: 2021,
      pdfUrl: '/financials/2021-Q2.pdf',
      img: data.data.sections.Financials.q2Img,
    },
    {
      quarter: 4,
      year: 2020,
      pdfUrl: '/financials/2020-Q4.pdf',
      img: data.data.sections.Financials.q4Img,
    },
    {
      quarter: 3,
      year: 2020,
      pdfUrl: '/financials/2020-Q3.pdf',
      img: data.data.sections.Financials.q3Img,
    },
  ]
  return data.data.sections.Financials
}

describe('Financials Section', () => {
  it('renders without error', () => {
    expect.assertions(1)
    const Financials = require('../Financials').default
    expect(() =>
      mount(<Financials financialsData={getMockProps()} />)
    ).not.toThrow()
  })

  it('sets the title correctly', () => {
    expect.assertions(1)
    const Financials = require('../Financials').default
    const wrapper = mount(<Financials financialsData={getMockProps()} />)
    const title = wrapper.find(Typography).first()
    expect(title.prop('children')).toBe(getMockProps().title)
  })

  it('sets the subtitle correctly', () => {
    expect.assertions(1)
    const Financials = require('../Financials').default
    const wrapper = mount(<Financials financialsData={getMockProps()} />)
    const title = wrapper.find(Typography).at(1)
    expect(title.prop('children')).toBe(getMockProps().text)
  })
  it('links to the financials page url', () => {
    const Financials = require('../Financials').default
    const wrapper = mount(<Financials financialsData={getMockProps()} />)
    expect(wrapper.find(Link).prop('to')).toBe(financialsURL)
  })
})
