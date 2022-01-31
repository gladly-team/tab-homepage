/* eslint-disable react/prop-types */
import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import ComingSoon from './ComingSoon'
import {
  seas,
  cats,
  defaultChromaticViewports,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Pages/ComingSoon',
  component: ComingSoon,
}

function Template(_args, { loaded: { data } }) {
  return <ComingSoon location="/" pageContext={data} />
}

export const SeasCause = seas(Template.bind({}))

SeasCause.loaders = [
  async () => {
    const data = await useCauseData('seas')
    delete data.data.causeLaunch.launchDate
    return { data }
  },
]
SeasCause.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: { viewports: [...defaultChromaticViewports] },
}

export const CatsCause = cats(Template.bind({}))
CatsCause.loaders = [
  async () => ({
    data: await useCauseData('cats'),
  }),
]
CatsCause.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: {
    viewports: [...defaultChromaticViewports],
    disableSnapshot: true,
  },
}

export const FutureSeasCause = seas(Template.bind({}))
FutureSeasCause.loaders = [
  async () => {
    const data = await useCauseData('seas')
    data.data.causeLaunch.launchDate = new Date(Date.now() + 5 * 86400000)
    return { data }
  },
]
FutureSeasCause.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
  chromatic: { viewports: [...defaultChromaticViewports] },
}
