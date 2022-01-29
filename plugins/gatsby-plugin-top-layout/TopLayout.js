import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@mui/material/CssBaseline'
import {
  ThemeProvider,
  StyledEngineProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
// eslint-disable-next-line import/no-relative-packages
import defaultTheme from '../../src/themes/theme'

function TopLayout(props) {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <StyledEngineProvider injectFirst>
        <ThemeProvider
          theme={responsiveFontSizes(defaultTheme, { factor: 3.4 })}
        >
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}

export default TopLayout
