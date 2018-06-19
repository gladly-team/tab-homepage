const DEBUG = false

const googleAnalytics = (...args) => {
  var ga = window.ga
  if (!ga) {
    console.error('Google Analytics is not available on `window.ga`.')
    return
  }
  try {
    if (DEBUG) {
      console.log('Logging Google event with args:', args)
    }
    ga.apply(this, args)
  } catch (e) {
    console.error('Failed to track Google Analytics event.', e)
  }
}

export default googleAnalytics
