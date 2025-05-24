'use client'

import Link from 'next/link'
import { useState } from 'react'

import type { Category } from 'types'

import styles from 'styles/components/parts/CategorySelector.module.css'

export interface CategorySelectorProps {
  categories: Category[]
  onSelect?: (selectedCategories: string[]) => void
  initialSelected?: string[]
}

export const CategorySelector = ({ categories, onSelect, initialSelected = [] }: CategorySelectorProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialSelected)

  const handleCategoryClick = (categoryId: string) => {
    const newSelection = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId]
    
    setSelectedCategories(newSelection)
    if (onSelect) {
      onSelect(newSelection)
    }
  }

  return (
    <div className={styles.categorySelector}>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.categoryButton} ${
              selectedCategories.includes(category.id) ? styles.selected : ''
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            #{category.name}
          </button>
        ))}
      </div>
      {selectedCategories.length > 0 && (
        <div className={styles.viewSelectedContainer}>
          <Link 
            href={`/content/category/${selectedCategories.join(',')}/1`}
            className={styles.viewSelectedButton}
          >
            選択したカテゴリで表示
          </Link>
        </div>
      )}
    </div>
  )
}