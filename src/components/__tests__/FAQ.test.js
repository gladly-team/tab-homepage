/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import catsData from 'src/data/causes/cats.json'
import Typography from '@material-ui/core/Typography'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Markdown from 'src/components/Markdown'

const faqData = catsData.data.sections.faq

const getMockProps = () => ({
  faqData,
})

describe('teamseas page', () => {
  it('renders without error', () => {
    const FAQ = require('../FAQ').default
    shallow(<FAQ {...getMockProps()} />)
  })

  it('has the correct accordion elements', () => {
    const FAQ = require('../FAQ').default
    const wrapper = shallow(<FAQ {...getMockProps()} />)

    expect(wrapper.find(MuiAccordion)).toHaveLength(faqData.questions.length)

    for (let i = 0; i < faqData.questions.length; i++) {
      expect(
        wrapper.find(MuiAccordionSummary).at(i).find(Typography).text()
      ).toEqual(faqData.questions[i].question)
      expect(
        wrapper.find(MuiAccordionDetails).at(i).find(Markdown).children().text()
      ).toEqual(faqData.questions[i].answer)
    }
  })
})
