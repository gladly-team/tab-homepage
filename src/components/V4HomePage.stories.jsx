/* eslint-disable react/prop-types */
import React from 'react'
import { useCauseData } from 'src/utils/storybookHelpers/useCauseData'
import HomePageWrapper from './V4HomePage'
import {
  wrapInTheme,
  seas,
  cats,
  trees,
  defaultChromaticViewports,
  SMALL_MOBILE_WIDTH_PX,
  TABLET_WIDTH_PX,
  DESKTOP_WIDTH_PX,
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
    viewports: [DESKTOP_WIDTH_PX],
    delay: 1500,
  },
}

export const TreesCause = trees(Template.bind({}))
TreesCause.loaders = [
  async () => ({
    data: await useCauseData('trees'),
  }),
]
TreesCause.parameters = {
  chromatic: {
    viewports: [DESKTOP_WIDTH_PX],
    delay: 1500,
  },
}

export const GlobalHealthCause = wrapInTheme('globalHealth')(Template.bind({}))
GlobalHealthCause.loaders = [
  async () => ({
    data: await useCauseData('globalHealth'),
  }),
]
GlobalHealthCause.parameters = {
  chromatic: {
    viewports: [DESKTOP_WIDTH_PX],
    delay: 1500,
  },
}

export const EndingHungerCause = wrapInTheme('endingHunger')(Template.bind({}))
EndingHungerCause.loaders = [
  async () => ({
    data: await useCauseData('endingHunger'),
  }),
]
EndingHungerCause.parameters = {
  chromatic: {
    viewports: [DESKTOP_WIDTH_PX],
    delay: 1500,
  },
}

export const UkraineCause = wrapInTheme('ukraine')(Template.bind({}))
UkraineCause.loaders = [
  async () => ({
    data: await useCauseData('ukraine'),
  }),
]
UkraineCause.parameters = {
  chromatic: {
    viewports: [DESKTOP_WIDTH_PX],
    delay: 1500,
  },
}

export const ReproductiveHealthCause = wrapInTheme('reproductiveHealth')(
  Template.bind({})
)
ReproductiveHealthCause.loaders = [
  async () => ({
    data: await useCauseData('reproductiveHealth'),
  }),
]
ReproductiveHealthCause.parameters = {
  chromatic: {
    viewports: [DESKTOP_WIDTH_PX],
    delay: 1500,
  },
}
