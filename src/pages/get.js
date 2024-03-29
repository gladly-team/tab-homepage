import React from 'react'
import PropTypes from 'prop-types'
import qs from 'qs'
import { homeURL } from 'src/utils/navigation'
import redirect, { directToAppExtension } from 'src/utils/redirect'
import localStorageMgr from 'src/utils/local-storage'
import { STORAGE_REFERRAL_DATA_REFERRING_CHANNEL } from 'src/utils/constants'

class GetExtensionRedirectPage extends React.Component {
  componentDidMount() {
    try {
      // If there is a referrer, save it to local storage.
      const { location: { search = '' } = {} } = this.props
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
      redirect(directToAppExtension())
    } catch (e) {
      console.error(e)
      redirect(homeURL)
    }
  }

  render() {
    return null
  }
}

GetExtensionRedirectPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

GetExtensionRedirectPage.defaultProps = {}

export default GetExtensionRedirectPage
