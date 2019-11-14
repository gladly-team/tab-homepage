/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Helmet from 'react-helmet'
import Layout from 'src/components/Layout'

const getMockProps = () => ({
  location: {
    pathname: '/foo/',
  },
})

describe('"plant trees" page', () => {
  it('renders without error', () => {
    const PlantTreesPage = require('../plant-trees').default
    shallow(<PlantTreesPage {...getMockProps()} />)
  })

  it('sets the page title using Helmet', () => {
    const PlantTreesPage = require('../plant-trees').default
    const wrapper = shallow(<PlantTreesPage {...getMockProps()} />)
    const elem = wrapper.find(Helmet)
    expect(elem.prop('title')).toBe('Plant Trees for Free')
  })

  it('sets the open graph title', () => {
    const PlantTreesPage = require('../plant-trees').default
    const wrapper = shallow(<PlantTreesPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:title"]')
    expect(elem.prop('content')).toBe('Plant Trees for Free')
  })

  it('sets the open graph description', () => {
    const PlantTreesPage = require('../plant-trees').default
    const wrapper = shallow(<PlantTreesPage {...getMockProps()} />)
    const elem = wrapper.find('meta[property="og:description"]')
    expect(elem.prop('content')).toBe(
      'We are planting a tree for every person who joins Tab for a Cause from now until January 10, 2020.'
    )
  })

  it('renders the Layout component with "brand=tab"', () => {
    const PlantTreesPage = require('../plant-trees').default
    const wrapper = shallow(<PlantTreesPage {...getMockProps()} />)
    expect(wrapper.find(Layout).prop('brand')).toEqual('tab')
  })
})
