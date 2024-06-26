import Image from 'next/image'
import Link from 'next/link'

import MicroCMSImage from 'components/parts/MicroCMSImage'

import type { ContentModify } from 'types'

import styles from 'styles/components/containers/ContentCard.module.css'

import thumbnailImage from '@public/img/no_thumbnail.jpg'

export type ContentCardProps = {
  content: ContentModify
}

export const ContentCard = ({ content }: ContentCardProps) => {
  return (
    <Link href={`/content/detail/${content.id}`} className={styles.card}>
      <div>
        <div className={styles.textarea}>
          <h3 className={styles.title}>{content.title}</h3>
          <div className={styles.categories}>
            {content.category.map((category) => (
              <span key={category.id}>{category.name}</span>
            ))}
          </div>
        </div>
        {undefined !== content.thumbnail ? (
          <MicroCMSImage
            className={styles.thumbnail}
            src={content.thumbnail.url}
            width={content.thumbnail.width}
            height={content.thumbnail.height}
            alt='thumbnail'
          />
        ) : (
          <Image className={styles.thumbnail} src={thumbnailImage} alt='thumbnail' />
        )}
      </div>
    </Link>
  )
}
