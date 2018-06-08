const localStorageMgr = {}

localStorageMgr.setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, value)
  } catch (e) {
    console.log('localStorage not supported. ', e)
  }
}

localStorageMgr.getItem = key => {
  try {
    var value = window.localStorage.getItem(key)
    return value
  } catch (e) {
    console.log('localStorage not supported. ', e)
    return null
  }
}

localStorageMgr.removeItem = key => {
  try {
    window.localStorage.removeItem(key)
  } catch (e) {
    console.log('localStorage not supported. ', e)
  }
}

export default localStorageMgr
