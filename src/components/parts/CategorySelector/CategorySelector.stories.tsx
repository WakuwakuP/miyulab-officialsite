import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { CategorySelector } from './CategorySelector'

const meta: Meta<typeof CategorySelector> = {
  component: CategorySelector,
  title: 'parts/CategorySelector',
}

export default meta

type Story = StoryObj<typeof CategorySelector>

export const Default: Story = {
  args: {
    categories: [
      { id: 'cat1', name: 'Technology', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: 'cat2', name: 'Programming', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: 'cat3', name: 'Design', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: 'cat4', name: 'Web', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
    ],
    onSelect: action('onSelect'),
  },
}

export const WithPreselected: Story = {
  args: {
    categories: [
      { id: 'cat1', name: 'Technology', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: 'cat2', name: 'Programming', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: 'cat3', name: 'Design', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
      { id: 'cat4', name: 'Web', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' },
    ],
    initialSelected: ['cat1', 'cat3'],
    onSelect: action('onSelect'),
  },
}