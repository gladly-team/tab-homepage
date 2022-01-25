import React from 'react'
import {
  ThemeProvider,
  StyledEngineProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import { shallow as enzymeShallow, mount as enzymeMount } from 'enzyme'
import defaultTheme from 'src/themes/theme'

export const shallow = (Component, ...otherArgs) =>
  enzymeShallow(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>{Component}</ThemeProvider>
    </StyledEngineProvider>,
    ...otherArgs
  )

export const mount = (Component, ...otherArgs) =>
  enzymeMount(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>{Component}</ThemeProvider>
    </StyledEngineProvider>,
    ...otherArgs
  )
