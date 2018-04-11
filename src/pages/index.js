import React from 'react'
import Link from 'gatsby-link'

import InstallButton from 'components/InstallButton'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <InstallButton />
    </div>
  </div>
)

export default IndexPage
