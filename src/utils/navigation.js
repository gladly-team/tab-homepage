/* globals process */
export const domain = process.env.GATSBY_DOMAIN || 'tab.gladly.io'
export const protocol = 'https'
export const baseURL = `${protocol}://${domain}`

export const homeURL = '/'
export const helpURL = '/help/'
export const contactUsURL = '/contact/'
export const financialsURL = '/financials/'
export const termsURL = '/terms/'
export const privacyPolicyURL = '/privacy/'
export const teamURL = '/team/'
export const jobsURL = '/jobs/'
export const adblockerWhitelistingURL = '/adblockers/'
export const catsURL = '/cats/'

// Million raised
export const millionRaisedURL = '/million/'
export const millionRaisedRainforestImpactURL = '/million/rainforest/'
export const millionRaisedWaterImpactURL = '/million/water/'
export const millionRaisedHungerImpactURL = '/million/hunger/'
export const millionRaisedGiveImpactURL = '/million/give/'
export const millionRaisedReadImpactURL = '/million/read/'
export const millionRaisedChildrenImpactURL = '/million/children/'
export const millionRaisedEducateImpactURL = '/million/educate/'

// New tab page app URLs.
// Absolute URLs because it's outside of this Gatsby app.
export const newTabPageURL = `${baseURL}/newtab/`
export const accountPageURL = `${baseURL}/newtab/account/`

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
export const tiktokPageURL = 'https://www.tiktok.com/@tabforacause.official?'
// Github
export const githubOrganizationURL =
  'https://github.com/gladly-team/tab-homepage'
export const githubTabRepoURL = 'https://github.com/gladly-team/tab'
export const githubTabExtensionsRepoURL =
  'https://github.com/gladly-team/tab-extensions'
export const githubTabHomepageRepoURL =
  'https://github.com/gladly-team/tab-homepage'

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
  return `${baseURL}${path}`
}
