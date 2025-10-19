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
    about: defineCollection({
      type: 'data',
      source: 'about.yml',
    }),
    footer: defineCollection({
      type: 'data',
      source: 'footer.yml',
    }),
    promotions: defineCollection({
      type: 'data',
      source: 'promotions.yml',
    }),
    reviews: defineCollection({
      type: 'data',
      source: 'reviews.yml',
    }),
    offers: defineCollection({
      type: 'data',
      source: 'offers.yml',
    }),
  },
})
