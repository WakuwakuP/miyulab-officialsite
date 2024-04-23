import { PageTitle } from './PageTitle'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PageTitle> = {
  component: PageTitle,
  args: {
    bgText: 'blog',
    children: 'TEST',
  },
}

export default meta

type story = StoryObj<typeof PageTitle>

export const Default: story = {}
