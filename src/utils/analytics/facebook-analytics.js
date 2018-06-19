const DEBUG = false

const facebookAnalytics = (...args) => {
  var fbq = window.fbq
  if (!fbq) {
    console.error('Facebook analytics is not available on `window.fbq`.')
    return
  }
  try {
    if (DEBUG) {
      console.log('Logging Facebook event with args:', args)
    }
    fbq.apply(this, args)
  } catch (e) {
    console.error('Failed to track Facebook Analytics event.', e)
  }
}

export default facebookAnalytics
