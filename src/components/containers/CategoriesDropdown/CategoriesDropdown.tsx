import { client } from 'libs/client'
import { unstable_cache } from 'next/cache'
import Link from 'next/link'

import styles from 'styles/components/containers/CategoriesDropdown.module.css'

export const revalidate = 600

export interface Category {
  id: string
  name: string
}

const getCategories = async () => await client.get({ endpoint: 'categories' })

const useCacheGetCategories = () =>
  unstable_cache(async () => await getCategories(), ['categories'], {
    tags: ['categories'],
  })

export const CategoriesDropdown = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cacheGetCategories = useCacheGetCategories()
  const categories = (await cacheGetCategories()).contents as Category[]

  return (
    <ul className={styles.dropdownList}>
      {categories.map((cat) => (
        <li key={cat.id}>
          <Link href={`/content/category/${cat.id}`}>{cat.name}</Link>
        </li>
      ))}
    </ul>
  )
}
