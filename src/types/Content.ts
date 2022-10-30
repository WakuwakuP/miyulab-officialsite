import { MicroCMSImage } from 'microcms-js-sdk'

import { Category } from './Category'
import { ContentsCategory } from './ContentsCategory'

export type Content = {
  id: string
  title: string
  content: string
  thumbnail?: MicroCMSImage
  category: Category[]
  contentsCategory: ContentsCategory[]
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}
