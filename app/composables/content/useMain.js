export const useMain = async () => {
  const { data: mainData } = await useAsyncData('main', () => {
    return queryCollection('main').first()
  })
  const { data: pricingData } = await useAsyncData('pricing', () => {
    return queryCollection('pricing').first()
  })
  // Normalize pricing: object categories (category1..6) with itemXX -> arrays and drop empty ones
  const pricingFromContent = pricingData?.value?.meta?.body?.pricing || {}

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

  const data = {
    hero: mainData?.value?.meta?.body?.hero,
    strengths: mainData?.value?.meta?.body?.strengths,
    services: mainData?.value?.meta?.body?.services,
    offers: mainData?.value?.meta?.body?.offers,
    unique: mainData?.value?.meta?.body?.unique,
    details: mainData?.value?.meta?.body?.details,
    why: mainData?.value?.meta?.body?.why,
    pricing: normalizePricing(pricingFromContent),
  }
  return data
}
