import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import Mission from './Mission'
import {
  seas,
  cats,
  defaultChromaticViewports,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Components/Mission',
  component: Mission,
}

function Template(_args, { loaded: { data } }) {
  const missionData = data.data.sections.Mission
  return <Mission missionData={missionData} causeId={data.data.causeId} />
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
