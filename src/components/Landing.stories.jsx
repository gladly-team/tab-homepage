import Landing from './Landing'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'

export default {
  title: 'Components/Landing',
  component: Landing,
}

const Template = (args) => <Landing {...args} />
export const seas = Template.bind({})
seas.args = {
  landingData: seasData.data.sections.landing,
  causeId: seasData.data.causeId
}

export const cats = Template.bind({})
cats.args = {
  landingData: catsData.data.sections.landing,
  causeId: catsData.data.causeId
}