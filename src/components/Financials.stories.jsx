import React from 'react'
import Financials from './Financials'
import { mobile, seas, cats } from '../../.storybook/boilerPlate'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'

export default {
  title: 'Components/Financials',
  component: Financials,
}

const Template = (_args, { loaded: { data } }) => {
  const financialsData = data.data.sections.Financials
  return <Financials financialsData={financialsData} />
}
export const MobileSeas = mobile(seas(Template.bind({})))
/*
 * loaders are experimental and allow us to use async await which we need in
 * order to programatically spoof gatsby images
 * https://storybook.js.org/docs/react/writing-stories/loaders
 */
MobileSeas.loaders = [
  async () => ({
    data: await useCauseData('seas'),
  }),
]
MobileSeas.args = {}
MobileSeas.parameters = {
  layout: 'centered',
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: { viewports: [414, 900] },
}
export const MobileCats = mobile(cats(Template.bind({})))
/*
 * loaders are experimental and allow us to use async await which we need in
 * order to programatically spoof gatsby images
 * https://storybook.js.org/docs/react/writing-stories/loaders
 */
MobileCats.loaders = [
  async () => ({
    data: await useCauseData('cats'),
  }),
]
MobileCats.args = {}
MobileCats.parameters = {
  layout: 'centered',
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: { viewports: [414, 900] },
}

export const FullWidthSeas = seas(Template.bind({}))
/*
 * loaders are experimental and allow us to use async await which we need in
 * order to programatically spoof gatsby images
 * https://storybook.js.org/docs/react/writing-stories/loaders
 */
FullWidthSeas.loaders = [
  async () => ({
    data: await useCauseData('seas'),
  }),
]
FullWidthSeas.args = {}

export const FullWidthCats = cats(Template.bind({}))
/*
 * loaders are experimental and allow us to use async await which we need in
 * order to programatically spoof gatsby images
 * https://storybook.js.org/docs/react/writing-stories/loaders
 */
FullWidthCats.loaders = [
  async () => ({
    data: await useCauseData('cats'),
  }),
]
FullWidthCats.args = {}
