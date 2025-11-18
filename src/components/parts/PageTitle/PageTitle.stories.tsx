import { type Meta, type StoryObj } from 'storybook'
import { PageTitle } from './PageTitle'

const meta = {
  args: {
    bgText: 'blog',
    children: 'TEST',
  },
  component: PageTitle,
} satisfies Meta<typeof PageTitle>

export default meta

type Story = StoryObj<typeof PageTitle>

export const Default: Story = {}
