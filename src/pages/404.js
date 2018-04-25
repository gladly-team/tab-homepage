import React from 'react'
import Button from 'material-ui/Button'
import Link from 'components/Link'
import { homeURL } from 'utils/navigation'
import Cake from '@material-ui/icons/Cake'
import { secondaryMainColor } from 'themes/theme'

const NotFoundPage = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: 440,
        padding: 20,
      }}
    >
      <h1>Oops! Nothing here.</h1>
      <p style={{ marginBottom: 0, padding: '0px 20px' }}>
        Sorry about that! You probably weren't looking for cake, but have some
        cake anyway.
      </p>
      <Cake
        style={{
          height: 40,
          width: 40,
          margin: 10,
          color: secondaryMainColor,
        }}
      />
      <Link to={homeURL} style={{ margin: 18 }}>
        <Button variant="raised" color="primary" size="large">
          Head back home
        </Button>
      </Link>
    </div>
  </div>
)

export default NotFoundPage
