'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from 'styles/components/containers/Pagination.module.css'

interface PaginationProps {
  totalPage: number
  page?: number
}

export const Pagination = ({ totalPage, page }: PaginationProps) => {
  const pathname = usePathname()
  const clamp = (min: number, value: number, max: number) => Math.min(max, Math.max(min, value))
  const currentPage = page === undefined ? 0 : clamp(0, page - 1, totalPage - 1)
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const path = page === undefined ? pathname : pathname.replace(/\/\d+$/, '')

  if (1 < totalPage) {
    return (
      <div>
        <ul className={styles.pagination}>
          <>
            {2 <= currentPage && (
              <li>
                <Link href={`${path}/1`}>
                  <div className={styles.btn}>
                    <span>1</span>
                  </div>
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
          </>
          <>
            {range(1, Math.ceil(totalPage)).map((number, index) => {
              if (currentPage - 1 <= index && index <= currentPage + 1) {
                return (
                  <li key={number}>
                    {index === currentPage ? (
                      <div className={styles.current}>
                        <span>{number}</span>
                      </div>
                    ) : (
                      <Link href={`${path}/${number}`}>
                        <div className={styles.btn}>
                          <span>{number}</span>
                        </div>
                      </Link>
                    )}
                  </li>
                )
              }
              return null
            })}
          </>
          <>
            {totalPage - 4 >= currentPage && (
              <li>
                <div className={styles.dots}>
                  <span>…</span>
                </div>
              </li>
            )}
            {totalPage - 3 >= currentPage && (
              <li>
                <Link href={`${path}//${totalPage}`}>
                  <div className={styles.btn}>
                    <span>{totalPage}</span>
                  </div>
                </Link>
              </li>
            )}
          </>
        </ul>
      </div>
    )
  }
  return <></>
}
