import { type Meta, type StoryObj } from '@storybook/nextjs'
import { ContentCard } from './ContentCard'

const meta = {
  args: {
    content: {
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
  },
  component: ContentCard,
} satisfies Meta<typeof ContentCard>

export default meta

type Story = StoryObj<typeof ContentCard>

export const Default: Story = {}
