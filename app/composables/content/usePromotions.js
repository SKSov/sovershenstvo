export const usePromotions = async () => {
  const { data } = await useAsyncData('promotions', async () => {
    return queryCollection('promotions').first()
  })

  const body = data?.value?.meta?.body || {}
  const hero = body?.hero || {}

  const items = [hero?.items?.item1, hero?.items?.item2, hero?.items?.item3]
    .map((it) => it?.text)
    .filter(Boolean)

  return {
    hero: {
      title: hero?.title,
      subtitle: hero?.subtitle,
      items,
      img: hero?.img,
    },
  }
}
