import { type Meta, type StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta = {
  args: {
    page: 5,
    totalPage: 20,
  },
  component: Pagination,
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {}
