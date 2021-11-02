import Landing from './Landing'
import { tabForCatsTheme, tabForTeamSeasTheme } from 'src/themes/theme'
import { responsiveFontSizes } from '@material-ui/core/styles'
import { getAbsoluteURL, catsURL, seasURL } from 'src/utils/navigation'
import openGraphImg from 'src/img/seasOG.png'
import { STORAGE_CATS_CAUSE_ID, STORAGE_SEAS_CAUSE_ID } from 'src/utils/constants'

export default {
  title: 'Components/Landing',
  component: Landing,
}

const Template = (args) => <Landing {...args} />
export const seas = Template.bind({})
seas.args = {
  location: {
    pathname: '/',
  },
  pageContext: {},
  theme: responsiveFontSizes(tabForTeamSeasTheme, { factor: 3.4 }),
  causeData: {
    causeId: STORAGE_SEAS_CAUSE_ID,
    canonicalURL: getAbsoluteURL(seasURL),
    title: 'The easiest way to save our seas',
    subtitle: 'Every tab opened raises money for #TeamSeas, an internet-led movement raising $30 million to clean up 30 million pounds of trash from our oceans, rivers, and lakes.',
    headTitle: "Tab for TeamSeas - Home",
    headTitleTemplate: "%s | Tab for TeamSeas",
    headOgTitle: "Remove trash from the seas for free | Tab for #TeamSeas ",
    headOgDescription: "Open browser tabs to clean our seas, for free. It's that easy. Join #teamseas today!",
    headKeywords: "charity, seas, TeamSeas, teamseas, #teamseas, ocean, oceans, sharks, whales, dolphins, fish, environment, global warming, river, rivers, lake, lakes, pollution, extension, new tab, chrome, help, donation, raise money, money, easy, ways to donate, free, best, home, youtube, safe, volunteer, internet, tab for a cause, impact, legitimate, food, facebook, twitter, reddit, instagram, tumblr",
    headOgImgURLAbsolute: getAbsoluteURL(openGraphImg)
  }
}

export const cats = Template.bind({})
cats.args = {
  location: {
    pathname: '/',
  },
  pageContext: {},
  theme: responsiveFontSizes(tabForCatsTheme, { factor: 3.4 }),
  causeData: {
    causeId: STORAGE_CATS_CAUSE_ID,
    canonicalURL: getAbsoluteURL(catsURL),
    title: 'The easiest way to help cats',
    subtitle: 'Every tab opened raises money for cats in need of a fur-ever home. It’s so easy a cat could do it!',
    headTitle: "Tab for Cats - Home",
    headTitleTemplate: "%s | Tab for Cats",
    headOgTitle: "TODO",
    headOgDescription: "TODO",
    headKeywords: "TODO",
    headOgImgURLAbsolute: getAbsoluteURL(openGraphImg) //todo
  }
}