import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { ThemeProvider } from '@material-ui/styles'
import amber from '@material-ui/core/colors/amber'
import grey from '@material-ui/core/colors/grey'
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
import { homeURL } from 'src/utils/navigation'
import Footer from 'src/components/Footer'
import Link from 'src/components/Link'
import logoWithText from 'src/img/logo-with-text.svg'
import logoWithTextWhite from 'src/img/logo-with-text-white.svg'

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
    fontWeight: 400,
  },
  moneyRaisedText: {
    fontWeight: 200,
  },
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

const MillionPage = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const mapSectionIndexToMenuIndex = (sectionIndex) => {
    return sectionIndex < 4 ? sectionIndex : 3
  }
  const currentMenuTabIndex = mapSectionIndexToMenuIndex(currentSectionIndex)

  // To know when Fullpage.js has initialized.
  const [isPageReady, setIsPageReady] = useState(false)

  const isInDarkSection = [0, 2].indexOf(currentSectionIndex) > -1
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
                  classes.lightBackground,
                  classes.hiddenUntilPageRendered
                )}
              >
                <Center>
                  <Typography variant={'body2'}>
                    Here's what we've accomplished.
                  </Typography>
                </Center>
                <DownArrowButtonContainer>
                  <DownArrowButton
                    dark
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
