import { type Meta, type StoryObj } from 'storybook'
import { Header } from './Header'

const meta = {
  argTypes: {
    // TODO
  },
  component: Header,
  title: 'containers/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
