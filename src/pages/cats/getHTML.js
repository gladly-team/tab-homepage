import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import qs from 'qs'
import { STORAGE_NEW_USER_IS_TAB_V4_BETA } from 'src/utils/constants'
import { homeURL } from 'src/utils/navigation'
import redirect, { directToAppExtension } from 'src/utils/redirect'
import localStorageMgr from 'src/utils/local-storage'
import { STORAGE_REFERRAL_DATA_REFERRING_CHANNEL } from 'src/utils/constants'
import logo from 'src/img/logo-with-text.svg'
import catLaptop from 'src/img/cats/cats_macbookgrey_front.png'

const GetExtensionRedirectPage = (props) => {
  const [timeUntilRedirect, setTimeUntilRedirect] = useState(5)
  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeUntilRedirect((seconds) => seconds - 1)
    }, 1000)
    return () => window.clearInterval(interval)
  }, [])
  try {
    // set v4 to true
    localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
    // If there is a referrer, save it to local storage.
    const { location: { search = '' } = {} } = props
    const queryParams = qs.parse(search, { ignoreQueryPrefix: true })
    const referrerId =
      queryParams.r && !isNaN(parseInt(queryParams.r, 10))
        ? parseInt(queryParams.r, 10)
        : null
    if (referrerId) {
      localStorageMgr.setItem(
        STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
        referrerId
      )
    }

    // Based on the browser, go to the appropriate extension page.
  } catch (e) {
    console.error(e)
    redirect(homeURL)
  }
  if (timeUntilRedirect < 1) {
    redirect(directToAppExtension())
  }
  return (
    <div
      style={{
        width: '98vw',
        height: '98vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', margin: '20px' }}>
        <img
          data-test-id="tab-logo-with-text"
          src={logo}
          style={{ height: 40 }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          margin: '40px 20px 20px 20px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>It's time for a better new tab page</h1>
        <p>
          With Tab for a Cause, you'll help shelter cats get adopted, for free.
        </p>
        <p>
          Introducing you in:{' '}
          <span style={{ fontWeight: 'bold' }}>{timeUntilRedirect}</span>
        </p>
        <img src={catLaptop} style={{ height: '50vh' }} />
      </div>
    </div>
  )
}

GetExtensionRedirectPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

GetExtensionRedirectPage.defaultProps = {}

export default GetExtensionRedirectPage
