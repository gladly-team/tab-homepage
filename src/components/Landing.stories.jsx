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
  // useCauseData must be used INSIDE Template
  const { causeId, cause } = args
  const data = useCauseData(cause)
  const landingData = data.data.sections.landing
  return <Landing landingData={landingData} causeId={causeId} />
}
export const seas = Template.bind({})
seas.args = {
  causeId: seasData.data.causeId,
  cause: 'seas',
}

export const cats = Template.bind({})
cats.args = {
  causeId: catsData.data.causeId,
  cause: 'cats',
}
