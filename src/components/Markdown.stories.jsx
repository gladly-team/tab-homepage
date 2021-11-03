import React from 'react'

import testInputA from 'src/utils/testHelpers/testMarkdown-A.md'
import Markdown from './Markdown'

export default {
  title: 'Components/Markdown',
  component: Markdown,
}

const Template = (args) => <Markdown {...args} />

export const demo = Template.bind({})
demo.args = {
  children: testInputA,
}

const TemplateWithCenteredText = (args) => (
  <div
    style={{ textAlign: 'center', background: '#CCC', width: 400, height: 100 }}
  >
    <Markdown {...args} />
  </div>
)

export const centeredText = TemplateWithCenteredText.bind({})
centeredText.args = {
  children: 'This is a paragraph',
}
