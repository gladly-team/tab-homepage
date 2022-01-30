/* eslint-disable react/prop-types */
import React from 'react'
import MoneyRaised from './MoneyRaised'

export default {
  title: 'Components/MoneyRaised',
  component: MoneyRaised,
}

function Template(args) {
  return <MoneyRaised {...args} />
}
export const Default = Template.bind({})
