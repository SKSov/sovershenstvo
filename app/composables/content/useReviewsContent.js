export const useReviewsContent = async () => {
  const { data } = await useAsyncData('reviews-content', async () => {
    return queryCollection('reviews').first()
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
