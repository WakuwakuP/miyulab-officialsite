import { type Meta, type StoryObj } from 'storybook'
import { ContentLatest } from './ContentLatest'

const meta = {
  args: {
    contents: [
      {
        category: [
          {
            createdAt: '',
            id: 'aaa',
            name: 'test category',
            publishedAt: '',
            revisedAt: '',
            updatedAt: '',
          },
        ],
        content: 'test',
        contentsCategory: [],
        createdAt: '',
        id: 'test',
        revisedAt: '',
        thumbnail: undefined,
        title: 'test title',
        updatedAt: '',
      },
      {
        category: [
          {
            createdAt: '',
            id: 'aaa2',
            name: 'test category',
            publishedAt: '',
            revisedAt: '',
            updatedAt: '',
          },
        ],
        content: 'test2',
        contentsCategory: [],
        createdAt: '',
        id: 'test2',
        revisedAt: '',
        thumbnail: undefined,
        title: 'test2 title',
        updatedAt: '',
      },
      {
        category: [
          {
            createdAt: '',
            id: 'aaa2',
            name: 'test category',
            publishedAt: '',
            revisedAt: '',
            updatedAt: '',
          },
        ],
        content: 'test3',
        contentsCategory: [],
        createdAt: '',
        id: 'test3',
        revisedAt: '',
        thumbnail: undefined,
        title: 'test3 title',
        updatedAt: '',
      },
    ],
    page: 1,
    totalPage: 10,
  },
  component: ContentLatest,
} satisfies Meta<typeof ContentLatest>

export default meta

type Story = StoryObj<typeof ContentLatest>

export const Default: Story = {}

export const Category: Story = {
  args: {
    categoryId: 'test category',
  },
}
