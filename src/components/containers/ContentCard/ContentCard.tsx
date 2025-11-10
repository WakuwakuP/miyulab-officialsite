import thumbnailImage from '@public/img/no_thumbnail.jpg'
import MicroCMSImage from 'components/parts/MicroCMSImage'
import Image from 'next/image'
import Link from 'next/link'

import styles from 'styles/components/containers/ContentCard.module.css'
import { type ContentModify } from 'types'

export interface ContentCardProps {
  content: ContentModify
}

export const ContentCard = ({ content }: ContentCardProps) => (
  <Link className={styles.card} href={`/content/detail/${content.id}`}>
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
          alt="thumbnail"
          className={styles.thumbnail}
          height={content.thumbnail.height}
          src={content.thumbnail.url}
          width={content.thumbnail.width}
        />
      ) : (
        <Image
          alt="thumbnail"
          className={styles.thumbnail}
          src={thumbnailImage}
        />
      )}
    </div>
  </Link>
)
