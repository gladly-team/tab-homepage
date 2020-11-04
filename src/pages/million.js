import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactFullpage from '@fullpage/react-fullpage'
import { ThemeProvider } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
// import red from '@material-ui/core/colors/red'
// import teal from '@material-ui/core/colors/teal'
// import brown from '@material-ui/core/colors/brown'
import Button from '@material-ui/core/Button'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowLeftIcon from '@material-ui/icons/ArrowBack'
import ArrowRightIcon from '@material-ui/icons/ArrowForward'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  // fade,
  lighten,
} from '@material-ui/core/styles/colorManipulator'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { responsiveFontSizes } from '@material-ui/core/styles'

import HeadTags from 'src/components/HeadTags'
import MoneyRaised from 'src/components/MoneyRaised'
import defaultTheme from 'src/themes/theme'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import {
  facebookPageURL,
  getAbsoluteURL,
  homeURL,
  instagramPageURL,
  millionRaisedURL,
  millionRaisedRainforestImpactURL,
  millionRaisedWaterImpactURL,
  millionRaisedHungerImpactURL,
  millionRaisedGiveImpactURL,
  millionRaisedReadImpactURL,
  millionRaisedChildrenImpactURL,
  millionRaisedEducateImpactURL,
  twitterPageURL,
} from 'src/utils/navigation'
import Footer from 'src/components/Footer'
import Link from 'src/components/Link'
import SocialShare from 'src/components/SocialShare'
import logoWithText from 'src/img/logo-with-text.svg'
import logoWithTextWhite from 'src/img/logo-with-text-white.svg'
import waterImg from 'src/img/million/water.jpg'
import forestImg from 'src/img/million/forest.jpg'
import actionAgainstHungerImg from 'src/img/million/action-against-hunger.jpg'
import giveDirectlyImg from 'src/img/million/give-directly.jpg'
import roomToReadImg from 'src/img/million/room-to-read.jpg'
import saveTheChildrenImg from 'src/img/million/save-the-children.jpg'
import schoolImg from 'src/img/million/school.jpg'
import openGraphImg1M from 'src/img/million/og-img-1M.png'
import openGraphImg1MWater from 'src/img/million/og-img-1M-water.png'
import openGraphImg1MChildren from 'src/img/million/og-img-1M-children.png'
import openGraphImg1MEducate from 'src/img/million/og-img-1M-educate.png'
import openGraphImg1MGive from 'src/img/million/og-img-1M-give.png'
import openGraphImg1MHunger from 'src/img/million/og-img-1M-hunger.png'
import openGraphImg1MRainforestV2 from 'src/img/million/og-img-1M-rainforest-v2.png'
import openGraphImg1MRead from 'src/img/million/og-img-1M-read.png'

const DARK_BACKGROUND = grey['800']
const LIGHT_BACKGROUND = grey['50']

const RAINFOREST = 'rainforest'
const WATER = 'water'
const HUNGER = 'hunger'
const GIVE = 'give'
const READ = 'read'
const CHILDREN = 'children'
const EDUCATE = 'educate'

// TODO:
// - update sharing copy
// - prettier landing page background

