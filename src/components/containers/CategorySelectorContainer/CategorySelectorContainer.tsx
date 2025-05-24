'use client'

import { useEffect, useState } from 'react'

import { CategorySelector } from 'components/parts'
import { client } from 'libs/client'

import type { Category } from 'types'

export interface CategorySelectorContainerProps {
  initialSelected?: string[]
  onSelect?: (selectedCategories: string[]) => void
}

export const CategorySelectorContainer = ({
  initialSelected = [],
  onSelect,
}: CategorySelectorContainerProps) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true)
        const response = await client.get({ endpoint: 'categories' })
        setCategories(response.contents)
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (isLoading) {
    return <div>カテゴリを読み込み中...</div>
  }

  return <CategorySelector categories={categories} initialSelected={initialSelected} onSelect={onSelect} />
}