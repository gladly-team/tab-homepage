import React from 'react'
import LandingMoneyRaised from './LandingMoneyRaised'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import { mobile, seas, cats } from '../../.storybook/boilerPlate'
export default {
  title: 'Components/LandingMoneyRaised',
  component: LandingMoneyRaised,
}

const Template = (_args, { loaded: { data } }) => {
  const moneyRaisedData = data.data.sections.moneyRaised
  return <LandingMoneyRaised moneyRaisedData={moneyRaisedData} />
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
MobileSeas.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: { viewports: [414, 900] },
}
export const MobileCats = mobile(cats(Template.bind({})))
MobileCats.loaders = [
  async () => ({
    data: await useCauseData('cats'),
  }),
]
MobileCats.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: { viewports: [414, 900] },
}

export const FullWidthSeas = seas(Template.bind({}))
FullWidthSeas.loaders = [
  async () => ({
    data: await useCauseData('seas'),
  }),
]

export const FullWidthCats = cats(Template.bind({}))
FullWidthCats.loaders = [
  async () => ({
    data: await useCauseData('cats'),
  }),
]
