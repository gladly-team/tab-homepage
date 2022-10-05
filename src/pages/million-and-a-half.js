/* globals window */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactFullpage from '@fullpage/react-fullpage'
import {
  // fade,
  ThemeProvider,
  lighten,
  responsiveFontSizes,
} from '@mui/material/styles'
// import red from '@mui/material/colors/red'
// import teal from '@mui/material/colors/teal'
// import brown from '@mui/material/colors/brown'
import Button from '@mui/material/Button'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowLeftIcon from '@mui/icons-material/ArrowBack'
import ArrowRightIcon from '@mui/icons-material/ArrowForward'

// Don't use makeStyles or clsx for new components. This page
// was not updated when migrating to MUI v5.
import makeStyles from '@mui/styles/makeStyles'
import clsx from 'clsx'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

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
  tiktokPageURL,
  millionHalfRaisedURL,
  millionHalfRaisedRainforestImpactURL,
  millionHalfRaisedWaterImpactURL,
  millionHalfRaisedTreesImpactURL,
  millionHalfRaisedCatsImpactURL,
  millionHalfRaisedHungerImpactURL,
  millionHalfRaisedReadImpactURL,
  millionHalfRaisedChildrenImpactURL,
  millionHalfRaisedOceanImpactURL,
  twitterPageURL,
  youtubePageURL,
} from 'src/utils/navigation'
import Footer from 'src/components/Footer'
import Link from 'src/components/Link'
import SocialShare from 'src/components/SocialShare'
import logoWithText from 'src/img/logo-with-text.svg'
import logoWithTextWhite from 'src/img/logo-with-text-white.svg'

import waterImg from 'src/img/million-and-a-half/water-v2.jpg'
import conservationInternationalImg from 'src/img/million-and-a-half/conservation-international-v2.jpg'
import actionAgainstHungerImg from 'src/img/million-and-a-half/action-against-hunger-v2.jpg'
import roomToReadImg from 'src/img/million-and-a-half/room-to-read-v2.jpg'
import saveTheChildrenImg from 'src/img/million-and-a-half/save-the-children-v2.jpg'
import edenReforestationImg from 'src/img/million-and-a-half/eden-reforestation-projects-v2.jpg'
import jacksonGalaxyImg from 'src/img/million-and-a-half/jackson-galaxy-v2.jpg'
import oceanCleanupImg from 'src/img/million-and-a-half/ocean-cleanup-v2.jpg'

import openGraphImg1M from 'src/img/million-and-a-half/og-img-1.5M.png'
import openGraphImgConservationInternational from 'src/img/million-and-a-half/og-img-1.5M-conservation-international.png'
import openGraphImgWaterOrg from 'src/img/million-and-a-half/og-img-1.5M-water.png'
import openGraphImgSaveTheChildren from 'src/img/million-and-a-half/og-img-1.5M-save-the-children.png'
import openGraphImgEdenReforestationProjects from 'src/img/million-and-a-half/og-img-1.5M-eden-reforestation-projects.png'
import openGraphImgJacksonGalaxy from 'src/img/million-and-a-half/og-img-1.5M-jackson-galaxy.png'
import openGraphImgRoomToRead from 'src/img/million-and-a-half/og-img-1.5M-room-to-read.png'
import openGraphImgActionAgainstHunger from 'src/img/million-and-a-half/og-img-1.5M-action-against-hunger.png'
import openGraphImgOceanCleanup from 'src/img/million-and-a-half/og-img-1.5M-the-ocean-cleanup.png'

import { grey, green, blue } from '@mui/material/colors'

const DARK_BACKGROUND = grey['800']
const LIGHT_BACKGROUND = grey['50']

const RAINFOREST = 'rainforest'
const WATER = 'water'
const HUNGER = 'hunger'
const TREES = 'trees'
const CATS = 'cats'
const READ = 'read'
const CHILDREN = 'children'
const OCEAN = 'ocean'

