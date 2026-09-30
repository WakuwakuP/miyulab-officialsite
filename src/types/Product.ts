import { type MicroCMSImage } from 'microcms-js-sdk'

export interface Product {
  id: string
  name: string
  label?: string
  summary: string
  detail?: string
  url: string
  image?: MicroCMSImage
  createdAt: string
  updatedAt: string
  publishedAt?: string
  revisedAt: string
}
