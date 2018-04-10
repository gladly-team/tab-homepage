import React from 'react'
import Link from 'gatsby-link'
import Button from 'material-ui/Button'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    </div>
  </div>
)

export default IndexPage