// Don't use makeStyles or clsx for new components. This page
// was not updated when migrating to MUI v5.
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
    visibility: 'hidden',

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
  menu: ({ isInDarkSection }) => ({
    color: isInDarkSection
      ? theme.palette.common.white
      : theme.palette.text.primary,
  }),
  menuTab: {
    [theme.breakpoints.down('lg')]: {
      minWidth: 140,
      padding: '6px 12px',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: 80,
      padding: '6px 12px',
    },
    [theme.breakpoints.down('sm')]: {
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
    padding: `0px ${theme.spacing(1)}`,
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
    [theme.breakpoints.down('sm')]: {
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
    padding: `0px ${theme.spacing(1)}`,
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
  hiddenUntilPageRendered: ({ isPageReady }) => ({
    opacity: isPageReady ? 100 : 0,
    transition: 'opacity 0.5s ease-in-out',
  }),
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
  waterBackgroundImg: {
    backgroundImage: `url("${waterImg}")`,

    // backgroundColor: fade(blue[700], 0.8),
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  conservationInternationalBackgroundImg: {
    backgroundImage: `url("${conservationInternationalImg}")`,

    // backgroundColor: fade(darken(green[900], 0.1), 0.7),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  actionAgainstHungerBackgroundImg: {
    backgroundImage: `url("${actionAgainstHungerImg}")`,

    // backgroundColor: fade(darken(red[900], 0.2), 0.6),
    backgroundColor: 'rgba(0, 0, 0, 0.44)',
  },
  roomToReadBackgroundImg: {
    backgroundImage: `url("${roomToReadImg}")`,

    // backgroundColor: fade(brown[700], 0.8),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  saveTheChildrenBackgroundImg: {
    backgroundImage: `url("${saveTheChildrenImg}")`,

    // backgroundColor: fade(darken(red[900], 0.4), 0.7),
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  edenReforestationBackgroundImg: {
    backgroundImage: `url("${edenReforestationImg}")`,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  jacksonGalaxyBackgroundImg: {
    backgroundImage: `url("${jacksonGalaxyImg}")`,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  oceanCleanupBackgroundImg: {
    backgroundImage: `url("${oceanCleanupImg}")`,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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

const Section = ({ id, children, className, autoHeight }) => (
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
    <div className="slide">
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

const MillionHalfPage = ({
  location: { pathname },
  pageContext: { impactStat } = {},
}) => {
  // We generate subpages to make each impact stat shareable.
  // Set the open graph info based on the specific impact stat.
  let title = '$1.5M Raised'
  const ogTitle =
    'I helped raise $1,500,000 for charity by doing almost nothing'
  const ogDescription =
    'Turn your internet browsing into positive impact with Tab for a Cause.'
  let ogImage = getAbsoluteURL(openGraphImg1M)
  switch (impactStat) {
    case RAINFOREST: {
      title = 'Protected over 7,000 acres of rainforest - $1.5M Raised'
      ogImage = getAbsoluteURL(openGraphImgConservationInternational)
      break
    }
    case WATER: {
      title = 'Access to clean water for over 15,000 people - $1.5M Raised'
      ogImage = getAbsoluteURL(openGraphImgWaterOrg)
      break
    }
    case HUNGER: {
      title = 'Over 350,000 packets of emergency nutrition - $1.5M Raised'
      ogImage = getAbsoluteURL(openGraphImgActionAgainstHunger)
      break
    }
    case TREES: {
      title = 'Over 7,000 trees planted - $1.5M Raised'
      ogImage = getAbsoluteURL(openGraphImgEdenReforestationProjects)
      break
    }
    case CATS: {
      title = 'Over 8,000 training programs for shelter cats - $1.5M Raised'
      ogImage = getAbsoluteURL(openGraphImgJacksonGalaxy)
      break
    }
    case READ: {
      title = 'Provided over 70,000 books to children - $1.5M Raised'
      ogImage = getAbsoluteURL(openGraphImgRoomToRead)
      break
    }
    case CHILDREN: {
      title =
        'Provided over 130,000 children with essential vaccines - $1.5M Raised'
      ogImage = getAbsoluteURL(openGraphImgSaveTheChildren)
      break
    }
    case OCEAN: {
      title = 'Removed over 7,000 lbs of plastic from the ocean - $1.5M Raised'
      ogImage = getAbsoluteURL(openGraphImgOceanCleanup)
      break
    }
    default: {
      break
    }
  }

  const MENU_ID = 'nav-menu'
  const MENU_ITEM_1M_ID = 'top'
  const MENU_ITEM_1M_TEXT = '$1M'
  const MENU_ITEM_IMPACT_ID = 'impact'
  const MENU_ITEM_IMPACT_TEXT = 'Your Impact'
  const MENU_ITEM_THANKS_ID = 'thanks'
  const MENU_ITEM_THANKS_TEXT = 'Thanks'

  const SECTION_ID_TOP = 'top'
  const SECTION_ID_IMPACT = 'impact'
  const SECTION_ID_THANKS = 'thanks'
  const SECTION_ID_SOCIAL = 'social'
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
      id: SECTION_ID_IMPACT,
      dark: true,
      activeMenuId: MENU_ITEM_IMPACT_ID,
    },
    {
      id: SECTION_ID_SOCIAL,
      dark: true,
      activeMenuId: MENU_ITEM_THANKS_ID,
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
  const classes = useStyles({
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
            <Typography variant="h5" className={clsx(classes.moneyRaisedText)}>
              Together, your tabs have raised
            </Typography>
            <Typography variant="h1" className={clsx(classes.moneyRaised)}>
              <MoneyRaised />
            </Typography>
            <Typography variant="h5" className={clsx(classes.moneyRaisedText)}>
              for incredible causes
            </Typography>
          </Center>
          <ArrowButtonContainer className={classes.hiddenUntilPageRendered}>
            <ArrowButton onClick={() => window.fullpage_api.moveSectionDown()}>
              <Typography
                variant="body1"
                className={classes.arrowText}
                style={{ margin: '0px 12px' }}
              >
                Our impact
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
            <Typography variant="h5" className={clsx(classes.slideHeaderText)}>
              Tabbers have raised enough to...
            </Typography>
          </div>
          <Slide>
            <div
              className={clsx(
                classes.fullPageBackgroundImg,
                classes.conservationInternationalBackgroundImg
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant="h2"
                    className={classes.impactTextPrimary}
                  >
                    protect 7,000 acres of rainforest
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.impactTextSupporting}
                  >
                    through Conservation International
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionHalfRaisedRainforestImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                          // quote:
                          //   'I helped protect over 7,000 acres of rainforest just by opening tabs! Join me in turning your internet browsing into a force for good with @TabForACause',
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          '7,000 acres of rainforest protected just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped protect 7,000 acres of rainforest just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped protect over 7,000 acres of rainforest just by opening tabs with @TabForACause. Join me!',
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
                    variant="h2"
                    className={classes.impactTextPrimary}
                  >
                    provide over 130,000 children with essential vaccines
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.impactTextSupporting}
                  >
                    through Save the Children
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionHalfRaisedChildrenImpactURL)}
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
                          '130,000 children provided essential vaccines just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped provide essential vaccines to over 130,000 children just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped provide essential vaccines to over 130,000 children just by opening tabs with @TabForACause. Join me!',
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
                classes.edenReforestationBackgroundImg
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant="h2"
                    className={classes.impactTextPrimary}
                  >
                    plant over 7,000 trees
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.impactTextSupporting}
                  >
                    through Eden Reforestation Projects
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionHalfRaisedTreesImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          'I helped plant over 7,000 trees just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped plant over 7,000 trees just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped plant over 7,000 trees just by opening tabs with @TabForACause. Join me!',
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
                classes.jacksonGalaxyBackgroundImg
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant="h2"
                    className={classes.impactTextPrimary}
                  >
                    provide over 8,000 training programs for shelter cats
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.impactTextSupporting}
                  >
                    through The Jackson Galaxy Project
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionHalfRaisedCatsImpactURL)}
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
                          'I helped provide over 8,000 training programs for shelter cats just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped provide over 8,000 training programs for shelter cats just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped provide over 8,000 training programs for shelter cats just by opening tabs with @TabForACause. Join me!',
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
                    variant="h2"
                    className={classes.impactTextPrimary}
                  >
                    provide over 70,000 books to children
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.impactTextSupporting}
                  >
                    through Room to Read
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionHalfRaisedReadImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                          // quote:
                          //   'I helped provide over 70,000 books to children just by opening tabs! Join me in turning your internet browsing into a force for good with @TabForACause',
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          'I helped provide over 70,000 books to children just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped provide over 70,000 books to children just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause.',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped provide over 70,000 books to children just by opening tabs with @TabForACause. Join me!',
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
                classes.waterBackgroundImg
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant="h2"
                    className={classes.impactTextPrimary}
                  >
                    provide access to clean water to over 15,000 people
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.impactTextSupporting}
                  >
                    through Water.org
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionHalfRaisedWaterImpactURL)}
                      FacebookShareButtonProps={
                        {
                          // Disabling the quote so Facebook shares the large version
                          // of the image, but leaving this prop so that SocialShare
                          // will still show the Facebook button.
                          // quote:
                          //   'I helped provide access to clean water for over 15,000 people just by opening tabs! Join me in turning your internet browsing into a force for good with @TabForACause',
                        }
                      }
                      RedditShareButtonProps={{
                        title:
                          'Access to clean water for over 15,000 people just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped provide access to clean water for over 15,000 people just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped provide access to clean water for over 15,000 people just by opening tabs with @TabForACause. Join me!',
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
                    variant="h2"
                    className={classes.impactTextPrimary}
                  >
                    provide over 350,000 packets of emergency nutrition
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.impactTextSupporting}
                  >
                    through Action Against Hunger
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionHalfRaisedHungerImpactURL)}
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
                          '350,000 packets of emergency nutrition just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped provide over 350,000 packets of emergency nutrition just by opening tabs with @TabForACause. Join me!',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped provide over 350,000 packets of emergency nutrition just by opening tabs with @TabForACause. Join me!',
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
                classes.oceanCleanupBackgroundImg
              )}
            >
              <div className={classes.impactSlide}>
                <Center className={classes.impactTextContainer}>
                  <Typography
                    variant="h2"
                    className={classes.impactTextPrimary}
                  >
                    remove over 7,000 lbs of plastic from the ocean
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.impactTextSupporting}
                  >
                    through Ocean Conservancy and The Ocean Cleanup
                  </Typography>
                  <div className={classes.shareContainer}>
                    <SocialShare
                      url={getAbsoluteURL(millionHalfRaisedOceanImpactURL)}
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
                          'I helped remove over 7,000 lbs of plastic from the ocean just by opening browser tabs',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'A simple and free way to make the world a better place',
                        caption:
                          'I helped remove over 7,000 lbs of plastic from the ocean just by opening tabs! Join me in turning your internet browsing into a force for good with Tab for a Cause',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'I helped remove over 7,000 lbs of plastic from the ocean just by opening tabs with @TabForACause. Join me!',
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
    [SECTION_ID_SOCIAL]: {
      className: classes.topBackground,
      content: (
        <div
          className={clsx(classes.sectionContent, classes.topBackgroundInner)}
        >
          <Center>
            <Typography
              variant="h5"
              className={clsx(classes.moneyRaisedText)}
              style={{ maxWidth: 880, marginBottom: 24 }}
            >
              Celebrate with us on{' '}
              <Link
                to={tiktokPageURL}
                target="_blank"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                TikTok
              </Link>
              ,{' '}
              <Link
                to={instagramPageURL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                Instagram
              </Link>
              ,{' '}
              <Link
                to={youtubePageURL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                YouTube
              </Link>
              ,{' '}
              <Link
                to={twitterPageURL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                Twitter
              </Link>
              , &{' '}
              <Link
                to={facebookPageURL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                Facebook
              </Link>
              —we're giving extra money to charity when you interact with videos
              like this one 👇! 👀🤩
            </Typography>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FcjUku7ohBU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Center>
          <ArrowButtonContainer>
            <ArrowButton
              arrowDirection="down"
              onClick={() => window.fullpage_api.moveSectionDown()}
            />
          </ArrowButtonContainer>
        </div>
      ),
    },
    [SECTION_ID_THANKS]: {
      className: clsx(classes.lightBackground, classes.hiddenUntilPageRendered),
      content: (
        <div className={classes.sectionContent}>
          <Center>
            <Typography
              variant="h1"
              className={clsx(classes.moneyRaised, classes.bottomThankYouText)}
              gutterBottom
            >
              Thank you.
            </Typography>
            <div className={classes.thankYouTextContainer}>
              <Typography variant="body2" gutterBottom>
                This milestone took a village to accomplish, and we couldn't be
                more proud of the Tabbing community. From the bottoms of our
                hearts, thank you.
              </Typography>
              <div className={classes.thanksShareWrapper}>
                <Typography variant="body2" gutterBottom>
                  Share this achievement & invite your friends to join us in
                  doing good:
                </Typography>
                <SocialShare
                  url={getAbsoluteURL(millionHalfRaisedURL)}
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
                      'Turn your internet browsing into a force for good with @TabForACause. Join me!',
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

  // A workaround to avoid styling problems. This page
  // was not updated when migrating to MUI v5.
  const [shouldRenderContent, setShouldRenderContent] = useState()
  useEffect(() => {
    setShouldRenderContent(true)
  }, [])

  return (
    <div>
      <HeadTags
        title={title}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImage}
        pageURL={pathname}
      />
      {shouldRenderContent ? (
        <>
          <div className={classes.pageBackground} />
          <div className={classes.header}>
            <div className={classes.logoContainer}>
              <Link to={homeURL}>
                <img
                  data-test-id="tab-logo-with-text"
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
                {menuItems.map((menuItem) => (
                  <Tab
                    key={menuItem.id}
                    label={menuItem.text}
                    className={classes.menuTab}
                    onClick={() => {
                      window.fullpage_api.moveTo(menuItem.linkTo)
                    }}
                  />
                ))}
              </Tabs>
            </div>

            <div className={classes.installButtonContainer}>
              <InstallButton
                size="medium"
                color="secondary"
                style={{
                  minWidth: 180,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 24,
                }}
                onUnsupportedBrowserInstallClick={() => {
                  redirect(homeURL)
                }}
              />
            </div>
          </div>
          <ReactFullpage
            licenseKey="7F2A2647-CD094CE7-B5D7C859-577BFB5C"
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
            render={() => (
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
            )}
          />
        </>
      ) : null}
    </div>
  )
}
MillionHalfPage.displayName = 'MillionHalfPage'
MillionHalfPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  headTagsProps: PropTypes.object,
  pageContext: PropTypes.shape({
    impactStat: PropTypes.oneOf([
      RAINFOREST,
      WATER,
      HUNGER,
      TREES,
      CATS,
      READ,
      CHILDREN,
      OCEAN,
    ]),
  }),
}
MillionHalfPage.defaultProps = {
  pageContext: {
    impactStat: null,
  },
}

// Can't create and use theme in same component (useStyles will not use
// the custom theme).
const millionHalfTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    secondary: {
      // ...defaultTheme.palette.secondary,
      main: '#29BEBA', // v4 landing page teal color
      contrastText: '#fff',
    },
  },
}
const MillionHalfPageWithTheme = (props) => (
  <ThemeProvider theme={responsiveFontSizes(millionHalfTheme, { factor: 3.4 })}>
    <MillionHalfPage {...props} />
  </ThemeProvider>
)

MillionHalfPageWithTheme.displayName = 'MillionHalfPageWithTheme'

export default MillionHalfPageWithTheme
