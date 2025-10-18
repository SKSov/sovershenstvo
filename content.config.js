import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    globals: defineCollection({
      type: 'data',
      source: 'globals.yml',
    }),
    main: defineCollection({
      type: 'data',
      source: 'main.yml',
    }),
    pricing: defineCollection({
      type: 'data',
      source: 'pricing.yml',
    }),
    doctors: defineCollection({
      type: 'data',
      source: 'doctors.yml',
    }),
  },
})
