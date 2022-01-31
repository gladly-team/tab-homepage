import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import FAQ from './FAQ'
import {
  seas,
  cats,
  defaultChromaticViewports,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Components/FAQ',
  component: FAQ,
}

function Template(_args, { loaded: { data } }) {
  const faqData = data.data.sections.faq
  return <FAQ faqData={faqData} />
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
