/* eslint-disable react/prop-types */
import React from 'react'
import FooterV2 from './FooterV2'
export default {
  title: 'Components/FooterV2',
  component: FooterV2,
}

const Template = ({ onBeforeInstall }) => {
  return <FooterV2 onBeforeInstall={onBeforeInstall} />
}
export const standard = Template.bind({})
standard.args = {
  onBeforeInstall: () => {},
}
