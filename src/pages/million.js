import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { ThemeProvider } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import IconButton from '@material-ui/core/IconButton'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowLeftIcon from '@material-ui/icons/ArrowBack'
import ArrowRightIcon from '@material-ui/icons/ArrowForward'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { darken, lighten } from '@material-ui/core/styles/colorManipulator'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { responsiveFontSizes } from '@material-ui/core/styles'

import MoneyRaised from 'src/components/MoneyRaised'
import defaultTheme from 'src/themes/theme'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import {
  getAbsoluteURL,
  homeURL,
  millionRaisedRainforestImpactURL,
  millionRaisedWaterImpactURL,
  millionRaisedHungerImpactURL,
  millionRaisedGiveImpactURL,
  millionRaisedReadImpactURL,
  millionRaisedChildrenImpactURL,
  millionRaisedEducateImpactURL,
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

const DARK_BACKGROUND = grey['800']
const LIGHT_BACKGROUND = grey['50']

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
    background: DARK_BACKGROUND,
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
    flex: 3,
    margin: '0px 10px',
    display: 'flex',
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
    padding: '0px 60px',
  },
  scheduleSlideTextContainer: {
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
    background: theme.palette.primary.main,
    marginTop: 20,
  },
  slideHeaderContent: {
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 640,
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
    padding: theme.spacing(2),
  },
  arrowButton: {
    pointerEvents: 'all',
    height: 60,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  whiteColor: {
    color: theme.palette.common.white,
  },
  moneyRaised: {
    fontWeight: 500,
    display: 'inline-block',
    padding: `0px ${theme.spacing(1)}px`,
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  },
  moneyRaisedText: {
    fontWeight: 200,
  },
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
    textAlign: 'center',
  },
  arrowIconButton: ({ dark }) => {
    const backgoundColor = dark ? DARK_BACKGROUND : LIGHT_BACKGROUND
    return {
      borderRadius: 60, // equal to the height
      background: backgoundColor,
      transition: 'background .2s ease-in-out',
      '&:hover': {
        background: lighten(backgoundColor, 0.15),
      },
    }
  },
  arrowIcon: ({ dark }) => ({
    color: dark ? LIGHT_BACKGROUND : DARK_BACKGROUND,
  }),
  arrowText: {
    color: DARK_BACKGROUND,
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
  },
  forestImgBackground: {
    backgroundImage: `url("${forestImg}")`,
  },
  actionAgainstHungerBackgroundImg: {
    backgroundImage: `url("${actionAgainstHungerImg}")`,
  },
  giveDirectlyBackgroundImg: {
    backgroundImage: `url("${giveDirectlyImg}")`,
  },
  roomToReadBackgroundImg: {
    backgroundImage: `url("${roomToReadImg}")`,
  },
  saveTheChildrenBackgroundImg: {
    backgroundImage: `url("${saveTheChildrenImg}")`,
  },
  schoolBackgroundImg: {
    backgroundImage: `url("${schoolImg}")`,
  },
  fullPageBackgroundImg: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    backgroundBlendMode: 'multiply',
  },
  shareContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(4),
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

