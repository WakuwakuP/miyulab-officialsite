import { ContentCard } from './ContentCard'

import type { Meta, StoryObj } from '@storybook/react'

export const meta: Meta<typeof ContentCard> = {
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
}

export default meta

type story = StoryObj<typeof ContentCard>

export const Default: story = {}
