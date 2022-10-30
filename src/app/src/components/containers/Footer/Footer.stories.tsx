import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from './Footer'

export default {
  title: 'containers/Footer',
  component: Footer,
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Default = Template.bind({})

Default.args = {
  // TODO
}
