import { TextButton } from './TextButton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: TextButton,
  args: {
    href: '/',
    children: 'text button',
  },
} satisfies Meta<typeof TextButton>

export default meta

type Story = StoryObj<typeof TextButton>

export const Default: Story = {}
