import { ContentLatest } from './ContentLatest'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
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
      {
        id: 'test3',
        title: 'test3 title',
        content: 'test3',
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
    page: 1,
    totalPage: 10,
  },
} satisfies Meta<typeof ContentLatest>

export default meta

type Story = StoryObj<typeof ContentLatest>

export const Default: Story = {}

export const Category: Story = {
  args: {
    categoryId: 'test category',
  },
}
