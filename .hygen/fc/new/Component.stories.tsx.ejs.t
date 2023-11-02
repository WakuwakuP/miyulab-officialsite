---
to: "<%= should_create_storybook ? `src/${path}/${component_name}.stories.tsx` : null %>"
---
import React from 'react'

import { <%= component_name %> } from './<%= component_name %>'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

const meta: Meta<typeof <%= component_name %>> {
  title: '<%= storybook_title_path %>',
  component: <%= component_name %>,
  argTypes: {
    // TODO
  },
}

export default meta

const Template: ComponentStory<typeof <%= component_name %>> = (args) => <<%= component_name %> {...args} />

export const Default = Template.bind({});

Default.args = {
  // TODO
}
