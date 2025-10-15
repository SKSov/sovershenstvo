export const useMain = async () => {
  const { data: mainData } = await useAsyncData('main', () => {
    return queryCollection('main').first()
  })
  const data = {
    hero: mainData?.value?.meta?.body?.hero,
    strengths: mainData?.value?.meta?.body?.strengths,
    services: mainData?.value?.meta?.body?.services,
    offers: mainData?.value?.meta?.body?.offers,
    unique: mainData?.value?.meta?.body?.unique,
    details: mainData?.value?.meta?.body?.details,
    why: mainData?.value?.meta?.body?.why,
  }
  return data
}
