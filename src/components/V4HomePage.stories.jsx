/* eslint-disable react/prop-types */
import React from 'react'
import HomePageWrapper from './V4HomePage'
import { mobile, seas, cats } from '../../.storybook/boilerPlate'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
export default {
  title: 'Pages/HomePage',
  component: HomePageWrapper,
}

const Template = (_args, { loaded: { data } }) => (
  <HomePageWrapper location={'/'} pageContext={data} />
)

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
  chromatic: { viewports: [414, 736], delay: 1500 },
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
  chromatic: { viewports: [414, 736], delay: 1500, disableSnapshot: true },
}

export const FullWidthSeas = seas(Template.bind({}))
FullWidthSeas.loaders = [
  async () => ({
    data: await useCauseData('seas'),
  }),
]
FullWidthSeas.parameters = {
  chromatic: { delay: 1500, disableSnapshot: true },
}

export const FullWidthSeasPreview = seas(Template.bind({}))
FullWidthSeasPreview.loaders = [
  async () => {
    var data = await useCauseData('seas')
    data.causeLaunch = {
      enabled: false,
      preview: true,
    }
    data.previewPage = { path: '/test/' }
    return { data }
  },
]
FullWidthSeasPreview.parameters = {
  chromatic: { delay: 1500 },
}

export const FullWidthCats = cats(Template.bind({}))
FullWidthCats.loaders = [
  async () => ({
    data: await useCauseData('cats'),
  }),
]
FullWidthCats.parameters = {
  chromatic: { delay: 1500 },
}
