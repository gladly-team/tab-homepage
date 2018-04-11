import React from 'react'
import Link from 'gatsby-link'

import InstallButton from 'components/InstallButton'
import { lightShadingColor } from 'themes/theme'

const IndexPage = () => (
  <div>
    <h1>Surf the web, save the world</h1>
    <h4>
      {
        "Raise money for charity each time you open a new browser tab. It doesn't cost a thing."
      }
    </h4>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <InstallButton />
    </div>
    <div
      style={{
        background: lightShadingColor,
        width: 600,
        height: 300,
        margin: 20,
      }}
    />
  </div>
)

export default IndexPage
