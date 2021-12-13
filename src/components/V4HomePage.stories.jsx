/* eslint-disable react/prop-types */
import React from 'react'
import HomePageWrapper from './V4HomePage'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'
seasData.data.sections.Financials.pdfs = [
  {
    quarter: 1,
    year: 2021,
    pdfUrl: '/financials/2021-Q1.pdf',
    img: seasData.data.sections.Financials.q1Img,
  },
  {
    quarter: 2,
    year: 2021,
    pdfUrl: '/financials/2021-Q2.pdf',
    img: seasData.data.sections.Financials.q2Img,
  },
  {
    quarter: 4,
    year: 2020,
    pdfUrl: '/financials/2020-Q4.pdf',
    img: seasData.data.sections.Financials.q4Img,
  },
  {
    quarter: 3,
    year: 2020,
    pdfUrl: '/financials/2020-Q3.pdf',
    img: seasData.data.sections.Financials.q3Img,
  },
]
catsData.data.sections.Financials.pdfs = [
  {
    quarter: 1,
    year: 2021,
    pdfUrl: '/financials/2021-Q1.pdf',
    img: catsData.data.sections.Financials.q1Img,
  },
  {
    quarter: 2,
    year: 2021,
    pdfUrl: '/financials/2021-Q2.pdf',
    img: catsData.data.sections.Financials.q2Img,
  },
  {
    quarter: 4,
    year: 2020,
    pdfUrl: '/financials/2020-Q4.pdf',
    img: catsData.data.sections.Financials.q4Img,
  },
  {
    quarter: 3,
    year: 2020,
    pdfUrl: '/financials/2020-Q3.pdf',
    img: catsData.data.sections.Financials.q3Img,
  },
]
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

const seasArgs = {
  location: {
    pathname: '/',
  },
  pageContext: {
    data: seasData.data,
  },
}

export const seas = Template.bind({})
seas.args = seasArgs

// can be enabled once footer pr is merged
// export const MobileCats = mobile(cats(Template)).bind({})
// MobileCats.args = catArgs
// MobileCats.parameters = {
//   layout: 'centered',
// }
// export const FullWidthCats = cats(Template).bind({})
// FullWidthCats.args = catArgs
