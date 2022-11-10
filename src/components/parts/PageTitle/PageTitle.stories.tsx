import React from 'react'

import { PageTitle } from './PageTitle'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'parts/PageTitle',
  component: PageTitle,
  args: {
    bgText: 'blog',
    children: 'TEST',
  },
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof PageTitle>

const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />

export const Default = Template.bind({})

Default.args = {
  // TODO
}
