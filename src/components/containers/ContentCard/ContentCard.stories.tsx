import { ContentCard } from './ContentCard'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'containers/ContentCard',
  component: ContentCard,
  args: {
    content: {
      id: 'test',
      title: 'test title',
      content: 'test',
      thumbnail: undefined,
      category: [
        {
          id: 'aaa',
          name: 'test category',
        },
      ],
    },
  },
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof ContentCard>

const Template: ComponentStory<typeof ContentCard> = (args) => <ContentCard {...args} />

export const Default = Template.bind({})

Default.args = {
  // TODO
}
