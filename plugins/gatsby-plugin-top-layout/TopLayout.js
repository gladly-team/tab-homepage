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

const TopLayout = (props) => (
  <>
    <Helmet>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <ThemeProvider theme={responsiveFontSizes(defaultTheme, { factor: 3.4 })}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  </>
)

TopLayout.propTypes = {
  children: PropTypes.node,
}

export default TopLayout
