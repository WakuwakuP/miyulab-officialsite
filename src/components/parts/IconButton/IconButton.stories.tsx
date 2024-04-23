import { SiTwitter } from 'react-icons/si'

import { IconButton } from './IconButton'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
}

export default meta

type story = StoryObj<typeof IconButton>

export const Template1: story = {
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

export const Template2: story = {
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
