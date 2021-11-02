import React from 'react'
import Mission from './Mission'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'
import { mobile, seas, cats } from '../../.storybook/boilerPlate'

export default {
  title: 'Components/Mission',
  component: Mission,
}

const Template = (args) => <Mission {...args} />

export const MobileSeas = mobile(seas(Template)).bind({})
MobileSeas.args = {
  missionData: seasData.data.sections.Mission,
}
MobileSeas.parameters = {
  layout: 'centered',
}
export const MobileCats = mobile(cats(Template)).bind({})
MobileCats.args = {
  missionData: catsData.data.sections.Mission,
}
MobileCats.parameters = {
  layout: 'centered',
}
export const FullWidthSeas = seas(Template).bind({})
FullWidthSeas.args = {
  missionData: seasData.data.sections.Mission,
}
export const FullWidthCats = cats(Template).bind({})
FullWidthCats.args = {
  missionData: catsData.data.sections.Mission,
}
