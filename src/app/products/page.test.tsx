import { expect, jest, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'

const get = jest.fn<(options: unknown) => Promise<{ contents: unknown[] }>>()
jest.mock('libs/client', () => ({ client: { get } }))
jest.mock('next/cache', () => ({ unstable_cache: (fn: unknown) => fn }))

// CMSの値が表示され、任意項目・危険なURL・空一覧・取得失敗を扱えること。
test('renders products from microCMS', async () => {
  const { default: ProductsPage } = await import('./page')
  get.mockResolvedValueOnce({
    contents: [
      {
        detail: '補足文\n注意事項',
        id: 'cms-product',
        image: { url: 'https://images.microcms-assets.io/assets/example.png' },
        label: 'CMSのラベル',
        name: 'CMSの商品名',
        summary: 'CMSの紹介文',
        url: 'https://example.com/tool',
      },
      {
        id: 'minimal',
        name: '補足なし',
        summary: '概要のみ',
        url: 'javascript:alert(1)',
      },
    ],
  })
  const view = render(await ProductsPage())
  expect(get).toHaveBeenCalledWith({
    endpoint: 'products',
    queries: { limit: 100 },
  })
  expect(screen.getByRole('heading', { name: 'CMSの商品名' })).toBeTruthy()
  expect(screen.getByText('CMSのラベル')).toBeTruthy()
  expect(screen.getByText('CMSの紹介文')).toBeTruthy()
  expect(view.container.querySelector('details p')?.textContent).toBe(
    '補足文\n注意事項',
  )
  expect(view.container.querySelectorAll('details')).toHaveLength(1)
  expect(view.container.querySelectorAll('img')).toHaveLength(1)
  expect(
    view.container
      .querySelector('img')
      ?.parentElement?.parentElement?.querySelector('a')
      ?.getAttribute('href'),
  ).toBe('https://example.com/tool')
  expect(
    view.container.querySelector('h1')?.parentElement?.parentElement?.className,
  ).toContain('products')
  expect(screen.getAllByRole('link')).toHaveLength(1)
  expect(screen.getByRole('link').getAttribute('href')).toBe(
    'https://example.com/tool',
  )
  view.unmount()

  get.mockResolvedValueOnce({ contents: [] })
  render(await ProductsPage())
  expect(
    screen.getByText('現在、掲載中のプロダクトはありません。'),
  ).toBeTruthy()

  get.mockRejectedValueOnce(new Error('microCMS unavailable'))
  await expect(ProductsPage()).rejects.toThrow('microCMS unavailable')
})
