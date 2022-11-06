import Link from 'next/link'

import { PAGE_LIMIT } from 'libs/const'
import styles from 'styles/components/containers/Pagination.module.css'

interface PaginationProps {
  totalPage: number
  page?: number
}

export const Pagination = ({ totalPage, page }: PaginationProps) => {
  const clamp = (min: number, value: number, max: number) => Math.min(max, Math.max(min, value))
  const currentPage = page === undefined ? 0 : clamp(0, page - 1, totalPage - 1)
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  if (1 < totalPage) {
    return (
      <ul className={styles.pagination}>
        {2 <= currentPage && (
          <li>
            <Link href={`/content/latest/1`} passHref>
              <a className={styles.btn}>
                <span>1</span>
              </a>
            </Link>
          </li>
        )}
        {3 <= currentPage && (
          <li>
            <div className={styles.dots}>
              <span>…</span>
            </div>
          </li>
        )}
        {range(1, Math.ceil(totalPage)).map((number, index) => {
          if (currentPage - 1 <= index && index <= currentPage + 1) {
            return (
              <li key={index}>
                {index === currentPage ? (
                  <div className={styles.current}>
                    <span>{number}</span>
                  </div>
                ) : (
                  <Link href={`/content/latest/${number}`} passHref>
                    <a className={styles.btn}>
                      <span>{number}</span>
                    </a>
                  </Link>
                )}
              </li>
            )
          }
          return <></>
        })}
        {totalPage - 4 >= currentPage && (
          <li>
            <div className={styles.dots}>
              <span>…</span>
            </div>
          </li>
        )}
        {totalPage - 3 >= currentPage && (
          <li>
            <Link href={`/content/latest/${totalPage}`} passHref>
              <a className={styles.btn}>
                <span>{totalPage}</span>
              </a>
            </Link>
          </li>
        )}
      </ul>
    )
  }
  return <></>
}
