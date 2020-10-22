import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { ThemeProvider } from '@material-ui/styles'
import defaultTheme from 'src/themes/theme'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'

const Section = ({ id, children, style }) => (
  <div
    data-anchor={id}
    className={`section`}
    style={{ display: 'flex', flexDirection: 'column', ...style }}
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
  style: PropTypes.object,
}

Section.defaultProps = {
  style: {},
}

const MillionPage = () => {
  // TODO
  const openGraphTitle = 'Million raised'
  const openGraphDescription = 'We raised a million!'

  const SECTION_ID_TOP = 'top'
  const SECTION_ID_GREEN_THING = 'green-thing'
  const SECTION_ID_ANOTHER = 'another'
  const SECTION_ID_ONE_MORE = 'one-more'

  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet title={openGraphTitle}>
        <meta property="og:title" content={openGraphTitle} />
        <meta property="og:description" content={openGraphDescription} />
        <meta name="twitter:title" content={openGraphTitle} />
        <meta name="twitter:description" content={openGraphDescription} />
      </Helmet>
      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Section id={SECTION_ID_TOP} style={{ background: 'blue' }}>
                <div
                  id="nav-bar"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <div onClick={() => fullpageApi.moveTo(SECTION_ID_TOP, 0)}>
                    $1M
                  </div>
                  <div
                    onClick={() =>
                      fullpageApi.moveTo(SECTION_ID_GREEN_THING, 0)
                    }
                  >
                    Impact
                  </div>
                  <div onClick={() => fullpageApi.moveTo(SECTION_ID_ANOTHER)}>
                    Thanks
                  </div>
                  <div onClick={() => fullpageApi.moveTo(SECTION_ID_ONE_MORE)}>
                    Celebration
                  </div>
                </div>
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
                style={{ background: 'green' }}
              >
                <p>Section 2</p>
              </Section>
              <Section id={SECTION_ID_ANOTHER} style={{ background: 'grey' }}>
                <p>Section 3</p>
              </Section>
              <Section id={SECTION_ID_ONE_MORE} style={{ background: 'teal' }}>
                <p>Section 4</p>
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
