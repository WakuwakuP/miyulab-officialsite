import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiTwitter } from 'react-icons/si'

import { IconButton } from './IconButton'

export default {
  title: 'parts/IconButton',
  component: IconButton,
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof IconButton>

const Template1: ComponentStory<typeof IconButton> = (args) => {
  return (
    <ul>
      <IconButton {...args}>
        <SiTwitter size={'2rem'} />
      </IconButton>
    </ul>
  )
}

export const Default = Template1.bind({})

const Template2: ComponentStory<typeof IconButton> = (args) => {
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
}

export const List = Template2.bind({})
