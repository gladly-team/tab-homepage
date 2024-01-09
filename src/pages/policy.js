import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

const MyComponent = () => {
  useEffect(() => {
    navigate('/docs/privacy-policy/')
  }, [])

  return null
}

export default MyComponent
