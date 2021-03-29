import fbq from './facebook-analytics'

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
  fbq('track', 'Lead', { content_name: 'ExtensionDownload' })
}
