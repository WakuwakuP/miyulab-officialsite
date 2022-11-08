import { Pagination } from './Pagination'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'containers/Pagination',
  component: Pagination,
  args: {
    totalPage: 20,
    page: 5,
  },
  argTypes: {
    totalPage: {
      type: Number,
      description: '最大ページ数',
      control: 'number',
    },
    page: {
      type: Number,
      description: '現在のページ数',
      control: 'number',
    },
  },
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />

export const Default = Template.bind({})
