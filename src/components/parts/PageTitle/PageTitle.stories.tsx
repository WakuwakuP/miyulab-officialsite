import { PageTitle } from './PageTitle'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PageTitle,
  args: {
    bgText: 'blog',
    children: 'TEST',
  },
} satisfies Meta<typeof PageTitle>

export default meta

type Story = StoryObj<typeof PageTitle>

export const Default: Story = {}
