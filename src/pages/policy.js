import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { privacyPolicyURL } from 'src/utils/navigation'

const MyComponent = () => {
  useEffect(() => {
    navigate(privacyPolicyURL)
  }, [])

  return null
}

export default MyComponent
