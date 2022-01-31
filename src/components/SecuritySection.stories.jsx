import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import SecuritySection from './SecuritySection'
import {
  seas,
  cats,
  defaultChromaticViewports,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Components/SecuritySection',
  component: SecuritySection,
}

function Template(_args, { loaded: { data } }) {
  const SecuritySectionData = data.data.sections.Security
  return <SecuritySection securityData={SecuritySectionData} />
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
