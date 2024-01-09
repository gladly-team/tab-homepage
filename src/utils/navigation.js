/* globals process */
export const domain = process.env.GATSBY_DOMAIN || 'tab.gladly.io'
export const protocol = 'https'
export const baseURL = `${protocol}://${domain}`

export const homeURL = '/'
export const helpURL = '/help/'
export const contactUsURL = '/contact/'
export const financialsURL = '/financials/'
export const termsURL = '/terms/'
export const privacy-policyURL = '/docs/privacy-policy/'
export const teamURL = '/team/'
export const jobsURL = '/jobs/'
export const adblockerWhitelistingURL = '/adblockers/'
export const catsURL = '/cats/'
export const seasURL = '/teamseas/'

// Million raised
export const millionRaisedURL = '/million/'
export const millionRaisedRainforestImpactURL = '/million/rainforest/'
export const millionRaisedWaterImpactURL = '/million/water/'
export const millionRaisedHungerImpactURL = '/million/hunger/'
export const millionRaisedGiveImpactURL = '/million/give/'
export const millionRaisedReadImpactURL = '/million/read/'
export const millionRaisedChildrenImpactURL = '/million/children/'
export const millionRaisedEducateImpactURL = '/million/educate/'

// Million and a half raised
export const millionHalfRaisedURL = '/million-and-a-half/'
export const millionHalfRaisedRainforestImpactURL =
  '/million-and-a-half/rainforest/'
export const millionHalfRaisedWaterImpactURL = '/million-and-a-half/water/'
export const millionHalfRaisedHungerImpactURL = '/million-and-a-half/hunger/'
export const millionHalfRaisedTreesImpactURL = '/million-and-a-half/trees/'
export const millionHalfRaisedCatsImpactURL = '/million-and-a-half/cats/'
export const millionHalfRaisedReadImpactURL = '/million-and-a-half/read/'
export const millionHalfRaisedChildrenImpactURL =
  '/million-and-a-half/children/'
export const millionHalfRaisedOceanImpactURL = '/million-and-a-half/ocean/'

// New tab page app URLs.
// Absolute URLs because it's outside of this Gatsby app.
export const newTabPageURL = `${baseURL}/newtab/`
export const accountPageURL = `${baseURL}/newtab/account/`

// Shop
export const shopHomeURL = 'https://shop.gladly.io'

// Search
export const searchHomeURL = 'https://search.gladly.io'
export const searchFirefoxExtensionPage =
  'https://addons.mozilla.org/en-US/firefox/addon/search-for-a-cause/'
export const searchChromeExtensionPage =
  'https://chrome.google.com/webstore/detail/search-for-a-cause/eeiiknnphladbapfamiamfimnnnodife/'

// Zendesk
export const externalHelpAllAppsURL = 'https://gladly.zendesk.com/hc/en-us'
export const externalHelpURL =
  'https://gladly.zendesk.com/hc/en-us/categories/201939608-Tab-for-a-Cause'
export const externalContactUsURL =
  'https://gladly.zendesk.com/hc/en-us/requests/new'

// Social
export const facebookPageURL = 'https://www.facebook.com/TabForACause'
export const instagramPageURL = 'https://www.instagram.com/tabforacause/'
export const twitterPageURL = 'https://twitter.com/TabForACause'
export const tiktokPageURL = 'https://www.tiktok.com/@tabforacause'
export const youtubePageURL = 'https://www.youtube.com/@tabforacause'

// Github
export const githubOrganizationURL = 'https://github.com/gladly-team/'
export const githubTabRepoURL = 'https://github.com/gladly-team/tab'
export const githubTabExtensionsRepoURL =
  'https://github.com/gladly-team/tab-extensions'
export const githubTabHomepageRepoURL =
  'https://github.com/gladly-team/tab-homepage'

// Forms
export const suggestForm =
  'https://docs.google.com/forms/d/e/1FAIpQLSeA5d2T2c6YsqoW_ROIKOujmRw-RGPowg-ReHfUBX0yO2QMQA/viewform'
export const suggestFeatureForm =
  'https://docs.google.com/forms/d/e/1FAIpQLScs7kAadAI_PKi7gZx39MzJ1nwKkE6Fn-xbrf9ZoiOOX4bztA/viewform'

// Press
export const pressHuffingtonPostURL =
  'https://www.huffingtonpost.com/2012/10/17/tab-for-a-cause_n_1971515.html'
export const pressUSATodayURL =
  'https://www.usatoday.com/story/tech/columnist/2012/11/10/charity-apps/1692771/'
export const pressLATimesURL =
  'http://articles.latimes.com/2012/oct/15/business/la-fi-tn-tab-for-a-cause-20121014'
export const pressNPQURL =
  'https://nonprofitquarterly.org/2012/10/17/innovation-open-a-new-browser-tab-give-to-charity/'
export const pressFastCompanyURL =
  'https://www.fastcompany.com/3065808/let-your-compulsion-to-open-hundreds-of-browser-tabs-do-some-good'
export const pressMashableURL =
  'https://mashable.com/2014/11/04/chrome-extensions-charity/#LMtNgZ4lUZqp'

// Extensions
export const chromeExtensionURL =
  'https://chrome.google.com/webstore/detail/tab-for-a-cause/gibkoahgjfhphbmeiphbcnhehbfdlcgo'
export const edgeExtensionURL =
  'https://microsoftedge.microsoft.com/addons/detail/hmiiajmhelfgiaoboffbjpjdckbmnddg'
export const firefoxExtensionURL =
  'https://addons.mozilla.org/en-US/firefox/addon/tab-for-a-cause/'
export const safariExtensionURL =
  'https://apps.apple.com/us/app/tab-for-a-cause/id1579749108'

// Advertising
export const advertisingSelfServeURL = 'https://orders.gladly.io'

/**
 * Append the protocol and domain to return the
 * absolute URL of a path.
 * @return {string} The absolute URL
 */
export const getAbsoluteURL = (path) => {
  // If the passed path is already an absolute URL,
  // just return it.
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  // Prepend or postpend slashes if url fragment doesn't have them
  if (!path.startsWith('/')) {
    path = `/${path}`
  }
  const assumedStaticFile = path.indexOf('.') > -1
  if (!path.endsWith('/') && !assumedStaticFile) {
    path = `${path}/`
  }
  return `${baseURL}${path}`
}
