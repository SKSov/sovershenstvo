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
        patients: (hero?.stats?.patients || '').trim(),
        years: (hero?.stats?.years_value || '').trim(),
        team: (hero?.stats?.team_value || '').trim(),
      },
      statsLabels: {
        patients: (hero?.statsLabels?.patients || '').trim(),
        years: (hero?.statsLabels?.years || '').trim(),
        team: (hero?.statsLabels?.team || '').trim(),
      },
      ctaText: (hero?.ctaText || 'Записаться на прием').trim(),
    },
  }

  return result
}
