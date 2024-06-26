import { Footer } from './Footer'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {}
