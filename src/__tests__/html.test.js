/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import HTML from 'src/html'

const getWrapper = () =>
  shallow(
    <HTML
      htmlAttributes={{}}
      headComponents={[]}
      bodyAttributes={{}}
      preBodyComponents={[]}
      body=""
      postBodyComponents={[]}
    />
  )

describe('HTML document', () => {
  it('includes the Feasible analytics snippet in the head', () => {
    const wrapper = getWrapper()
    const script = wrapper.find(
      'script[src="https://cdn.feasible.lol/js/fs-tnf3fqu3tywrgusw.js"]'
    )

    expect(script).toHaveLength(1)
    expect(script.prop('defer')).toBe(true)

    const stub = wrapper.find('head script').filterWhere((node) => {
      const html = node.prop('dangerouslySetInnerHTML')
      return html && html.__html.includes('window.feasible')
    })
    expect(stub).toHaveLength(1)
  })
})
