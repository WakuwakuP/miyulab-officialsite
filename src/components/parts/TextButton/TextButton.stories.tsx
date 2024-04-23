import { TextButton } from './TextButton'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextButton> = {
  component: TextButton,
  args: {
    href: '/',
    children: 'text button',
  },
}

export default meta

type story = StoryObj<typeof TextButton>

export const Default: story = {}
