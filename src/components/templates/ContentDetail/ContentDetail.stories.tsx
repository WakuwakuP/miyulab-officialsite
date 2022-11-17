import React from 'react'

import { ContentDetail } from './ContentDetail'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

const htmlCodeBlock =
  '<h2>CodeBlock Test</h2><pre><code class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> getStaticPaths: GetStaticPaths = <span class="hljs-keyword">async</span> (context) =&gt; {\n&nbsp; <span class="hljs-keyword">return</span> {\n&nbsp; &nbsp; paths: [],\n&nbsp; &nbsp; fallback: <span class="hljs-string">\'blocking\'</span>\n&nbsp; }\n};</code></pre><p><br></p>'
const htmlTable =
  '<h2>Table Test</h2><table><thead><tr><th>aaa</th><th>bbb</th></tr></thead><tbody><tr><td>ccc</td><td>ddd</td></tr></tbody></table>'

export default {
  title: 'templates/ContentDetail',
  component: ContentDetail,
  args: {
    content: {
      id: 'kw0j37a1lcd',
      createdAt: '2022-09-28T00:38:54.173Z',
      updatedAt: '2022-10-03T10:52:16.003Z',
      publishedAt: '2022-09-28T00:38:54.173Z',
      revisedAt: '2022-10-03T10:52:16.003Z',
      title: 'test',
      content: '<p>テスト投稿</p>' + htmlCodeBlock + htmlTable,
      category: [],
      contentsCategory: ['article'],
    },
    toc: [
      {
        id: '1',
        text: 'Section Title Test h2',
        name: 'h2',
      },
      {
        id: '2',
        text: 'Section Sub Title Test h3',
        name: 'h3',
      },
      {
        id: '3',
        text: 'Section Sub Title Test h3',
        name: 'h3',
      },
      {
        id: '4',
        text: 'Section Title Test h2',
        name: 'h2',
      },
    ],
  },
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof ContentDetail>

const Template: ComponentStory<typeof ContentDetail> = (args) => <ContentDetail {...args} />

export const Default = Template.bind({})

Default.args = {
  // TODO
}
