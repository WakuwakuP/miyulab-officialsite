import { ContentCard } from './ContentCard'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ContentCard,
  args: {
    content: {
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
  },
} satisfies Meta<typeof ContentCard>

export default meta

type Story = StoryObj<typeof ContentCard>

export const Default: Story = {}
