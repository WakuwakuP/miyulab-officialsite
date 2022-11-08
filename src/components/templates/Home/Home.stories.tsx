import React from 'react'

import { Home } from './Home'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'templates/Home',
  component: Home,
  args: {
    contents: [
      {
        id: 'test',
        title: 'test title',
        content: 'test',
        thumbnail: undefined,
        category: [
          {
            id: 'aaa',
            name: 'test category',
          },
        ],
      },
      {
        id: 'test2',
        title: 'test2 title',
        content: 'test2',
        thumbnail: undefined,
        category: [
          {
            id: 'aaa2',
            name: 'test category',
          },
        ],
      },
    ],
  },
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Default = Template.bind({})

Default.args = {
  // TODO
}
