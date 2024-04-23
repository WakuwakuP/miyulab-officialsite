import { Home } from './Home'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
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
} satisfies Meta<typeof Home>

export default meta

type Story = StoryObj<typeof Home>

export const Default: Story = {}
