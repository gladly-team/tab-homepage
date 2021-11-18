/* eslint-disable react/prop-types */
import React from 'react'
import HomePageWrapper from './V4HomePage'
import catsData from 'src/data/causes/cats.json'
// enable after footer pr
// import { mobile, seas, cats } from '../../.storybook/boilerPlate'
export default {
  title: 'Pages/HomePage',
  component: HomePageWrapper,
}
const catArgs = {
  location: {
    pathname: '/',
  },
  pageContext: {
    data: catsData.data,
  },
}

const Template = ({ location, pageContext }) => {
  return <HomePageWrapper location={location} pageContext={pageContext} />
}
export const standard = Template.bind({})
standard.args = catArgs

// can be enabled once footer pr is merged
// export const MobileCats = mobile(cats(Template)).bind({})
// MobileCats.args = catArgs
// MobileCats.parameters = {
//   layout: 'centered',
// }
// export const FullWidthCats = cats(Template).bind({})
// FullWidthCats.args = catArgs
