import { useImageData } from './useImageData'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'
import set from 'lodash/set'
import get from 'lodash/get'
const keyify = (obj, prefix = '') =>
  Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return res
    } else if (typeof obj[el] === 'object' && obj[el] !== null) {
      return [...res, ...keyify(obj[el], prefix + el + '.')]
    }
    return [...res, prefix + el]
  }, [])

/**
 * For use with Storybook: loads .
 *
 * @param filename Assumes src/images as base directory (set in package.json storybook script)
 * @param layout optional override for gatsby layout parameter
 * @returns
 */
export const useCauseData = async (cause = 'cats') => {
  // a default is provided so component types can treat it as defined
  // deep cloning data
  let data
  switch (cause) {
    case 'cats':
      data = JSON.parse(JSON.stringify(catsData))
      break
    case 'seas':
      data = JSON.parse(JSON.stringify(seasData))
      break
    default:
      data = JSON.parse(JSON.stringify(catsData))
  }
  const keys = keyify(data)
  console.log(keys)
  // replace image paths with mock gatsby image data
  const dataToModify = await Promise.all(
    keys
      .filter(
        (key) =>
          (key.toLowerCase().includes('image') ||
            key.toLowerCase().includes('img')) &&
          !key.toLowerCase().includes('text')
      )
      .map(async (key) => {
        const newValue = await useImageData(get(data, key))
        return { key, newValue }
      })
  )
  dataToModify.forEach(({ key, newValue }) => set(data, key, newValue))
  return data
}
