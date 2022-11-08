---
to: "<%= should_create_storybook ? `src/${path}/${component_name}.stories.tsx` : null %>"
---
import React from 'react'

import { <%= component_name %> } from './<%= component_name %>'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: '<%= storybook_title_path %>',
  component: <%= component_name %>,
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof <%= component_name %>>

const Template: ComponentStory<typeof <%= component_name %>> = (args) => <<%= component_name %> {...args} />

export const Default = Template.bind({});

Default.args = {
  // TODO
}
