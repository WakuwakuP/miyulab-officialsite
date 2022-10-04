import Link from 'next/link'
import Image from 'next/future/image'
import { Content } from "types/Content"
import MicroCMSImage from 'components/MicroCMSImage'
import styles from 'styles/components/ContentCard.module.css'
import thumbnailImage from '../../public/img/no_thumbnail.jpg'

type Props = {
  content: Content
}

export default function ContentCard({ content }: Props) {
  console.log(content)
  return (
    <Link href={`content/detail/${content.id}`} passHref>
      <section className={styles.card}>
        <div>
          <div className={styles.textarea}>
            <h3 className={styles.title}>{content.title}</h3>
            <div className={styles.categories}>
              {
                content.category.map(category => (
                  <span key={category.id}>{category.name}</span>
                ))
              }
            </div>
          </div>
          {
            undefined !== content.thumbnail
              ? <MicroCMSImage
                className={styles.thumbnail}
                src={content.thumbnail.url}
                width={content.thumbnail.width}
                height={content.thumbnail.height}
                alt="thumbnail"
              />
              : <Image
                className={styles.thumbnail}
                src={thumbnailImage}
                alt="thumbnail"
              />
          }
        </div>
      </section>
    </Link>
  )
}
