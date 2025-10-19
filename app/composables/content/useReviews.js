export const useReviews = async () => {
  const { data } = await useAsyncData('reviews-list', async () => {
    return queryCollection('reviews').first()
  })

  const list = data?.value?.meta?.body?.list || {}

  const entries = Object.entries(list)
    .filter(([key, val]) => key.startsWith('review') && val)
    .sort((a, b) => {
      const na = parseInt(a[0].replace(/\D/g, '') || '0', 10)
      const nb = parseInt(b[0].replace(/\D/g, '') || '0', 10)
      return na - nb
    })

  const reviews = entries.map(([, r]) => ({
    author: r?.author || '',
    date: r?.date || '',
    platform: r?.platform || '',
    doctor: r?.doctor || '',
    services: [
      r?.services?.s1,
      r?.services?.s2,
      r?.services?.s3,
      r?.services?.s4,
      r?.services?.s5,
    ].filter(Boolean),
    text: r?.text || '',
  }))

  return reviews
}
