# Copilot Instructions for Miyulab Official Site

This is a Next.js-based official website using TypeScript, microCMS for content management, and modern React patterns. Follow these guidelines when contributing to this project.

## Project Overview

This is a modern Next.js application with the following key technologies:
- **Next.js 15.3** with App Router
- **TypeScript** for type safety
- **microCMS** for headless content management
- **Storybook** for component development and testing
- **CSS Modules** for styling
- **React Icons** for iconography

## Architecture Patterns

### File Organization
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components organized by type:
  - `containers/` - Complex components with business logic
  - `parts/` - Simple, reusable UI components  
  - `templates/` - Page-level layout components
- `src/libs/` - Utility functions and external service clients
- `src/types/` - TypeScript type definitions
- `src/hooks/` - Custom React hooks
- `src/providers/` - React context providers
- `src/styles/` - CSS files and modules

### Component Architecture

#### Component Structure
Each component follows this structure:
```
ComponentName/
├── ComponentName.tsx          # Main component file
├── ComponentName.stories.tsx  # Storybook stories
├── index.ts                  # Export file
└── ComponentName.module.css  # Component-specific styles (when needed)
```

#### Component Patterns
- Use functional components with TypeScript
- Define prop types as interfaces with descriptive names ending in `Props`
- Export both named and default exports:
  ```typescript
  export const ComponentName = ({ prop }: ComponentNameProps) => {
    // component logic
  }
  export default ComponentName
  ```

#### CSS Modules
- Use CSS Modules for component-specific styling
- Import styles as: `import styles from 'styles/components/path/ComponentName.module.css'`
- Apply classes using `className={styles.className}`
- Global styles go in `src/styles/globals.css`

### microCMS Integration

#### Client Configuration
- microCMS client is configured in `src/libs/client.ts`
- Environment variables required: `MICROCMS_SERVICE_DOMAIN`, `MICROCMS_API_KEY`
- Use the exported `client` for all microCMS API calls

#### Content Types
- Content types are defined in `src/types/`
- Main content type is `ContentModify` with fields like `id`, `title`, `content`, `thumbnail`, `category`
- Always use proper TypeScript types for microCMS responses

#### Data Fetching Patterns
- Use `unstable_cache` for caching API responses
- Set appropriate `revalidate` values (typically 600 seconds)
- Filter content using microCMS queries:
  ```typescript
  const contents = await client.get({
    endpoint: 'contents',
    queries: {
      filters: 'contentsCategory[contains]article',
      orders: '-publishedAt',
      limit: 10,
    },
  })
  ```

### Next.js App Router Patterns

#### Page Structure
- Pages are in `src/app/` following Next.js App Router conventions
- Use `layout.tsx` for shared layouts
- Set `revalidate` for ISR: `export const revalidate = 600`
- Use proper metadata exports for SEO

#### Image Optimization
- Use Next.js `Image` component for optimization
- Configure remote patterns in `next.config.js` for microCMS images
- Custom `MicroCMSImage` component handles microCMS image rendering

#### Environment Configuration
- Environment variables are configured in `next.config.js` under `env`
- Required variables: `BASE_URL`, `SITE_TITLE`, `SITE_DESCRIPTION`, etc.
- Always validate environment variables in `layout.tsx`

### Development Workflow

#### Code Generation
- Use **hygen** for component scaffolding:
  - `yarn hygen:new` - Create new components
  - `yarn hygen:sb` - Create Storybook stories
- Templates are in `.hygen/` directory
- Follow the interactive prompts to generate consistent code structure

#### Development Commands
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Auto-fix ESLint issues
- `yarn format` - Format code with Prettier
- `yarn storybook` - Start Storybook development server

#### Code Style
- ESLint and Prettier are configured and enforced
- Husky pre-commit hooks ensure code quality
- Use meaningful variable and function names
- Prefer functional components over class components
- Use TypeScript strict mode

### Storybook Integration

#### Story Patterns
- Create `.stories.tsx` files for each component
- Use CSF (Component Story Format) 3.0
- Define multiple variants/states for components
- Include args for interactive controls

#### Story Structure
```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentName } from './ComponentName'

const meta: Meta<typeof ComponentName> = {
  title: 'containers/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // component props
  },
}
```

### Testing Patterns

- Jest is configured for unit testing
- Use `@testing-library/react` for component testing
- Test files should be co-located with components or in `__tests__` directories
- Focus on behavior testing rather than implementation details

### Content Management

#### Content Structure
- Articles and pages are managed through microCMS
- Content categories are used for organization
- Thumbnail images are optional and handled gracefully
- Rich text content is processed with `microcms-richedit-processer`

#### SEO and Metadata
- Metadata is configured in `layout.tsx`
- Open Graph and Twitter Card support included
- Dynamic metadata generation for content pages
- RSS feed generation supported

### Performance Considerations

- Use Next.js Image optimization for all images
- Implement proper caching with `unstable_cache`
- Set appropriate revalidation intervals
- Use CSS Modules to avoid style conflicts
- Lazy load components when appropriate

### Styling Guidelines

#### CSS Variables
- Use CSS custom properties for theming (defined in globals.css)
- Variables include colors, spacing, and typography
- Support for light/dark themes with CSS custom properties

#### Responsive Design
- Mobile-first approach with CSS media queries
- Use container queries for component-level responsive design
- Support for Surface Duo dual-screen layout

#### Component Styling
- Prefer CSS Modules for component-specific styles
- Use semantic class names
- Keep specificity low and avoid `!important`

### Common Patterns to Follow

1. **Error Handling**: Always validate environment variables and handle missing content gracefully
2. **Type Safety**: Use proper TypeScript types for all props, state, and API responses
3. **Accessibility**: Include proper ARIA labels and semantic HTML
4. **Performance**: Optimize images, use caching, and minimize bundle size
5. **SEO**: Include proper metadata, structured data, and semantic markup

### Code Examples

#### Creating a new container component:
```bash
yarn hygen:new
# Select 'containers' -> Enter component name -> Choose options
```

#### Fetching content from microCMS:
```typescript
const getContent = async (id: string) => {
  return await client.get({
    endpoint: 'contents',
    contentId: id,
  })
}
```

#### Creating a page with ISR:
```typescript
export const revalidate = 600

export default async function Page() {
  const content = await getContent()
  return <div>{content.title}</div>
}
```

This codebase prioritizes developer experience, type safety, performance, and maintainability. Always consider these factors when making changes or adding new features.