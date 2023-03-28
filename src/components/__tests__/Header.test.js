/* eslint-env jest */

import React from 'react'
import { shallow } from 'src/utils/testHelpers/componentTesting'
import Link from 'src/components/Link'
import { getTestIdSelector } from 'src/utils/test-utils'

jest.mock('src/img/logo-with-text.svg', () => 'img/logo-with-text.svg')
jest.mock(
  'src/img/search-logo-with-text.svg',
  () => 'img/search-logo-with-text.svg'
)

jest.mock('src/components/Link')

afterEach(() => {
  jest.clearAllMocks()
})

const getMockProps = () => ({
  brand: undefined,
})

describe('Header', () => {
  it('renders without error', () => {
    const Header = require('../Header').default
    const mockProps = getMockProps()
    shallow(<Header {...mockProps} />)
  })

  it('[brand=undefined] only renders the Tab for a Cause logo', () => {
    const Header = require('../Header').default
    const mockProps = getMockProps()
    const wrapper = shallow(<Header {...mockProps} />)
    expect(wrapper.find(getTestIdSelector('tab-logo-with-text')).exists()).toBe(
      true
    )
    expect(
      wrapper.find(getTestIdSelector('search-logo-with-text')).exists()
    ).toBe(false)
  })

  it('[brand=undefined] navigates to the Tab for a Cause home on header icon click', () => {
    const Header = require('../Header').default
    const mockProps = getMockProps()
    const wrapper = shallow(<Header {...mockProps} />)
    const linkElem = wrapper
      .find(getTestIdSelector('tab-logo-with-text'))
      .parent()
    expect(linkElem.type()).toEqual(Link)
    expect(linkElem.prop('to')).toEqual('/')
  })

  it('[brand=tab] only renders the Tab for a Cause logo', () => {
    const Header = require('../Header').default
    const mockProps = getMockProps()
    mockProps.brand = 'tab'
    const wrapper = shallow(<Header {...mockProps} />)
    expect(wrapper.find(getTestIdSelector('tab-logo-with-text')).exists()).toBe(
      true
    )
    expect(
      wrapper.find(getTestIdSelector('search-logo-with-text')).exists()
    ).toBe(false)
    expect(
      wrapper.find(getTestIdSelector('shop-logo-with-text')).exists()
    ).toBe(false)
  })

  it('[brand=tab] navigates to the Tab for a Cause home on header icon click', () => {
    const Header = require('../Header').default
    const mockProps = getMockProps()
    mockProps.brand = 'tab'
    const wrapper = shallow(<Header {...mockProps} />)
    const linkElem = wrapper
      .find(getTestIdSelector('tab-logo-with-text'))
      .parent()
    expect(linkElem.type()).toEqual(Link)
    expect(linkElem.prop('to')).toEqual('/')
  })

  it('[brand=search] only renders the Search for a Cause logo', () => {
    const Header = require('../Header').default
    const mockProps = getMockProps()
    mockProps.brand = 'search'
    const wrapper = shallow(<Header {...mockProps} />)
    expect(
      wrapper.find(getTestIdSelector('search-logo-with-text')).exists()
    ).toBe(true)
    expect(wrapper.find(getTestIdSelector('tab-logo-with-text')).exists()).toBe(
      false
    )
    expect(
      wrapper.find(getTestIdSelector('shop-logo-with-text')).exists()
    ).toBe(false)
  })

  it('[brand=shop] only renders the Shop for a Cause logo', () => {
    const Header = require('../Header').default
    const mockProps = getMockProps()
    mockProps.brand = 'shop'
    const wrapper = shallow(<Header {...mockProps} />)
    expect(
      wrapper.find(getTestIdSelector('shop-logo-with-text')).exists()
    ).toBe(true)
    expect(wrapper.find(getTestIdSelector('tab-logo-with-text')).exists()).toBe(
      false
    )
    expect(
      wrapper.find(getTestIdSelector('search-logo-with-text')).exists()
    ).toBe(false)
  })

  it('[brand=search] navigates to the Search for a Cause home on header icon click', () => {
    const Header = require('../Header').default
    const mockProps = getMockProps()
    mockProps.brand = 'search'
    const wrapper = shallow(<Header {...mockProps} />)
    const linkElem = wrapper
      .find(getTestIdSelector('search-logo-with-text'))
      .parent()
    expect(linkElem.type()).toEqual(Link)
    expect(linkElem.prop('to')).toEqual('https://search.gladly.io')
  })

  it('[brand=all] renders both the Tab for a Cause and Search for a Cause logo', () => {
    const Header = require('../Header').default
    const mockProps = getMockProps()
    mockProps.brand = 'all'
    const wrapper = shallow(<Header {...mockProps} />)
    expect(wrapper.find(getTestIdSelector('tab-logo-with-text')).exists()).toBe(
      true
    )
    expect(
      wrapper.find(getTestIdSelector('search-logo-with-text')).exists()
    ).toBe(true)
    expect(
      wrapper.find(getTestIdSelector('shop-logo-with-text')).exists()
    ).toBe(true)
  })

  it('[brand=all] renders a plus sign between the logos', () => {
    const Header = require('../Header').default
    const mockProps = getMockProps()
    mockProps.brand = 'all'
    const wrapper = shallow(<Header {...mockProps} />)
    const logoContainerElem = wrapper.find(getTestIdSelector('logo-container'))
    expect(logoContainerElem.childAt(0).type()).toEqual(Link)
    expect(logoContainerElem.childAt(1).type()).toEqual('h3')
    expect(logoContainerElem.childAt(1).text()).toEqual('+')
    expect(logoContainerElem.childAt(2).type()).toEqual(Link)
    expect(logoContainerElem.childAt(3).text()).toEqual('+')
    expect(logoContainerElem.childAt(4).type()).toEqual(Link)
  })
})
