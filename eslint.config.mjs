// @ts-check
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import storybookPlugin from 'eslint-plugin-storybook'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  js.configs.recommended,
  
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    
    languageOptions: {
      parser: typescriptParser,
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
        // Web APIs
        Request: 'readonly',
        Response: 'readonly',
        Headers: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        // DOM types
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        Element: 'readonly',
        Document: 'readonly',
        Node: 'readonly',
        DOMRect: 'readonly',
        MutationObserver: 'readonly',
        MutationRecord: 'readonly',
        // Node.js globals  
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        // ES2020 globals
        globalThis: 'readonly',
        Promise: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    
    plugins: {
      '@typescript-eslint': typescriptEslint,
      '@next/next': nextPlugin,
      'react-hooks': reactHooksPlugin,
      'import': importPlugin,
      'unused-imports': unusedImportsPlugin,
      'storybook': storybookPlugin
    },
    
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,
      
      // TypeScript ESLint recommended rules
      ...typescriptEslint.configs.recommended.rules,
      
      // Next.js rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      
      // React hooks rules
      ...reactHooksPlugin.configs.recommended.rules,
      
      // Console rules
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error']
        }
      ],
      
      // Formatting rules
      'semi': ['error', 'never'],
      'no-duplicate-imports': 'error',
      'space-in-parens': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'no-self-compare': 'error',
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      'computed-property-spacing': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      // Removed indent rule due to compatibility issues with flat config
      // 'indent': ['error', 2, { 'SwitchCase': 1 }],
      'key-spacing': [
        'error',
        {
          beforeColon: false
        }
      ],
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'no-whitespace-before-property': 'error',
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'rest-spread-spacing': ['error', 'never'],
      'padding-line-between-statements': ['warn'],
      
      // Unused imports
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      
      // Import sorting and organization
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true
        }
      ],
      'import/default': ['off'],
      'import/no-unresolved': ['off'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: '{vitest,@testing-library/**,}',
              group: 'builtin',
              position: 'before'
            },
            {
              pattern: '{react,react-dom/**,react-router-dom,next,next/**,next-auth/**,}',
              group: 'builtin',
              position: 'before'
            },
            {
              pattern: '{**/*.css,**/*.scss}',
              group: 'type',
              position: 'after'
            },
            {
              pattern: '@public/**',
              group: 'type',
              position: 'after'
            }
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          'newlines-between': 'always'
        }
      ],
      'import/no-duplicates': [
        'error',
        {
          'prefer-inline': true
        }
      ],
      
      // TypeScript specific rules
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports'
        }
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'off',
        {
          allowNumber: true,
          allowBoolean: false,
          allowAny: false,
          allowNullish: false,
          allowRegExp: false
        }
      ],
      
      // Function parameters
      'max-params': ['warn', 3]
    },
    
    settings: {
      'import/resolver': {
        typescript: {},
        node: {}
      }
    }
  },
  
  // Files to ignore
  {
    ignores: [
      'node_modules/',
      'dist/',
      'coverage/',
      'out/',
      'jest.*',
      '*.config.js',
      'plopfile.mjs',
      'src/lib/hooks/swr/*.ts',
      'public/*'
    ]
  },
  
  // Storybook specific rules
  {
    files: ['**/*.stories.{js,jsx,ts,tsx}'],
    plugins: {
      'storybook': storybookPlugin
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules
    }
  }
]