import { Pagination } from './Pagination'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Pagination,
  args: {
    totalPage: 20,
    page: 5,
  },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {}
