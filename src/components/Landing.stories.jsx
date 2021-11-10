import Landing from './Landing'
import { catsLandingProps, seasLandingProps } from 'src/utils/landingConstants'

export default {
  title: 'Components/Landing',
  component: Landing,
}

const Template = (args) => <Landing {...args} />
export const seas = Template.bind({})
seas.args = {
  location: {
    pathname: '/',
  },
  pageContext: {},
  ...seasLandingProps
}

export const cats = Template.bind({})
cats.args = {
  location: {
    pathname: '/',
  },
  pageContext: {},
  ...catsLandingProps
}