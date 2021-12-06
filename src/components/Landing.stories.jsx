import React from 'react'
import Landing from './Landing'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'

export default {
  title: 'Components/Landing',
  component: Landing,
}

const Template = (_args, { loaded: { data } }) => {
  const landingData = data.data.sections.landing
  return <Landing landingData={landingData} />
}
export const seas = Template.bind({})
/*
 * loaders are experimental and allow us to use async await which we need in
 * order to programatically spoof gatsby images
 * https://storybook.js.org/docs/react/writing-stories/loaders
 */
seas.loaders = [
  async () => ({
    data: await useCauseData('seas'),
  }),
]
seas.args = {}

export const cats = Template.bind({})
/*
 * loaders are experimental and allow us to use async await which we need in
 * order to programatically spoof gatsby images
 * https://storybook.js.org/docs/react/writing-stories/loaders
 */
cats.loaders = [
  async () => ({
    data: await useCauseData('cats'),
  }),
]
