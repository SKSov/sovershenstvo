export const useAbout = async () => {
  const { data } = await useAsyncData('about', async () => {
    return queryCollection('about').first()
  })

  const body = data?.value?.meta?.body || {}

  const hero = body?.hero || {}

  const result = {
    hero: {
      quote: hero?.quote,
      quoteAuthor: hero?.quoteAuthor,
      topImage: hero?.topImage,
      bottomText: hero?.bottomText,
      stats: {
        first: hero?.stats?.first,
        second: hero?.stats?.second,
        third: hero?.stats?.third,
      },
      statsLabels: {
        first: hero?.statsLabels?.first,
        second: hero?.statsLabels?.second,
        third: hero?.statsLabels?.third,
      },
      ctaText: hero?.ctaText,
    },
  }

  return result
}
