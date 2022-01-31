/* eslint-disable react/prop-types */
import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import HomePageWrapper from './V4HomePage'
import {
  seas,
  cats,
  defaultChromaticViewports,
  SMALL_MOBILE_WIDTH_PX,
  TABLET_WIDTH_PX,
  WIDE_MONITOR_WIDTH_PX,
} from '../../.storybook/boilerPlate'

export default {
  title: 'Pages/HomePage',
  component: HomePageWrapper,
}

// There's not currently a way to dynamically generate stories, but it
// might be added:
// https://github.com/storybookjs/storybook/issues/9828

function Template(_args, { loaded: { data } }) {
  return <HomePageWrapper location="/" pageContext={data} />
}

export const SeasCause = seas(Template.bind({}))
/*
 * Loaders are experimental. They let us fetch data async, which we use
 * to mock Gatsby image behavior.
 * https://storybook.js.org/docs/react/writing-stories/loaders
 */
SeasCause.loaders = [
  async () => ({
    data: await useCauseData('seas'),
  }),
]
SeasCause.parameters = {
  // In this full page snapshot, test all viewport widths.
  chromatic: {
    viewports: [
      ...defaultChromaticViewports,
      SMALL_MOBILE_WIDTH_PX,
      TABLET_WIDTH_PX,
      WIDE_MONITOR_WIDTH_PX,
    ],
    delay: 1500,
  },
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
    delay: 1500,
    disableSnapshot: true,
  },
}
