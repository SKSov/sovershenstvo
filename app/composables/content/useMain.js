export const useMain = async () => {
  const { data } = await useAsyncData('main+pricing', async () => {
    const [main, pricing] = await Promise.all([
      queryCollection('main').first(),
      queryCollection('pricing').first(),
    ])
    return { main, pricing }
  })
  // Normalize pricing: object categories (category1..6) with itemXX -> arrays and drop empty ones
  const mainBody = data?.value?.main?.meta?.body || {}
  const pricingFromContent = data?.value?.pricing?.meta?.body?.pricing || {}

  function normalizePricing(pricingObj) {
    const categories = []
    for (const categoryValue of Object.values(pricingObj)) {
      if (!categoryValue || typeof categoryValue !== 'object') continue
      const categoryTitle = (categoryValue.title || '').trim()
      // Collect item keys like item01..item99, sort by number
      const itemEntries = Object.entries(categoryValue)
        .filter(([key]) => key.startsWith('item'))
        .sort((a, b) => {
          const na = parseInt(a[0].replace(/[^0-9]/g, '') || '0', 10)
          const nb = parseInt(b[0].replace(/[^0-9]/g, '') || '0', 10)
          return na - nb
        })

      const items = itemEntries
        .map(([, item]) => ({
          title: (item?.title || '').trim(),
          our_price: (item?.our_price || '').trim(),
          price: (item?.price || '').trim(),
        }))
        .filter((it) => it.title.length > 0)

      // Skip category if it has no title and no items
      if (!categoryTitle && items.length === 0) continue

      categories.push({
        title: categoryTitle,
        children: items,
      })
    }
    return categories
  }

  const result = {
    hero: mainBody?.hero,
    strengths: mainBody?.strengths,
    services: mainBody?.services,
    offers: mainBody?.offers,
    unique: mainBody?.unique,
    details: mainBody?.details,
    why: mainBody?.why,
    pricing: normalizePricing(pricingFromContent),
  }
  return result
}