const useStyles = makeStyles((theme) => ({
  '@global': {
    '.fp-slidesNav': {
      display: 'flex',
      justifyContent: 'center',
    },
    '.fp-slidesNav.fp-bottom': {
      bottom: 86,
    },
    '.fp-slidesNav ul li a span': {
      backgroundColor: theme.palette.common.white,
      height: 6,
      width: 6,
    },
    '.fp-slidesNav ul li a.active span': {
      height: 14,
      width: 14,
    },
  },
  pageBackground: {
    background: LIGHT_BACKGROUND,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  logoContainer: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    minWidth: 120,
  },
  menuContainer: {
    // Leaving in menu logic in case we add more page content,
    // but the menu seems unncessary now.
    display: 'none',
    // display: 'flex',
    flex: 3,
    margin: '0px 10px',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  installButtonContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menu: ({ isInDarkSection }) => {
    return {
      color: isInDarkSection
        ? theme.palette.common.white
        : theme.palette.text.primary,
    }
  },
  menuTab: {
    [theme.breakpoints.down('md')]: {
      minWidth: 140,
      padding: '6px 12px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 80,
      padding: '6px 12px',
    },
    [theme.breakpoints.down(820)]: {
      display: 'none',
    },
  },
  sectionWrapper: {
    position: 'relative',
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'flex-start',
    padding: '60px 0px', // make room for the fixed header and footer
  },
  slideContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'flex-start',
  },
  scheduleSlide: {
    padding: '0px 8px',
  },
  scheduleSlideTextContainer: {
    maxWidth: 600,
  },
  thankYouTextContainer: {
    maxWidth: 600,
  },
  slidesFixedHeader: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    top: 60, // make room for the page header
    display: 'flex',
    justifyContent: 'center',
  },
  slideHeaderText: {
    padding: `0px ${theme.spacing(1)}px`,
    color: theme.palette.common.white,
    marginTop: 20,
    textAlign: 'center',
  },
  slideHeaderContent: {
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 640,
  },
  topBackground: {
    // Aurora effect: https://codepen.io/shottsn/pen/QOqpqP
    background: 'linear-gradient(45deg, #32a6ff 0%, #3f6fff 49%, #8d54ff 82%)',
    backgroundSize: '200%',
    animation: '$aurora 10s infinite',
  },
  topBackgroundInner: {
    background:
      'radial-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15))',
    backgroundSize: '200%',
    animation: '$aurora 7s infinite',
  },
  '@keyframes aurora': {
    '      0%': {
      backgroundPosition: 'left top',
    },
    '25%': {
      backgroundPosition: 'right top',
    },
    '50%': {
      backgroundPosition: 'right bottom',
    },
    '75%': {
      backgroundPosition: 'left bottom',
    },
    '100%': {
      backgroundPosition: 'left top',
    },
  },
  darkBackground: {
    background: DARK_BACKGROUND,
  },
  lightBackground: {
    background: LIGHT_BACKGROUND,
  },
  greenBackground: {
    background: green[400],
  },
  blueBackground: {
    background: blue[600],
  },
  arrowButtonContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    pointerEvents: 'none',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-around',
    display: 'flex',
    padding: theme.spacing(3),
  },
  arrowButton: ({ dark }) => {
    // Dark color matches aurora effect.
    const backgroundColor = dark ? '#32a6ff' : LIGHT_BACKGROUND
    const color = dark ? theme.palette.common.white : 'auto'
    return {
      borderRadius: 50, // equal to the height
      height: 50,
      minWidth: 50,
      background: backgroundColor,
      color,
      transition: 'all .2s ease-in-out',
      pointerEvents: 'all',
      padding: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        transform: 'scale(1.1)',
        background: lighten(backgroundColor, 0.15),
      },
    }
  },
  leftRightArrowButton: {
    // Hide the left/right arrows on mobile.
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  arrowIcon: ({ dark }) => ({
    width: 28,
    height: 28,
    color: dark ? LIGHT_BACKGROUND : DARK_BACKGROUND,
  }),
  arrowText: {
    color: DARK_BACKGROUND,
    textTransform: 'none',
  },
  whiteColor: {
    color: theme.palette.common.white,
  },
  moneyRaised: {
    fontWeight: 500,
    display: 'inline-block',
    padding: `0px ${theme.spacing(1)}px`,
    color: theme.palette.common.white,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  moneyRaisedText: ({ isInDarkSection }) => ({
    fontWeight: 200,
    color: isInDarkSection
      ? theme.palette.common.white
      : theme.palette.text.primary,
  }),
  impactTextPrimary: ({ dark }) => ({
    color: dark ? 'auto' : theme.palette.common.white,
    fontWeight: 500,
  }),
  impactTextSupporting: ({ dark }) => ({
    color: dark ? 'auto' : grey[300],
    fontWeight: 200,
  }),
  center: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(2),
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  hiddenUntilPageRendered: ({ isPageReady }) => {
    return {
      opacity: isPageReady ? 100 : 0,
      transition: 'opacity 0.5s ease-in-out',
    }
  },
  impactSlide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  impactTextContainer: {
    flex: 1,
  },
  impactBackgroundImage: {
    display: 'none',
    position: 'relative',
  },
  waterImgBackground: {
    backgroundImage: `url("${waterImg}")`,
    // backgroundColor: fade(blue[700], 0.8),
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  forestImgBackground: {
    backgroundImage: `url("${forestImg}")`,
    // backgroundColor: fade(darken(green[900], 0.1), 0.7),
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  actionAgainstHungerBackgroundImg: {
    backgroundImage: `url("${actionAgainstHungerImg}")`,
    // backgroundColor: fade(darken(red[900], 0.2), 0.6),
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  giveDirectlyBackgroundImg: {
    backgroundImage: `url("${giveDirectlyImg}")`,
    // backgroundColor: fade(teal[900], 0.7),
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  roomToReadBackgroundImg: {
    backgroundImage: `url("${roomToReadImg}")`,
    // backgroundColor: fade(brown[700], 0.8),
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  saveTheChildrenBackgroundImg: {
    backgroundImage: `url("${saveTheChildrenImg}")`,
    // backgroundColor: fade(darken(red[900], 0.4), 0.7),
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  schoolBackgroundImg: {
    backgroundImage: `url("${schoolImg}")`,
    // backgroundColor: fade(brown[900], 0.6),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  fullPageBackgroundImg: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
  },
  shareContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(4),
  },
  thanksShareWrapper: {
    margin: theme.spacing(2),
  },
  bottomThankYouText: {
    color: theme.palette.common.white,
    // Matches the aurora effect on the top section.
    background: 'linear-gradient(45deg, #32a6ff 0%, #3f6fff 49%, #8d54ff 82%)',
  },
}))

const Section = ({ id, children, className, autoHeight }) => {
  return (
    <div
      data-anchor={id}
      className={clsx({
        section: true,
        'fp-auto-height': autoHeight,
        sectionWrapper: true,
        [className]: true,
      })}
    >
      {children}
    </div>
  )
}
Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  autoHeight: PropTypes.bool.isRequired,
}
Section.defaultProps = {
  autoHeight: false,
  style: {},
  className: '',
}

const Slide = ({ children, className, style = {} }) => {
  const classes = useStyles()
  return (
    <div className={'slide'}>
      <div className={clsx(classes.slideContent, className)} style={style}>
        {children}
      </div>
    </div>
  )
}
Slide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
}
Slide.defaultProps = {
  style: {},
  className: '',
}

const ArrowButton = ({
  children,
  className,
  dark,
  onClick,
  arrowDirection,
}) => {
  const classes = useStyles({ dark })
  let ArrowIcon
  switch (arrowDirection) {
    case 'left':
      ArrowIcon = ArrowLeftIcon
      break
    case 'right':
      ArrowIcon = ArrowRightIcon
      break
    case 'down':
      ArrowIcon = ArrowDownwardIcon
      break
    default:
      ArrowIcon = ArrowDownwardIcon
  }
  return (
    <div className={className}>
      <Button
        onClick={onClick}
        className={clsx(classes.arrowButton)}
        elevation={1}
        size="small"
        variant="contained"
      >
        {children}
        <ArrowIcon className={classes.arrowIcon} />
      </Button>
    </div>
  )
}
ArrowButton.propTypes = {
  arrowDirection: PropTypes.oneOf(['left', 'right', 'down']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  dark: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
ArrowButton.defaultProps = {
  arrowDirection: 'down',
  className: undefined,
  dark: false,
  onClick: () => {},
}

const ArrowButtonContainer = ({ children, className }) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.arrowButtonContainer, className)}>
      {children}
    </div>
  )
}

ArrowButtonContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
ArrowButtonContainer.defaultProps = {
  className: undefined,
}

const Center = ({ children, className }) => {
  const classes = useStyles()
  return <div className={clsx(classes.center, className)}>{children}</div>
}

Center.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
Center.defaultProps = {
  className: undefined,
}

const MillionPage = ({
  location: { pathname },
  pageContext: { impactStat } = {},
}) => {
  // We generate subpages to make each impact stat shareable.
  // Set the open graph info based on the specific impact stat.
  let title = '$1M Raised'
  const ogTitle =
    'I helped raise $1,000,000 for charity by doing almost nothing'
  const ogDescription =
    'Turn your internet browsing into positive impact with Tab for a Cause.'
  let ogImage = getAbsoluteURL(openGraphImg1M)
  switch (impactStat) {
    case RAINFOREST: {
      title = 'Protected over 5,000 acres of rainforest - $1M Raised'
      ogImage = getAbsoluteURL(openGraphImg1MRainforestV2)
      break
    }
    case WATER: {
      title = 'Access to clean water for 12,000 people - $1M Raised'
      ogImage = getAbsoluteURL(openGraphImg1MWater)
      break
    }
    case HUNGER: {
      title = 'Live-saving treatment for 1,500 children - $1M Raised'
      ogImage = getAbsoluteURL(openGraphImg1MHunger)
      break
    }
    case GIVE: {
      title = 'Over $41,000 in cash transfers - $1M Raised'
      ogImage = getAbsoluteURL(openGraphImg1MGive)
      break
    }
    case READ: {
      title = 'Kept over 200 girls in school - $1M Raised'
      ogImage = getAbsoluteURL(openGraphImg1MRead)
      break
    }
    case CHILDREN: {
      title =
        'A month of emergency nutrition for over 6,000 children - $1M Raised'
      ogImage = getAbsoluteURL(openGraphImg1MChildren)
      break
    }
    case EDUCATE: {
      title = 'Learning materials for over 3,500 children - $1M Raised'
      ogImage = getAbsoluteURL(openGraphImg1MEducate)
      break
    }
    default: {
      break
    }
  }

  const MENU_ID = 'nav-menu'
  const MENU_ITEM_1M_ID = 'top'
  const MENU_ITEM_1M_TEXT = '$1M'
  const SECTION_ID_IMPACT_INTRO = 'impact-intro'
  const MENU_ITEM_IMPACT_ID = 'impact'
  const MENU_ITEM_IMPACT_TEXT = 'Your Impact'
  const MENU_ITEM_THANKS_ID = 'thanks'
  const MENU_ITEM_THANKS_TEXT = 'Thanks'
  const MENU_ITEM_CELEBRATION_ID = 'celebration'
  const MENU_ITEM_CELEBRATION_TEXT = 'Celebration'

  const SECTION_ID_TOP = 'top'
  const SECTION_ID_IMPACT = 'impact'
  const SECTION_ID_THANKS = 'thanks'
  const SECTION_ID_CELEBRATION = 'celebration'
  const SECTION_ID_FOOTER = 'footer-section'
  const FOOTER_ID = 'footer'

  // This is the index of the Fullpage.js section that's currently
  // in focus.
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  // To know when Fullpage.js has initialized.
  const [isPageReady, setIsPageReady] = useState(false)

  // Data used to render the navigation menu items.
  // Note: you may have to adjust tab CSS breakpoints if adding
  // menu items or changing text.
  const menuItems = [
    {
      id: MENU_ITEM_1M_ID, // used to link a section to this menu item
      text: MENU_ITEM_1M_TEXT, // the display text
      linkTo: SECTION_ID_TOP, // which section this should navigate to
    },
    {
      id: MENU_ITEM_IMPACT_ID,
      text: MENU_ITEM_IMPACT_TEXT,
      linkTo: SECTION_ID_IMPACT,
    },
    {
      id: MENU_ITEM_CELEBRATION_ID,
      text: MENU_ITEM_CELEBRATION_TEXT,
      linkTo: SECTION_ID_CELEBRATION,
    },
    {
      id: MENU_ITEM_THANKS_ID,
      text: MENU_ITEM_THANKS_TEXT,
      linkTo: SECTION_ID_THANKS,
    },
  ]

  // Partial data used to order and display page sections.
  // To add a section, be sure to also add an object to the
  // `sectionData` object below. We divided this info into
  // `sections` and `sectionData` because we need to use the
  // "dark" option to generate classes.
  const sections = [
    {
      id: SECTION_ID_TOP,
      dark: true,
      activeMenuId: MENU_ITEM_1M_ID,
    },
    {
      id: SECTION_ID_IMPACT_INTRO,
      dark: false,
      activeMenuId: MENU_ITEM_IMPACT_ID,
    },
    {
      id: SECTION_ID_IMPACT,
      dark: true,
      activeMenuId: MENU_ITEM_IMPACT_ID,
    },
    {
      id: SECTION_ID_CELEBRATION,
      dark: true,
      activeMenuId: MENU_ITEM_CELEBRATION_ID,
    },
    {
      id: SECTION_ID_THANKS,
      dark: false,
      activeMenuId: MENU_ITEM_THANKS_ID,
    },
    {
      id: SECTION_ID_FOOTER,
      dark: false,
      activeMenuId: MENU_ITEM_THANKS_ID,
    },
  ]

  // Generate classes
  const isInDarkSection = sections[currentSectionIndex].dark
  let classes = useStyles({
    isInDarkSection,
    isPageReady,
    dark: !isInDarkSection,
  })

  // Determine which menu item should be active based on the
  // current section index.
  const mapSectionIndexToMenuIndex = (sectionIndex) => {
    const { activeMenuId } = sections[sectionIndex]
    return menuItems.findIndex((item) => item.id === activeMenuId)
  }
  const currentMenuTabIndex = mapSectionIndexToMenuIndex(currentSectionIndex)

  // The rest of the data used to render sections.
  // Section order is determined in the `sections` array above.
  const sectionData = {
    [SECTION_ID_TOP]: {
      className: classes.topBackground,
      content: (
        <div
          className={clsx(classes.sectionContent, classes.topBackgroundInner)}
        >
          <Center className={classes.hiddenUntilPageRendered}>
            <Typography
              variant={'h5'}
              className={clsx(classes.moneyRaisedText)}
            >
              Together, your tabs have raised
            </Typography>
            <Typography variant={'h1'} className={clsx(classes.moneyRaised)}>
              <MoneyRaised />
            </Typography>
            <Typography
              variant={'h5'}
              className={clsx(classes.moneyRaisedText)}
            >
              for incredible causes
            </Typography>
          </Center>
          <ArrowButtonContainer className={classes.hiddenUntilPageRendered}>
            <ArrowButton onClick={() => window.fullpage_api.moveSectionDown()}>
              <Typography
                variant={'body1'}
                className={classes.arrowText}
                style={{ margin: '0px 12px' }}
              >
                How we got here
              </Typography>
            </ArrowButton>
          </ArrowButtonContainer>
        </div>
      ),
    },
    [SECTION_ID_IMPACT_INTRO]: {
      className: clsx(classes.lightBackground, classes.hiddenUntilPageRendered),
      content: (
        <div className={classes.sectionContent}>
          <Center>
            <Typography
              variant={'h5'}
              className={clsx(classes.moneyRaisedText)}
              gutterBottom
            >
              We never imagined we would
            </Typography>
            <Typography
              variant={'h1'}
              className={clsx(classes.moneyRaised, classes.bottomThankYouText)}
              gutterBottom
            >
              #TabForAMillion
            </Typography>
            <Typography variant={'body2'} style={{ maxWidth: 540 }} paragraph>
              When we first launched Tab for a Cause, we thought it was a fun
              idea to do a little good, for free.
            </Typography>
            <Typography variant={'body2'} style={{ maxWidth: 540 }} paragraph>
              What we didn't expect was{' '}
              <span style={{ fontWeight: 'bold' }}>you</span>. Soon, the little
              good became a lot of good. And here we are.
            </Typography>
          </Center>
          <ArrowButtonContainer className={classes.hiddenUntilPageRendered}>
            <ArrowButton
              className={classes.purpleBackground}
              onClick={() => window.fullpage_api.moveSectionDown()}
              dark
            >
              <Typography
                variant={'body1'}
                className={clsx(classes.arrowText, classes.whiteColor)}
                style={{ margin: '0px 12px' }}
              >
                See the impact
              </Typography>
            </ArrowButton>
          </ArrowButtonContainer>
        </div>
      ),
    },
    [SECTION_ID_IMPACT]: {
      className: clsx(classes.hiddenUntilPageRendered),
      content: (
        <>
          <div className={classes.slidesFixedHeader}>
            <Typography
              variant={'h5'}
              className={clsx(classes.slideHeaderText)}
            >
              Tabbers have raised enough to...
            </Typography>
          </div>
          <Slide>
            <div
              className={clsx(
                classes.fullPageBackgroundImg,
                classes.forestImgBackground
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant={'h2'}
                    className={classes.impactTextPrimary}
                  >
                    protect 5,000 acres of rainforest
                  </Typography>
                  <Typography
                    variant={'h5'}
                    className={classes.impactTextSupporting}
                  >
                    through Conservation International
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionRaisedRainforestImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                          // quote:
                          //   'I helped protect over 5,000 acres of rainforest just by opening tabs! Join me in turning your internet browsing into a force for good with @TabForACause',
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          '5,000 acres of rainforest protected just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped protect 5,000 acres of rainforest just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped protect over 5,000 acres of rainforest just by opening tabs with @TabForACause. Join me! #TabForAMillion',
                        related: ['@TabForACause'],
                      }}
                    />
                  </div>
                </Center>
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className={clsx(
                classes.fullPageBackgroundImg,
                classes.saveTheChildrenBackgroundImg
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant={'h2'}
                    className={classes.impactTextPrimary}
                  >
                    give over 6,000 children a month of emergency nutrition
                  </Typography>
                  <Typography
                    variant={'h5'}
                    className={classes.impactTextSupporting}
                  >
                    through Save the Children
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionRaisedChildrenImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                          // quote:
                          //   'I helped provide emergency nutrition to over 6,000 children just by opening tabs! Join me in turning your internet browsing into a force for good with @TabForACause',
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          '6,000 children provided emergency nutrition just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped  provide emergency nutrition to over 6,000 children just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped provide emergency nutrition to over 6,000 children just by opening tabs with @TabForACause. Join me! #TabForAMillion',
                        related: ['@TabForACause'],
                      }}
                    />
                  </div>
                </Center>
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className={clsx(
                classes.fullPageBackgroundImg,
                classes.roomToReadBackgroundImg
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant={'h2'}
                    className={classes.impactTextPrimary}
                  >
                    keep over 200 girls in school
                  </Typography>
                  <Typography
                    variant={'h5'}
                    className={classes.impactTextSupporting}
                  >
                    through Room to Read
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionRaisedReadImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                          // quote:
                          //   'I helped keep over 200 girls in school just by opening tabs! Join me in turning your internet browsing into a force for good with @TabForACause',
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          'Browser tabs transformed into education for over 200 girls',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped keep over 200 girls in school just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause.',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped keep over 200 girls in school just by opening tabs with @TabForACause. Join me! #TabForAMillion',
                        related: ['@TabForACause'],
                      }}
                    />
                  </div>
                </Center>
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className={clsx(
                classes.fullPageBackgroundImg,
                classes.waterImgBackground
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant={'h2'}
                    className={classes.impactTextPrimary}
                  >
                    provide access to clean water to over 12,000 people
                  </Typography>
                  <Typography
                    variant={'h5'}
                    className={classes.impactTextSupporting}
                  >
                    through Water.org
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionRaisedWaterImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                          // quote:
                          //   'I helped provide access to clean water for over 12,000 people just by opening tabs! Join me in turning your internet browsing into a force for good with @TabForACause',
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          'Access to clean water for over 12,000 people just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped provide access to clean water for over 12,000 people just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped provide access to clean water for over 12,000 people just by opening tabs with @TabForACause. Join me! #TabForAMillion',
                        related: ['@TabForACause'],
                      }}
                    />
                  </div>
                </Center>
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className={clsx(
                classes.fullPageBackgroundImg,
                classes.actionAgainstHungerBackgroundImg
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant={'h2'}
                    className={classes.impactTextPrimary}
                  >
                    provide life-saving malnutrition treatment to over 1,500
                    children
                  </Typography>
                  <Typography
                    variant={'h5'}
                    className={classes.impactTextSupporting}
                  >
                    through Action Against Hunger
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionRaisedHungerImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                          // quote:
                          //   'I helped provide food to over 1,500 children just by opening tabs! Join me in turning your internet browsing into a force for good with @TabForACause',
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          '1,500 children fed just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped provide food to over 1,500 children just by opening tabs with @TabForACause. Join me! #TabForAMillion',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped provide food to over 1,500 children just by opening tabs with @TabForACause. Join me! #TabForAMillion',
                        related: ['@TabForACause'],
                      }}
                    />
                  </div>
                </Center>
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className={clsx(
                classes.fullPageBackgroundImg,
                classes.giveDirectlyBackgroundImg
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant={'h2'}
                    className={classes.impactTextPrimary}
                  >
                    fund over $41,000 in direct cash transfers
                  </Typography>
                  <Typography
                    variant={'h5'}
                    className={classes.impactTextSupporting}
                  >
                    through GiveDirectly
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionRaisedGiveImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                          // quote:
                          //   'I helped transfer over $41,000 to those in need just by opening tabs! Join me in turning your internet browsing into a force for good with @TabForACause',
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          '$41,000 in direct cash transfer to those in need just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped transfer over $41,000 to those in need just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped transfer over $41,000 to those in need just by opening tabs with @TabForACause. Join me! #TabForAMillion',
                        related: ['@TabForACause'],
                      }}
                    />
                  </div>
                </Center>
              </div>
            </div>
          </Slide>
          <Slide>
            <div
              className={clsx(
                classes.fullPageBackgroundImg,
                classes.schoolBackgroundImg
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant={'h2'}
                    className={classes.impactTextPrimary}
                  >
                    give learning materials to over 3,500 students
                  </Typography>
                  <Typography
                    variant={'h5'}
                    className={classes.impactTextSupporting}
                  >
                    through Educate!
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionRaisedEducateImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                          // quote:
                          //   'I helped provide learning materials to over 3,500 students just by opening tabs! Join me in turning your internet browsing into a force for good with @TabForACause',
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          'Browser tabs transformed into learning materials for over 3,500 students',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped provide learning materials to over 3,500 students just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped provide learning materials to over 3,500 students just by opening tabs with @TabForACause. Join me! #TabForAMillion',
                        related: ['@TabForACause'],
                      }}
                    />
                  </div>
                </Center>
              </div>
            </div>
          </Slide>
          <ArrowButtonContainer>
            <ArrowButton
              arrowDirection="left"
              className={classes.leftRightArrowButton}
              onClick={() => window.fullpage_api.moveSlideLeft()}
            />
            <ArrowButton
              arrowDirection="down"
              onClick={() => window.fullpage_api.moveSectionDown()}
            />
            <ArrowButton
              className={classes.leftRightArrowButton}
              arrowDirection="right"
              onClick={() => window.fullpage_api.moveSlideRight()}
            />
          </ArrowButtonContainer>
        </>
      ),
    },
    [SECTION_ID_CELEBRATION]: {
      className: clsx(classes.darkBackground, classes.hiddenUntilPageRendered),
      content: (
        <>
          <div className={classes.slidesFixedHeader}>
            <Typography
              variant={'h5'}
              className={clsx(classes.slideHeaderText)}
            >
              Join us as we celebrate each day leading up to $1M.
            </Typography>
          </div>
          <Slide
            className={classes.scheduleSlide}
            // Background color matches aurora effect.
            style={{ background: '#32a6ff' }}
          >
            <Center className={classes.scheduleSlideTextContainer}>
              <Typography
                variant={'h4'}
                className={clsx(
                  classes.whiteColor,
                  classes.impactTextSupporting
                )}
                gutterBottom
              >
                #MillionaireMonday
              </Typography>
              <Typography variant={'body2'} className={classes.whiteColor}>
                For us, it was as easy as opening tabs. For multi-millionaires,
                it’s as easy as writing a check. Join us each Monday on{' '}
                <Link
                  to={twitterPageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  Twitter
                </Link>{' '}
                and{' '}
                <Link
                  to={instagramPageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  Instagram
                </Link>{' '}
                as we ask the uber-wealthy to match with a $1M donation. We’re
                looking at you @google...
              </Typography>
            </Center>
          </Slide>
          <Slide
            className={classes.scheduleSlide}
            // A blend of the first two colors in the aurora effect.
            style={{ background: '#398BFF' }}
          >
            <Center className={classes.scheduleSlideTextContainer}>
              <Typography
                variant={'h4'}
                className={clsx(
                  classes.whiteColor,
                  classes.impactTextSupporting
                )}
                gutterBottom
              >
                #TabberTuesday
              </Typography>
              <Typography variant={'body2'} className={classes.whiteColor}>
                Tab for a Cause would not be possible without you. We would love
                to hear why you use it! DM us on{' '}
                <Link
                  to={instagramPageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  Instagram
                </Link>
                ,{' '}
                <Link
                  to={facebookPageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  Facebook
                </Link>
                , and{' '}
                <Link
                  to={twitterPageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  Twitter
                </Link>{' '}
                (or post why you tab to your feed with #TabForAMillion and
                @tabforacause) and you might be featured!
              </Typography>
            </Center>
          </Slide>
          <Slide
            className={classes.scheduleSlide}
            // Background color matches aurora effect.
            style={{ background: '#3f6fff' }}
          >
            <Center className={classes.scheduleSlideTextContainer}>
              <Typography
                variant={'h4'}
                className={clsx(
                  classes.whiteColor,
                  classes.impactTextSupporting
                )}
                gutterBottom
              >
                #WelcomeWednesday
              </Typography>
              <Typography variant={'body2'} className={classes.whiteColor}>
                Despite this incredible milestone, most people haven't heard of
                Tab for a Cause. Make sure your friends' tabs aren't going to
                waste. Text, email, call, DM, Snap, whatever it takes, make sure
                everyone knows that they can be part of this incredible
                movement!
              </Typography>
            </Center>
          </Slide>
          <Slide
            className={classes.scheduleSlide}
            // A blend of the second two colors in the aurora effect.
            style={{ background: '#6662FF' }}
          >
            <Center className={classes.scheduleSlideTextContainer}>
              <Typography
                variant={'h4'}
                className={clsx(
                  classes.whiteColor,
                  classes.impactTextSupporting
                )}
                gutterBottom
              >
                #ThankfulThursday
              </Typography>
              <Typography variant={'body2'} className={classes.whiteColor}>
                On social media, share which Tab for a Cause nonprofit partner
                or spotlight campaign you're most thankful for with
                #TabForAMillion and #ThankfulThursday.
              </Typography>
            </Center>
          </Slide>
          <Slide
            className={classes.scheduleSlide}
            // Background color matches aurora effect.
            style={{ background: '#8d54ff' }}
          >
            <Center className={classes.scheduleSlideTextContainer}>
              <Typography
                variant={'h4'}
                className={clsx(
                  classes.whiteColor,
                  classes.impactTextSupporting
                )}
                gutterBottom
              >
                #FriendFriday
              </Typography>
              <Typography variant={'body2'} className={classes.whiteColor}>
                We are proud to support nine incredible nonprofit partners who
                turn our tabs into concrete impact. Check out what they have to
                say about Tab for a Cause on{' '}
                <Link
                  to={instagramPageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  Instagram
                </Link>
                ,{' '}
                <Link
                  to={facebookPageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  Facebook
                </Link>
                , and{' '}
                <Link
                  to={twitterPageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  Twitter
                </Link>
                .
              </Typography>
            </Center>
          </Slide>
          <ArrowButtonContainer>
            <ArrowButton
              arrowDirection="left"
              className={classes.leftRightArrowButton}
              onClick={() => window.fullpage_api.moveSlideLeft()}
            />
            <ArrowButton
              arrowDirection="down"
              onClick={() => window.fullpage_api.moveSectionDown()}
            />
            <ArrowButton
              arrowDirection="right"
              className={classes.leftRightArrowButton}
              onClick={() => window.fullpage_api.moveSlideRight()}
            />
          </ArrowButtonContainer>
        </>
      ),
    },
    [SECTION_ID_THANKS]: {
      className: clsx(classes.lightBackground, classes.hiddenUntilPageRendered),
      content: (
        <div className={classes.sectionContent}>
          <Center>
            <Typography
              variant={'h1'}
              className={clsx(classes.moneyRaised, classes.bottomThankYouText)}
              gutterBottom
            >
              Thank you.
            </Typography>
            <div className={classes.thankYouTextContainer}>
              <Typography variant={'body2'} gutterBottom>
                This milestone took a village to accomplish, and we couldn't be
                more proud of the Tabbing community. From the bottoms of our
                hearts, thank you.
              </Typography>
              <div className={classes.thanksShareWrapper}>
                <Typography variant={'body2'} gutterBottom>
                  Share this achievement:
                </Typography>
                <SocialShare
                  url={getAbsoluteURL(millionRaisedURL)}
                  FacebookShareButtonProps={
                    {
                      // Disabling the quote so Facebook shares the large version
                      // of the image, but leaving this prop so that SocialShare
                      // will still show the Facebook button.
                      // quote:
                      //   'Join me in turning your internet browsing into a force for good with @TabForACause',
                    }
                  }
                  RedditShareButtonProps={{
                    title:
                      'Turn your internet browsing into a force for good with Tab for a Cause',
                  }}
                  TumblrShareButtonProps={{
                    title:
                      'A simple and free way to make the world a better place',
                    caption:
                      'Turn your internet browsing into a force for good with Tab for a Cause',
                  }}
                  TwitterShareButtonProps={{
                    title:
                      'Turn your internet browsing into a force for good with @TabForACause. Join me! #TabForAMillion',
                    related: ['@TabForACause'],
                  }}
                />
              </div>
            </div>
          </Center>
        </div>
      ),
    },
    [SECTION_ID_FOOTER]: {
      autoHeight: true,
      className: clsx(classes.lightBackground, classes.hiddenUntilPageRendered),
      content: (
        <Footer
          id={FOOTER_ID}
          style={{
            marginTop: 'auto',
            width: '100%',
          }}
        />
      ),
    },
  }

  return (
    <div>
      <HeadTags
        title={title}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImage}
        pageURL={pathname}
      />
      {/* Set a full page background while Fullpage is loading */}
      <div className={classes.pageBackground} />
      <div className={classes.header}>
        <div className={classes.logoContainer}>
          <Link to={homeURL}>
            <img
              data-test-id={'tab-logo-with-text'}
              src={isInDarkSection ? logoWithTextWhite : logoWithText}
              style={{ height: 40 }}
            />
          </Link>
        </div>
        <div className={classes.menuContainer}>
          <Tabs
            value={currentMenuTabIndex}
            id={MENU_ID}
            indicatorColor="primary"
            className={clsx(classes.menu, classes.hiddenUntilPageRendered)}
          >
            {menuItems.map((menuItem) => {
              return (
                <Tab
                  key={menuItem.id}
                  label={menuItem.text}
                  className={classes.menuTab}
                  onClick={() => {
                    window.fullpage_api.moveTo(menuItem.linkTo)
                  }}
                />
              )
            })}
          </Tabs>
        </div>

        <div className={classes.installButtonContainer}>
          <InstallButton
            size={'medium'}
            color="primary"
            style={{
              minWidth: 180,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onUnsupportedBrowserInstallClick={() => {
              redirect(homeURL)
            }}
          />
        </div>
      </div>
      <ReactFullpage
        licenseKey={'7F2A2647-CD094CE7-B5D7C859-577BFB5C'}
        scrollingSpeed={450}
        onLeave={(_, destination) => {
          if (destination) {
            setCurrentSectionIndex(destination.index || 0)
          }
        }}
        afterRender={() => {
          setIsPageReady(true)
        }}
        controlArrows={false}
        slidesNavigation // show nav dots on slides pages
        render={() => {
          return (
            <ReactFullpage.Wrapper menu={MENU_ID}>
              {sections.map((section) => {
                const sectionInfo = sectionData[section.id]
                return (
                  <Section
                    id={section.id}
                    key={section.id}
                    className={sectionInfo.className}
                    autoHeight={sectionInfo.autoHeight || false}
                  >
                    {sectionInfo.content}
                  </Section>
                )
              })}
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}
MillionPage.displayName = 'MillionPage'
MillionPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  headTagsProps: PropTypes.object,
  pageContext: PropTypes.shape({
    impactStat: PropTypes.oneOf([
      RAINFOREST,
      WATER,
      HUNGER,
      GIVE,
      READ,
      CHILDREN,
      EDUCATE,
    ]),
  }),
}
MillionPage.defaultProps = {
  pageContext: {
    impactStat: null,
  },
}

// Can't create and use theme in same component (useStyles will not use
// the custom theme).
const MillionPageWithTheme = (props) => (
  <ThemeProvider theme={responsiveFontSizes(defaultTheme, { factor: 3.4 })}>
    <MillionPage {...props} />
  </ThemeProvider>
)
MillionPageWithTheme.displayName = 'MillionPageWithTheme'

export default MillionPageWithTheme
