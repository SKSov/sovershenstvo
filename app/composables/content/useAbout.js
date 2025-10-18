export const useAbout = async () => {
  const { data } = await useAsyncData('about', async () => {
    return queryCollection('about').first()
  })

  const body = data?.value?.meta?.body || {}

  const hero = body?.hero || {}

  const result = {
    hero: {
      quote: (hero?.quote || '').trim(),
      quoteAuthor: (hero?.quoteAuthor || '').trim(),
      topImage: (hero?.topImage || '/images/page-about/hero.png').trim(),
      bottomText: (hero?.bottomText || '').trim(),
      stats: {
        first: (hero?.stats?.first || '').trim(),
        second: (hero?.stats?.second || '').trim(),
        third: (hero?.stats?.third || '').trim(),
      },
      statsLabels: {
        first: (hero?.statsLabels?.first || '').trim(),
        second: (hero?.statsLabels?.second || '').trim(),
        third: (hero?.statsLabels?.third || '').trim(),
      },
      ctaText: (hero?.ctaText || 'Записаться на прием').trim(),
    },
  }

  return result
}
