import Typography from 'typography'

// https://kyleamathews.github.io/typography.js/
const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography
