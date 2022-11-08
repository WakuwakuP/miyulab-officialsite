import { Header } from './Header'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'containers/Header',
  component: Header,
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />

export const Default = Template.bind({})

Default.args = {
  // TODO
}
