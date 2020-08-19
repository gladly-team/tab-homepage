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
  scaleRatio: 2.2,
  baseLineHeight: 1.36,
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
    ul: {
      paddingLeft: '14px',
    },
    li: {
      color: lighterTextColor,
      marginBottom: 0,
      lineHeight: 1.36,
    },
    a: {
      color: primaryMainColor,
      textDecoration: 'none',
    },
  }),
})

// https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/#typographyjs-plugin-config-changes
export const { rhythm, scale } = typography

export default typography
