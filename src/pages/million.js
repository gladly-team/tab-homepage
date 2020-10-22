import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { ThemeProvider } from '@material-ui/styles'
import grey from '@material-ui/core/colors/grey'
import defaultTheme from 'src/themes/theme'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'
import Footer from 'src/components/Footer'

const DARK_BACKGROUND = grey['800']
const LIGHT_BACKGROUND = grey['50']

const Section = ({ id, children, style }) => (
  <div
    data-anchor={id}
    className={`section`}
    // style={{ display: 'flex', flexDirection: 'column', ...style }}
  >
    <div
      // data-anchor={id}
      // className={`section`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'flex-start',
        ...style,
      }}
    >
      {children}
    </div>
  </div>
)

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.object,
}

Section.defaultProps = {
  style: {},
}

const MillionPage = () => {
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
      <div
        id={MENU_ID}
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          position: 'fixed',
          zIndex: 10,
          width: '100%',
          top: 0,
          left: 0,
        }}
      >
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
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={500}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper menu={MENU_ID}>
              <Section
                id={SECTION_ID_TOP}
                style={{ background: DARK_BACKGROUND }}
              >
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
                <p>hi</p>
                <div>
                  <InstallButton
                    size={'medium'}
                    onUnsupportedBrowserInstallClick={() => {
                      redirect(homeURL)
                    }}
                  />
                </div>
              </Section>
              <Section
                id={SECTION_ID_GREEN_THING}
                style={{ background: LIGHT_BACKGROUND }}
              >
                <p>Section 2</p>
              </Section>
              <Section
                id={SECTION_ID_ANOTHER}
                style={{ background: DARK_BACKGROUND }}
              >
                <p>Section 3</p>
              </Section>
              <Section
                id={SECTION_ID_ONE_MORE}
                style={{ background: LIGHT_BACKGROUND }}
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
