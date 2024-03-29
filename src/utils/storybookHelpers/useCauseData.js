import set from 'lodash/set'
import get from 'lodash/get'
import { useImageData } from 'src/utils/storybookHelpers/useImageData'
import getCauseDataFromName from 'src/utils/storybookHelpers/getCauseDataFromName'

/**
 * util function
 * deeply get all keys of object
 */
const keyify = (obj, prefix = '') =>
  Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return res
    }
    if (typeof obj[el] === 'object' && obj[el] !== null) {
      return [...res, ...keyify(obj[el], `${prefix + el}.`)]
    }
    return [...res, prefix + el]
  }, [])

/**
 * For use with Storybook: loads our 'backend' cause data and mocks gatsby-plugin-sharp and gatsby-transform-sharp
 *
 * @param filename Assumes src/images as base directory (set in package.json storybook script)
 * @param layout optional override for gatsby layout parameter
 * @returns
 */
export const useCauseData = async (cause = 'cats') => {
  const data = getCauseDataFromName(cause)
  const keys = keyify(data)

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
        // useImageData is not a hook, just named with "use".
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const newValue = await useImageData(get(data, key))
        return { key, newValue }
      })
  )
  dataToModify.forEach(({ key, newValue }) => set(data, key, newValue))
  data.data.sections.Financials.pdfs = [
    {
      quarter: 1,
      year: 2021,
      pdfUrl: '/financials/2021-Q1.pdf',
      img: data.data.sections.Financials.q1Img,
    },
    {
      quarter: 2,
      year: 2021,
      pdfUrl: '/financials/2021-Q2.pdf',
      img: data.data.sections.Financials.q2Img,
    },
    {
      quarter: 4,
      year: 2020,
      pdfUrl: '/financials/2020-Q4.pdf',
      img: data.data.sections.Financials.q4Img,
    },
    {
      quarter: 3,
      year: 2020,
      pdfUrl: '/financials/2020-Q3.pdf',
      img: data.data.sections.Financials.q3Img,
    },
  ]

  // keyify doesnt handle arrays
  const endorsementDataToModify = await Promise.all(
    data.data.sections.Endorsements.smallEndorsements.map((endorsement) =>
      // useImageData is not a hook.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useImageData(endorsement.img)
    )
  )
  endorsementDataToModify.forEach(
    (resolvedImage, smallEndorsementsIndex) =>
      (data.data.sections.Endorsements.smallEndorsements[
        smallEndorsementsIndex
      ].img = resolvedImage)
  )
  const charityIntroDataToModify = await Promise.all(
    // useImageData is not a hook.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    data.data.sections.charityIntro.steps.map((step) => useImageData(step.img))
  )
  charityIntroDataToModify.forEach(
    (resolvedImage, stepIndex) =>
      (data.data.sections.charityIntro.steps[stepIndex].img = resolvedImage)
  )

  data.data.path = data.path
  return data
}
