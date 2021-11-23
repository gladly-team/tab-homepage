/* eslint-disable react/prop-types */
import React from 'react'
import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />
export const TabForACause = Template.bind({})
TabForACause.args = {
  brand: 'tab',
}

export const SearchForACause = Template.bind({})
SearchForACause.args = {
  brand: 'search',
}
