import { createClient } from 'microcms-js-sdk'

// For build environments, provide fallback values to prevent build failures
const MICROCMS_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN ?? 'fallback-domain'
const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY ?? 'fallback-api-key'

const shouldUseMockClient = !process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY

if (shouldUseMockClient && process.env.NODE_ENV === 'production') {
  console.warn('microCMS credentials not available. Using mock client for build.')
}

// Mock client for build environments without API credentials
const mockClient = {
  get: async () => {
    console.warn('Using mock microCMS client - no real data available')
    return { contents: [] }
  },
}

export const client = shouldUseMockClient ? mockClient : createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
})
