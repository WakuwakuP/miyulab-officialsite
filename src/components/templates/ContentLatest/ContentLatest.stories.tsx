import React from 'react'

import { ContentLatest } from './ContentLatest'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'templates/ContentLatest',
  component: ContentLatest,
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
    page: 1,
    totalPage: 10,
  },
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof ContentLatest>

const Template: ComponentStory<typeof ContentLatest> = (args) => <ContentLatest {...args} />

export const Default = Template.bind({})

Default.args = {
  // TODO
}
