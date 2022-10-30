import Link from 'next/link'

import { PAGE_LIMIT } from 'libs/const'

type PaginationProps = {
  totalCount: number
}

export const Pagination = ({ totalCount }: PaginationProps) => {
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PAGE_LIMIT)).map((number, index) => (
        <li key={index}>
          <Link href={`/content/latest/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
