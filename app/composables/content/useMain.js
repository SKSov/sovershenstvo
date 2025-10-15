export const useMain = async () => {
  const { data: mainData } = await useAsyncData('main', () => {
    return queryCollection('main').first()
  })
  const data = {
    hero: mainData?.value?.meta?.body?.hero,
  }
  return data
}
