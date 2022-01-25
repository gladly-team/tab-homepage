/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import Helmet from 'react-helmet'
import FinancialsQuarterButton from 'src/components/FinancialsQuarterButton'
import Layout from 'src/components/Layout'

const getMockProps = () => ({
  data: {
    allFinancialsYaml: {
      edges: [
        {
          node: {
            quarter: 1,
            year: 2018,
            pdfUrl: '/some-url.pdf',
          },
        },
        {
          node: {
            quarter: 2,
            year: 2018,
            pdfUrl: '/some-other-url.pdf',
          },
        },
      ],
    },
  },
  location: {
    pathname: '/foo/',
  },
})

describe('financials page', () => {
  it('renders without error', () => {
    const FinancialsPage = require('../financials').default
    shallow(<FinancialsPage {...getMockProps()} />)
  })

  it('sets the page title using Helmet', () => {
    const FinancialsPage = require('../financials').default
    const wrapper = shallow(<FinancialsPage {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Financials')
  })

  it('sets the open graph title', () => {
    const FinancialsPage = require('../financials').default
    const wrapper = shallow(<FinancialsPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Financials - Tab for a Cause')
  })

  it('sets the open graph description', () => {
    const FinancialsPage = require('../financials').default
    const wrapper = shallow(<FinancialsPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe(
      'See our expenses and how much money Tabbers have raised for each charity.'
    )
  })

  it('renders two FinancialsQuarterButtons', () => {
    const FinancialsPage = require('../financials').default
    const wrapper = shallow(<FinancialsPage {...getMockProps()} />)
    expect(wrapper.find(FinancialsQuarterButton).length).toBe(2)
  })

  it('renders the Layout component with "brand=all"', () => {
    const FinancialsPage = require('../financials').default
    const wrapper = shallow(<FinancialsPage {...getMockProps()} />)
    expect(wrapper.find(Layout).prop('brand')).toEqual('all')
  })
})
