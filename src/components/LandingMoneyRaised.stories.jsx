import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import LandingMoneyRaised from './LandingMoneyRaised'
import {
  seas,
  cats,
  defaultChromaticViewports,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Components/LandingMoneyRaised',
  component: LandingMoneyRaised,
}

function Template(_args, { loaded: { data } }) {
  const moneyRaisedData = data.data.sections.moneyRaised
  return <LandingMoneyRaised moneyRaisedData={moneyRaisedData} />
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
