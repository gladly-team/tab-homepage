import React from 'react'
import Landing from './Landing'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'

export default {
  title: 'Components/Landing',
  component: Landing,
}
// console.log(useCauseData())
// console.log(useCauseData())
// const seasData = useCauseData('seas')
// const catsData = useCauseData('cats')
const Template = (args) => {
  // useCauseData must be used INSIDE template
  console.log(useCauseData())
  return <Landing {...args} />
}
export const seas = Template.bind({})
seas.args = {
  landingData: seasData.data.sections.landing,
  causeId: seasData.data.causeId,
}

export const cats = Template.bind({})
cats.args = {
  landingData: catsData.data.sections.landing,
  causeId: catsData.data.causeId,
}
