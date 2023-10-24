import React from 'react'
import PropTypes from 'prop-types'
import localStorageMgr from 'src/utils/local-storage'
import {
  STORAGE_NEW_USER_CAUSE_ID,
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
  STORAGE_REFERRAL_DATA_REFERRING_CAMPAIGN,
} from 'src/utils/constants'
import { navigate } from 'gatsby'
import { shopHomeURL } from 'src/utils/navigation'
import { getUrlParameterValue } from 'src/utils/location'

class ShopPage extends React.Component {
  componentDidMount() {
    // Store cause if provided in URL parameter.
    const causeId = getUrlParameterValue('c')

    if (causeId !== null && causeId !== undefined) {
      localStorageMgr.setItem(STORAGE_NEW_USER_CAUSE_ID, causeId)
      localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
    }

    // Store user referral
    const referral = getUrlParameterValue('r')

    if (referral !== null && referral !== undefined) {
      localStorageMgr.setItem(STORAGE_REFERRAL_DATA_REFERRING_CHANNEL, referral)
    }

    // Store campaign if provided in URL parameter.
    const campaign = getUrlParameterValue('m')

    if (campaign !== null && campaign !== undefined) {
      localStorageMgr.setItem(
        STORAGE_REFERRAL_DATA_REFERRING_CAMPAIGN,
        campaign
      )
    }

    // // Redirect to the shop url.
    // setTimeout(() => {
    //   navigate(shopHomeURL)
    // }, 500)
  }

  render() {
    return <p>Loading...</p>
  }
}

ShopPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

ShopPage.displayName = 'ShopPage'

export default ShopPage
