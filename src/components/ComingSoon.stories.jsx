/* eslint-disable react/prop-types */
import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import ComingSoon from './ComingSoon'
import { mobile, seas, cats } from '../../.storybook/boilerPlate'

export default {
  title: 'Pages/ComingSoon',
  component: ComingSoon,
}

function Template(_args, { loaded: { data } }) {
  return <ComingSoon location="/" pageContext={data} />
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
  chromatic: { viewports: [414, 900], disableSnapshot: true },
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

export const FutureMobileCats = mobile(cats(Template.bind({})))
FutureMobileCats.loaders = [
  async () => {
    const data = await useCauseData('cats')
    data.data.causeLaunch.launchDate = new Date(Date.now() + 5 * 86400000)
    return { data }
  },
]
FutureMobileCats.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: { viewports: [414, 900], disableSnapshot: true },
}

export const FutureMobileSeas = mobile(seas(Template.bind({})))
FutureMobileSeas.loaders = [
  async () => {
    const data = await useCauseData('seas')
    data.data.causeLaunch.launchDate = new Date(Date.now() + 5 * 86400000)
    return { data }
  },
]
FutureMobileSeas.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: { viewports: [414, 900] },
}
