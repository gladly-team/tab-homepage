import Typography from 'typography'

import {
  baseFontSize,
  lighterTextColor,
  lightestTextColor,
  primaryMainColor,
  textColor,
} from './theme'

// https://kyleamathews.github.io/typography.js/
const typography = new Typography({
  baseFontSize: `${baseFontSize}px`,
  baseLineHeight: 1.2,
  headerFontFamily: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  headerWeight: 'normal',
  bodyWeight: 'normal',
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
    h1: {
      color: textColor,
      fontWeight: '500',
    },
    h2: {
      color: textColor,
    },
    h3: {
      color: lighterTextColor,
    },
    h4: {
      color: lighterTextColor,
    },
    h5: {
      color: lightestTextColor,
    },
    h6: {
      color: lightestTextColor,
    },
    p: {
      color: lighterTextColor,
    },
    a: {
      color: primaryMainColor,
      textDecoration: 'none',
    },
  }),
})

export default typography
