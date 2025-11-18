import { type Meta, type StoryObj } from 'storybook'
import { SiX } from 'react-icons/si'
import { IconButton } from './IconButton'

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof IconButton>

export const Template1: Story = {
  render: (args) => (
    <ul>
      <IconButton {...args}>
        <SiX size={'2rem'} />
      </IconButton>
    </ul>
  ),
}

export const Template2: Story = {
  render: (args) => (
    <ul>
      <IconButton {...args}>
        <SiX size={'2rem'} />
      </IconButton>
      <IconButton {...args}>
        <SiX size={'2rem'} />
      </IconButton>
    </ul>
  ),
}
