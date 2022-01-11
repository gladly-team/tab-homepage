/* eslint-disable react/prop-types */
import React from 'react'
import ComingSoon from './ComingSoon'
import { mobile, seas, cats } from '../../.storybook/boilerPlate'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
export default {
  title: 'Pages/ComingSoon',
  component: ComingSoon,
}

const Template = (_args, { loaded: { data } }) => (
  <ComingSoon location={'/'} pageContext={data} />
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

export const FutureMobileCats = mobile(cats(Template.bind({})))
FutureMobileCats.loaders = [
  async () => {
    var data = await useCauseData('cats')
    data.data.causeLaunch.launchDate = new Date(Date.now() + 5 * 86400000)
    return {data}
  }
]
FutureMobileCats.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: { viewports: [414, 900] },
}

export const FutureMobileSeas = mobile(seas(Template.bind({})))
FutureMobileSeas.loaders = [
  async () => {
    var data = await useCauseData('seas')
    data.data.causeLaunch.launchDate = new Date(Date.now() + 5 * 86400000)
    return {data}
  }
]
FutureMobileSeas.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: { viewports: [414, 900] },
}