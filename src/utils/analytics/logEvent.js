/* globals setTimeout */

import fbq from './facebook-analytics'
import ga from './google-analytics'

// Note: the Facebook and Google Gatsby plugins
// automatically track pageviews.

/**
 * Fire analytics events for a download button click. Resolve
 * the returned promise when the event has been logged, or if
 * the event takes too long to log. It's important to wait for
 * the analytics event when download click will navigate the user
 * away from the page.
 * @return {Promise<undefined>}
 */
export const downloadButtonClick = async () => {
  const timeoutMs = 1000
  return new Promise(resolve => {
    fbq('track', 'Lead', { content_name: 'DownloadButtonClick' })

    // Need to wait for events to fire before navigating
    // away from the page.
    // https://support.google.com/analytics/answer/1136920?hl=en
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#hitCallback
    ga('send', {
      hitType: 'event',
      eventCategory: 'ButtonClick',
      eventAction: 'DownloadButtonClick',
      hitCallback: resolve,
    })

    // In case GA fails to call the callback within a
    // reasonable amount of time, simply resolve so
    // we don't interrupt the download.
    setTimeout(() => {
      resolve()
    }, timeoutMs)
  })
}
