import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import CharityIntro from './CharityIntro'
import { mobile, seas, cats } from '../../.storybook/boilerPlate'

export default {
  title: 'Components/CharityIntro',
  component: CharityIntro,
}

function Template(_args, { loaded: { data } }) {
  const { charityIntro } = data.data.sections
  return <CharityIntro charityIntroData={charityIntro} />
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
  chromatic: { viewports: [414, 736] },
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
  chromatic: { viewports: [414, 736], disableSnapshot: true },
}

export const FullWidthSeas = seas(Template.bind({}))
FullWidthSeas.loaders = [
  async () => ({
    data: await useCauseData('seas'),
  }),
]
FullWidthSeas.parameters = {}

export const FullWidthCats = cats(Template.bind({}))
FullWidthCats.loaders = [
  async () => ({
    data: await useCauseData('cats'),
  }),
]
FullWidthCats.parameters = {
  chromatic: { disableSnapshot: true },
}
