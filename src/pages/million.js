import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { ThemeProvider } from '@material-ui/styles'
import grey from '@material-ui/core/colors/grey'
import IconButton from '@material-ui/core/IconButton'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { lighten } from '@material-ui/core/styles/colorManipulator'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

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

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  logoContainer: {
    flexShrink: 0,
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    margin: `0px ${theme.spacing(2)}px`,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'flex-start',
    paddingTop: 80, // make room for the fixed header
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
    width: 60,
    height: 60,
    padding: theme.spacing(1),
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  downArrowButtonBackground: ({ dark }) => {
    const backgoundColor = dark ? DARK_BACKGROUND : LIGHT_BACKGROUND
    return {
      background: backgoundColor,
      transition: 'background .2s ease-in-out',
      '&:hover': {
        background: lighten(backgoundColor, 0.15),
      },
    }
  },
  downArrowButtonIcon: ({ dark }) => ({
    color: dark ? LIGHT_BACKGROUND : DARK_BACKGROUND,
  }),
}))

const Section = ({ id, children, className }) => {
  const classes = useStyles()
  return (
    <div data-anchor={id} className={`section`}>
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
}
Section.defaultProps = {
  style: {},
  className: '',
}

const DownArrowButton = ({ dark, onClick }) => {
  const classes = useStyles({ dark })
  return (
    <div className={classes.downArrowButton}>
      <IconButton
        onClick={onClick}
        className={classes.downArrowButtonBackground}
      >
        <ArrowDownwardIcon className={classes.downArrowButtonIcon} />
      </IconButton>
    </div>
  )
}
DownArrowButton.propTypes = {
  dark: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
DownArrowButton.defaultProps = {
  dark: false,
  onClick: () => {},
}

const DownArrowButtonContainer = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.downArrowButtonContainer}>{children}</div>
}

DownArrowButtonContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
DownArrowButtonContainer.defaultProps = {}

const MillionPage = () => {
  const classes = useStyles()

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const isInDarkSection = [0, 2].indexOf(currentSectionIndex) > -1

  // TODO
  const openGraphTitle = 'Million raised'
  const openGraphDescription = 'We raised a million!'

  const MENU_ID = 'nav-menu'
  const SECTION_ID_TOP = 'top'
  const SECTION_ID_GREEN_THING = 'green-thing'
  const SECTION_ID_ANOTHER = 'another'
  const SECTION_ID_ONE_MORE = 'one-more'
  const FOOTER_ID = 'footer'

  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet title={openGraphTitle}>
        <meta property="og:title" content={openGraphTitle} />
        <meta property="og:description" content={openGraphDescription} />
        <meta name="twitter:title" content={openGraphTitle} />
        <meta name="twitter:description" content={openGraphDescription} />
      </Helmet>
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
        <div className={classes.menu}>
          <Tabs value={currentSectionIndex} id={MENU_ID}>
            <Tab label="$1M" href={`#${SECTION_ID_TOP}`} />
            <Tab label="Impact" href={`#${SECTION_ID_GREEN_THING}`} />
            <Tab label="Thanks" href={`#${SECTION_ID_ANOTHER}`} />
            <Tab label="Celebration" href={`#${SECTION_ID_ONE_MORE}`} />
          </Tabs>
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
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper menu={MENU_ID}>
              <Section id={SECTION_ID_TOP} className={classes.darkBackground}>
                <p>Section 1</p>
                <div>
                  <InstallButton
                    size={'medium'}
                    onUnsupportedBrowserInstallClick={() => {
                      redirect(homeURL)
                    }}
                  />
                </div>
                <DownArrowButtonContainer>
                  <DownArrowButton
                    onClick={() => fullpageApi.moveSectionDown()}
                  />
                </DownArrowButtonContainer>
              </Section>
              <Section
                id={SECTION_ID_GREEN_THING}
                className={classes.lightBackground}
              >
                <p>Section 2</p>
                <DownArrowButtonContainer>
                  <DownArrowButton
                    dark
                    onClick={() => fullpageApi.moveSectionDown()}
                  />
                </DownArrowButtonContainer>
              </Section>
              <Section
                id={SECTION_ID_ANOTHER}
                className={classes.darkBackground}
              >
                <p>Section 3</p>
                <DownArrowButtonContainer>
                  <DownArrowButton
                    onClick={() => fullpageApi.moveSectionDown()}
                  />
                </DownArrowButtonContainer>
              </Section>
              <Section
                id={SECTION_ID_ONE_MORE}
                className={classes.lightBackground}
              >
                <p>Section 4</p>
                <Footer
                  id={FOOTER_ID}
                  style={{ marginTop: 'auto', width: '100%' }}
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
