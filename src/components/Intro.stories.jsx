import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import Intro from './Intro'
import {
  seas,
  cats,
  defaultChromaticViewports,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Components/Intro',
  component: Intro,
}

function Template(_args, { loaded: { data } }) {
  const { causeId } = data.data
  const introData = data.data.sections.TFACIntro
  return <Intro introData={introData} causeId={causeId} />
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
