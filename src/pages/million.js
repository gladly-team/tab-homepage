import React from 'react'
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

import defaultTheme from 'src/themes/theme'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'
import Footer from 'src/components/Footer'

const DARK_BACKGROUND = grey['800']
const LIGHT_BACKGROUND = grey['50']

const useStyles = makeStyles(() => ({
  menu: {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'fixed',
    zIndex: 10,
    width: '100%',
    top: 0,
    left: 0,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'flex-start',
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
    padding: 24,
  },
  downArrowButton: {
    width: 60,
    height: 60,
    padding: 18,
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
      <div id={MENU_ID} className={classes.menu}>
        <div data-menuanchor={SECTION_ID_TOP}>
          <a href={`#${SECTION_ID_TOP}`}>$1M</a>
        </div>
        <div data-menuanchor={SECTION_ID_GREEN_THING}>
          <a href={`#${SECTION_ID_GREEN_THING}`}>Impact</a>
        </div>
        <div data-menuanchor={SECTION_ID_ANOTHER}>
          <a href={`#${SECTION_ID_ANOTHER}`}>Thanks</a>
        </div>
        <div data-menuanchor={SECTION_ID_ONE_MORE}>
          <a href={`#${SECTION_ID_ONE_MORE}`}>Celebration</a>
        </div>
      </div>
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'} // FIXME
        scrollingSpeed={500}
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
