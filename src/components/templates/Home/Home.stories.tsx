import { Home } from './Home'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Home> = {
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
            createdAt: '',
            updatedAt: '',
            publishedAt: '',
            revisedAt: '',
          },
        ],
        contentsCategory: [],
        createdAt: '',
        updatedAt: '',
        revisedAt: '',
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
            createdAt: '',
            updatedAt: '',
            publishedAt: '',
            revisedAt: '',
          },
        ],
        contentsCategory: [],
        createdAt: '',
        updatedAt: '',
        revisedAt: '',
      },
    ],
  },
}

export default meta

type story = StoryObj<typeof Home>

export const Default: story = {}
