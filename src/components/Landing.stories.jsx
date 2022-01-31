import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import Landing from './Landing'
import {
  seas,
  cats,
  defaultChromaticViewports,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Components/Landing',
  component: Landing,
}

function Template(_args, { loaded: { data } }) {
  const { causeId } = data.data
  const landingData = data.data.sections.landing
  return <Landing landingData={landingData} causeId={causeId} />
}
export const SeasCause = seas(Template.bind({}))

SeasCause.loaders = [
  async () => ({
    data: await useCauseData('seas'),
  }),
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
