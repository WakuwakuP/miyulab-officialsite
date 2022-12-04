import React from 'react'

import { TextButton } from './TextButton'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'parts/TextButton',
  component: TextButton,
  args: {
    href: '/',
    children: 'text button',
  },
  argTypes: {},
} as ComponentMeta<typeof TextButton>

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />

export const Default = Template.bind({})

Default.args = {
  // TODO
}
