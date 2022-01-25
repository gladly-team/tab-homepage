/* eslint-env jest */

import fs from 'fs'
import path from 'path'
import React from 'react'
import { mount } from 'src/utils/testHelpers/componentTesting'

jest.mock('src/components/Link')

const getMockProps = () => ({
  children: '# Hi there!',
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('Markdown component', () => {
  it('renders without error', () => {
    const Markdown = require('src/components/Markdown').default
    const mockProps = getMockProps()
    expect(() => {
      mount(<Markdown {...mockProps} />)
    }).not.toThrow()
  })

  it('renders markdown as expected', async () => {
    expect.assertions(1)
    const Markdown = require('src/components/Markdown').default

    const inputFilePath = path.join(
      path.resolve(),
      'src/utils/testHelpers/testMarkdown-A.md'
    )
    const testMarkdown = await fs.promises.readFile(inputFilePath)
    const mockProps = {
      ...getMockProps(),
      children: testMarkdown,
    }
    const wrapper = mount(<Markdown {...mockProps} />)
    const expectedHTMLFilePath = path.join(
      path.resolve(),
      'src/utils/testHelpers/testHTML-A.html'
    )
    const expectedOutput = await fs.promises.readFile(
      expectedHTMLFilePath,
      'utf-8'
    )
    expect(wrapper.html()).toEqual(expectedOutput)
  })

  it('renders plain text as a paragraph', () => {
    const Markdown = require('src/components/Markdown').default
    const mockProps = {
      ...getMockProps(),
      children: 'hello!',
    }
    const wrapper = mount(<Markdown {...mockProps} />)
    const expectedHTML =
      '<div><p class="MuiTypography-root MuiTypography-body1">hello!</p></div>'
    expect(wrapper.html()).toEqual(expectedHTML)
  })

  it('does not render script tags', () => {
    const Markdown = require('src/components/Markdown').default
    const mockProps = {
      ...getMockProps(),
      children: 'well well <script>alert("uh oh")</script>',
    }
    const wrapper = mount(<Markdown {...mockProps} />)
    const expectedHTML =
      '<div><p class="MuiTypography-root MuiTypography-body1">well well alert("uh oh")</p></div>'
    expect(wrapper.html()).toEqual(expectedHTML)
  })
})
