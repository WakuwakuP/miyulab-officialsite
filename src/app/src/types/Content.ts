import { Category } from "./Category"
import { ContentsCategory } from "./ContentsCategory";


export type Content = {
  id: string;
  title: string
  content: string
  thumbnail: string;
  category: Category[]
  contentsCategory: ContentsCategory[]
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}
