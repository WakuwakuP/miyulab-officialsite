import { type Meta, type StoryObj } from '@storybook/nextjs'
import { Home } from './Home'

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
    ],
  },
  component: Home,
} satisfies Meta<typeof Home>

export default meta

type Story = StoryObj<typeof Home>

export const Default: Story = {}
