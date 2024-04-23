import { SiteTop } from './SiteTop'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SiteTop,
  parameters: {
    layout: 'fullscreen',
  },
  render(args) {
    return (
      <div style={{ height: '100vh' }}>
        <SiteTop {...args} />
      </div>
    )
  },
} satisfies Meta<typeof SiteTop>

export default meta

type Story = StoryObj<typeof SiteTop>

export const Default: Story = {}
