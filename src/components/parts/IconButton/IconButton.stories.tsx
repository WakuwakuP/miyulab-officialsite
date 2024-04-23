import { SiTwitter } from 'react-icons/si'

import { IconButton } from './IconButton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof IconButton>

export const Template1: Story = {
  render: (args) => {
    return (
      <ul>
        <IconButton {...args}>
          <SiTwitter size={'2rem'} />
        </IconButton>
      </ul>
    )
  },
}

export const Template2: Story = {
  render: (args) => {
    return (
      <ul>
        <IconButton {...args}>
          <SiTwitter size={'2rem'} />
        </IconButton>
        <IconButton {...args}>
          <SiTwitter size={'2rem'} />
        </IconButton>
      </ul>
    )
  },
}
