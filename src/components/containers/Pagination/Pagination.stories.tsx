import { Pagination } from './Pagination'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  args: {
    totalPage: 20,
    page: 5,
  },
}

export default meta

type story = StoryObj<typeof Pagination>

export const Default: story = {}
