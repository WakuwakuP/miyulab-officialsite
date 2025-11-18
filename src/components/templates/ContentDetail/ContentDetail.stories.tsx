import { type Meta, type StoryObj } from 'storybook'
import { ContentDetail } from './ContentDetail'

const htmlCodeBlock =
  '<h2>CodeBlock Test</h2><pre><code class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> getStaticPaths: GetStaticPaths = <span class="hljs-keyword">async</span> (context) =&gt; {\n&nbsp; <span class="hljs-keyword">return</span> {\n&nbsp; &nbsp; paths: [],\n&nbsp; &nbsp; fallback: <span class="hljs-string">\'blocking\'</span>\n&nbsp; }\n};</code></pre><p><br></p>'
const htmlTable =
  '<h2>Table Test</h2><table><thead><tr><th>aaa</th><th>bbb</th></tr></thead><tbody><tr><td>ccc</td><td>ddd</td></tr></tbody></table>'

const meta = {
  args: {
    content: {
      category: [],
      content: `<p>テスト投稿</p>${htmlCodeBlock}${htmlTable}`,
      contentsCategory: ['article'],
      createdAt: '2022-09-28T00:38:54.173Z',
      id: 'kw0j37a1lcd',
      publishedAt: '2022-09-28T00:38:54.173Z',
      revisedAt: '2022-10-03T10:52:16.003Z',
      title: 'test',
      updatedAt: '2022-10-03T10:52:16.003Z',
    },
    toc: [
      {
        id: '1',
        name: 'h2',
        text: 'Section Title Test h2',
      },
      {
        id: '2',
        name: 'h3',
        text: 'Section Sub Title Test h3',
      },
      {
        id: '3',
        name: 'h3',
        text: 'Section Sub Title Test h3',
      },
      {
        id: '4',
        name: 'h2',
        text: 'Section Title Test h2',
      },
    ],
  },
  component: ContentDetail,
} satisfies Meta<typeof ContentDetail>

export default meta

type Story = StoryObj<typeof ContentDetail>

export const Default: Story = {
  parameters: {
    nextRouter: {
      asPath: '/content/detail/kw0j37a1lcd',
      path: '/content/detail/[id]',
      query: {
        id: 'kw0j37a1lcd',
      },
    },
  },
}
