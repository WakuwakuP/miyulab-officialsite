import { SiteTop } from './SiteTop'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SiteTop> = {
  component: SiteTop,
}

export default meta

type story = StoryObj<typeof SiteTop>

export const Default: story = {}
