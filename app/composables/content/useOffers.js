export const useOffers = async () => {
  const { data } = await useAsyncData('offers', async () => {
    return queryCollection('offers').first()
  })

  const list = data?.value?.meta?.body?.list || {}

  const entries = Object.entries(list)
    .filter(([key, val]) => key.startsWith('item') && val)
    .sort((a, b) => {
      const na = parseInt(a[0].replace(/\D/g, '') || '0', 10)
      const nb = parseInt(b[0].replace(/\D/g, '') || '0', 10)
      return na - nb
    })

  return entries.map(([, it]) => ({
    topic: it?.topic || '',
    text: it?.text || '',
    price: it?.price || '',
    link: it?.link || '/',
  }))
}
