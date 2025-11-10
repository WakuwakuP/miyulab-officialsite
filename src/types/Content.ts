import { type MicroCMSImage } from 'microcms-js-sdk'
import { type Category } from './Category'
import { type ContentBody } from './ContentBody'
import { type ContentsCategory } from './ContentsCategory'

export interface Content {
  id: string
  title: string
  content: ContentBody[]
  thumbnail?: MicroCMSImage
  category: Category[]
  contentsCategory: ContentsCategory[]
  createdAt: string
  updatedAt: string
  publishedAt?: string
  revisedAt: string
}
