import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { ThemeProvider } from '@material-ui/styles'
import amber from '@material-ui/core/colors/amber'
import grey from '@material-ui/core/colors/grey'
import green from '@material-ui/core/colors/green'
// import brown from '@material-ui/core/colors/brown'
import blue from '@material-ui/core/colors/blue'
import IconButton from '@material-ui/core/IconButton'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { lighten } from '@material-ui/core/styles/colorManipulator'
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
} from 'src/utils/navigation'
import Footer from 'src/components/Footer'
import Link from 'src/components/Link'
import SocialShare from 'src/components/SocialShare'
import logoWithText from 'src/img/logo-with-text.svg'
import logoWithTextWhite from 'src/img/logo-with-text-white.svg'
import waterImg from 'src/img/million/water.jpg'
import forestImg from 'src/img/million/forest.jpg'

const DARK_BACKGROUND = grey['800']
const LIGHT_BACKGROUND = grey['50']
const GOLD = amber['A200']

const useStyles = makeStyles((theme) => ({
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
  section: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'flex-start',
    paddingTop: 60, // make room for the fixed header
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
  // brownBackground: {
  //   background: brown[400],
  // },
  blueBackground: {
    background: blue[600],
  },
  downArrowButtonContainer: {
    marginTop: 'auto',
    display: 'flex',
    alignSelf: 'center',
    padding: theme.spacing(2),
  },
  downArrowButton: {
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
  goldColor: {
    color: GOLD,
  },
  whiteColor: {
    color: theme.palette.common.white,
  },
  moneyRaised: {
    fontWeight: 500,
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
    width: '100%',
    margin: 'auto',
    padding: theme.spacing(2),
    paddingTop: 0,
    justifyContent: 'center',
    textAlign: 'center',
  },
  downArrowIconButton: ({ dark }) => {
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
  downArrowIcon: ({ dark }) => ({
    color: dark ? LIGHT_BACKGROUND : DARK_BACKGROUND,
  }),
  downArrowText: {
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
  icon: ({ dark }) => ({
    // TODO: make even more responsive
    // fontSize: theme.typography.h4.fontSize,
    fontSize: 32,
    color: dark ? DARK_BACKGROUND : LIGHT_BACKGROUND,
    margin: 4,
  }),
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
  fullPageBackgroundImg: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
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
  const classes = useStyles()
  return (
    <div
      data-anchor={id}
      className={clsx({ section: true, 'fp-auto-height': autoHeight })}
    >
      <div className={clsx(classes.section, className)}>{children}</div>
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

const DownArrowButton = ({ children, dark, onClick }) => {
  const classes = useStyles({ dark })
  return (
    <div className={classes.downArrowButton}>
      <IconButton onClick={onClick} className={classes.downArrowIconButton}>
        {children}
        <ArrowDownwardIcon className={classes.downArrowIcon} />
      </IconButton>
    </div>
  )
}
DownArrowButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  dark: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
DownArrowButton.defaultProps = {
  dark: false,
  onClick: () => {},
}

const DownArrowButtonContainer = ({ children, className }) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.downArrowButtonContainer, className)}>
      {children}
    </div>
  )
}

DownArrowButtonContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
DownArrowButtonContainer.defaultProps = {
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

// FIXME: real content
const socialShareData = {
  conservation: {
    url: getAbsoluteURL(millionRaisedRainforestImpactURL),
    FacebookShareButtonProps: {
      quote:
        'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
    },
    RedditShareButtonProps: {
      title:
        'Tabs transformed into vital supplies for 100 families in rainforest communities',
    },
    TumblrShareButtonProps: {
      title:
        'Tabs transformed into vital supplies for 100 families in rainforest communities',
      caption:
        'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
    },
    TwitterShareButtonProps: {
      title:
        'On @TabForACause, we just supplied 100 rainforest families via @coolearth just by opening tabs. #COVID19',
      related: ['@TabForACause'],
    },
  },
  water: {
    url: getAbsoluteURL(millionRaisedWaterImpactURL),
    FacebookShareButtonProps: {
      quote:
        'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
    },
    RedditShareButtonProps: {
      title:
        'Tabs transformed into vital supplies for 100 families in rainforest communities',
    },
    TumblrShareButtonProps: {
      title:
        'Tabs transformed into vital supplies for 100 families in rainforest communities',
      caption:
        'We just helped protect 100 families in rainforest communities via Cool Earth. And all we did was open browser tabs.',
    },
    TwitterShareButtonProps: {
      title:
        'On @TabForACause, we just supplied 100 rainforest families via @coolearth just by opening tabs. #COVID19',
      related: ['@TabForACause'],
    },
  },
}

const MillionPage = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const mapSectionIndexToMenuIndex = (sectionIndex) => {
    const topIndexStart = 0
    const impactIndexStart = 1
    const thanksIndexStart = 3
    const celebrationIndexStart = 4
    const breakpoints = [
      topIndexStart,
      impactIndexStart,
      thanksIndexStart,
      celebrationIndexStart,
      Number.POSITIVE_INFINITY,
    ]
    for (let i = 0; i < breakpoints.length; i++) {
      if (sectionIndex < breakpoints[i]) {
        return i - 1
      }
    }
  }
  const currentMenuTabIndex = mapSectionIndexToMenuIndex(currentSectionIndex)

  // To know when Fullpage.js has initialized.
  const [isPageReady, setIsPageReady] = useState(false)

  const isInDarkSection = [0, 1, 2, 3].indexOf(currentSectionIndex) > -1
  const classes = useStyles({
    isInDarkSection,
    isPageReady,
    dark: !isInDarkSection,
  })

  // TODO
  const openGraphTitle = 'Million raised'
  const openGraphDescription = 'We raised a million!'

  const MENU_ID = 'nav-menu'
  const SECTION_ID_TOP = 'top'
  const SECTION_ID_IMPACT = 'impact'
  const SECTION_ID_IMPACT_1 = 'impact-1'
  const SECTION_ID_THANKS = 'thanks'
  const SECTION_ID_CELEBRATION = 'celebration'
  const SECTION_ID_FOOTER = 'footer-section'
  const FOOTER_ID = 'footer'

  return (
    <ThemeProvider theme={responsiveFontSizes(defaultTheme, { factor: 3.5 })}>
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
            {/*
              Note: may have to adjust tab CSS breakpoints if adding
              tabs or changing text.
            */}
            <Tab
              label="$1M"
              className={classes.menuTab}
              onClick={() => {
                window.fullpage_api.moveTo(SECTION_ID_TOP)
              }}
            />
            <Tab
              label="Your Impact"
              className={classes.menuTab}
              onClick={() => {
                window.fullpage_api.moveTo(SECTION_ID_IMPACT)
              }}
            />
            <Tab
              label="Thanks"
              className={classes.menuTab}
              onClick={() => {
                window.fullpage_api.moveTo(SECTION_ID_THANKS)
              }}
            />
            <Tab
              label="Celebration"
              className={classes.menuTab}
              onClick={() => {
                window.fullpage_api.moveTo(SECTION_ID_CELEBRATION)
              }}
            />
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
        scrollingSpeed={500}
        onLeave={(_, destination) => {
          if (destination) {
            setCurrentSectionIndex(destination.index || 0)
          }
        }}
        afterRender={() => {
          setIsPageReady(true)
        }}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper menu={MENU_ID}>
              <Section id={SECTION_ID_TOP} className={classes.darkBackground}>
                <Center className={classes.hiddenUntilPageRendered}>
                  <Typography
                    variant={'h5'}
                    className={clsx(
                      classes.whiteColor,
                      classes.moneyRaisedText
                    )}
                  >
                    Together, your tabs have raised
                  </Typography>
                  <Typography
                    variant={'h1'}
                    className={clsx(classes.goldColor, classes.moneyRaised)}
                  >
                    <MoneyRaised />
                  </Typography>
                  <Typography
                    variant={'h5'}
                    className={clsx(
                      classes.whiteColor,
                      classes.moneyRaisedText
                    )}
                  >
                    for incredible causes
                  </Typography>
                </Center>
                <DownArrowButtonContainer
                  className={classes.hiddenUntilPageRendered}
                >
                  <DownArrowButton
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    <Typography
                      variant={'body1'}
                      className={classes.downArrowText}
                      style={{ margin: '0px 12px' }}
                    >
                      See the impact
                    </Typography>
                  </DownArrowButton>
                </DownArrowButtonContainer>
              </Section>
              <Section
                id={SECTION_ID_IMPACT}
                className={clsx(
                  classes.fullPageBackgroundImg,
                  classes.forestImgBackground,
                  classes.hiddenUntilPageRendered
                )}
              >
                <div className={classes.impactSlide}>
                  <Center className={classes.impactTextContainer}>
                    <Typography
                      variant={'h6'}
                      className={classes.impactTextSupporting}
                    >
                      Tabbers have raised enough to
                    </Typography>
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
                      {/* <Typography */}
                      {/*   variant={'overline'} */}
                      {/*   className={classes.impactTextPrimary} */}
                      {/* > */}
                      {/*   Share this: */}
                      {/* </Typography> */}
                      <SocialShare
                        url={millionRaisedRainforestImpactURL}
                        {...socialShareData.conservation}
                      />
                    </div>
                  </Center>
                </div>
                <DownArrowButtonContainer>
                  <DownArrowButton
                    onClick={() => fullpageApi.moveSectionDown()}
                  />
                </DownArrowButtonContainer>
              </Section>
              <Section
                id={SECTION_ID_IMPACT_1}
                className={clsx(
                  classes.fullPageBackgroundImg,
                  classes.waterImgBackground,
                  classes.hiddenUntilPageRendered
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
                        url={millionRaisedWaterImpactURL}
                        {...socialShareData.water}
                      />
                    </div>
                  </Center>
                </div>
                <DownArrowButtonContainer>
                  <DownArrowButton
                    onClick={() => fullpageApi.moveSectionDown()}
                  />
                </DownArrowButtonContainer>
              </Section>
              <Section
                id={SECTION_ID_THANKS}
                className={clsx(
                  classes.darkBackground,
                  classes.hiddenUntilPageRendered
                )}
              >
                <Center>
                  <Typography variant={'body2'} className={classes.whiteColor}>
                    A message here.
                  </Typography>
                </Center>
                <DownArrowButtonContainer>
                  <DownArrowButton
                    onClick={() => fullpageApi.moveSectionDown()}
                  />
                </DownArrowButtonContainer>
              </Section>
              <Section
                id={SECTION_ID_CELEBRATION}
                className={clsx(
                  classes.lightBackground,
                  classes.hiddenUntilPageRendered
                )}
              >
                <Center>
                  <Typography variant={'body2'}>
                    Here's what's going on!
                  </Typography>
                </Center>
              </Section>
              <Section
                id={SECTION_ID_FOOTER}
                className={clsx(
                  classes.lightBackground,
                  classes.hiddenUntilPageRendered
                )}
                autoHeight
              >
                <Footer
                  id={FOOTER_ID}
                  style={{
                    marginTop: 'auto',
                    width: '100%',
                  }}
                />
              </Section>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </ThemeProvider>
  )
}

MillionPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

MillionPage.displayName = 'MillionPage'

export default MillionPage
