import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />
export const standard = Template.bind({})
standard.args = {
  brand: 'tab',
}

export const full = Template.bind({})
full.args = {
  brand: 'search',
}