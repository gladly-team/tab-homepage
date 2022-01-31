import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import Endorsements from './Endorsements'
import {
  seas,
  cats,
  defaultChromaticViewports,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Components/Endorsements',
  component: Endorsements,
}

function Template(_args, { loaded: { data } }) {
  const {
    causeId,
    sections: { Endorsements: endorsementsData },
    styles,
  } = data.data
  return (
    <Endorsements
      endorsementsData={endorsementsData}
      causeId={causeId}
      styles={styles}
    />
  )
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
