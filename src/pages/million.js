import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { ThemeProvider } from '@material-ui/styles'
import defaultTheme from 'src/themes/theme'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'

const Section = ({ children, style }) => (
  <div
    className={`section`}
    style={{ display: 'flex', flexDirection: 'column', ...style }}
  >
    {children}
  </div>
)

Section.propTypes = {
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
              <Section style={{ background: 'blue' }}>
                <div>hi</div>
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
              <Section style={{ background: 'green' }}>
                <p>Section 2</p>
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
