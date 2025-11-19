import { type Meta, type StoryObj } from '@storybook/nextjs'
import { SiteTop } from './SiteTop'

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
