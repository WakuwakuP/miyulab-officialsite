import { MicroCMSImage } from 'components/parts/MicroCMSImage/MicroCMSImage'
import { PageTitle } from 'components/parts/PageTitle/PageTitle'
import { TextButton } from 'components/parts/TextButton/TextButton'
import { client } from 'libs/client'
import { type Metadata } from 'next'
import { unstable_cache } from 'next/cache'
import styles from 'styles/pages/Products.module.css'
import { type Product } from 'types'

const EXTERNAL_URL = /^https?:\/\//i

// ponytail: 一覧は100件まで。超える場合はSDKの全件取得へ切り替える。
const getProducts = unstable_cache(
  async (): Promise<{ contents: Product[] }> =>
    client.get({ endpoint: 'products', queries: { limit: 100 } }),
  ['products'],
  { revalidate: 600, tags: ['products'] },
)

const description = 'Miyulabのプロダクトと運営サービスをご紹介。'

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
    images: [
      {
        url: `https://${process.env.BASE_URL || 'localhost:3000'}/img/ogp.png`,
      },
    ],
    title: 'Products | Miyulab',
    url: `https://${process.env.BASE_URL || 'localhost:3000'}/products`,
  },
  title: 'Products',
}

export default async function ProductsPage() {
  const { contents } = await getProducts()

  return (
    <div className={styles.page}>
      <PageTitle bgText="products">
        <h1 className={styles.heading}>Products</h1>
      </PageTitle>
      <p className={styles.intro}>
        遊びを広げるツールと、日々のつながりをつくるサービス。
      </p>
      {contents.map((product) => (
        <article className={styles.product} key={product.id}>
          <div className={styles.media}>
            {product.image != null && (
              <div className={styles.visual}>
                <MicroCMSImage
                  alt=""
                  className={styles.image}
                  fill={true}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={product.image.url}
                />
              </div>
            )}
            {EXTERNAL_URL.test(product.url) && (
              <div className={styles.action}>
                <TextButton href={product.url}>サイトを開く</TextButton>
              </div>
            )}
          </div>
          <div className={styles.detail}>
            {Boolean(product.label) && (
              <p className={styles.label}>{product.label}</p>
            )}
            <h2>{product.name}</h2>
            <p className={styles.text}>{product.summary}</p>
            {Boolean(product.detail) && (
              <details className={styles.more}>
                <summary>詳しく見る</summary>
                <p className={styles.text}>{product.detail}</p>
              </details>
            )}
          </div>
        </article>
      ))}
      {contents.length === 0 && (
        <p className={styles.intro}>現在、掲載中のプロダクトはありません。</p>
      )}
    </div>
  )
}
