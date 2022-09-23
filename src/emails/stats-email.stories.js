import React from 'react'
import { defaultChromaticViewports } from '../../.storybook/boilerPlate'

const html = require('./stats-email.html')

export default {
  title: 'Emails/Stats',
}
const containerStyle = {
  display: 'flex',
  height: '100vh',
}
const iframeStyle = {
  flex: 1,
  border: 'none',
}

function Template() {
  return (
    <div style={containerStyle}>
      <iframe srcDoc={html} style={iframeStyle} />
    </div>
  )
}

export const StatsEmail = Template.bind({})
StatsEmail.parameters = {
  chromatic: { viewports: [...defaultChromaticViewports] },
}
