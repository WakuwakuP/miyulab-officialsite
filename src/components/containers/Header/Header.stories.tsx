import { Header } from './Header'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
  title: 'containers/Header',
  component: Header,
  argTypes: {
    // TODO
  },
}

export default meta

type story = StoryObj<typeof Header>

export const Default: story = {}
