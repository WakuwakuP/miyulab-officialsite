import { type Meta, type StoryObj } from '@storybook/nextjs'
import { TextButton } from './TextButton'

const meta = {
  args: {
    children: 'text button',
    href: '/',
  },
  component: TextButton,
} satisfies Meta<typeof TextButton>

export default meta

type Story = StoryObj<typeof TextButton>

export const Default: Story = {}
