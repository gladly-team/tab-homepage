/* eslint-disable react/prop-types */
import React from 'react'
import FooterV2 from './FooterV2'
import { mobile, seas, cats } from '../../.storybook/boilerPlate'
export default {
  title: 'Components/FooterV2',
  component: FooterV2,
}

const args = {
  onBeforeInstall: () => {},
}

const Template = ({ onBeforeInstall }) => {
  return <FooterV2 onBeforeInstall={onBeforeInstall} />
}
export const standard = Template.bind({})
standard.args = args
export const MobileSeas = mobile(seas(Template)).bind({})
MobileSeas.args = args
MobileSeas.parameters = {
  layout: 'centered',
}
export const MobileCats = mobile(cats(Template)).bind({})
MobileCats.args = args
MobileCats.parameters = {
  layout: 'centered',
}
export const FullWidthSeas = seas(Template).bind({})
FullWidthSeas.args = args
export const FullWidthCats = cats(Template).bind({})
FullWidthCats.args = args