const ArrowButton = ({ children, dark, onClick, arrowDirection }) => {
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
    <div className={classes.arrowButton}>
      <IconButton onClick={onClick} className={classes.arrowIconButton}>
        {children}
        <ArrowIcon className={classes.arrowIcon} />
      </IconButton>
    </div>
  )
}
ArrowButton.propTypes = {
  arrowDirection: PropTypes.oneOf(['left', 'right', 'down']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  dark: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
ArrowButton.defaultProps = {
  arrowDirection: 'down',
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

const MillionPage = () => {
  // TODO
  const openGraphTitle = 'Million raised'
  const openGraphDescription = 'We raised a million!'

  const MENU_ID = 'nav-menu'
  const MENU_ITEM_1M_ID = 'top'
  const MENU_ITEM_1M_TEXT = '$1M'
  const MENU_ITEM_IMPACT_ID = 'impact'
  const MENU_ITEM_IMPACT_TEXT = 'Your Impact'
  const MENU_ITEM_THANKS_ID = 'thanks'
  const MENU_ITEM_THANKS_TEXT = 'Thanks'
  const MENU_ITEM_CELEBRATION_ID = 'celebration'
  const MENU_ITEM_CELEBRATION_TEXT = 'Celebration'

  const SECTION_ID_TOP = 'top'
  const SECTION_ID_IMPACT = 'impact'
  // const SECTION_ID_IMPACT_RAINFOREST = 'impact-rainforest'
  // const SECTION_ID_IMPACT_WATER = 'impact-water'
  // const SECTION_ID_IMPACT_STC = 'impact-stc'
  // const SECTION_ID_IMPACT_HUNGER = 'impact-hunger'
  // const SECTION_ID_IMPACT_GIVE_DIRECTLY = 'impact-give-directly'
  // const SECTION_ID_IMPACT_ROOM_TO_READ = 'impact-room-to-read'
  // const SECTION_ID_IMPACT_EDUCATE = 'impact-EDUCATE'
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
      className: classes.darkBackground,
      content: (
        <div className={classes.sectionContent}>
          <Center className={classes.hiddenUntilPageRendered}>
            <Typography
              variant={'h5'}
              className={clsx(classes.whiteColor, classes.moneyRaisedText)}
            >
              Together, your tabs have raised
            </Typography>
            <Typography variant={'h1'} className={clsx(classes.moneyRaised)}>
              <MoneyRaised />
            </Typography>
            <Typography
              variant={'h5'}
              className={clsx(classes.whiteColor, classes.moneyRaisedText)}
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
                      /* FIXME: actual copy needed */
                      url={getAbsoluteURL(millionRaisedRainforestImpactURL)}
                      FacebookShareButtonProps={{
                        quote:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      RedditShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                        caption:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'On @TabForACause, we just supplied 100 rainforest families via @coolearth just by opening tabs. #COVID19',
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
                      /* FIXME: actual copy needed */
                      url={getAbsoluteURL(millionRaisedChildrenImpactURL)}
                      FacebookShareButtonProps={{
                        quote:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      RedditShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                        caption:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'On @TabForACause, we just supplied 100 rainforest families via @coolearth just by opening tabs. #COVID19',
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
                      /* FIXME: actual copy needed */
                      url={getAbsoluteURL(millionRaisedReadImpactURL)}
                      FacebookShareButtonProps={{
                        quote:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      RedditShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                        caption:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'On @TabForACause, we just supplied 100 rainforest families via @coolearth just by opening tabs. #COVID19',
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
                      /* FIXME: actual copy needed */
                      url={getAbsoluteURL(millionRaisedWaterImpactURL)}
                      FacebookShareButtonProps={{
                        quote:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      RedditShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                        caption:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'On @TabForACause, we just supplied 100 rainforest families via @coolearth just by opening tabs. #COVID19',
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
                      /* FIXME: actual copy needed */
                      url={getAbsoluteURL(millionRaisedHungerImpactURL)}
                      FacebookShareButtonProps={{
                        quote:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      RedditShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                        caption:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'On @TabForACause, we just supplied 100 rainforest families via @coolearth just by opening tabs. #COVID19',
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
                      /* FIXME: actual copy needed */
                      url={getAbsoluteURL(millionRaisedGiveImpactURL)}
                      FacebookShareButtonProps={{
                        quote:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      RedditShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                        caption:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'On @TabForACause, we just supplied 100 rainforest families via @coolearth just by opening tabs. #COVID19',
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
                      /* FIXME: actual copy needed */
                      url={getAbsoluteURL(millionRaisedEducateImpactURL)}
                      FacebookShareButtonProps={{
                        quote:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      RedditShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                      }}
                      TumblrShareButtonProps={{
                        title:
                          'Tabs transformed into vital supplies for 100 families in rainforest communities',
                        caption:
                          'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
                      }}
                      TwitterShareButtonProps={{
                        title:
                          'On @TabForACause, we just supplied 100 rainforest families via @coolearth just by opening tabs. #COVID19',
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
              onClick={() => window.fullpage_api.moveSlideLeft()}
            />
            <ArrowButton
              arrowDirection="down"
              onClick={() => window.fullpage_api.moveSectionDown()}
            />
            <ArrowButton
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
              Join us to celebrate the next few weeks!
            </Typography>
          </div>
          <Slide
            className={classes.scheduleSlide}
            style={{ background: blue[600] }}
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
                For us, it was as easy as opening a new tab and donating hearts
                to a cause we care about. For multi-millionaires, it’s as easy
                as writing a check. Join us each Monday on Twitter and Instagram
                where we will be asking the uber wealthy to match our $1M
                donation. We’re looking at you @google...
              </Typography>
            </Center>
          </Slide>
          <Slide
            className={classes.scheduleSlide}
            style={{ background: blue[700] }}
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
                Tab for a Cause would not be possible without all of our
                passionate Tabbers. We would love to hear why you use Tab for a
                Cause on social media! DM us on Instagram, Facebook, and Twitter
                or post why you tab to your feed with #tabforamillion and
                @tabforacause and you may be featured on #TabberTuesday!
              </Typography>
            </Center>
          </Slide>
          <Slide
            className={classes.scheduleSlide}
            style={{ background: blue[800] }}
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
                Despite reaching this incredible milestone, most people still
                have never heard of Tab for a Cause. The average internet
                browser opens over 10 tabs every single day, help make sure
                everyone is putting their tabs toward a cause they care about
                and tell your friends about Tab for a Cause! Text, email, call,
                DM, Snap, whatever it takes, make sure everyone knows that they
                could be part of this incredible movement :)
              </Typography>
            </Center>
          </Slide>
          <Slide
            className={classes.scheduleSlide}
            style={{ background: blue[900] }}
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
                Join us in letting the world know how impactful a tab can be by
                liking, reposting, and/or sharing our #ThankfulThursday posts on
                Instagram, Facebook, and Twitter that showcase some of our
                amazing charity partners.
              </Typography>
            </Center>
          </Slide>
          <Slide
            className={classes.scheduleSlide}
            style={{ background: darken(blue[900], 0.15) }}
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
                Weekends
              </Typography>
              <Typography variant={'body2'} className={classes.whiteColor}>
                Kick back and enjoy some well-deserved rest :)
              </Typography>
            </Center>
          </Slide>
          <ArrowButtonContainer>
            <ArrowButton
              arrowDirection="left"
              onClick={() => window.fullpage_api.moveSlideLeft()}
            />
            <ArrowButton
              arrowDirection="down"
              onClick={() => window.fullpage_api.moveSectionDown()}
            />
            <ArrowButton
              arrowDirection="right"
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
            <Typography variant={'body2'}>A message here.</Typography>
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
      <Helmet title={openGraphTitle}>
        <meta property="og:title" content={openGraphTitle} />
        <meta property="og:description" content={openGraphDescription} />
        <meta name="twitter:title" content={openGraphTitle} />
        <meta name="twitter:description" content={openGraphDescription} />
      </Helmet>
      {/* Set a full page dark background while Fullpage is loading */}
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
        licenseKey={'YOUR_KEY_HERE'} // FIXME
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

// Can't create and use theme in same component (useStyles will not use
// the custom theme).
const MillionPageWithTheme = () => (
  <ThemeProvider theme={responsiveFontSizes(defaultTheme, { factor: 3 })}>
    <MillionPage />
  </ThemeProvider>
)
MillionPageWithTheme.displayName = 'MillionPageWithTheme'

export default MillionPageWithTheme
