import { useImageData } from './useImageData'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'
import set from 'lodash/set'
import get from 'lodash/get'
/**
 * For use with Storybook: spoofs a gatsby IGatsbyImageData blob by loading image to get w/h.
 *
 * @param filename Assumes src/images as base directory (set in package.json storybook script)
 * @param layout optional override for gatsby layout parameter
 * @returns
 */

const keyify = (obj, prefix = '') =>
  Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return res
    } else if (typeof obj[el] === 'object' && obj[el] !== null) {
      return [...res, ...keyify(obj[el], prefix + el + '.')]
    }
    return [...res, prefix + el]
  }, [])

export const useCauseData = (cause = 'cats') => {
  console.log('fired')
  // a default is provided so component types can treat it as defined
  let data
  switch (cause) {
    case 'cats':
      data = catsData
      break
    case 'seas':
      data = seasData
      break
    default:
      data = catsData
  }
  // replace image paths with mock gatsby image data
  //   console.log(O)
  keyify(data).forEach((key) => {
    if (
      key.toLowerCase().includes('image') ||
      key.toLowerCase().includes('img')
    ) {
      set(data, key, useImageData(get(data, key)))
    }
  })

  return data
}
