/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'
import FinancialsQuarterButton from 'components/FinancialsQuarterButton'

const props = {
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
}

describe('financials page', () => {
  it('renders without error', () => {
    const FinancialsPage = require('../financials').default
    shallow(<FinancialsPage {...props} />)
  })

  it('sets the page title using Helmet', () => {
    const FinancialsPage = require('../financials').default
    const wrapper = shallow(<FinancialsPage {...props} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Financials')
  })

  it('sets the open graph title', () => {
    const FinancialsPage = require('../financials').default
    const wrapper = shallow(<FinancialsPage {...props} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Financials - Tab for a Cause')
  })

  it('sets the open graph description', () => {
    const FinancialsPage = require('../financials').default
    const wrapper = shallow(<FinancialsPage {...props} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe(
      'See our expenses and how much money Tabbers have raised for each charity.'
    )
  })

  it('renders two FinancialsQuarterButtons', () => {
    const FinancialsPage = require('../financials').default
    const wrapper = shallow(<FinancialsPage {...props} />)
    expect(wrapper.find(FinancialsQuarterButton).length).toBe(2)
  })
})
