import { Header } from './Header'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'containers/Header',
  component: Header,
  argTypes: {
    // TODO
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
