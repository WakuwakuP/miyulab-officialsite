import { PageTitle } from 'components/parts/PageTitle/PageTitle'
import { TextButton } from 'components/parts/TextButton/TextButton'
import { type Metadata } from 'next'
import styles from 'styles/pages/Products.module.css'

const description =
  'Miyulabのプロダクトと運営サービスをご紹介。テイワット・トイボックス、Stellasora Tools、pl.waku.devを掲載しています。'

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

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <PageTitle bgText={undefined}>
        <h1 className={styles.heading}>Products</h1>
      </PageTitle>
      <p className={styles.intro}>
        遊びを広げるツールと、日々のつながりをつくるサービス。
      </p>
      <article className={styles.product}>
        <div aria-hidden="true" className={styles.visual}>
          <svg aria-hidden="true" fill="none" viewBox="0 0 120 120">
            <path
              d="m60 12 42 24v48L60 108 18 84V36Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="m18 36 42 24 42-24M60 60v48"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="m60 18 4 12 12 4-12 4-4 12-4-12-12-4 12-4Z"
              fill="currentColor"
            />
          </svg>
          <span>TEYVAT TOYBOX</span>
        </div>
        <div className={styles.detail}>
          <p className={styles.label}>原神 · 非公式ツール集</p>
          <h2>テイワット・トイボックス</h2>
          <p>
            原神の冒険に、いつもと違う遊び方を。ソロでも仲間とでも楽しめるツール集。
          </p>
          <details className={styles.more}>
            <summary>詳しく見る</summary>
            <p>
              「こんな遊び方、どうだろう？」を少しずつ形にして、道具箱に加えていきます。
            </p>
            <p className={styles.note}>
              HoYoverse公式のサイトではありません。ゲームに関する名称等の権利は、各権利者に帰属します。
            </p>
          </details>
          <div className={styles.action}>
            <TextButton href="https://teyvat-toybox.miyulab.dev/">
              道具箱をひらく
            </TextButton>
          </div>
        </div>
      </article>
      <article className={styles.product}>
        <div
          aria-hidden="true"
          className={`${styles.visual} ${styles.stellasora}`}
        >
          <span className={styles.mark}>✦</span>
          <span>STELLASORA TOOLS</span>
        </div>
        <div className={styles.detail}>
          <p className={styles.label}>ステラソラ · 非公式ツール集</p>
          <h2>Stellasora Tools</h2>
          <p>
            ステラソラのビルドを作成・共有して、編成を考えるためのツール集。
          </p>
          <details className={styles.more}>
            <summary>詳しく見る</summary>
            <p>
              巡遊者の素質とロスレコを選択してビルドを作成し、共有できます。
            </p>
            <p className={styles.note}>
              ゲーム公式のサイトではありません。ゲームに関する名称等の権利は、各権利者に帰属します。
            </p>
          </details>
          <div className={styles.action}>
            <TextButton href="https://stellasora-tools.miyulab.dev/">
              ツールを使う
            </TextButton>
          </div>
        </div>
      </article>
      <article className={styles.product}>
        <div
          aria-hidden="true"
          className={`${styles.visual} ${styles.pleroma}`}
        >
          <span className={styles.mark}>☁</span>
          <span>PL.WAKU.DEV</span>
        </div>
        <div className={styles.detail}>
          <p className={styles.label}>運営サービス · 分散型SNS</p>
          <h2>pl.waku.dev</h2>
          <p>Miyulabが運営する分散型SNS。日々のことを、自分のペースで。</p>
          <details className={styles.more}>
            <summary>詳しく見る</summary>
            <p>
              Pleromaを使ったSNSです。日々の出来事を投稿したり、ほかのサーバーのユーザーと交流したりできます。
            </p>
          </details>
          <div className={styles.action}>
            <TextButton href="https://pl.waku.dev/">サイトを開く</TextButton>
          </div>
        </div>
      </article>
    </div>
  )
}
