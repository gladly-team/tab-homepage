import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import Financials from './Financials'
import {
  seas,
  cats,
  defaultChromaticViewports,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Components/Financials',
  component: Financials,
}

function Template(_args, { loaded: { data } }) {
  const financialsData = data.data.sections.Financials
  return <Financials financialsData={financialsData} />
}

export const SeasCause = seas(Template.bind({}))

SeasCause.loaders = [
  async () => ({
    data: await useCauseData('seas'),
  }),
]
SeasCause.parameters = {
  chromatic: { viewports: [...defaultChromaticViewports] },
}

export const CatsCause = cats(Template.bind({}))
CatsCause.loaders = [
  async () => ({
    data: await useCauseData('cats'),
  }),
]
CatsCause.parameters = {
  chromatic: {
    viewports: [...defaultChromaticViewports],
    disableSnapshot: true,
  },
}
