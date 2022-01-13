import React from 'react'
import FAQ from './FAQ'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import { mobile, seas, cats } from '../../.storybook/boilerPlate'
export default {
  title: 'Components/FAQ',
  component: FAQ,
}

const Template = (_args, { loaded: { data } }) => {
  const faqData = data.data.sections.faq
  return <FAQ faqData={faqData} />
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
