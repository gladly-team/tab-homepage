/* eslint-disable react/prop-types */
import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import FooterV2 from './FooterV2'
import {
  seas,
  cats,
  defaultChromaticViewports,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Components/FooterV2',
  component: FooterV2,
}

function Template(_args, { loaded: { data } }) {
  const footerData = data.data.sections.Footer
  return <FooterV2 onBeforeInstall={() => {}} footerData={footerData} />
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
