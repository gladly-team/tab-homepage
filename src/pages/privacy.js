import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { privacyPolicyURL } from 'src/utils/navigation'

const Privacy = () => {
  useEffect(() => {
    navigate(privacyPolicyURL)
  }, [])

  return null
}

export default Privacy
