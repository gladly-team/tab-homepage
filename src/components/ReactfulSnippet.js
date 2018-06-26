import React from 'react'

class ReactfulSnippet extends React.Component {
  componentDidMount() {
    if (!window) {
      return
    }
    var reactful_client_id = '329608'
    window._rctfl = window._rctfl || { c: [] }
    window._rctfl.c.push(reactful_client_id)
    var el = window.document.createElement('script')
    el.async = 1
    el.src = '//visitor.reactful.com/dist/main.rtfl.js'
    window.document.getElementsByTagName('head')[0].appendChild(el)
  }

  render() {
    return null
  }
}

ReactfulSnippet.propTypes = {}

ReactfulSnippet.defaultProps = {}

export default ReactfulSnippet
